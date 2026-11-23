import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishServices() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Rewired Ketamine es una clínica de ketamina de propiedad local en Aventura que sirve a Miami, Fort Lauderdale y el Sur de Florida. Los pacientes que buscan terapia de ketamina en Miami e infusión de ketamina en Miami pueden empezar aquí: sesiones IV en clínica, modalidades en casa y sesiones totalmente guiadas disponibles. El cuidado es individualizado.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Ketamine infusion in Miami */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">Infusión de ketamina en Miami</h2>
          <p className="text-lg text-[#555] mb-4">
            Las infusiones de ketamina IV se realizan en la clínica de Aventura. Los pacientes vienen de Miami, North Miami y Fort Lauderdale. Las sesiones totalmente guiadas están disponibles. Vea la <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">página de inicio</Link> para saber cómo comienza el cuidado.
          </p>
          <p className="text-lg text-[#555]">
            ¿Busca <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">infusión de ketamina en Miami</Link>? Nuestra clínica de Aventura ofrece sesiones IV totalmente guiadas para pacientes de Miami y North Miami.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-6 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/es/services/ketamine-infusion" className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition block">
              <div className="aspect-[4/3] bg-[#0B1D36] flex items-center justify-center text-white text-lg font-semibold">Infusión de Ketamina</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B1D36] mb-2">Infusión de Ketamina en Aventura</h3>
                <p className="text-[#555] text-sm mb-3">Terapia de ketamina IV en un entorno privado y monitoreado. Sesiones totalmente guiadas disponibles.</p>
                <span className="text-[#C9A66B] font-semibold text-sm">infusión de ketamina Miami →</span>
              </div>
            </Link>

            <Link href="/es/services/spravato" className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition block">
              <div className="aspect-[4/3] bg-[#0B1D36] flex items-center justify-center text-white text-lg font-semibold">Spravato</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B1D36] mb-2">Spravato</h3>
                <p className="text-[#555] text-sm mb-3">Spray nasal de esketamina aprobado por la FDA para adultos. Clínica certificada REMS. Cubierto por la mayoría de los planes de seguro.</p>
                <span className="text-[#C9A66B] font-semibold text-sm">Más información →</span>
              </div>
            </Link>

            <Link href="/es/services/home-ketamine" className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition block">
              <div className="aspect-[4/3] bg-[#0B1D36] flex items-center justify-center text-white text-lg font-semibold">Ketamina en Casa</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B1D36] mb-2">Tratamiento de Ketamina en Casa en Florida</h3>
                <p className="text-[#555] text-sm mb-3">Opciones orales, nasales y rectales con guía clínica — a menudo más asequibles que muchos copagos de Spravato.</p>
                <span className="text-[#C9A66B] font-semibold text-sm">ketamina en casa →</span>
              </div>
            </Link>

            <Link href="/es/services/functional-wellness" className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition block">
              <div className="aspect-[4/3] bg-[#0B1D36] flex items-center justify-center text-white text-lg font-semibold">Bienestar Funcional</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B1D36] mb-2">Apoyo de Bienestar Funcional</h3>
                <p className="text-[#555] text-sm mb-3">Vitaminas personalizadas pueden incluirse con las infusiones cuando es apropiado.</p>
                <span className="text-[#C9A66B] font-semibold text-sm">Más información →</span>
              </div>
            </Link>

            <Link href="/es/services/medical-management" className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition block">
              <div className="aspect-[4/3] bg-[#0B1D36] flex items-center justify-center text-white text-lg font-semibold">Manejo Médico</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B1D36] mb-2">Manejo Médico</h3>
                <p className="text-[#555] text-sm mb-3">Nuestro equipo clínico puede revisar diagnósticos anteriores y medicamentos actuales.</p>
                <span className="text-[#C9A66B] font-semibold text-sm">Más información →</span>
              </div>
            </Link>

            <Link href="/es/services/talk-therapy" className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition block">
              <div className="aspect-[4/3] bg-[#0B1D36] flex items-center justify-center text-white text-lg font-semibold">Terapia de Conversación</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B1D36] mb-2">Terapia de Conversación e Integración</h3>
                <p className="text-[#555] text-sm mb-3">Especialistas internos o referidos que entienden los psicodélicos y la neuroplasticidad.</p>
                <span className="text-[#C9A66B] font-semibold text-sm">terapia de conversación →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Second Miami block */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">Infusión de ketamina en Miami</h2>
          <p className="text-lg text-[#555] mb-4">
            Si está buscando una <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">clínica de ketamina en Miami</Link> a la que los pacientes puedan llegar en Aventura, esta página es el punto de partida. El cuidado de <Link href="/es/services/ketamine-infusion" className="text-[#C9A66B] font-semibold hover:underline">infusión de ketamina en Miami</Link> en clínica, <Link href="/es/services/home-ketamine" className="text-[#C9A66B] font-semibold hover:underline">tratamiento de ketamina en casa</Link> y servicios de apoyo están disponibles después de la evaluación.
          </p>
          <p className="text-lg text-[#555] mb-6">
            Muchas personas vienen después de que el cuidado tradicional no ha sido suficiente, incluyendo aquellos que exploran <Link href="/es/treatments" className="text-[#C9A66B] font-semibold hover:underline">ketamina para la depresión en Miami</Link>. Las sesiones totalmente guiadas están disponibles. ¡Hablamos Español!
          </p>
          <Link href="/es/services/ketamine-infusion" className="text-[#C9A66B] font-semibold hover:underline">Cómo se ve la infusión de ketamina en nuestra clínica de Aventura →</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F8F5F0]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1D36] mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Hay una clínica de ketamina en Miami?</h3>
              <p className="text-[#555]">Sí. Rewired Ketamine está ubicada en Aventura y sirve a Miami, Fort Lauderdale y el Sur de Florida.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Ofrecen infusión de ketamina en Miami y Aventura?</h3>
              <p className="text-[#555]">Sí. La infusión de ketamina IV se ofrece en nuestra clínica de Aventura. Las sesiones totalmente guiadas están disponibles.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Ofrecen ketamina en casa en Florida?</h3>
              <p className="text-[#555]">Sí. Después de la evaluación, las opciones en casa pueden incluir modalidades orales, nasales y rectales con guía clínica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para dar el siguiente paso?</h2>
        <p className="text-lg text-white/80 mb-8">Reserve una consulta gratuita. Sin presión — solo respuestas honestas y un camino claro hacia adelante.</p>
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
