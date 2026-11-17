"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

export default function HomeES() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [openExpect, setOpenExpect] = useState<string | null>("before");

  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#1a1a1a] pb-24 lg:pb-0">
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalClinic", "LocalBusiness"],
            "name": "Rewired Ketamine",
            "url": "https://www.rewiredketamine.com/es",
            "image": "https://www.rewiredketamine.com/logo.png",
            "telephone": "+1-305-676-6070",
            "email": "info@rewiredketamine.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2820 NE 214th St #1002",
              "addressLocality": "Aventura",
              "addressRegion": "FL",
              "postalCode": "33180",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.9730993,
              "longitude": -80.1449845
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            },
            "priceRange": "$$",
            "description": "Rewired Ketamine ofrece sesiones de ketamina totalmente guiadas en Aventura para depresión, ansiedad, TEPT y dolor crónico. Atendemos a Miami, Fort Lauderdale y el Sur de Florida. ¡Hablamos Español!"
          })
        }}
      />

      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
      >
        Saltar al contenido principal
      </a>

      {/* TOP BAR */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <Link href="/es" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Rewired Ketamine"
              width={600}
              height={180}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
            <a
              href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#C9A66B] transition"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              2820 NE 214th St #1002, Aventura, FL 33180
            </a>

            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@rewiredketamine.com
            </a>

            <a href="tel:+13056766070" className="flex items-center gap-2 font-semibold hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (305) 676-6070
            </a>
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
                  <Link href="/services/ketamine-infusion" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Infusión de Ketamina</Link>
                  <Link href="/services/home-ketamine" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ketamina en Casa</Link>
                  <Link href="/services/spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Spravato</Link>
                  <Link href="/services/ketamine-therapy-cost" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Precio</Link>
                  <Link href="/services/functional-wellness" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Bienestar Funcional</Link>
                  <Link href="/services/medical-management" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Manejo Médico</Link>
                  <Link href="/services/talk-therapy" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Terapia de Habla</Link>
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
                  <Link href="/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Todos los Tratamientos</Link>
                  <Link href="/treatments/depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Depresión</Link>
                  <Link href="/treatments/anxiety" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ansiedad</Link>
                  <Link href="/treatments/ptsd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">TEPT</Link>
                  <Link href="/treatments/ocd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">TOC</Link>
                  <Link href="/treatments/chronic-pain" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Dolor Crónico</Link>
                </div>
              </div>
            </div>

            <Link href="/providers" className="hover:text-[#C9A66B] transition">Proveedores</Link>
            <Link href="/content/blog" className="hover:text-[#C9A66B] transition">Contenido</Link>
            <Link href="/location" className="hover:text-[#C9A66B] transition">Ubicación</Link>
            <Link href="/faq" className="hover:text-[#C9A66B] transition">Preguntas Frecuentes</Link>
            <Link href="/es/#contacto" className="hover:text-[#C9A66B] transition">Contacto</Link>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>

          <div className="hidden lg:flex items-center gap-5">
            <Link href="/es/#contacto" className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-5 py-2 rounded hover:bg-white transition">
              Consulta Gratuita
            </Link>
          </div>
        </div>

        {/* Mobile menu — abbreviated for length; expand the same way as English if needed */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#0B1D36] border-t border-white/10 px-6 py-4 space-y-3">
            <Link href="/es" className="block py-2" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link href="/es/services" className="block py-2" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
            <Link href="/treatments" className="block py-2" onClick={() => setIsMenuOpen(false)}>Tratamientos</Link>
            <Link href="/providers" className="block py-2" onClick={() => setIsMenuOpen(false)}>Proveedores</Link>
            <Link href="/location" className="block py-2" onClick={() => setIsMenuOpen(false)}>Ubicación</Link>
            <Link href="/faq" className="block py-2" onClick={() => setIsMenuOpen(false)}>Preguntas Frecuentes</Link>
            <Link href="/es/#contacto" className="block py-2" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        )}
      </header>

      {/* HERO — Spanish */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-white bg-[#0B1D36]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SUR DE FLORIDA</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terapia de Ketamina Totalmente Guiada en Aventura<br className="hidden md:block" /> Sirviendo a Miami y el Sur de Florida
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Rewired Ketamine es una clínica de ketamina en la que confían los pacientes de Miami, ubicada en Aventura. Sesiones totalmente guiadas disponibles para depresión resistente al tratamiento, ansiedad, TEPT y dolor crónico.
          </p>
          <p className="text-[#C9A66B] font-bold text-xl mb-8">¡Hablamos Español!</p>
          <Link href="/es/#contacto" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded-lg hover:bg-white transition">
            Consulta Gratuita
          </Link>
        </div>
      </section>

      {/* How We Help */}
      <section id="como-ayudamos" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D36] mb-5">Cómo Ayudamos</h2>
          <p className="text-xl text-[#555] max-w-3xl mx-auto mb-12">
            En nuestra clínica de ketamina en Aventura, ofrecemos sesiones totalmente guiadas diseñadas para apoyar un alivio duradero de la depresión, la ansiedad, el TEPT y el dolor crónico.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Sesiones Totalmente Guiadas Disponibles</h3>
              <p className="text-[#555] leading-relaxed">Cada infusión de ketamina es supervisada cuidadosamente por nuestro equipo clínico para que te sientas seguro y acompañado todo el tiempo.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Integración Práctica</h3>
              <p className="text-[#555] leading-relaxed">Nuestro equipo de integración trabaja contigo después de cada sesión para ayudarte a procesar los insights y crear cambios duraderos.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Cuidado Personalizado</h3>
              <p className="text-[#555] leading-relaxed">Planes de tratamiento adaptados a ti — ya sea que busques alivio de la depresión, ansiedad, TEPT, dolor crónico u otras condiciones en el Sur de Florida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experiencia" className="py-24 px-6 bg-[#F8F5F0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D36] mb-8">La Experiencia</h2>
          <p className="text-xl text-[#444] mb-8">Tu comodidad es lo primero.</p>
          <p className="text-lg text-[#555] leading-relaxed mb-6">
            Cada espacio de tratamiento en nuestra clínica de ketamina en Aventura está diseñado cuidadosamente para que puedas crear el ambiente exacto que te ayude a sentirte seguro y tranquilo. ¿Prefieres luz natural suave o oscuridad completa? ¿Silencio, música suave o televisión? Ofrecemos todas las combinaciones para que la habitación se convierta realmente en <em>tu</em> espacio personal.
          </p>
          <p className="text-lg text-[#555] leading-relaxed">
            Sillones reclinables cómodos, habitaciones privadas y un equipo atento enfocado completamente en ti. Ofrecemos sesiones totalmente guiadas y te acompañamos durante la integración — para que los beneficios continúen mucho después de que te vayas.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contacto" className="py-28 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para dar el primer paso?</h2>
            <p className="text-xl text-white/80">
              Agenda una consulta gratuita. Sin presión — solo respuestas honestas y un camino claro hacia adelante.
            </p>
          </div>

          <form action="https://formspree.io/f/mkjwgjzj" method="POST" className="bg-white rounded-2xl p-8 md:p-10 text-[#1a1a1a] shadow-xl">
            <input type="hidden" name="_next" value="https://www.rewiredketamine.com/thank-you" />
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0B1D36] mb-1.5">Nombre Completo *</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#0B1D36] mb-1.5">Teléfono *</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]" placeholder="(305) 000-0000" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-[#0B1D36] mb-1.5">Correo Electrónico *</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]" placeholder="tu@ejemplo.com" />
            </div>
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="sms_consent" required className="mt-1 h-4 w-4 rounded border-gray-300 text-[#C9A66B] focus:ring-[#C9A66B]" />
                <span className="text-sm text-[#444] leading-relaxed">Al enviar este formulario acepto recibir mensajes de texto de Rewired Ketamine</span>
              </label>
            </div>
            <button type="submit" className="w-full bg-[#C9A66B] text-[#0B1D36] font-bold py-4 rounded-full text-lg hover:bg-[#0B1D36] hover:text-white transition">
              Solicitar Consulta Gratuita
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">Responderemos dentro de 1 día hábil.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#081525] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-5 text-[#C9A66B]">Contáctanos</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>Abierto: Lunes - Viernes</li>
                <li>9:00 AM - 5:00 PM</li>
                <li><a href="tel:+13056766070" className="hover:text-[#C9A66B] transition">(305) 676-6070</a></li>
                <li>2820 NE 214th St #1002<br />Aventura, FL 33180</li>
                <li><a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B] transition">info@rewiredketamine.com</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/logo.png" alt="Rewired Ketamine" width={200} height={60} className="h-14 w-auto mb-6" />
              <div className="flex gap-4 mb-6">
                {/* social icons — keep same as English */}
              </div>
              <a href="https://www.legitscript.com" target="_blank" rel="noopener noreferrer">
                <Image src="/legitscript.png" alt="LegitScript Certified" width={150} height={75} className="h-16 w-auto" />
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-5 text-[#C9A66B]">Enlaces Rápidos</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link href="/es" className="hover:text-[#C9A66B] transition">Inicio</Link></li>
                <li><Link href="/es/#como-ayudamos" className="hover:text-[#C9A66B] transition">Cómo Ayudamos</Link></li>
                <li><Link href="/es/#experiencia" className="hover:text-[#C9A66B] transition">La Experiencia</Link></li>
                <li><Link href="/es/#contacto" className="hover:text-[#C9A66B] transition">Contacto</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p className="mb-4 max-w-4xl mx-auto">La información en este sitio no pretende ser un sustituto de consejo médico profesional, diagnóstico o tratamiento. Todo el contenido es solo para fines de información general.</p>
            © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · Todos los Derechos Reservados
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-[#e6e0d6] bg-[#F6F1E8]/90 backdrop-blur-sm">
        <div className="max-w-lg mx-auto px-4 py-3 grid grid-cols-2 gap-3">
          <a href="tel:+13056766070" className="text-center border border-[#0B1D36] text-[#0B1D36] py-3 text-sm font-semibold">
            Llamar o Texto
          </a>
          <Link href="/es/#contacto" className="text-center bg-[#C9A66B] text-[#0B1D36] py-3 text-sm font-semibold">
            Consulta Gratuita
          </Link>
        </div>
      </div>
    </main>
  );
}