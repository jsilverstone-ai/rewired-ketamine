"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold">
        Saltar al contenido principal
      </a>

      {/* Top bar with English */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <Link href="/es"><Image src="/logo.png" alt="Rewired Ketamine" width={600} height={180} className="h-16 md:h-20 w-auto" priority /></Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B]">2820 NE 214th St #1002, Aventura, FL 33180</a>
            <a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B]">info@rewiredketamine.com</a>
            <a href="tel:+13056766070" className="font-semibold hover:text-[#C9A66B]">(305) 676-6070</a>
            <Link href="/services/ketamine-infusion" className="bg-[#C9A66B] text-[#0B1D36] text-xs font-bold px-3 py-1.5 rounded hover:bg-[#0B1D36] hover:text-white">English</Link>
          </div>
        </div>
      </div>

      {/* Full nav - use the same Spanish nav as in functional-wellness/page.tsx */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        {/* Insert the complete nav code from functional-wellness Spanish page here, with all /es/ links */}
      </header>

      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • Sur de Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Infusión de Ketamina</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">Sesiones IV completamente guiadas en un entorno calmado y privado diseñado alrededor de ti.</p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">¡Hablamos Español!</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <section className="py-12 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
                <Image src="/services/ketamine-infusion-aventura.jpg" alt="Suite privada de infusión de ketamina en la clínica Rewired Ketamine en Aventura, Florida" width={1200} height={900} className="w-full h-auto object-cover" priority />
              </div>
            </div>
          </section>
          <div className="prose prose-lg max-w-none text-[#444]">
            <p className="text-lg leading-relaxed mb-6">Ofrecemos terapia de infusión de ketamina completamente guiada en un entorno calmado y privado diseñado alrededor de ti. Cada sala se puede ajustar para sostener el espacio de la manera que se sienta correcta — iluminación, sonido, temperatura y atmósfera son todos flexibles para que el entorno apoye tu proceso.</p>
            <p className="text-lg leading-relaxed mb-6">Los pacientes que buscan cuidado de <strong>infusión de ketamina Miami</strong> generalmente vienen de la ciudad y barrios cercanos a nuestra clínica de Aventura — las mismas salas, el mismo equipo. Si quieres el menú más amplio de opciones IV y en casa, comienza con <Link href="/es/services" className="text-[#C9A66B] font-semibold hover:underline">nuestros servicios</Link> o la <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">página de inicio</Link>. Sesiones completamente guiadas están disponibles.</p>
            <p className="text-lg leading-relaxed mb-6">Nuestro enfoque de guía está arraigado en la compasión y la verdadera asociación. Caminamos a tu lado con cuidado e intención, creando las condiciones para insights significativos y cambio duradero. Cada sesión es cuidadosamente supervisada para que te sientas seguro, apoyado y nunca solo.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-12">Precios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[#ddd] rounded-2xl overflow-hidden">
              <div className="bg-[#0B1D36] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Protocolo de Salud Mental</h3>
                <p className="text-sm text-white/70">Infusión de Ketamina IV de 1 Hora</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-[#eee] pb-3"><span>Sesión Única</span><span className="font-bold text-[#0B1D36]">$440</span></div>
                <div className="flex justify-between items-center border-b border-[#eee] pb-3"><span>Paquete de 3</span><span className="font-bold text-[#0B1D36]">$1,200</span></div>
                <div className="flex justify-between items-center"><span>Paquete de 6</span><span className="font-bold text-[#0B1D36]">$2,300</span></div>
              </div>
            </div>
            <div className="border border-[#ddd] rounded-2xl overflow-hidden">
              <div className="bg-[#0B1D36] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Protocolo de Dolor Crónico</h3>
                <p className="text-sm text-white/70">Infusión de Ketamina IV de 2 Horas</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-[#eee] pb-3"><span>Sesión Única</span><span className="font-bold text-[#0B1D36]">$590</span></div>
                <div className="flex justify-between items-center border-b border-[#eee] pb-3"><span>Paquete de 3</span><span className="font-bold text-[#0B1D36]">$1,700</span></div>
                <div className="flex justify-between items-center"><span>Paquete de 6</span><span className="font-bold text-[#0B1D36]">$3,200</span></div>
              </div>
            </div>
            <div className="border border-[#ddd] rounded-2xl overflow-hidden">
              <div className="bg-[#0B1D36] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Sesiones Guiadas</h3>
                <p className="text-sm text-white/70">1 Hora IV + Guía</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-[#eee] pb-3"><span>Sesión Única</span><span className="font-bold text-[#0B1D36]">$590</span></div>
                <div className="flex justify-between items-center border-b border-[#eee] pb-3"><span>Paquete de 3</span><span className="font-bold text-[#0B1D36]">$1,500</span></div>
                <div className="flex justify-between items-center"><span>Paquete de 6</span><span className="font-bold text-[#0B1D36]">$2,900</span></div>
              </div>
            </div>
            <div className="border border-[#ddd] rounded-2xl overflow-hidden">
              <div className="bg-[#0B1D36] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Sesiones Guiadas</h3>
                <p className="text-sm text-white/70">2 Horas IV + Guía</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-[#eee] pb-3"><span>Sesión Única</span><span className="font-bold text-[#0B1D36]">$690</span></div>
                <div className="flex justify-between items-center border-b border-[#eee] pb-3"><span>Paquete de 3</span><span className="font-bold text-[#0B1D36]">$1,925</span></div>
                <div className="flex justify-between items-center"><span>Paquete de 6</span><span className="font-bold text-[#0B1D36]">$4,000</span></div>
              </div>
            </div>
          </div>
          <p className="text-center text-[#666] text-sm mt-8">Pregúntanos sobre descuentos disponibles. Consulta requerida.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para dar el siguiente paso?</h2>
          <p className="text-xl text-white/80 mb-10">Reserva una consulta gratuita. Sin presión — solo respuestas honestas y un camino claro hacia adelante.</p>
          <Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Reservar Consulta Gratuita</Link>
        </div>
      </section>

      {/* Full footer */}
    </main>
  );
}