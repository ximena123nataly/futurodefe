"use client";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

import { Phone, MapPin, Info } from "lucide-react";

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
      imagen: "/creditoproductivoo.png",
      descripcion:
        "Destinado a la compra de maquinaria, equipos, materia prima y otros insumos, capital de operaciones o inversión.",
      requisitosCliente: requisitosBaseCliente,
      respaldo: requisitosBaseRespaldo,
    },
    servicios: {
      titulo: "Crédito de Servicios",
      imagen: "/creditoservicio.png",
      descripcion:
        "Para proyectos de microempresas y operaciones destinadas a la prestación de servicios.",
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
      imagen: "/creditovehicular.png",
      descripcion:
        "Adquisición de un vehículo, automóvil, motocicleta u otro medio de transporte.",
      requisitosCliente: requisitosBaseCliente,
      respaldo: requisitosBaseRespaldo,
    },
    consumo: {
      titulo: "Crédito de Consumo",
      imagen: "/creditoconsumo.jpg",
      descripcion:
        "Adquisición de bienes o servicios personales no relacionados con una actividad productiva.",
      requisitosCliente: requisitosBaseCliente,
      respaldo: requisitosBaseRespaldo,
    },
  };


  return (
    <main className="min-h-screen bg-white text-slate-800">


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






      <div className="bg-[#0f3b2e] text-white">
        <div className="mx-auto flex h-[151px] max-w-7xl items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-5">
            <Image
              src="/logouno.png"
              alt="Logo FUTURODEFE"
              width={115}
              height={115}
              className="object-contain"
            />

            <div>
              <h1 className="text-[42px] font-extrabold leading-none text-white">
                FUTURODEFE
              </h1>
              <p className="mt-2 text-[15px] text-white/90">
                Fe que impulsa tu futuro.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-[14px] md:gap-10">
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
        </div>
      </div>

      <header className="border-b border-slate-200 bg-[#D4AF37]">
        <div className="mx-auto flex h-[33px] max-w-7xl items-center justify-end px-6 md:px-10">
          <div className="relative">
            <button
              onClick={() => setMostrarMenuTi(!mostrarMenuTi)}
              className="text-[14px] font-normal text-[#0f3b2e] hover:text-[#d4af37]"
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

      <section className="relative overflow-hidden bg-[#f3f0f7]">
        {slideActual === 0 ? (
          <div className="mx-auto grid min-h-[72vh] max-w-7xl md:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16">
              <button
                onClick={anteriorSlide}
                className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#0f3b2e]/20 bg-white text-2xl text-[#0f3b2e] shadow-sm"
              >
                ‹
              </button>

              <h2 className="max-w-xl text-5xl font-extrabold leading-tight text-[#3f3f46] md:text-6xl">
                Impulsamos tu futuro con visión, confianza y fe
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                FUTURODEFE brinda soluciones financieras modernas y cercanas para
                familias, emprendedores y personas que buscan crecer con respaldo.
              </p>

              <button
                onClick={() => setMostrarQR(true)}
                className="mt-8 w-fit rounded-full border-2 border-[#0f3b2e] px-10 py-4 text-lg font-semibold text-[#0f3b2e] hover:bg-[#0f3b2e] hover:text-white"
              >
                Solicita tu crédito hoy
              </button>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-[#d4af37] via-[#0f3b2e] to-[#163e30]">
              <div className="absolute -left-24 top-0 h-full w-64 rounded-r-full bg-[#f3f0f7]" />

              <button
                onClick={siguienteSlide}
                className="absolute bottom-10 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#0f3b2e] shadow-md"
              >
                ›
              </button>

              <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                {slidesHero.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlideActual(index)}
                    className={`h-3 w-3 rounded-full transition ${slideActual === index ? "bg-white" : "bg-white/50"
                      }`}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mx-auto min-h-[72vh] max-w-7xl overflow-hidden">
            <Image
              src={(slidesHero[slideActual] as { tipo: "imagen"; imagen: string; alt: string }).imagen}
              alt={(slidesHero[slideActual] as { tipo: "imagen"; imagen: string; alt: string }).alt}
              fill
              className="object-cover"
              priority
            />

            <button
              onClick={anteriorSlide}
              className="absolute left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#0f3b2e] shadow-md"
            >
              ‹
            </button>

            <button
              onClick={siguienteSlide}
              className="absolute right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#0f3b2e] shadow-md"
            >
              ›
            </button>

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
              {slidesHero.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSlideActual(index)}
                  className={`h-3 w-3 rounded-full transition ${slideActual === index ? "bg-white" : "bg-white/50"
                    }`}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <button
              onClick={() => setMostrarCreditos(true)}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#0f3b2e]/30 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#0f3b2e]">Créditos</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Soluciones pensadas para impulsar proyectos personales,
                familiares y productivos.
              </p>
            </button>
          </div>
        </div>
      </section>

      {mostrarPuntos && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 px-4 py-6">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl">

            {/* Botón cerrar */}
            <button
              onClick={() => setMostrarPuntos(false)}
              className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl text-slate-600 shadow-md hover:text-black"
            >
              ×
            </button>

            {/* Banner superior */}
            <div className="relative h-[265px] w-full md:h-[342px]">
              <Image
                src="/sucursales.png"
                alt="Agencias y sucursales FUTURODEFE"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Contenido inferior */}
            <div className="bg-white px-6 py-8 md:px-8 md:py-10">
              <h2 className="text-3xl font-bold text-[#0f3b2e] md:text-4xl">
                Agencias y sucursales
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
                Encuentra tu punto de atención más cercano y ubícalo fácilmente en el mapa.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-[320px_1fr]">
                {/* Columna izquierda */}
                <div className="space-y-5">
                  <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-5 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#0f3b2e]">
                      Oficina Central
                    </h3>
                    <p className="mt-3 text-lg leading-8 text-slate-600">
                      Zona Ferropetrol, calle Tomas Rivas entre calles 5 "A" y 11 de junio
                    </p>
                    <a
                      href="https://www.google.com/maps?q=-16.50456,-68.16626"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-lg font-semibold text-[#0f3b2e] underline"
                    >
                      Abrir en Google Maps
                    </a>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-5 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#0f3b2e]">
                      Sucursal
                    </h3>
                    <p className="mt-3 text-lg leading-8 text-slate-600">
                      Av. Juan Pablo II N°20 (lado Parqueo EL CEIBO y Cajero BCP),
                      El Alto, La Paz - Bolivia
                    </p>
                    <a
                      href="https://www.google.com/maps?q=-16.50258,-68.16431"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-lg font-semibold text-[#0f3b2e] underline"
                    >
                      Abrir en Google Maps
                    </a>
                  </div>
                </div>

                {/* Mapa */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                  <div className="h-[420px] md:h-[520px]">
                    <MapaPuntos />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {mostrarNosotros && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6">
          <div className="mx-auto w-full max-w-6xl rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b bg-white px-6 py-4">
              <h2 className="text-2xl font-normal text-slate-600">
                Sobre nosotros
              </h2>
              <button
                onClick={() => setMostrarNosotros(false)}
                className="text-3xl text-slate-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <section className="grid gap-8 bg-[#f3f0f7] px-8 py-10 md:grid-cols-2 md:px-12">
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-[#0f3b2e]">
                  Inicio / Sobre nosotros
                </p>
                <h3 className="mt-4 text-4xl font-extrabold leading-tight text-[#3f3f46]">
                  CONOCE A FUTURODEFE
                </h3>
                <p className="mt-6 text-xl leading-9 text-slate-600">
                  Somos una entidad financiera comprometida con el apoyo y el
                  crecimiento de las personas que necesitan un impulso económico.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full shadow-xl">
                  <Image
                    src="/portada.png"
                    alt="Equipo FUTURODEFE"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            <section className="bg-[#f3f0f7] px-8 py-12 md:px-12">
              <h3 className="text-center text-4xl font-extrabold text-[#3f3f46]">
                Nuestra historia
              </h3>
              <p className="mx-auto mt-8 max-w-5xl text-center text-xl leading-10 text-slate-700">
                Futurodefe es una entidad financiera comprometida con el apoyo y
                el crecimiento de las personas que necesitan un impulso
                económico. Nos definimos por la buena fe en nuestros clientes y
                la rapidez en nuestra gestión. Más que un simple proveedor de
                préstamos, somos un socio que convierte tu confianza en un apoyo
                rápido, ayudándote a sembrar la fe en tu futuro hoy.
              </p>

              <p className="mx-auto mt-10 max-w-5xl text-center text-xl leading-10 text-slate-700">
                Futurodefe nació para apoyar a los sectores de profesionales,
                comercio y producción, brindando soluciones financieras que
                permitan equipar y fortalecer su actividad económica. Desde
                nuestros inicios, trabajamos con la visión de convertirnos en un
                respaldo confiable para quienes buscan crecer, emprender y
                avanzar con seguridad.
              </p>
            </section>

            <section className="grid gap-10 bg-white px-8 py-14 md:grid-cols-2 md:px-12">
              <div>
                <h3 className="text-4xl font-extrabold text-[#3f3f46]">
                  Lo que nos inspira y hacia dónde avanzamos
                </h3>
                <p className="mt-6 text-xl leading-9 text-slate-600">
                  Descubre los principios que guían nuestras acciones y el
                  futuro que queremos construir junto a nuestros clientes.
                </p>
                <div className="mt-10 flex justify-center">
                  <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full shadow-xl">
                    <Image
                      src="/i2.jpg"
                      alt="Imagen FUTURODEFE"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-3xl bg-[#f3f0f7] p-6">
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">Misión</h4>
                  <p className="mt-4 text-xl leading-9 text-slate-700">
                    Brindar apoyo financiero ágil, confiable y accesible a
                    personas y sectores productivos, impulsando su crecimiento
                    económico mediante una atención cercana.
                  </p>
                </div>

                <div className="rounded-3xl bg-[#f3f0f7] p-6">
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">Visión</h4>
                  <p className="mt-4 text-xl leading-9 text-slate-700">
                    Ser una entidad financiera reconocida por su confianza,
                    rapidez y compromiso con el desarrollo de profesionales,
                    comerciantes y productores, contribuyendo al crecimiento
                    económico de nuestros clientes y de nuestra comunidad.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#f3f0f7] px-8 py-14 md:px-12">
              <h3 className="text-center text-4xl font-extrabold text-[#3f3f46]">
                Valores y principios
              </h3>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">
                    Integridad
                  </h4>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Somos consecuentes, hacemos lo que decimos, actuamos siempre
                    de forma correcta y transparente.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">
                    Solidaridad
                  </h4>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    La sensibilidad social está en nuestra esencia, buscamos el
                    bien común.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">
                    Compromiso
                  </h4>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    La excelencia nos caracteriza, tomamos acciones para cumplir
                    lo que acordamos y nos hacemos responsables.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">Servicio</h4>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Ofrecemos una atención cercana, clara y orientada a apoyar
                    cada necesidad financiera.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white px-8 py-14 md:px-12">
              <h3 className="text-center text-4xl font-extrabold text-[#3f3f46]">
                Nuestras cifras nos respaldan
              </h3>
              <p className="mx-auto mt-6 max-w-4xl text-center text-xl leading-9 text-slate-600">
                Trabajamos para apoyar a profesionales, comercio y producción,
                brindando atención cercana y soluciones pensadas para crecer.
              </p>

              <div className="mt-12 grid gap-8 text-center md:grid-cols-3">
                <div>
                  <p className="text-6xl font-extrabold text-[#0f3b2e]">2</p>
                  <p className="mt-3 text-2xl text-slate-700">Sucursales</p>
                </div>

                <div>
                  <p className="text-6xl font-extrabold text-[#0f3b2e]">24/7</p>
                  <p className="mt-3 text-2xl text-slate-700">
                    Atención digital
                  </p>
                </div>

                <div>
                  <p className="text-6xl font-extrabold text-[#0f3b2e]">
                    100%
                  </p>
                  <p className="mt-3 text-2xl text-slate-700">Compromiso</p>
                </div>
              </div>
            </section>

            <section className="rounded-b-3xl bg-[#0f3b2e] px-8 py-14 text-center text-white md:px-12">
              <h3 className="text-4xl font-extrabold">
                En futurodefe convertimos la confianza en oportunidades
              </h3>
              <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-white/85">
                Trabajamos para apoyar hoy el futuro de nuestros clientes,
                sembrando confianza, respaldo y crecimiento en cada paso.
              </p>
            </section>
          </div>
        </div>
      )}

      {mostrarCreditos && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6">
          <div className="mx-auto w-full max-w-7xl rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b bg-white px-6 py-4">
              <h2 className="text-2xl font-normal text-slate-600">Créditos</h2>
              <button
                onClick={() => setMostrarCreditos(false)}
                className="text-3xl text-slate-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <section className="grid min-h-[420px] items-center overflow-hidden bg-[#eaf8f7] md:grid-cols-2">
              <div className="px-8 py-12 md:px-12">
                <p className="text-sm font-semibold text-[#0f3b2e]">
                  Inicio / Créditos
                </p>
                <h3 className="mt-6 text-5xl font-extrabold leading-tight text-[#0f3b2e]">
                  Impulsa tus proyectos con nuestros créditos
                </h3>
                <p className="mt-6 max-w-xl text-2xl leading-10 text-slate-700">
                  Explora nuestras opciones de crédito y elige la que se ajuste
                  más a tus necesidades.
                </p>
              </div>

              <div className="relative h-full min-h-[420px] overflow-hidden">
                <div
                  className="relative h-full min-h-[420px] w-full"
                  style={{
                    clipPath: "ellipse(100% 140% at 100% 50%)",
                  }}
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

            <section className="px-8 py-14 md:px-12">
              <h3 className="text-center text-4xl font-extrabold text-[#3f3f46]">
                Nuestros créditos
              </h3>

              <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                <button
                  onClick={() => setCreditoSeleccionado(creditosInfo.productivo)}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src="/creditoproductivoo.png"
                      alt="Crédito Productivo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-3xl font-bold text-[#0f3b2e]">
                      Crédito Productivo
                    </h4>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      Destinado a la compra de maquinaria, equipos, materia
                      prima y otros insumos, capital de operaciones o inversión.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setCreditoSeleccionado(creditosInfo.servicios)}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src="/creditoservicio.png"
                      alt="Crédito de servicios"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-3xl font-bold text-[#0f3b2e]">
                      Crédito de Servicios
                    </h4>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      Para proyectos de microempresas y operaciones destinadas a
                      la prestación de servicios.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setCreditoSeleccionado(creditosInfo.comercio)}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src="/creditocomercio.jpg"
                      alt="Crédito de comercio"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-3xl font-bold text-[#0f3b2e]">
                      Crédito de Comercio
                    </h4>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      Dirigido a actividades de compra y venta de bienes.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setCreditoSeleccionado(creditosInfo.vehicular)}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src="/creditovehicular.png"
                      alt="Crédito vehicular"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-3xl font-bold text-[#0f3b2e]">
                      Crédito Vehicular
                    </h4>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      Adquisición de un vehículo, automóvil, motocicleta u otro
                      medio de transporte.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setCreditoSeleccionado(creditosInfo.consumo)}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src="/creditoconsumo.jpg"
                      alt="Crédito de consumo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-3xl font-bold text-[#0f3b2e]">
                      Crédito de Consumo
                    </h4>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      Adquisición de bienes o servicios personales no
                      relacionados con una actividad productiva.
                    </p>
                  </div>
                </button>
              </div>
            </section>
          </div>
        </div>
      )}

      {mostrarQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={() => setMostrarQR(false)}
              className="absolute right-4 top-3 text-3xl text-slate-500 hover:text-black"
            >
              ×
            </button>

            <h3 className="text-center text-2xl font-bold text-[#0f3b2e]">
              Escanea nuestro QR de WhatsApp
            </h3>

            <p className="mt-2 text-center text-slate-600">
              Escanea el código para comunicarte con nosotros.
            </p>

            <div className="relative mx-auto mt-6 h-[280px] w-[280px]">
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

      {creditoSeleccionado && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 px-4 py-6">
          <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b bg-white px-6 py-4">
              <h2 className="text-2xl font-normal text-slate-700">
                Requisitos - {creditoSeleccionado.titulo}
              </h2>
              <button
                onClick={() => setCreditoSeleccionado(null)}
                className="text-3xl text-slate-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="grid gap-8 px-8 py-8 md:grid-cols-2">
              <div>
                <h3 className="text-3xl font-extrabold text-[#0f3b2e]">
                  {creditoSeleccionado.titulo}
                </h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {creditoSeleccionado.descripcion}
                </p>

                <div className="relative mt-8 h-[340px] w-full overflow-hidden rounded-3xl border border-slate-200">
                  <Image
                    src={creditoSeleccionado.imagen}
                    alt={creditoSeleccionado.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl bg-[#f3f7f6] p-6">
                  <h4 className="text-2xl font-bold text-[#0f3b2e]">
                    Requisitos del cliente
                  </h4>
                  <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
                    {creditoSeleccionado.requisitosCliente.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-[#f3f7f6] p-6">
                  <h4 className="text-2xl font-bold text-[#0f3b2e]">
                    Respaldo / Garantía
                  </h4>
                  <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
                    {creditoSeleccionado.respaldo.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 p-6">
                  <h4 className="text-2xl font-bold text-[#0f3b2e]">
                    Más información
                  </h4>
                  <div className="mt-4 space-y-3 text-lg leading-8 text-slate-700">
                    <p>
                      <strong>Teléfonos:</strong> 74080846 - 63222692 - 63222810
                    </p>
                    <p>
                      <strong>Correo:</strong> futurodefe026@gmail.com
                    </p>
                    <p>
                      <strong>Sucursal:</strong> Av. Juan Pablo II “Edificio
                      Ceibo” lado Tránsito T-20
                    </p>
                    <p>
                      <strong>Oficina Central:</strong> Zona Ferropetrol, calle
                      Tomas Rivas entre calles 5 “A” y 11 de Junio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTÓN WHATSAPP TIPO BANCO */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* Mensaje flotante tipo banco */}
        <div className="rounded-xl bg-white px-4 py-2 text-sm text-slate-700 shadow-lg">
          solicita tu credito hoy!!
        </div>

        {/* Botón principal */}
        <a
          href="https://wa.me/59163226292?text=Hola%20quiero%20información"
          target="_blank"
          className="flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-110"
        >
          <img
            src="/bot.jpg"
            alt="WhatsApp"
            className="h-9 w-9"
          />
        </a>
      </div>
    </main>
  );
}