import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishBurnoutPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Agotamiento</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">Sesiones IV guiadas para profesionales bajo alto estrés en Aventura.</p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#555] mb-6">El agotamiento y la depresión clínica no son lo mismo. El agotamiento a menudo aparece como agotamiento, cinismo y rendimiento reducido bajo estrés sostenido — común entre ejecutivos, emprendedores y profesionales. Cuando se superpone con depresión o ansiedad que no ha respondido bien al cuidado habitual, algunas personas exploran la ketamina médicamente supervisada.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">El agotamiento no es automáticamente una razón para comenzar ketamina</h2>
          <p className="text-[#555] mb-4">La Organización Mundial de la Salud describe el agotamiento como un fenómeno ocupacional. La ketamina se considera solo cuando una evaluación encuentra que el agotamiento se superpone con depresión o ansiedad. Los resultados individuales varían.</p>
          <p className="text-[#555] mb-6">Las sesiones se realizan en una sala privada y monitoreada. Las sesiones totalmente guiadas están disponibles. El apoyo de integración ayuda a traducir ideas en cambios prácticos.</p>
          <p className="text-[#555]">Visite nuestra <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">página de inicio</Link> o la página de <Link href="/es/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">costo</Link>.</p>
        </div>
      </section>
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para explorar apoyo para el agotamiento?</h2>
        <Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">Reservar Consulta Gratuita</Link>
      </section>
      <SiteFooterEs />
    </main>
  );
}
