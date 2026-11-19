"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function IVKetamineVsSpravatoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // states for menus as needed

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <a href="#main-content" className="sr-only focus:not-sr-only ...">Saltar al contenido principal</a>

      {/* Top bar with English switcher */}
      <div className="bg-white border-b ...">
        {/* logo link to /es, contact info, English Link to /services/iv-ketamine-vs-spravato */}
      </div>

      {/* Full Spanish nav header with /es/ links - copy from functional-wellness page.tsx */}

      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Ketamina IV vs Spravato en Aventura y Miami</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
          Una breve comparación clínica de la ketamina IV en clínica y Spravato (esketamina) en Rewired Ketamine en Aventura. Sirviendo Miami, Fort Lauderdale y el Sur de Florida.
        </p>
        <p className="text-[#C9A66B] font-bold text-lg">¡Hablamos Español!</p>
      </section>

      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-6">Ketamina IV vs Spravato en Aventura y Miami</h2>
          <p className="text-lg leading-relaxed mb-6">
            Rewired Ketamine ofrece tanto ketamina IV como Spravato (spray nasal de esketamina) en nuestra clínica de Aventura. Son tratamientos diferentes. Esta página explica las principales diferencias para que puedas hacer mejores preguntas y decidir qué conversación tiene sentido para ti.
          </p>
          <p className="text-lg leading-relaxed mb-10">
            No afirmamos que uno sea mejor para todos. La opción correcta depende de tu historial, objetivos, seguro y el tipo de apoyo que deseas durante el tratamiento.
          </p>

          <h3 className="text-2xl font-bold text-[#0B1D36] mb-6">Comparación rápida</h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-[#0B1D36] text-white">
                <tr>
                  <th className="p-4 text-left"></th>
                  <th className="p-4 text-left">Ketamina IV</th>
                  <th className="p-4 text-left">Spravato (esketamina)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-4 font-semibold">Ruta</td><td className="p-4">Infusión intravenosa</td><td className="p-4">Spray nasal</td></tr>
                <tr className="border-b"><td className="p-4 font-semibold">Entorno</td><td className="p-4">Sala de tratamiento privada en nuestra clínica de Aventura</td><td className="p-4">Sala de tratamiento privada en nuestra clínica de Aventura</td></tr>
                <tr className="border-b"><td className="p-4 font-semibold">Monitoreo</td><td className="p-4">Monitoreo continuo durante la sesión</td><td className="p-4">Monitoreo requerido bajo REMS</td></tr>
                <tr className="border-b"><td className="p-4 font-semibold">Seguro</td><td className="p-4">Típicamente pago en efectivo</td><td className="p-4">A menudo cubierto por seguro para depresión resistente al tratamiento (autorización previa generalmente requerida)</td></tr>
                <tr className="border-b"><td className="p-4 font-semibold">Guía</td><td className="p-4">Sesiones completamente guiadas disponibles</td><td className="p-4">Administrado bajo observación según REMS</td></tr>
                <tr><td className="p-4 font-semibold">Uso típico</td><td className="p-4">Depresión resistente al tratamiento, ansiedad, TEPT, dolor crónico y preocupaciones relacionadas</td><td className="p-4">Aprobado por la FDA para depresión resistente al tratamiento (y ciertos otros usos etiquetados)</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-[#0B1D36] mb-4">Cómo funciona la ketamina IV en Rewired</h3>
          <p className="leading-relaxed mb-6">
            La ketamina IV se administra como una infusión controlada en una sala privada. Un miembro del equipo clínico permanece contigo. El monitoreo es continuo. Las sesiones suelen durar aproximadamente una hora, con tiempo después para asentarse antes de irte con un conductor.
          </p>
          <p className="leading-relaxed mb-6">
            Sesiones completamente guiadas están disponibles. El precio para la IV de salud mental comienza en $440 por sesión y $2,300 para una serie de seis sesiones. Las opciones guiadas se listan por separado para que puedas ver el costo completo. Consulta la <Link href="/es/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">página de costos</Link> para detalles.
          </p>

          <h3 className="text-2xl font-bold text-[#0B1D36] mb-4">Cómo funciona Spravato en Rewired</h3>
          <p className="leading-relaxed mb-6">
            Spravato es un spray nasal aprobado por la FDA (esketamina). Se administra en la oficina bajo observación. Rewired Ketamine es una clínica certificada REMS, lo que significa que seguimos las reglas requeridas de monitoreo y reporte.
          </p>
          <p className="leading-relaxed mb-6">
            La mayoría de los pacientes que califican para Spravato usan seguro. La autorización previa generalmente es requerida. La visita incluye tiempo de observación después de la dosis.
          </p>

          <h3 className="text-2xl font-bold text-[#0B1D36] mb-4">Quién puede adaptarse a cada opción</h3>
          <p className="font-semibold mb-2">La ketamina IV puede ser una mejor conversación si tú:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Quieres una experiencia en clínica completamente guiada</li>
            <li>Estás considerando condiciones más allá de la depresión resistente al tratamiento (ansiedad, TEPT, dolor crónico, etc.)</li>
            <li>Prefieres una opción de pago en efectivo con precios de paquete claros</li>
            <li>Quieres la opción de sesiones más largas o más apoyadas</li>
          </ul>
          <p className="font-semibold mb-2">Spravato puede ser una mejor conversación si tú:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Tienes un diagnóstico de depresión resistente al tratamiento</li>
            <li>Quieres usar seguro</li>
            <li>Te sientes cómodo con un spray nasal bajo observación REMS</li>
            <li>Prefieres la estructura de un producto aprobado por la FDA</li>
          </ul>
          <p className="mb-10">Muchas personas comienzan preguntando sobre uno y terminan discutiendo ambos. Eso es normal.</p>

          <h3 className="text-2xl font-bold text-[#0B1D36] mb-4">Qué preguntar al comparar clínicas en Aventura</h3>
          <ul className="list-disc pl-6 mb-10 space-y-1">
            <li>¿Quién permanece contigo durante la sesión?</li>
            <li>¿Qué monitoreo se utiliza?</li>
            <li>¿La sesión es completamente guiada?</li>
            <li>¿Qué sucede después de la infusión o la dosis de Spravato?</li>
            <li>¿La integración está incluida o es separada?</li>
            <li>¿Cuál es el costo completo de un curso típico (IV) o el proceso de seguro (Spravato)?</li>
            <li>Si se discute Spravato, ¿la clínica está certificada REMS y manejarán la autorización previa?</li>
          </ul>

          <div className="text-center">
            <Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded hover:bg-[#0B1D36] hover:text-white transition">
              Reservar una Consulta Gratuita
            </Link>
            <p className="mt-4 text-sm">O llama/texto (305) 676-6070</p>
          </div>
        </div>
      </section>

      {/* Full footer Spanish version */}
    </main>
  );
}