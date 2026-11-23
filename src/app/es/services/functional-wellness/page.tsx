"use client";

import Link from "next/link";
import { useState } from "react";

export default function FunctionalWellnessEsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold">
        Saltar al contenido principal
      </a>

      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <Link href="/es" className="flex-shrink-0">
            <img src="/logo.png" alt="Rewired Ketamine" width={600} height={180} className="h-16 md:h-20 w-auto" />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              2820 NE 214th St #1002, Aventura, FL 33180
            </a>
            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@rewiredketamine.com
            </a>
            <a href="tel:+13056766070" className="flex items-center gap-2 font-semibold hover:text-[#C9A66B] transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (305) 676-6070
            </a>
            <Link href="/services/functional-wellness" className="text-[#C9A66B] font-semibold hover:underline">English</Link>
          </div>
        </div>
      </div>

      {/* Sticky header */}
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
                  <Link href="/es/services/home-ketamine" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ketamina en Casa</Link>
                  <Link href="/es/services/spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Spravato</Link>
                  <Link href="/es/services/iv-ketamine-vs-spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">IV vs Spravato</Link>
                  <Link href="/es/services/ketamine-therapy-cost" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Costo</Link>
                  <Link href="/es/services/ketamine-insurance" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Seguro Médico</Link>
                  <Link href="/es/services/functional-wellness" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Bienestar Funcional</Link>
                  <Link href="/es/services/medical-management" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Manejo Médico</Link>
                  <Link href="/es/services/talk-therapy" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Terapia de Conversación</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Tratamientos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 max-h-80 overflow-y-auto">
                  <Link href="/es/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Todos los Tratamientos</Link>
                  <Link href="/es/treatments/depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Depresión</Link>
                  <Link href="/es/treatments/anxiety" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ansiedad</Link>
                  <Link href="/es/treatments/ptsd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">TEPT</Link>
                  <Link href="/es/treatments/burnout" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Agotamiento</Link>
                  <Link href="/es/treatments/mental-fogginess" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Niebla Mental</Link>
                  <Link href="/es/treatments/motivation" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Motivación</Link>
                  <Link href="/es/treatments/eating-disorder" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Trastorno Alimentario</Link>
                  <Link href="/es/treatments/postpartum-depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Depresión Postparto</Link>
                  <Link href="/es/treatments/ocd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">TOC</Link>
                  <Link href="/es/treatments/chronic-pain" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Dolor Crónico</Link>
                  <Link href="/es/treatments/tension-headaches" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Cefaleas por Tensión</Link>
                  <Link href="/es/treatments/palliative-compassion-care" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Cuidado Paliativo y Compasión</Link>
                </div>
              </div>
            </div>
            <Link href="/es/providers" className="hover:text-[#C9A66B] transition">Proveedores</Link>
            <Link href="/es/content" className="hover:text-[#C9A66B] transition">Contenido</Link>
            <Link href="/es/location" className="hover:text-[#C9A66B] transition">Ubicación</Link>
            <Link href="/es/faq" className="hover:text-[#C9A66B] transition">Preguntas Frecuentes</Link>
            <Link href="/es#contact" className="hover:text-[#C9A66B] transition">Contacto</Link>
          </nav>
          <button className="md:hidden p-2" aria-label="Abrir menú" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/es#contact" className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#b8955e] transition">
              Consulta Gratuita
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1D36] border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
            <Link href="/es" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link href="/es/services" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Nuestros Servicios</Link>
            <Link href="/es/services/ketamine-insurance" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Seguro Médico</Link>
            <Link href="/es/treatments" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Tratamientos</Link>
            <Link href="/es/providers" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Proveedores</Link>
            <Link href="/es/content" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Contenido</Link>
            <Link href="/es/location" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Ubicación</Link>
            <Link href="/es/faq" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Preguntas Frecuentes</Link>
            <Link href="/es/#contact" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            <Link href="/services/functional-wellness" className="block py-2 text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>English</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Bienestar Funcional</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Apoyando a la persona completa junto con el cuidado de ketamina.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#555] mb-6">
            Nuestro enfoque de bienestar funcional examina el panorama más amplio de tu salud — sueño, estrés, nutrición y estilo de vida — para ayudar a crear la base más sólida posible para la sanación. Estos apoyos están diseñados para trabajar junto con tu tratamiento de ketamina y el proceso de integración.
          </p>
          <p className="text-lg text-[#555]">
            Cuando es apropiado, también podemos ordenar vitaminas personalizadas para incluirlas en tus infusiones de ketamina, ofreciendo una capa adicional de apoyo personalizado.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para dar el siguiente paso?</h2>
        <p className="text-lg text-[#555] mb-6">Reserve una consulta gratuita. Sin presión — solo respuestas honestas y un camino claro hacia adelante.</p>
        <Link href="/es#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">
          Reservar Consulta Gratuita
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1D36] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <img src="/logo.png" alt="Rewired Ketamine" className="h-12 mb-4" />
            <p className="text-white/70">2820 NE 214th Street, Suite 1002<br />Aventura, FL 33180</p>
            <p className="mt-2"><a href="tel:+13056766070" className="hover:text-[#C9A66B]">(305) 676-6070</a></p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/es" className="hover:text-[#C9A66B]">Inicio</Link></li>
              <li><Link href="/es/services" className="hover:text-[#C9A66B]">Servicios</Link></li>
              <li><Link href="/es/location" className="hover:text-[#C9A66B]">Ubicación</Link></li>
              <li><Link href="/es/faq" className="hover:text-[#C9A66B]">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Servicios</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/es/services/ketamine-infusion" className="hover:text-[#C9A66B]">Infusión de Ketamina</Link></li>
              <li><Link href="/es/services/home-ketamine" className="hover:text-[#C9A66B]">Ketamina en Casa</Link></li>
              <li><Link href="/es/services/spravato" className="hover:text-[#C9A66B]">Spravato</Link></li>
              <li><Link href="/es/services/ketamine-insurance" className="hover:text-[#C9A66B]">Seguro Médico</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contacto</h3>
            <p className="text-white/70">info@rewiredketamine.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · Todos los derechos reservados
        </div>
      </footer>
    </main>
  );
}
