import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function IvVsSpravatoEsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Ketamina IV vs Spravato en Aventura y Miami</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Una comparación clínica breve de la ketamina IV en clínica y Spravato (esketamina) en Rewired Ketamine en Aventura. Sirviendo a Miami, Fort Lauderdale y el Sur de Florida.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Ketamina IV vs Spravato</h2>
          <p className="text-[#555] mb-6">
            Rewired Ketamine ofrece tanto ketamina IV como Spravato (espray nasal de esketamina) en nuestra clínica de Aventura. Son tratamientos diferentes. Esta página explica las principales diferencias para que puedas hacer mejores preguntas y decidir qué conversación tiene más sentido para ti.
          </p>
          <p className="text-[#555] mb-10">
            No afirmamos que uno sea mejor para todos. La opción correcta depende de tu historial, metas, seguro y el tipo de apoyo que deseas durante el tratamiento.
          </p>

          <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">Comparación rápida</h3>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-[#F8F5F0]">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left"></th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Ketamina IV</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Spravato (esketamina)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Vía</td>
                  <td className="border border-gray-200 px-4 py-2">Infusión intravenosa</td>
                  <td className="border border-gray-200 px-4 py-2">Espray nasal</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Entorno</td>
                  <td className="border border-gray-200 px-4 py-2">Sala de tratamiento privada en nuestra clínica de Aventura</td>
                  <td className="border border-gray-200 px-4 py-2">Sala de tratamiento privada en nuestra clínica de Aventura</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Monitoreo</td>
                  <td className="border border-gray-200 px-4 py-2">Monitoreo continuo durante la sesión</td>
                  <td className="border border-gray-200 px-4 py-2">Monitoreo requerido bajo REMS</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Seguro</td>
                  <td className="border border-gray-200 px-4 py-2">Típicamente pago en efectivo</td>
                  <td className="border border-gray-200 px-4 py-2">A menudo cubierto por seguro para depresión resistente al tratamiento (usualmente se requiere autorización previa)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Guía</td>
                  <td className="border border-gray-200 px-4 py-2">Sesiones totalmente guiadas disponibles</td>
                  <td className="border border-gray-200 px-4 py-2">Administrado bajo observación según REMS</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Uso típico</td>
                  <td className="border border-gray-200 px-4 py-2">Depresión resistente al tratamiento, ansiedad, TEPT, dolor crónico y preocupaciones relacionadas</td>
                  <td className="border border-gray-200 px-4 py-2">Aprobado por la FDA para depresión resistente al tratamiento (y ciertos otros usos etiquetados)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">Cómo funciona la ketamina IV en Rewired</h3>
          <p className="text-[#555] mb-4">
            La ketamina IV se administra como una infusión controlada en una sala privada. Un miembro del equipo clínico permanece contigo. El monitoreo es continuo. Las sesiones suelen durar aproximadamente una hora, con tiempo después para estabilizarse antes de salir con un conductor.
          </p>
          <p className="text-[#555] mb-10">
            Las sesiones totalmente guiadas están disponibles. El precio de la IV de salud mental comienza en $440 por sesión y $2,300 por una serie de seis sesiones. Las opciones guiadas se listan por separado para que puedas ver el costo completo. Ve la página de <Link href="/es/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">costo</Link> para detalles.
          </p>

          <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">Cómo funciona Spravato en Rewired</h3>
          <p className="text-[#555] mb-10">
            Spravato es un espray nasal aprobado por la FDA (esketamina). Se administra en la oficina bajo observación. Rewired Ketamine es una clínica certificada REMS, lo que significa que seguimos las reglas requeridas de monitoreo y reporte. La mayoría de los pacientes que califican para Spravato usan seguro. Usualmente se requiere autorización previa. La visita incluye tiempo de observación después de la dosis.
          </p>

          <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">A quién puede adaptarse cada opción</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="font-medium mb-2">La ketamina IV puede ser una mejor conversación si:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#555]">
                <li>Quieres una experiencia en clínica totalmente guiada</li>
                <li>Estás considerando condiciones más allá de la depresión resistente al tratamiento (ansiedad, TEPT, dolor crónico, etc.)</li>
                <li>Prefieres una opción de pago en efectivo con precios de paquete claros</li>
                <li>Quieres la opción de sesiones más largas o con más apoyo</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Spravato puede ser una mejor conversación si:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#555]">
                <li>Tienes un diagnóstico de depresión resistente al tratamiento</li>
                <li>Quieres usar seguro</li>
                <li>Estás cómodo con un espray nasal bajo observación REMS</li>
                <li>Prefieres la estructura de un producto aprobado por la FDA</li>
              </ul>
            </div>
          </div>
          <p className="text-[#555]">Muchas personas comienzan preguntando por uno y terminan discutiendo ambos. Eso es normal.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para dar el siguiente paso?</h2>
        <p className="text-lg text-[#555] mb-6">Reserve una consulta gratuita. Sin presión — solo respuestas honestas y un camino claro hacia adelante.</p>
        <Link href="/es#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">
          Reservar Consulta Gratuita
        </Link>
        <p className="mt-4 text-sm text-[#555]">O llama/texto al (305) 676-6070</p>
      </section>

      {/* Footer */}
      <SiteFooterEs />
    </main>
  );
}
