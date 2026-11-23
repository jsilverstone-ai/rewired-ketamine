import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishPTSDPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">TEPT</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">Apoyo cuidadoso con ketamina para quienes navegan el trauma.</p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#555] mb-6">El trastorno de estrés postraumático (TEPT) puede dejar el sistema nervioso en estado de alerta alta. En nuestra clínica de Aventura ofrecemos apoyo con ketamina médicamente supervisada como una opción para personas que no han encontrado suficiente alivio con enfoques tradicionales.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Apoyo cuidadoso para el trauma</h2>
          <p className="text-[#555] mb-4">Las sesiones se realizan en una sala privada y monitoreada. Un miembro del equipo clínico permanece presente. Las sesiones totalmente guiadas están disponibles para quienes desean apoyo adicional durante el proceso.</p>
          <p className="text-[#555] mb-6">El cuidado es individualizado. Una consulta gratuita y un cribado médico determinan si la ketamina es apropiada. No afirmamos que sea superior para todos. Los resultados individuales varían.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Cuidado en Aventura</h2>
          <p className="text-[#555] mb-6">Servimos a pacientes de Miami, Fort Lauderdale y el Sur de Florida. ¡Hablamos Español!</p>
          <p className="text-[#555]">Visite nuestra <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">página de inicio</Link> o la página de <Link href="/es/services" className="text-[#C9A66B] font-semibold hover:underline">servicios</Link>.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para explorar apoyo para el TEPT?</h2>
        <p className="text-lg text-[#555] mb-6">Programe una consulta gratuita. Sin presión — solo información clara.</p>
        <Link href="/es/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">Reservar Consulta Gratuita</Link>
      </section>

      <SiteFooterEs />
    </main>
  );
}
