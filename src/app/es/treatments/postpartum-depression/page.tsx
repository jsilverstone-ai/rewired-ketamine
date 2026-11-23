import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishPostpartumPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Depresión Postparto</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">Apoyo con ketamina totalmente guiada para nuevos padres en Aventura.</p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#555] mb-6">La depresión postparto puede hacer que los primeros meses de la paternidad se sientan abrumadores, aislantes y agotadores. En Rewired Ketamine en Aventura ofrecemos ketamina IV médicamente supervisada como una opción de apoyo junto al cuidado existente.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Cuidado compasivo durante una ventana crítica</h2>
          <p className="text-[#555] mb-4">Las sesiones se realizan en una sala privada y monitoreada. Un miembro del equipo clínico está presente. Las sesiones totalmente guiadas están disponibles. Una consulta y cribado médico determinan si es apropiado.</p>
          <p className="text-[#555] mb-6">Los resultados individuales varían. No afirmamos que la ketamina sea adecuada para todos.</p>
          <p className="text-[#555]">Visite nuestra <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">página de inicio</Link> o la página de <Link href="/es/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">costo</Link>.</p>
        </div>
      </section>
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para explorar apoyo?</h2>
        <Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">Reservar Consulta Gratuita</Link>
      </section>
      <SiteFooterEs />
    </main>
  );
}
