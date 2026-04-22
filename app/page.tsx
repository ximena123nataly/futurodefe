"use client";
import { useState } from "react";

import dynamic from "next/dynamic";

import { Phone, MapPin, Info } from "lucide-react";

const MapaPuntos = dynamic(() => import("./MapaPuntos"), {
  ssr: false,
});

import Image from "next/image";

export default function Home() {
  const [mostrarQR, setMostrarQR] = useState(false);
  const [mostrarCreditos, setMostrarCreditos] = useState(false);
  const [mostrarNosotros, setMostrarNosotros] = useState(false);
  const [mostrarPuntos, setMostrarPuntos] = useState(false);
  const [mostrarMenuTi, setMostrarMenuTi] = useState(false);

  const [mostrarContacto, setMostrarContacto] = useState(false);
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {mostrarContacto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-2xl font-normal text-slate-600">
                Horarios de atención y consulta
              </h2>
              <button
                onClick={() => setMostrarContacto(false)}
                className="text-3xl text-slate-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="space-y-7 px-8 py-7 text-slate-700">
              <div>
                <h3 className="text-2xl font-semibold text-slate-700">Futurodefe</h3>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <p className="text-2xl font-bold text-[#344E41]">77221750 </p>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <span className="text-xl">⏰</span>
                  <p className="text-lg leading-8 text-slate-600">
                    Estamos disponibles las <strong>24 horas</strong> del día,{" "}
                    <strong>7 días</strong> a la semana.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-700">WhatsApp</h3>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <p className="text-2xl font-bold text-[#344E41]">77221750 - 63226292  </p>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <span className="text-xl">⏰</span>
                  <p className="text-lg leading-8 text-slate-600">
                    Estamos disponibles las <strong>24 horas</strong> del día,{" "}
                    <strong>7 días</strong> a la semana.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-700">Correo electrónico</h3>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <p className="text-2xl font-bold text-[#344E41]">futurodefe027@gmailcom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#0f3b2e] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-3 text-sm md:justify-between md:px-10">
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => setMostrarContacto(true)}
              className="flex items-center gap-2 text-white hover:text-[#d4af37]"
            >
              <Phone size={18} strokeWidth={2} />
              <span>Información de contacto</span>
            </button>

            <button
              onClick={() => setMostrarPuntos(true)}
              className="flex items-center gap-2 text-white hover:text-[#d4af37]"
            >
              <MapPin size={18} strokeWidth={2} />
              <span>Puntos de atención</span>
            </button>

            <button
              onClick={() => setMostrarNosotros(true)}
              className="flex items-center gap-2 text-white hover:text-[#d4af37]"
            >
              <Info size={18} strokeWidth={2} />
              <span>Sobre nosotros</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6">


          </div>
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-5 md:px-10">
          <div className="flex items-center gap-4">
            <Image
              src="/logouno.png"
              alt="Logo FUTURODEFE"
              width={100}
              height={100}
              className="rounded-full"
            />

            <div>
              <h1 className="text-3xl font-extrabold leading-none text-[#0f3b2e]">
                FUTURODEFE
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Fe que impulsa tu futuro.
              </p>
            </div>
          </div>


          <nav className="hidden items-center gap-8 text-lg font-medium text-[#0f3b2e] lg:flex">
            <div className="relative">
              <button
                onClick={() => setMostrarMenuTi(!mostrarMenuTi)}
                className="flex items-center gap-2 hover:text-[#d4af37]"
              >
                Soluciones para ti
                <span className="text-sm"></span>
              </button>

              {mostrarMenuTi && (
                <div className="absolute left-0 top-full z-50 mt-3 w-[260px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
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





          </nav>


        </div>
      </header>

      <section className="relative overflow-hidden bg-[#f3f0f7]">
        <div className="mx-auto grid min-h-[72vh] max-w-7xl md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16">
            <button className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#0f3b2e]/20 bg-white text-2xl text-[#0f3b2e] shadow-sm">
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
              className="rounded-full border-2 border-[#0f3b2e] px-10 py-4 text-lg font-semibold text-[#0f3b2e] hover:bg-[#0f3b2e] hover:text-white"
            >
              Solicita tu crédito hoy
            </button>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-[#d4af37] via-[#0f3b2e] to-[#163e30]">
            <div className="absolute -left-24 top-0 h-full w-64 rounded-r-full bg-[#f3f0f7]" />

            <button className="absolute bottom-10 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#0f3b2e] shadow-md">
              ›
            </button>
          </div>
        </div>
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
                Soluciones pensadas para impulsar proyectos personales, familiares y productivos.
              </p>
            </button>

            
          </div>
        </div>
      </section>
      {mostrarPuntos && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-6xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-2xl font-normal text-slate-600">
                Puntos de atención
              </h2>
              <button
                onClick={() => setMostrarPuntos(false)}
                className="text-3xl text-slate-500 hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-[320px_1fr]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="text-lg font-bold text-[#0f3b2e]">
                    Oficina Central
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Zona Ferropetrol, calle Tomas Rivas entre calles 5 "A" y 11 de junio
                  </p>
                  <a
                    href="https://www.google.com/maps?q=-16.50456,-68.16626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-semibold text-[#0f3b2e] underline"
                  >
                    Abrir en Google Maps
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="text-lg font-bold text-[#0f3b2e]">
                    Sucursal
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Av. Juan Pablo II N°20 (lado Parqueo EL CEIBO y Cajero BCP), El Alto, La Paz - Bolivia
                  </p>
                  <a
                    href="https://www.google.com/maps?q=-16.50258,-68.16431"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-semibold text-[#0f3b2e] underline"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>

              <MapaPuntos />
            </div>
          </div>
        </div>
      )}

      {mostrarNosotros && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6">
          <div className="mx-auto w-full max-w-6xl rounded-3xl bg-white shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-4">
              <h2 className="text-2xl font-normal text-slate-600">Sobre nosotros</h2>
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
                  CONOCE A  FUTURODEFE
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
                el crecimiento de las personas que necesitan un impulso económico.
                Nos definimos por la buena fe en nuestros clientes y la rapidez en
                nuestra gestión. Más que un simple proveedor de préstamos, somos un
                socio que convierte tu confianza en un apoyo rápido, ayudándote a
                sembrar la fe en tu futuro hoy.
              </p>

              <p className="mx-auto mt-10 max-w-5xl text-center text-xl leading-10 text-slate-700">
                Futurodefe nació para apoyar a los sectores de profesionales,
                comercio y producción, brindando soluciones financieras que permitan
                equipar y fortalecer su actividad económica. Desde nuestros inicios,
                trabajamos con la visión de convertirnos en un respaldo confiable para
                quienes buscan crecer, emprender y avanzar con seguridad.
              </p>
            </section>

            <section className="grid gap-10 bg-white px-8 py-14 md:grid-cols-2 md:px-12">
              <div>
                <h3 className="text-4xl font-extrabold text-[#3f3f46]">
                  Lo que nos inspira y hacia dónde avanzamos
                </h3>
                <p className="mt-6 text-xl leading-9 text-slate-600">
                  Descubre los principios que guían nuestras acciones y el futuro que
                  queremos construir junto a nuestros clientes.
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
                    Brindar apoyo financiero ágil, confiable y accesible a personas y
                    sectores productivos, impulsando su crecimiento económico mediante
                    una atención cercana.
                  </p>
                </div>

                <div className="rounded-3xl bg-[#f3f0f7] p-6">
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">Visión</h4>
                  <p className="mt-4 text-xl leading-9 text-slate-700">
                    Ser una entidad financiera reconocida por su confianza, rapidez y
                    compromiso con el desarrollo de profesionales, comerciantes y
                    productores, contribuyendo al crecimiento económico de nuestros
                    clientes y de nuestra comunidad.
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
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">Integridad</h4>
                  <p className="mt-4 text-lg leading-8 text-slate-600">

                    Somos consecuentes, hacemos lo que decimos, actuamos siempre de forma correcta y transparente.


                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">   Solidaridad</h4>
                  <p className="mt-4 text-lg leading-8 text-slate-600">


                    La sensibilidad social está en nuestra esencia, buscamos el bien común.



                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">Compromiso</h4>
                  <p className="mt-4 text-lg leading-8 text-slate-600">

                    La excelencia nos caracteriza, tomamos acciones para cumplir lo que acordamos
                    y nos hacemos responsables.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h4 className="text-3xl font-bold text-[#0f3b2e]">Servicio</h4>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Ofrecemos una atención cercana, clara y orientada a apoyar cada
                    necesidad financiera.
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
                  <p className="mt-3 text-2xl text-slate-700">Atención digital</p>
                </div>

                <div>
                  <p className="text-6xl font-extrabold text-[#0f3b2e]">100%</p>
                  <p className="mt-3 text-2xl text-slate-700">Compromiso</p>
                </div>
              </div>
            </section>

            <section className="rounded-b-3xl bg-[#0f3b2e] px-8 py-14 text-center text-white md:px-12">
              <h3 className="text-4xl font-extrabold">
                En futurodefe convertimos la confianza en oportunidades
              </h3>
              <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-white/85">
                Trabajamos para apoyar hoy el futuro de nuestros clientes, sembrando
                confianza, respaldo y crecimiento en cada paso.
              </p>
            </section>
          </div>
        </div>
      )}

      {mostrarCreditos && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6">
          <div className="mx-auto w-full max-w-7xl rounded-3xl bg-white shadow-2xl">
            <div className="sticky top-0 z-20 flex items-center justify-between border-b bg-white px-6 py-4">
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
                  Explora nuestras opciones de crédito y elige la que se ajuste más a
                  tus necesidades.
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
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
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
                      Destinado a la compra de maquinaria, equipos, materia prima y
                      otros insumos, capital de operaciones o inversión.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
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
                      Para proyectos de microempresas y operaciones destinadas a la
                      prestación de servicios.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
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
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src="/creditovehicular.png"
                      alt="Crédito de vehicular"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-3xl font-bold text-[#0f3b2e]">
                      Crédito Vehicular
                    </h4>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      Adquisición de un vehículo, automóvil, motocicleta u otro medio
                      de transporte.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
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
                      Adquisición de bienes o servicios personales no relacionados con
                      una actividad productiva.
                    </p>
                  </div>
                </div>
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
                src="/qr.png"
                alt="QR de WhatsApp"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}