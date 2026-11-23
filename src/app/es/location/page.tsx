"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishLocation() {
  const [copied, setCopied] = useState(false);

  const parkingText = `Instrucciones de Estacionamiento - Rewired Ketamine

Le pedimos amablemente que llegue unos 15 minutos antes. Esto le da tiempo para estacionar, completar cualquier papeleo o pago, y acomodarse a un ritmo cómodo.

Nuestra Dirección:
2820 NE 214th Street, Suite 1002
Aventura, FL 33180

Debido a la construcción cercana, el área puede ser un poco confusa. Busque las Oficinas del Serena Hotel — no el “Aventura Medical Center”. Estamos ubicados en el edificio de oficinas adjunto al Serena Hotel y compartimos el garaje de estacionamiento con ellos.

Instrucciones de Estacionamiento:
• Estacione en el 4to o 5to piso del garaje.
• Verá dos elevadores: uno marcado Hotel y otro marcado Offices.
• Tome el elevador de Offices hasta el 10mo piso.
• Gire a la derecha al salir del elevador. Nuestra suite está justo al final del pasillo a su derecha.
• Los baños están disponibles en el pasillo si los necesita antes de su cita.

¡Esperamos darle la bienvenida!

Rewired Ketamine
(305) 676-6070
info@rewiredketamine.com`;

  const copyParking = () => {
    navigator.clipboard.writeText(parkingText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Ubicación</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Un espacio clínico calmado y privado en el corazón de Aventura — sirviendo a Miami, Fort Lauderdale y el Sur de Florida.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Contact Cards */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold text-[#0B1D36] mb-2">Dirección</h3>
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#C9A66B]">
              2820 NE 214th St #1002<br />Aventura, FL 33180
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#0B1D36] mb-2">Teléfono</h3>
            <a href="tel:+13056766070" className="text-[#555] hover:text-[#C9A66B]">(305) 676-6070</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#0B1D36] mb-2">Correo</h3>
            <a href="mailto:info@rewiredketamine.com" className="text-[#555] hover:text-[#C9A66B]">info@rewiredketamine.com</a>
          </div>
        </div>
        <p className="text-center text-[#555] mt-8">Ubicado en el edificio de Oficinas del Serena Hotel (no el Aventura Medical Center). Compartimos el garaje de estacionamiento con el hotel.</p>
      </section>

      {/* Map */}
      <section className="py-8 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: "450px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.1!2d-80.1449845!3d25.9730993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad36917b816d%3A0x35046cce92dab559!2sRewired%20Ketamine!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Rewired Ketamine en Aventura"
            />
          </div>
        </div>
      </section>

      {/* Parking Instructions */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-6 text-center">Instrucciones de Estacionamiento y Llegada</h2>
          <p className="text-lg text-[#555] mb-6">
            Rewired Ketamine es una clínica de ketamina en Aventura convenientemente ubicada para pacientes de todo Miami-Dade y el Sur de Florida.
          </p>
          <p className="text-[#555] mb-6">
            Le pedimos amablemente que llegue unos 15 minutos antes. Esto le da tiempo para estacionar, completar cualquier papeleo o pago, y acomodarse a un ritmo cómodo. Queremos que se sienta relajado desde el momento en que llega.
          </p>

          <h3 className="text-xl font-semibold text-[#0B1D36] mb-3">Nuestra Dirección</h3>
          <p className="text-[#555] mb-6">
            2820 NE 214th Street, Suite 1002<br />
            Aventura, FL 33180
          </p>

          <p className="text-[#555] mb-6">
            Debido a la construcción cercana, el área puede ser un poco confusa. Busque las Oficinas del Serena Hotel — no el “Aventura Medical Center”. Estamos ubicados en el edificio de oficinas adjunto al Serena Hotel y compartimos el garaje de estacionamiento con ellos.
          </p>

          <h3 className="text-xl font-semibold text-[#0B1D36] mb-3">Instrucciones de Estacionamiento</h3>
          <ul className="text-[#555] space-y-2 mb-8">
            <li>• Estacione en el 4to o 5to piso del garaje.</li>
            <li>• Verá dos elevadores: uno marcado Hotel y otro marcado Offices.</li>
            <li>• Tome el elevador de Offices hasta el 10mo piso.</li>
            <li>• Gire a la derecha al salir del elevador. Nuestra suite está justo al final del pasillo a su derecha.</li>
            <li>• Los baños están disponibles en el pasillo si los necesita antes de su cita.</li>
          </ul>

          <p className="text-[#555] mb-8">¡Esperamos darle la bienvenida!</p>

          <button onClick={copyParking} className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-6 py-3 rounded-lg hover:bg-[#b8955e] transition">
            {copied ? "¡Copiado!" : "Copiar Instrucciones de Estacionamiento"}
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para visitarnos?</h2>
        <p className="text-lg text-white/80 mb-8">Reserve una consulta gratuita en nuestra clínica de propiedad local en Aventura. ¡Hablamos Español!</p>
        <Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-4 rounded-lg hover:bg-[#b8955e] transition">Reservar Consulta Gratuita</Link>
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
