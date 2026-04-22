"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";

type Punto = {
    id: number;
    nombre: string;
    direccion: string;
    lat: number;
    lng: number;
    googleMapsUrl: string;
};

const puntos: Punto[] = [
    {
        id: 1,
        nombre: "Oficina Central",
        direccion:
            "Zona Ferropetrol, calle Tomas Rivas entre calles 5 'A' y 11 de junio",
        lat: -16.50456,
        lng: -68.16626,
        googleMapsUrl: "https://www.google.com/maps?q=-16.50456,-68.16626",
    },
    {
        id: 2,
        nombre: "Sucursal",
        direccion:
            "Av. Juan Pablo II N°20 (lado Parqueo EL CEIBO y Cajero BCP), El Alto, La Paz - Bolivia",
        lat: -16.50258,
        lng: -68.16431,
        googleMapsUrl: "https://www.google.com/maps?q=-16.50258,-68.16431",
    },
];

// Corrige los iconos de Leaflet en Next.js
delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: unknown })
    ._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    iconUrl: "/leaflet/marker-icon.png",
    shadowUrl: "/leaflet/marker-shadow.png",
});

const centroMapa: [number, number] = [-16.50357, -68.165285];

export default function MapaPuntos() {
    return (
        <div className="h-[420px] w-full overflow-hidden rounded-3xl border border-slate-200">
            <MapContainer
                center={centroMapa}
                zoom={16}
                scrollWheelZoom={true}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {puntos.map((punto) => (
                    <Marker key={punto.id} position={[punto.lat, punto.lng]}>
                        <Popup>
                            <div className="max-w-[220px]">
                                <h3 className="text-base font-bold">{punto.nombre}</h3>
                                <p className="mt-2 text-sm text-slate-700">{punto.direccion}</p>
                                <a
                                    href={punto.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-block text-sm font-semibold text-[#0f3b2e] underline"
                                >
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}