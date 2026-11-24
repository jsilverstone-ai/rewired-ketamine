import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishEatingDisorderPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Trastorno Alimentario</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">Cuidado sensible y colaborativo como parte de un plan de atención más amplio.</p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#555] mb-6">El apoyo para los trastornos alimentarios es sensible y colaborativo. En Rewired Ketamine en Aventura, la ketamina puede considerarse como parte de un plan de cuidado más amplio cuando los enfoques tradicionales no han sido suficientes. El cuidado es individualizado.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Cuidado colaborativo</h2>
          <p className="text-[#555] mb-4">Las sesiones se realizan en una sala privada y monitoreada. Una consulta determina si es apropiado. Los resultados individuales varían.</p>
          <p className="text-[#555]">Visite nuestra <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">página de inicio</Link>.</p>
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
