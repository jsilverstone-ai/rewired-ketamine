"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishHome() {
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
            "description": "Rewired Ketamine ofrece terapia de infusión de ketamina totalmente guiada en Aventura para depresión, ansiedad, TEPT y dolor crónico. Sirviendo a Miami, Fort Lauderdale y el Sur de Florida. ¡Hablamos Español!"
          })
        }}
      />

      <SiteHeaderEs />

      {/* HERO */}
      <section id="main-content" className="relative pt-28 pb-32 md:pt-36 md:pb-40 px-6 overflow-hidden">
        <Image
          src="/clinic.jpg"
          alt="Rewired Ketamine clinic in Aventura, Florida"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0B1D36]/75 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Terapia de Ketamina Totalmente Guiada en Aventura<br />
            Sirviendo a Miami y el Sur de Florida
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Rewired Ketamine es una clínica de ketamina líder en la que confían los pacientes de Miami, ubicada en Aventura. Sesiones totalmente guiadas disponibles para depresión resistente al tratamiento, ansiedad, TEPT y dolor crónico.
          </p>
          <p className="text-[#C9A66B] font-semibold text-lg mb-8"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/#contact" className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-4 rounded-lg hover:bg-[#b8955e] transition text-lg">Consulta Gratuita</Link>
            <a href="tel:+13056766070" className="border border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition text-lg">Llamar o Mensaje</a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#0B1D36] py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-3 text-center text-white/90 text-sm md:text-base">
          <span>Clínica de propiedad local en Aventura</span>
          <span>Sesiones totalmente guiadas disponibles</span>
          <span>5 estrellas en Google</span>
          <span>Sirviendo a Miami y el Sur de Florida</span>
          <span className="text-[#C9A66B] font-semibold">¡Hablamos Español!</span>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 px-6 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-widest text-[#C9A66B] font-semibold mb-2">EXPERIENCIAS DE PACIENTES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] mb-4">Lo que dicen nuestros pacientes</h2>
          <p className="text-lg text-[#555] mb-8">Comentarios reales de personas que han elegido el cuidado en nuestra clínica de propiedad local en Aventura.</p>
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-00d35db3-e7e4-417e-8a0b-dbc5664993a2" data-elfsight-app-lazy></div>
          <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="inline-block text-[#C9A66B] font-semibold hover:underline mt-6">
            Ver todas las reseñas de Google →
          </a>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-widest text-[#C9A66B] font-semibold mb-2">UN PUNTO DE PARTIDA SIMPLE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] mb-4">¿Vale la pena explorar la terapia de ketamina?</h2>
          <p className="text-[#555] mb-8">Esto no está destinado como un diagnóstico. Úselo como una lista de verificación para ayudarle a reservar una consulta gratuita en nuestra clínica de Aventura.</p>
          <ul className="text-left space-y-3 text-[#444] mb-10">
            <li>• ¿Ha probado el tratamiento tradicional y aún no siente suficiente alivio, o está buscando cuidado alternativo?</li>
            <li>• ¿La depresión, la ansiedad, el TEPT o síntomas relacionados están afectando su calidad de vida?</li>
            <li>• ¿Quiere cuidado médicamente supervisado, no un programa de talla única?</li>
            <li>• ¿Las sesiones totalmente guiadas le resultan atractivas, o quiere esa opción?</li>
            <li>• ¿Prefiere una clínica de propiedad local en Aventura que sirva a Miami y el Sur de Florida?</li>
          </ul>
          <Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-4 rounded-lg hover:bg-[#b8955e] transition">Reservar Consulta Gratuita</Link>
          <p className="mt-4 text-sm text-[#666]">O llame/mensaje (305) 676-6070</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-6 bg-[#F8F5F0]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1D36] mb-8">Qué esperar</h2>
          <div className="space-y-4">
            <div>
              <button onClick={() => setOpenExpect(openExpect === "before" ? null : "before")} className="w-full text-left font-semibold text-lg text-[#0B1D36] flex justify-between items-center py-3 border-b border-gray-200">
                Antes de su visita {openExpect === "before" ? "−" : "+"}
              </button>
              {openExpect === "before" && <p className="py-4 text-[#555]">Comenzamos con una conversación y revisión clínica. Llegue unos 15 minutos antes para poder estacionar, registrarse y acomodarse sin prisa. Las sesiones totalmente guiadas están disponibles si desea apoyo adicional.</p>}
            </div>
            <div>
              <button onClick={() => setOpenExpect(openExpect === "during" ? null : "during")} className="w-full text-left font-semibold text-lg text-[#0B1D36] flex justify-between items-center py-3 border-b border-gray-200">
                Durante una sesión {openExpect === "during" ? "−" : "+"}
              </button>
              {openExpect === "during" && <p className="py-4 text-[#555]">Está en una sala de tratamiento privada con monitoreo y personal cerca. Las sesiones suelen durar alrededor de una hora.</p>}
            </div>
            <div>
              <button onClick={() => setOpenExpect(openExpect === "after" ? null : "after")} className="w-full text-left font-semibold text-lg text-[#0B1D36] flex justify-between items-center py-3 border-b border-gray-200">
                Después de una sesión {openExpect === "after" ? "−" : "+"}
              </button>
              {openExpect === "after" && <p className="py-4 text-[#555]">Hay tiempo para estabilizarse antes de salir con un conductor. El apoyo de integración está disponible.</p>}
            </div>
          </div>
          <p className="mt-8 text-center text-[#555]">
            Terapia de ketamina guiada en Aventura para pacientes de Miami y Fort Lauderdale. Ketamina IV en clínica y Spravato (REMS) en nuestra oficina de Aventura. Sesiones totalmente guiadas disponibles. ¡Hablamos Español!
          </p>
          <p className="text-center mt-4">
            <Link href="/es/services" className="text-[#C9A66B] font-semibold hover:underline">Ver nuestros servicios</Link> o <Link href="/es/location" className="text-[#C9A66B] font-semibold hover:underline">ubicación y estacionamiento</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1D36] mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Qué es la terapia de ketamina en Rewired Ketamine en Aventura?</h3>
              <p className="text-[#555]">Rewired Ketamine es una clínica de propiedad local en Aventura que ofrece sesiones de ketamina totalmente guiadas para personas que no han obtenido suficiente alivio con tratamientos habituales. El cuidado es presencial, con un equipo clínico presente durante la sesión, no un protocolo por correo.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Tratan a pacientes de Miami y Fort Lauderdale?</h3>
              <p className="text-[#555]">Sí. La clínica está en Aventura y regularmente atiende a personas de Miami, North Miami Beach, Fort Lauderdale y el resto del Sur de Florida.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Para quién es la terapia de ketamina?</h3>
              <p className="text-[#555]">Las personas a menudo vienen a nosotros por depresión resistente al tratamiento, ansiedad, TEPT, TOC, dolor crónico y preocupaciones relacionadas cuando el cuidado habitual no ha sido suficiente.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Ofrecen Spravato?</h3>
              <p className="text-[#555]">Sí. Rewired Ketamine es una clínica certificada REMS en Aventura que ofrece Spravato (spray nasal de esketamina) para depresión resistente al tratamiento. Se administra en la oficina bajo observación y es diferente de la ketamina IV. ¡Hablamos Español!</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Cómo empiezo?</h3>
              <p className="text-[#555]">Reserve una consulta gratuita. Revisamos el historial, los medicamentos y los objetivos, y solo entonces programamos el tratamiento si es candidato. ¡Hablamos Español!</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section id="how-we-help" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B1D36] mb-5">Cómo Ayudamos</h2>
          <p className="text-xl text-[#555] max-w-3xl mx-auto">
            En nuestra clínica de ketamina en Aventura, ofrecemos sesiones totalmente guiadas diseñadas para apoyar un alivio duradero de la depresión, la ansiedad, el TEPT y el dolor crónico.
          </p>
        </div>
        <div className="help-grid mt-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Sesiones Guiadas Disponibles</h3>
            <p className="text-[#555] leading-relaxed">Cada infusión de ketamina es cuidadosamente supervisada y guiada por nuestro equipo clínico para que se sienta seguro y apoyado todo el tiempo.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Integración Práctica</h3>
            <p className="text-[#555] leading-relaxed">Nuestro equipo de integración trabaja con usted después de cada sesión para ayudarle a procesar las ideas y crear un cambio duradero.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Cuidado Personalizado</h3>
            <p className="text-[#555] leading-relaxed">Planes de tratamiento adaptados a usted, ya sea que busque alivio de la depresión, la ansiedad, el TEPT, el dolor crónico u otras condiciones en el Sur de Florida.</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
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
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para dar el primer paso?</h2>
            <p className="text-xl text-white/80">Reserve una consulta gratuita. Sin presión, solo respuestas honestas y un camino claro hacia adelante.</p>
          </div>
          <form action="https://formspree.io/f/mkjwgjzj" method="POST" className="bg-white rounded-2xl p-8 md:p-10 text-[#1a1a1a] shadow-xl">
            <input type="hidden" name="_next" value="https://rewiredketamine.com/thank-you" />
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0B1D36] mb-1.5">Nombre Completo *</label>
                <input type="text" id="name" name="name" autoComplete="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent" placeholder="Su nombre" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#0B1D36] mb-1.5">Teléfono *</label>
                <input type="tel" id="phone" name="phone" autoComplete="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent" placeholder="(305) 000-0000" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-[#0B1D36] mb-1.5">Correo Electrónico *</label>
              <input type="email" id="email" name="email" autoComplete="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent" placeholder="usted@ejemplo.com" />
            </div>
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="sms_consent" required className="mt-1 h-4 w-4 rounded border-gray-300 text-[#C9A66B] focus:ring-[#C9A66B]" />
                <span className="text-sm text-[#444] leading-relaxed">Al enviar este formulario acepto recibir mensajes de texto de Rewired Ketamine</span>
              </label>
            </div>
            <button type="submit" className="w-full bg-[#C9A66B] text-[#0B1D36] font-bold py-4 rounded-full text-lg hover:bg-[#0B1D36] hover:text-white transition">Solicitar Consulta Gratuita</button>
            <p className="text-center text-sm text-gray-500 mt-4">Responderemos dentro de 1 día hábil.</p>
          </form>
          <div className="mt-14 flex flex-col items-center gap-5 text-white/90 text-center">
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>2820 NE 214th St #1002, Aventura, FL 33180</span>
            </a>
            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-3 hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>info@rewiredketamine.com</span>
            </a>
            <a href="tel:+13056766070" className="flex items-center gap-3 font-semibold hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>(305) 676-6070</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooterEs />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-[#e6e0d6] bg-[#F6F1E8]/90 backdrop-blur-sm">
        <div className="max-w-lg mx-auto px-4 py-3 grid grid-cols-2 gap-3">
          <a href="tel:+13056766070" className="text-center border border-[#0B1D36] text-[#0B1D36] py-3 text-sm font-semibold">Llamar o Mensaje</a>
          <Link href="/es/#contact" className="text-center bg-[#C9A66B] text-[#0B1D36] py-3 text-sm font-semibold">Consulta Gratuita</Link>
        </div>
      </div>
    </main>
  );
}
