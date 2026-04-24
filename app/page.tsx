"use client";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

import { Phone, MapPin, Info, Menu, X } from "lucide-react";

const MapaPuntos = dynamic(() => import("./MapaPuntos"), {
  ssr: false,
});

import Image from "next/image";

type CreditoInfo = {
  titulo: string;
  imagen: string;
  descripcion: string;
  requisitosCliente: string[];
  respaldo: string[];
};

export default function Home() {
  const [mostrarQR, setMostrarQR] = useState(false);
  const [mostrarCreditos, setMostrarCreditos] = useState(false);
  const [mostrarNosotros, setMostrarNosotros] = useState(false);
  const [mostrarPuntos, setMostrarPuntos] = useState(false);
  const [mostrarMenuTi, setMostrarMenuTi] = useState(false);
  const [mostrarContacto, setMostrarContacto] = useState(false);
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

  const [creditoSeleccionado, setCreditoSeleccionado] =
    useState<CreditoInfo | null>(null);

  const [slideActual, setSlideActual] = useState(0);

  const slidesHero = [
    {
      tipo: "codigo",
    },
    {
      tipo: "imagen",
      imagen: "/slide21.png",
      alt: "Campaña Día de la Madre",
    },
    {
      tipo: "imagen",
      imagen: "/slide2.png",
      alt: "Campaña promocional 3",
    },
    {
      tipo: "imagen",
      imagen: "/slide3.png",
      alt: "Campaña promocional 4",
    },
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideActual((prev) => (prev + 1) % slidesHero.length);
    }, 9000);

    return () => clearInterval(intervalo);
  }, [slidesHero.length]);

  // Cierra el menú móvil al redimensionar a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuMovilAbierto(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const siguienteSlide = () => {
    setSlideActual((prev) => (prev + 1) % slidesHero.length);
  };

  const anteriorSlide = () => {
    setSlideActual((prev) => (prev - 1 + slidesHero.length) % slidesHero.length);
  };

  const requisitosBaseCliente = [
    "Fotocopia de C.I. del cliente y cónyuge.",
    "Fotocopia de facturas de agua o luz.",
    "Croquis de domicilio y negocio o trabajo.",
    "Respaldos de la actividad.",
    "Planes de pago y boletas de pago en caso de tener deudas.",
  ];

  const requisitosBaseRespaldo = [
    "Garante personal.",
    "Fotocopia de Folio Real, Testimonio, Plano Visado y último impuesto pagado.",
    "Póliza de importación, certificación de tránsito, RUAT, documento de compra/venta y último pago de impuesto.",
  ];

  const creditosInfo = {
    productivo: {
      titulo: "Crédito Productivo",
      imagen: "/productivo.jpeg",
      descripcion:
        "Destinado a la compra de maquinaria, equipos, materia prima y otros insumos, capital de operaciones o inversión.",
      requisitosCliente: requisitosBaseCliente,
      respaldo: requisitosBaseRespaldo,
    },
    servicios: {
      titulo: "Crédito Capital de Operación",
      imagen: "/boliviia.png",
      descripcion:
        "Crédito destinado a financiar compra o importación de inventario (materias primas, mercaderías) financiamiento de cuentas por cobrar y de internación de mercadería.",
      requisitosCliente: requisitosBaseCliente,
      respaldo: requisitosBaseRespaldo,
    },
    comercio: {
      titulo: "Crédito de Comercio",
      imagen: "/creditocomercio.jpg",
      descripcion: "Dirigido a actividades de compra y venta de bienes.",
      requisitosCliente: requisitosBaseCliente,
      respaldo: requisitosBaseRespaldo,
    },
    vehicular: {
      titulo: "Crédito Vehicular",
      imagen: "/vehiculo.jpeg",
      descripcion:
        "Crédito destinado a la compra o adquisición de vehículos nuevos o usados con garantía prendaria del vehículo.",
      requisitosCliente: requisitosBaseCliente,
      respaldo: requisitosBaseRespaldo,
    },
    consumo: {
      titulo: "Crédito de Consumo",
      imagen: "/consumo.jpg",
      descripcion:
        "Adquisición de bienes o servicios personales no relacionados con una actividad productiva.",
      requisitosCliente: requisitosBaseCliente,
      respaldo: requisitosBaseRespaldo,
    },
    educativo: {
      titulo: "Crédito Capital de Inversión",
      imagen: "/creditoinversion.jpg",
      descripcion:
        "Crédito destinado a financiar requerimientos de inversión, como la compra o ampliación de infraestructura, adquisición de nueva tecnología en cuanto a maquinaria y equipamiento.",
      requisitosCliente: requisitosBaseCliente,
      respaldo: requisitosBaseRespaldo,
    },
  };

  // Helper para cerrar menú móvil y abrir modal
  const abrirModal = (fn: () => void) => {
    setMenuMovilAbierto(false);
    fn();
  };

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* ── MODAL CONTACTO ── */}
      {mostrarContacto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setMostrarContacto(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <button
                onClick={() => setMostrarContacto(false)}
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-2xl font-bold leading-none text-red-600 shadow-md hover:bg-white"
              >
                ×
              </button>
              <Image
                src="/contactoo.png"
                alt="Atención al cliente FUTURODEFE"
                width={1600}
                height={900}
                className="mx-auto max-h-[80vh] w-auto max-w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          HEADER PRINCIPAL
      ══════════════════════════════════════════ */}
      <div className="bg-[#0f3b2e] text-white">
        <div className="mx-auto flex h-auto min-h-[80px] max-w-7xl items-center justify-between px-4 py-3 md:h-[151px] md:px-10">

          {/* Logo + nombre */}
          <div className="flex items-center gap-3 md:gap-5">
            <Image
              src="/logouno.png"
              alt="Logo FUTURODEFE"
              width={115}
              height={115}
              className="h-14 w-14 object-contain md:h-[115px] md:w-[115px]"
            />
            <div>
              <h1 className="text-2xl font-extrabold leading-none text-white md:text-[42px]">
                FUTURODEFE
              </h1>
              <p className="mt-1 text-xs text-white/90 md:mt-2 md:text-[15px]">
                Fe que impulsa tu futuro.
              </p>
            </div>
          </div>

          {/* Navegación desktop */}
          <div className="hidden items-center gap-8 text-[14px] md:flex md:gap-10">
            <button
              onClick={() => setMostrarContacto(true)}
              className="flex items-center gap-2 text-white hover:text-[#d4af37]"
            >
              <Phone size={15} strokeWidth={2} />
              <span>Atención al cliente</span>
            </button>

            <button
              onClick={() => setMostrarPuntos(true)}
              className="flex items-center gap-2 text-white hover:text-[#d4af37]"
            >
              <MapPin size={16} strokeWidth={2} />
              <span>Agencias y sucursales</span>
            </button>

            <button
              onClick={() => setMostrarNosotros(true)}
              className="flex items-center gap-2 text-white hover:text-[#d4af37]"
            >
              <Info size={15} strokeWidth={2} />
              <span>Sobre nosotros</span>
            </button>
          </div>

          {/* Botón hamburguesa móvil */}
          <button
            className="flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
            onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
            aria-label="Abrir menú"
          >
            {menuMovilAbierto ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {menuMovilAbierto && (
          <div className="border-t border-white/20 bg-[#0f3b2e] px-4 pb-4 md:hidden">
            <nav className="flex flex-col gap-1 pt-2">
              <button
                onClick={() => abrirModal(() => setMostrarContacto(true))}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-base text-white hover:bg-white/10"
              >
                <Phone size={17} strokeWidth={2} />
                Atención al cliente
              </button>

              <button
                onClick={() => abrirModal(() => setMostrarPuntos(true))}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-base text-white hover:bg-white/10"
              >
                <MapPin size={17} strokeWidth={2} />
                Agencias y sucursales
              </button>

              <button
                onClick={() => abrirModal(() => setMostrarNosotros(true))}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-base text-white hover:bg-white/10"
              >
                <Info size={17} strokeWidth={2} />
                Sobre nosotros
              </button>

              <div className="mt-2 border-t border-white/20 pt-3">
                <button
                  onClick={() => abrirModal(() => setMostrarCreditos(true))}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-base font-semibold text-[#d4af37] hover:bg-white/10"
                >
                  Soluciones para ti → Créditos
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* ── BARRA DORADA "Soluciones para ti" (solo desktop) ── */}
      <header className="hidden border-b border-slate-200 bg-[#D4AF37] md:block">
        <div className="mx-auto flex h-[33px] max-w-7xl items-center justify-end px-6 md:px-10">
          <div className="relative">
            <button
              onClick={() => setMostrarMenuTi(!mostrarMenuTi)}
              className="text-[14px] font-normal text-[#0f3b2e] hover:text-[#0a2920]"
            >
              Soluciones para ti
            </button>

            {mostrarMenuTi && (
              <div className="absolute right-0 top-full z-50 mt-3 w-[260px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <button
                  onClick={() => {
                    setMostrarMenuTi(false);
                    setMostrarCreditos(true);
                  }}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-lg text-slate-700 hover:bg-slate-50"
                >
                  Créditos
                  <span className="text-[#0f3b2e]">›</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO / SLIDER
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#f3f0f7]">
        {slideActual === 0 ? (
          <div className="mx-auto grid min-h-[50vh] max-w-7xl md:min-h-[72vh] md:grid-cols-2">
            <div className="flex flex-col justify-center px-5 py-10 md:px-12 lg:px-16">
              <button
                onClick={anteriorSlide}
                className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#0f3b2e]/20 bg-white text-2xl text-[#0f3b2e] shadow-sm md:mb-8 md:h-12 md:w-12"
              >
                ‹
              </button>

              <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-[#3f3f46] md:text-5xl lg:text-6xl">
                Impulsamos tu futuro con visión, confianza y fe
              </h2>

              <p className="mt-4 max-w-lg text-base leading-7 text-slate-600 md:mt-6 md:text-lg md:leading-8">
                FUTURODEFE brinda soluciones financieras modernas y cercanas para
                familias, emprendedores y personas que buscan crecer con respaldo.
              </p>

              <button
                onClick={() => setMostrarQR(true)}
                className="mt-6 w-fit rounded-full border-2 border-[#0f3b2e] px-7 py-3 text-base font-semibold text-[#0f3b2e] hover:bg-[#0f3b2e] hover:text-white md:mt-8 md:px-10 md:py-4 md:text-lg"
              >
                Solicita tu crédito hoy
              </button>
            </div>

            <div className="relative min-h-[220px] overflow-hidden bg-gradient-to-br from-[#d4af37] via-[#0f3b2e] to-[#163e30] md:min-h-[420px]">
              <div className="absolute -left-24 top-0 h-full w-64 rounded-r-full bg-[#f3f0f7]" />

              <button
                onClick={siguienteSlide}
                className="absolute bottom-6 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-[#0f3b2e] shadow-md md:bottom-10 md:right-6 md:h-12 md:w-12"
              >
                ›
              </button>

              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                {slidesHero.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlideActual(index)}
                    className={`h-3 w-3 rounded-full transition ${slideActual === index ? "bg-white" : "bg-white/50"}`}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mx-auto min-h-[50vh] max-w-7xl overflow-hidden md:min-h-[72vh]">
            <Image
              src={(slidesHero[slideActual] as { tipo: "imagen"; imagen: string; alt: string }).imagen}
              alt={(slidesHero[slideActual] as { tipo: "imagen"; imagen: string; alt: string }).alt}
              fill
              className="object-cover"
              priority
            />

            <button
              onClick={anteriorSlide}
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#0f3b2e] shadow-md md:left-6 md:h-12 md:w-12"
            >
              ‹
            </button>

            <button
              onClick={siguienteSlide}
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#0f3b2e] shadow-md md:right-6 md:h-12 md:w-12"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
              {slidesHero.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSlideActual(index)}
                  className={`h-3 w-3 rounded-full transition ${slideActual === index ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── SECCIÓN TARJETAS ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <button
              onClick={() => setMostrarCreditos(true)}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#0f3b2e]/30 hover:shadow-lg md:p-8"
            >
              <h3 className="text-xl font-bold text-[#0f3b2e] md:text-2xl">Créditos</h3>
              <p className="mt-3 leading-7 text-slate-600 md:mt-4">
                Soluciones pensadas para impulsar proyectos personales,
                familiares y productivos.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* ── MODAL PUNTOS / SUCURSALES ── */}
      {mostrarPuntos && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 px-4 py-6">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl">

            <button
              onClick={() => setMostrarPuntos(false)}
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-slate-600 shadow-md hover:text-black md:right-5 md:top-5 md:h-12 md:w-12 md:text-3xl"
            >
              ×
            </button>

            <div className="relative h-[200px] w-full md:h-[342px]">
              <Image
                src="/sucursales.png"
                alt="Agencias y sucursales FUTURODEFE"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="bg-white px-4 py-6 md:px-8 md:py-10">
              <h2 className="text-2xl font-bold text-[#0f3b2e] md:text-4xl">
                Agencias y sucursales
              </h2>
              <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600 md:mt-3 md:text-lg md:leading-8">
                Encuentra tu punto de atención más cercano y ubícalo fácilmente en el mapa.
              </p>

              <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-[320px_1fr]">
                {/* Columna izquierda */}
                <div className="space-y-4 md:space-y-5">
                  <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-4 shadow-sm md:p-5">
                    <h3 className="text-xl font-bold text-[#0f3b2e] md:text-2xl">
                      Oficina Central
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-600 md:mt-3 md:text-lg md:leading-8">
                      Zona Ferropetrol, calle Tomas Rivas entre calles 5 "A" y 11 de junio
                    </p>
                    <a
                      href="https://www.google.com/maps?q=-16.50456,-68.16626"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-base font-semibold text-[#0f3b2e] underline md:mt-4 md:text-lg"
                    >
                      Abrir en Google Maps
                    </a>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-4 shadow-sm md:p-5">
                    <h3 className="text-xl font-bold text-[#0f3b2e] md:text-2xl">
                      Sucursal
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-600 md:mt-3 md:text-lg md:leading-8">
                      Av. Juan Pablo II N°20 (lado Parqueo EL CEIBO y Cajero BCP),
                      El Alto, La Paz - Bolivia
                    </p>
                    <a
                      href="https://www.google.com/maps?q=-16.50258,-68.16431"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-base font-semibold text-[#0f3b2e] underline md:mt-4 md:text-lg"
                    >
                      Abrir en Google Maps
                    </a>
                  </div>
                </div>

                {/* Mapa */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                  <div className="h-[320px] md:h-[420px] lg:h-[520px]">
                    <MapaPuntos />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL NOSOTROS ── */}
      {mostrarNosotros && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6">
          <div className="mx-auto w-full max-w-6xl rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b bg-white px-4 py-4 md:px-6">
              <h2 className="text-xl font-normal text-slate-600 md:text-2xl">
                Sobre nosotros
              </h2>
              <button
                onClick={() => setMostrarNosotros(false)}
                className="text-3xl text-slate-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <section className="grid gap-8 bg-[#f3f0f7] px-5 py-8 md:grid-cols-2 md:px-12 md:py-10">
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-[#0f3b2e]">
                  Inicio / Sobre nosotros
                </p>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#3f3f46] md:text-4xl">
                  CONOCE A FUTURODEFE
                </h3>
                <p className="mt-4 text-lg leading-8 text-slate-600 md:mt-6 md:text-xl md:leading-9">
                  Somos una entidad financiera comprometida con el apoyo y el
                  crecimiento de las personas que necesitan un impulso económico.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full shadow-xl md:h-[320px] md:w-[320px]">
                  <Image
                    src="/portada.png"
                    alt="Equipo FUTURODEFE"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            <section className="bg-[#f3f0f7] px-5 py-10 md:px-12 md:py-12">
              <h3 className="text-center text-3xl font-extrabold text-[#3f3f46] md:text-4xl">
                Nuestra historia
              </h3>
              <p className="mx-auto mt-6 max-w-5xl text-center text-lg leading-9 text-slate-700 md:mt-8 md:text-xl md:leading-10">
                Futurodefe es una entidad financiera comprometida con el apoyo y
                el crecimiento de las personas que necesitan un impulso
                económico. Nos definimos por la buena fe en nuestros clientes y
                la rapidez en nuestra gestión. Más que un simple proveedor de
                préstamos, somos un socio que convierte tu confianza en un apoyo
                rápido, ayudándote a sembrar la fe en tu futuro hoy.
              </p>

              <p className="mx-auto mt-6 max-w-5xl text-center text-lg leading-9 text-slate-700 md:mt-10 md:text-xl md:leading-10">
                Futurodefe nació para apoyar a los sectores de profesionales,
                comercio y producción, brindando soluciones financieras que
                permitan equipar y fortalecer su actividad económica. Desde
                nuestros inicios, trabajamos con la visión de convertirnos en un
                respaldo confiable para quienes buscan crecer, emprender y
                avanzar con seguridad.
              </p>
            </section>

            <section className="grid gap-8 bg-white px-5 py-10 md:grid-cols-2 md:px-12 md:py-14">
              <div>
                <h3 className="text-3xl font-extrabold text-[#3f3f46] md:text-4xl">
                  Lo que nos inspira y hacia dónde avanzamos
                </h3>
                <p className="mt-4 text-lg leading-8 text-slate-600 md:mt-6 md:text-xl md:leading-9">
                  Descubre los principios que guían nuestras acciones y el
                  futuro que queremos construir junto a nuestros clientes.
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full shadow-xl md:h-[340px] md:w-[340px]">
                    <Image
                      src="/i2.jpg"
                      alt="Imagen FUTURODEFE"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="rounded-3xl bg-[#f3f0f7] p-5 md:p-6">
                  <h4 className="text-2xl font-bold text-[#0f3b2e] md:text-3xl">Misión</h4>
                  <p className="mt-3 text-lg leading-8 text-slate-700 md:mt-4 md:text-xl md:leading-9">
                    Brindar apoyo financiero ágil, confiable y accesible a
                    personas y sectores productivos, impulsando su crecimiento
                    económico mediante una atención cercana.
                  </p>
                </div>

                <div className="rounded-3xl bg-[#f3f0f7] p-5 md:p-6">
                  <h4 className="text-2xl font-bold text-[#0f3b2e] md:text-3xl">Visión</h4>
                  <p className="mt-3 text-lg leading-8 text-slate-700 md:mt-4 md:text-xl md:leading-9">
                    Ser una entidad financiera reconocida por su confianza,
                    rapidez y compromiso con el desarrollo de profesionales,
                    comerciantes y productores, contribuyendo al crecimiento
                    económico de nuestros clientes y de nuestra comunidad.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#f3f0f7] px-5 py-10 md:px-12 md:py-14">
              <h3 className="text-center text-3xl font-extrabold text-[#3f3f46] md:text-4xl">
                Valores y principios
              </h3>

              <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-3xl bg-white p-5 shadow-sm md:p-6">
                  <h4 className="text-2xl font-bold text-[#0f3b2e] md:text-3xl">
                    Integridad
                  </h4>
                  <p className="mt-3 text-base leading-7 text-slate-600 md:mt-4 md:text-lg md:leading-8">
                    Somos consecuentes, hacemos lo que decimos, actuamos siempre
                    de forma correcta y transparente.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-sm md:p-6">
                  <h4 className="text-2xl font-bold text-[#0f3b2e] md:text-3xl">
                    Solidaridad
                  </h4>
                  <p className="mt-3 text-base leading-7 text-slate-600 md:mt-4 md:text-lg md:leading-8">
                    La sensibilidad social está en nuestra esencia, buscamos el
                    bien común.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-sm md:p-6">
                  <h4 className="text-2xl font-bold text-[#0f3b2e] md:text-3xl">
                    Compromiso
                  </h4>
                  <p className="mt-3 text-base leading-7 text-slate-600 md:mt-4 md:text-lg md:leading-8">
                    La excelencia nos caracteriza, tomamos acciones para cumplir
                    lo que acordamos y nos hacemos responsables.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-sm md:p-6">
                  <h4 className="text-2xl font-bold text-[#0f3b2e] md:text-3xl">
                    Servicio
                  </h4>
                  <p className="mt-3 text-base leading-7 text-slate-600 md:mt-4 md:text-lg md:leading-8">
                    Ofrecemos una atención cercana, clara y orientada a apoyar
                    cada necesidad financiera.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white px-5 py-10 md:px-12 md:py-14">
              <h3 className="text-center text-3xl font-extrabold text-[#3f3f46] md:text-4xl">
                Nuestras cifras nos respaldan
              </h3>
              <p className="mx-auto mt-4 max-w-4xl text-center text-lg leading-8 text-slate-600 md:mt-6 md:text-xl md:leading-9">
                Trabajamos para apoyar a profesionales, comercio y producción,
                brindando atención cercana y soluciones pensadas para crecer.
              </p>

              <div className="mt-8 grid gap-6 text-center md:mt-12 md:grid-cols-3">
                <div>
                  <p className="text-5xl font-extrabold text-[#0f3b2e] md:text-6xl">2</p>
                  <p className="mt-2 text-xl text-slate-700 md:mt-3 md:text-2xl">Sucursales</p>
                </div>

                <div>
                  <p className="text-5xl font-extrabold text-[#0f3b2e] md:text-6xl">24/7</p>
                  <p className="mt-2 text-xl text-slate-700 md:mt-3 md:text-2xl">
                    Atención digital
                  </p>
                </div>

                <div>
                  <p className="text-5xl font-extrabold text-[#0f3b2e] md:text-6xl">
                    100%
                  </p>
                  <p className="mt-2 text-xl text-slate-700 md:mt-3 md:text-2xl">Compromiso</p>
                </div>
              </div>
            </section>

            <section className="rounded-b-3xl bg-[#0f3b2e] px-5 py-10 text-center text-white md:px-12 md:py-14">
              <h3 className="text-3xl font-extrabold md:text-4xl">
                En futurodefe convertimos la confianza en oportunidades
              </h3>
              <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-white/85 md:mt-6 md:text-xl md:leading-9">
                Trabajamos para apoyar hoy el futuro de nuestros clientes,
                sembrando confianza, respaldo y crecimiento en cada paso.
              </p>
            </section>
          </div>
        </div>
      )}

      {/* ── MODAL CRÉDITOS ── */}
      {mostrarCreditos && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6">
          <div className="mx-auto w-full max-w-7xl rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b bg-white px-4 py-4 md:px-6">
              <h2 className="text-xl font-normal text-slate-600 md:text-2xl">Créditos</h2>
              <button
                onClick={() => setMostrarCreditos(false)}
                className="text-3xl text-slate-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <section className="grid min-h-[280px] items-center overflow-hidden bg-[#eaf8f7] md:min-h-[420px] md:grid-cols-2">
              <div className="px-5 py-8 md:px-12">
                <p className="text-sm font-semibold text-[#0f3b2e]">
                  Inicio / Créditos
                </p>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#0f3b2e] md:mt-6 md:text-5xl">
                  Impulsa tus proyectos con nuestros créditos
                </h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-700 md:mt-6 md:text-2xl md:leading-10">
                  Explora nuestras opciones de crédito y elige la que se ajuste
                  más a tus necesidades.
                </p>
              </div>

              <div className="relative hidden min-h-[420px] overflow-hidden md:block">
                <div
                  className="relative h-full min-h-[420px] w-full"
                  style={{ clipPath: "ellipse(100% 140% at 100% 50%)" }}
                >
                  <Image
                    src="/foto1.png"
                    alt="Créditos FUTURODEFE"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            <section className="px-4 py-10 md:px-12 md:py-14">
              <h3 className="text-center text-3xl font-extrabold text-[#3f3f46] md:text-4xl">
                Nuestros créditos
              </h3>

              <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
                {[
                  { key: "productivo", src: "/productivo.jpeg", alt: "Crédito Productivo", titulo: "Crédito Productivo", desc: "Son los créditos de tipo empresarial, microcrédito o PYME otorgados para desarrollar alguna actividad productiva, destinados a cubrir necesidades de financiamiento para Capital de Trabajo, que permite la compra de materia prima, insumos, pago de mano de obra y otros necesarios para ejecutar sus operaciones" },
                  { key: "servicios", src: "/boliviia.png", alt: "Crédito de operacion", titulo: "Crédito Capital de Operación", desc: "Crédito destinado a financiar compra o importación de inventario (materias primas, mercaderías) financiamiento de cuentas por cobrar y de internación de mercadería." },
                  { key: "comercio", src: "/creditocomercio.jpg", alt: "Crédito de comercio", titulo: "Crédito de Comercio", desc: "Destinado a personas naturales y jurídicas que cuenten con una actividad propia, que les permita generar ingresos suficientes para el pago del microcrédito a adquirir." },
                  { key: "vehicular", src: "/vehiculo.jpeg", alt: "Crédito vehicular", titulo: "Crédito Vehicular", desc: "Crédito destinado a la compra o adquisición de vehículos nuevos o usados con garantía prendaria del vehículo, los cuales cuentan con póliza contra todo riesgo." },
                  { key: "consumo", src: "/consumo.jpg", alt: "Crédito de consumo", titulo: "Crédito de Consumo", desc: "Los créditos de consumo están destinados a personas naturales y permiten el financiamiento para la compra de productos, bienes y servicios diversos como: Un viaje en familia, compra de celulares, tablets, computadoras, electrodomésticos." },
                  { key: "educativo", src: "/creditoinversion.jpg", alt: "Crédito capital de inversión", titulo: "Crédito Capital de Inversión", desc: "Crédito destinado a financiar requerimientos de inversión, como la compra o ampliación de infraestructura, adquisición de nueva tecnología en cuanto a maquinaria y equipamiento." },
                ].map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setCreditoSeleccionado(creditosInfo[c.key as keyof typeof creditosInfo])}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-44 w-full overflow-hidden md:h-52">
                      <Image src={c.src} alt={c.alt} fill className="object-cover" />
                    </div>
                    <div className="p-4 md:p-6">
                      <h4 className="text-xl font-bold text-[#0f3b2e] md:text-3xl">
                        {c.titulo}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600 md:mt-4 md:text-lg md:leading-8">
                        {c.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}

      {/* ── MODAL QR ── */}
      {mostrarQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={() => setMostrarQR(false)}
              className="absolute right-4 top-3 text-3xl text-slate-500 hover:text-black"
            >
              ×
            </button>

            <h3 className="text-center text-xl font-bold text-[#0f3b2e] md:text-2xl">
              Escanea nuestro QR de WhatsApp
            </h3>

            <p className="mt-2 text-center text-slate-600">
              Escanea el código para comunicarte con nosotros.
            </p>

            <div className="relative mx-auto mt-6 h-[240px] w-[240px] md:h-[280px] md:w-[280px]">
              <Image
                src="/qreloya.png"
                alt="QR de WhatsApp"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL DETALLE CRÉDITO ── */}
      {creditoSeleccionado && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 px-4 py-6">
          <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b bg-white px-4 py-4 md:px-6">
              <h2 className="text-lg font-normal text-slate-700 md:text-2xl">
                Requisitos - {creditoSeleccionado.titulo}
              </h2>
              <button
                onClick={() => setCreditoSeleccionado(null)}
                className="text-3xl text-slate-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="grid gap-6 px-4 py-6 md:gap-8 md:px-8 md:py-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-extrabold text-[#0f3b2e] md:text-3xl">
                  {creditoSeleccionado.titulo}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600 md:mt-4 md:text-lg md:leading-8">
                  {creditoSeleccionado.descripcion}
                </p>

                <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-3xl border border-slate-200 md:mt-8 md:h-[340px]">
                  <Image
                    src={creditoSeleccionado.imagen}
                    alt={creditoSeleccionado.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5 md:space-y-6">
                <div className="rounded-3xl bg-[#f3f7f6] p-4 md:p-6">
                  <h4 className="text-xl font-bold text-[#0f3b2e] md:text-2xl">
                    Requisitos del cliente
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-slate-700 md:mt-4 md:space-y-3 md:pl-6 md:text-lg md:leading-8">
                    {creditoSeleccionado.requisitosCliente.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-[#f3f7f6] p-4 md:p-6">
                  <h4 className="text-xl font-bold text-[#0f3b2e] md:text-2xl">
                    Respaldo / Garantía
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-slate-700 md:mt-4 md:space-y-3 md:pl-6 md:text-lg md:leading-8">
                    {creditoSeleccionado.respaldo.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 p-4 md:p-6">
                  <h4 className="text-xl font-bold text-[#0f3b2e] md:text-2xl">
                    Más información
                  </h4>
                  <div className="mt-3 space-y-2 text-base leading-7 text-slate-700 md:mt-4 md:space-y-3 md:text-lg md:leading-8">
                    <p>
                      <strong>Teléfonos:</strong> 74080846 - 63222692 - 63222810
                    </p>
                    <p>
                      <strong>Correo:</strong> futurodefe026@gmail.com
                    </p>
                    <p>
                      <strong>Sucursal:</strong> Av. Juan Pablo II "Edificio
                      Ceibo" lado Tránsito T-20
                    </p>
                    <p>
                      <strong>Oficina Central:</strong> Zona Ferropetrol, calle
                      Tomas Rivas entre calles 5 "A" y 11 de Junio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── BOTÓN WHATSAPP FLOTANTE ── */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-2 md:right-6">
        <div className="rounded-xl bg-white px-3 py-2 text-xs text-slate-700 shadow-lg md:px-4 md:text-sm">
          solicita tu credito hoy!!
        </div>

        <a
          href="https://wa.me/59163226292?text=Hola%20quiero%20información"
          target="_blank"
          className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-110 md:h-14 md:w-14"
        >
          <img
            src="/bot.jpg"
            alt="WhatsApp"
            className="h-8 w-8 md:h-9 md:w-9"
          />
        </a>
      </div>
    </main>
  );
}
