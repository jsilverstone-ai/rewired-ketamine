import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function HomeKetamineEsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Ketamina en Casa</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Apoyo guiado de ketamina en la comodidad de su hogar.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#555] mb-6">
            Para quienes prefieren el tratamiento en casa, ofrecemos un programa de ketamina en casa cuidadosamente estructurado con guía clínica clara y apoyo continuo. Proporcionamos diferentes modalidades en casa — incluyendo oral (RDTs), nasal y rectal — elegidas para apoyar una mejor biodisponibilidad y comodidad.
          </p>
          <p className="text-lg text-[#555]">
            En muchos casos, estos enfoques también pueden ser más accesibles que los copagos típicos de Spravato. Recibirá la misma supervisión cuidadosa y enfoque en la integración, solo en un entorno que se sienta familiar y privado.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1D36] mb-2">Precios</h2>
          <p className="text-center text-[#555] mb-10">Múltiples opciones de dosis — comienza en los precios a continuación</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-semibold text-[#0B1D36]">Oral (RDTs)</h3>
              <p className="text-sm text-[#555] mt-1">Comienza en</p>
              <p className="text-4xl font-bold text-[#0B1D36] my-4">$225</p>
              <p className="text-sm text-[#555]">Múltiples dosis con guía clínica y apoyo</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-semibold text-[#0B1D36]">Nasal</h3>
              <p className="text-sm text-[#555] mt-1">Comienza en</p>
              <p className="text-4xl font-bold text-[#0B1D36] my-4">$325</p>
              <p className="text-sm text-[#555]">Múltiples dosis con guía clínica y apoyo</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <h3 className="text-xl font-semibold text-[#0B1D36]">Rectal</h3>
              <p className="text-sm text-[#555] mt-1">Comienza en</p>
              <p className="text-4xl font-bold text-[#0B1D36] my-4">$275</p>
              <p className="text-sm text-[#555]">Múltiples dosis con guía clínica y apoyo</p>
            </div>
          </div>
          <p className="text-center text-sm text-[#555] mt-8">Incluye consulta, medicamento y cuidado de seguimiento. Pregúntanos sobre las opciones disponibles.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">¿Listo para dar el siguiente paso?</h2>
        <p className="text-lg text-[#555] mb-6">Reserve una consulta gratuita. Sin presión — solo respuestas honestas y un camino claro hacia adelante.</p>
        <Link href="/es#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">
          Reservar Consulta Gratuita
        </Link>
      </section>

      {/* Footer */}
      <SiteFooterEs />
    </main>
  );
}
