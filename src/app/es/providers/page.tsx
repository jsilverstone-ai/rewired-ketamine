"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SpanishProviders() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold">
        Skip to main content
      </a>

      {/* TOP BAR */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <Link href="/es" className="flex-shrink-0">
            <Image src="/logo.png" alt="Rewired Ketamine" width={600} height={180} className="h-16 md:h-20 w-auto" priority />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <span>2820 NE 214th St #1002, Aventura, FL</span>
            </a>
            <a href="tel:+13056766070" className="flex items-center gap-2 hover:text-[#C9A66B] transition">(305) 676-6070</a>
            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-2 hover:text-[#C9A66B] transition">info@rewiredketamine.com</a>
            <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">English</Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/es" className="hover:text-[#C9A66B] transition">Inicio</Link>
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Nuestros Servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/es/services" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Todos los Servicios</Link>
                  <Link href="/es/services/ketamine-infusion" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Infusión de Ketamina</Link>
                  <Link href="/es/services/spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Spravato</Link>
                  <Link href="/es/services/home-ketamine" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ketamina en Casa</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Tratamientos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/es/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Todos los Tratamientos</Link>
                  <Link href="/es/treatments/depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Depresión</Link>
                  <Link href="/es/treatments/anxiety" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ansiedad</Link>
                  <Link href="/es/treatments/ptsd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">TEPT</Link>
                </div>
              </div>
            </div>
            <Link href="/es/providers" className="hover:text-[#C9A66B] transition">Proveedores</Link>
            <Link href="/es/content" className="hover:text-[#C9A66B] transition">Contenido</Link>
            <Link href="/es/location" className="hover:text-[#C9A66B] transition">Ubicación</Link>
            <Link href="/es/faq" className="hover:text-[#C9A66B] transition">Preguntas Frecuentes</Link>
            <Link href="/es/#contact" className="hover:text-[#C9A66B] transition">Contacto</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/es/#contact" className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#b8955e] transition">Consulta Gratuita</Link>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1D36] border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              <Link href="/es" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              <Link href="/es/services" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Nuestros Servicios</Link>
              <Link href="/es/treatments" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Tratamientos</Link>
              <Link href="/es/providers" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Proveedores</Link>
              <Link href="/es/content" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Contenido</Link>
              <Link href="/es/location" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Ubicación</Link>
              <Link href="/es/faq" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Preguntas Frecuentes</Link>
              <Link href="/es/#contact" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
              <Link href="/" className="block py-2 text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>English</Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Nuestros Proveedores</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          Conozca al equipo clínico de Rewired Ketamine en Aventura. ¡Hablamos Español!
        </p>
      </section>

      {/* PROVIDERS CONTENT */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8F5F0] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#0B1D36] mb-2">Kelsey Vivatson, PMHNP-BC</h2>
              <p className="text-[#C9A66B] font-semibold mb-4">Directora Clínica</p>
              <p className="text-[#555] leading-relaxed">Enfermera practicante de salud mental psiquiátrica certificada, especializada en el manejo de medicamentos y psicoterapia.</p>
            </div>
            <div className="bg-[#F8F5F0] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#0B1D36] mb-2">Jacob Silverstone, DPM</h2>
              <p className="text-[#C9A66B] font-semibold mb-4">Director Médico</p>
              <p className="text-[#555] leading-relaxed">Autor de Chronically Misunderstood y Stuck in Reverse. Enfocado en neuroplasticidad y cuidado de apoyo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1D36] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <Link href="/es">
                <Image src="/logo.png" alt="Rewired Ketamine" width={180} height={60} className="h-12 w-auto mb-6" />
              </Link>
              <p className="text-white/70 text-sm leading-relaxed">
                Clínica de ketamina de propiedad local en Aventura, sirviendo a Miami, Fort Lauderdale y el Sur de Florida. ¡Hablamos Español!
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-5 text-[#C9A66B]">Contacto</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><a href="tel:+13056766070" className="hover:text-[#C9A66B] transition">(305) 676-6070</a></li>
                <li><a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B] transition">info@rewiredketamine.com</a></li>
                <li><a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition">2820 NE 214th St #1002<br />Aventura, FL 33180</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-5 text-[#C9A66B]">Enlaces Rápidos</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link href="/es" className="hover:text-[#C9A66B] transition">Inicio</Link></li>
                <li><Link href="/es/services" className="hover:text-[#C9A66B] transition">Nuestros Servicios</Link></li>
                <li><Link href="/es/treatments" className="hover:text-[#C9A66B] transition">Tratamientos</Link></li>
                <li><Link href="/es/providers" className="hover:text-[#C9A66B] transition">Proveedores</Link></li>
                <li><Link href="/es/location" className="hover:text-[#C9A66B] transition">Ubicación</Link></li>
                <li><Link href="/es/faq" className="hover:text-[#C9A66B] transition">Preguntas Frecuentes</Link></li>
                <li><Link href="/" className="hover:text-[#C9A66B] transition">English</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p className="mb-4 max-w-4xl mx-auto">
              La información en este sitio no está destinada ni implica ser un sustituto del consejo, diagnóstico o tratamiento médico profesional. Todo el contenido es solo para fines de información general.
            </p>
            © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · Todos los Derechos Reservados
          </div>
        </div>
      </footer>
    </main>
  );
}
