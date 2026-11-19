"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SpanishHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [openExpect, setOpenExpect] = useState<string | null>("before");
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#1a1a1a] pb-24 lg:pb-0">
      {/* LocalBusiness Schema for SEO */}
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
            "description": "Rewired Ketamine ofrece terapia de infusión de ketamina totalmente guiada en Aventura para depresión, ansiedad, TEPT y dolor crónico. Sirviendo a Miami, Fort Lauderdale y el Sur de Florida. ¡Hablamos Español!"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué es la terapia de ketamina en Rewired Ketamine en Aventura?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rewired Ketamine es una clínica de propiedad local en Aventura que ofrece sesiones de ketamina totalmente guiadas para personas que no han obtenido suficiente alivio con tratamientos habituales. El cuidado es presencial, con un equipo clínico presente durante la sesión, no un protocolo por correo."
                }
              },
              {
                "@type": "Question",
                "name": "¿Tratan a pacientes de Miami y Fort Lauderdale?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. La clínica está en Aventura y regularmente atiende a personas de Miami, North Miami Beach, Fort Lauderdale y el resto del Sur de Florida. Si buscó “ketamine Miami” o “ketamine near me”, esta es la oficina a la que deberían llevar esas búsquedas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Para quién es la terapia de ketamina?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Las personas a menudo vienen a nosotros por depresión resistente al tratamiento, ansiedad, TEPT, TOC, dolor crónico y preocupaciones relacionadas cuando el cuidado habitual no ha sido suficiente. Una consulta y evaluación médica deciden si la ketamina es apropiada. No es una opción de primera línea para todos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué sucede durante una sesión de infusión guiada?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Está en una sala de tratamiento privada con monitoreo y personal cerca. Las sesiones suelen durar alrededor de una hora, con tiempo después para estabilizarse antes de salir con un conductor. Hablamos del plan antes de la primera visita para que nada sea una sorpresa."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo es esto diferente de la ketamina en casa o sin supervisión?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El cuidado en clínica significa que la dosificación, el monitoreo y el apoyo ocurren en la misma habitación. También ofrecemos opciones estructuradas en casa cuando son apropiadas, aún con evaluación y seguimiento, no un kit anónimo. El objetivo es un proceso médico guiado."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo empiezo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Reserve una consulta gratuita. Revisamos el historial, los medicamentos y los objetivos, explicamos el uso fuera de etiqueta y la posible disociación, y solo entonces programamos el tratamiento si es candidato. ¡Hablamos Español!"
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué monitoreo de seguridad utilizan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Las sesiones incluyen monitoreo y una ventana de recuperación con personal. Evaluamos problemas como presión arterial no controlada, psicosis activa o uso inestable de sustancias antes de que alguien comience. Los pasos exactos se cubren en el consentimiento."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuántas sesiones suelen necesitar las personas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muchas personas comienzan con una serie corta durante unas semanas, luego deciden sobre refuerzos según cómo se sientan realmente, no un calendario fijo de productos. Su clínico establecerá el plan después de la consulta."
                }
              }
            ]
          })
        }}
      />

      {/* Skip to content - ADA */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
      >
        Saltar al contenido principal
      </a>

      {/* ===== TOP BAR ===== */}
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
              href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D"
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
            <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">English</Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/es" className="hover:text-[#C9A66B] transition">Inicio</Link>

            {/* Services Dropdown */}
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
                  <Link href="/es/services/functional-wellness" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Bienestar Funcional</Link>
                  <Link href="/es/services/medical-management" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Manejo Médico</Link>
                  <Link href="/es/services/talk-therapy" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Terapia de Conversación</Link>
                </div>
              </div>
            </div>

            {/* Treatments Dropdown */}
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

            {/* Content Dropdown */}
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Contenido
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/es/content/blog" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Blog</Link>
                  <Link href="/es/content/videos" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Videos</Link>
                  <Link href="/es/content/ketamine-in-the-news" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ketamina en las Noticias</Link>
                </div>
              </div>
            </div>

            <Link href="/es/location" className="hover:text-[#C9A66B] transition">Ubicación</Link>
            <Link href="/es/faq" className="hover:text-[#C9A66B] transition">Preguntas Frecuentes</Link>
            <Link href="/es/#contact" className="hover:text-[#C9A66B] transition">Contacto</Link>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/es/#contact" className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#b8955e] transition">
              Consulta Gratuita
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#0B1D36] border-t border-white/10">
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
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0B1D36] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Terapia de Ketamina Totalmente Guiada en Aventura<br />
            Sirviendo a Miami y el Sur de Florida
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Rewired Ketamine es una clínica de ketamina en la que confían los pacientes de Miami, ubicada en Aventura. Sesiones totalmente guiadas disponibles para depresión resistente al tratamiento, ansiedad, TEPT y dolor crónico.
          </p>
          <p className="text-[#C9A66B] font-semibold text-lg mb-8">¡Hablamos Español!</p>
          <Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-4 rounded-lg hover:bg-[#b8955e] transition text-lg">
            Consulta Gratuita
          </Link>
        </div>
      </section>

      {/* ===== HOW WE HELP ===== */}
      <section id="how-we-help" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B1D36] mb-5">Cómo Ayudamos</h2>
          <p className="text-xl text-[#555] max-w-3xl mx-auto">
            En nuestra clínica de ketamina en Aventura, ofrecemos sesiones totalmente guiadas diseñadas para apoyar un alivio duradero de la depresión, la ansiedad, el TEPT y el dolor crónico.
          </p>
        </div>

        <div className="help-grid">
          <div>
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Sesiones Guiadas Disponibles</h3>
            <p className="text-[#555] leading-relaxed">
              Cada infusión de ketamina es cuidadosamente supervisada y guiada por nuestro equipo clínico para que se sienta seguro y apoyado todo el tiempo.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Integración Práctica</h3>
            <p className="text-[#555] leading-relaxed">
              Nuestro equipo de integración trabaja con usted después de cada sesión para ayudarle a procesar las ideas y crear un cambio duradero.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Cuidado Personalizado</h3>
            <p className="text-[#555] leading-relaxed">
              Planes de tratamiento adaptados a usted, ya sea que busque alivio de la depresión, la ansiedad, el TEPT, el dolor crónico u otras condiciones en el Sur de Florida.
            </p>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="py-24 px-6 bg-[#F8F5F0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D36] mb-8">La Experiencia</h2>
          <p className="text-xl text-[#444] mb-8">Su comodidad es lo primero.</p>
          <p className="text-lg text-[#555] mb-6 leading-relaxed">
            Cada espacio de tratamiento en nuestra clínica de ketamina en Aventura está diseñado cuidadosamente para que pueda crear el entorno exacto que le ayuda a sentirse seguro y a gusto. ¿Prefiere luz natural suave o oscuridad completa? ¿Quietud silenciosa, música suave o televisión? Ofrecemos cada combinación para que la habitación se convierta realmente en <em>su</em> espacio personal.
          </p>
          <p className="text-lg text-[#555] leading-relaxed">
            Reclinables cómodos, habitaciones privadas y un equipo atento enfocado completamente en usted. Ofrecemos sesiones totalmente guiadas y nos quedamos a su lado a través de la integración, para que los beneficios continúen mucho después de que se vaya.
          </p>
          <p>
            Rewired Ketamine es una clínica de <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">ketamine miami</Link> ubicada en Aventura, sirviendo a pacientes en toda el área metropolitana de Miami.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA + CONTACT FORM ===== */}
      <section id="contact" className="py-28 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para dar el primer paso?</h2>
            <p className="text-xl text-white/80">
              Reserve una consulta gratuita. Sin presión, solo respuestas honestas y un camino claro hacia adelante.
            </p>
          </div>

          <form 
            action="https://formspree.io/f/mkjwgjzj" 
            method="POST"
            className="bg-white rounded-2xl p-8 md:p-10 text-[#1a1a1a] shadow-xl"
          >
            <input type="hidden" name="_next" value="https://rewiredketamine.com/thank-you" />
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0B1D36] mb-1.5">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  placeholder="Su nombre"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#0B1D36] mb-1.5">Teléfono *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  placeholder="(305) 000-0000"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-[#0B1D36] mb-1.5">Correo Electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                placeholder="usted@ejemplo.com"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="sms_consent"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#C9A66B] focus:ring-[#C9A66B]"
                />
                <span className="text-sm text-[#444] leading-relaxed">
                  Al enviar este formulario acepto recibir mensajes de texto de Rewired Ketamine
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9A66B] text-[#0B1D36] font-bold py-4 rounded-full text-lg hover:bg-[#0B1D36] hover:text-white transition"
            >
              Solicitar Consulta Gratuita
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Responderemos dentro de 1 día hábil.
            </p>
          </form>

          <div className="mt-14 flex flex-col items-center gap-5 text-white/90 text-center">
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>2820 NE 214th St #1002, Aventura, FL 33180</span>
            </a>

            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-3 hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@rewiredketamine.com</span>
            </a>

            <a href="tel:+13056766070" className="flex items-center gap-3 font-semibold hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(305) 676-6070</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#081525] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            <div>
              <h3 className="font-semibold text-lg mb-5 text-[#C9A66B]">Contáctenos</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>Abierto: Lunes - Viernes</li>
                <li>9:00AM - 5:00PM</li>
                <li>
                  <a href="tel:+13056766070" className="hover:text-[#C9A66B] transition">Teléfono: (305) 676-6070</a>
                </li>
                <li>
                  <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition">
                    2820 NE 214th St #1002<br />Aventura, FL 33180
                  </a>
                </li>
                <li>
                  <a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B] transition">info@rewiredketamine.com</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/logo.png"
                alt="Rewired Ketamine"
                width={200}
                height={60}
                className="h-14 w-auto mb-6"
              />
              
              <div className="flex gap-4 mb-6">
                <a href="https://www.instagram.com/rewired_ketamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Instagram">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.youtube.com/@RewiredKetamine" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="YouTube">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.facebook.com/RewiredKetamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Facebook">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/jacob-silverstone-98414547/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="LinkedIn">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>

              <a 
                href="https://www.legitscript.com/websites/?checker_keywords=rewiredketamine.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/legitscript.png"
                  alt="LegitScript Certified"
                  width={150}
                  height={75}
                  className="h-16 w-auto"
                />
              </a>
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

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-[#e6e0d6] bg-[#F6F1E8]/90 backdrop-blur-sm">
        <div className="max-w-lg mx-auto px-4 py-3 grid grid-cols-2 gap-3">
          <a
            href="tel:+13056766070"
            className="text-center border border-[#0B1D36] text-[#0B1D36] py-3 text-sm font-semibold"
          >
            Llamar o Mensaje
          </a>
          <Link
            href="/es/#contact"
            className="text-center bg-[#C9A66B] text-[#0B1D36] py-3 text-sm font-semibold"
          >
            Consulta Gratuita
          </Link>
        </div>
      </div>
    </main>
  );
}
