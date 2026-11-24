import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishTreatments() {

const treatments = [
  { title: "Depresión", href: "/es/treatments/depression", desc: "Apoyo para el estado de ánimo, la energía y la presencia cuando los enfoques tradicionales no han sido suficientes." },
  { title: "Ansiedad", href: "/es/treatments/anxiety", desc: "Ayuda para calmar pensamientos acelerados y tensión en un entorno calmado y guiado." },
  { title: "TEPT", href: "/es/treatments/ptsd", desc: "Apoyo cuidadoso para quienes navegan trauma y un sistema nervioso en alerta alta." },
  { title: "Agotamiento", href: "/es/treatments/burnout", desc: "Apoyo para el agotamiento profesional y la fatiga persistente." },
  { title: "Niebla Mental", href: "/es/treatments/mental-fogginess", desc: "Apoyo para un pensamiento más claro, enfoque y facilidad cognitiva." },
  { title: "Motivación", href: "/es/treatments/motivation", desc: "Ayuda a restaurar un sentido de posibilidad y movimiento hacia adelante." },
  { title: "Trastorno Alimentario", href: "/es/treatments/eating-disorder", desc: "Cuidado de apoyo para patrones alimentarios y la relación con la comida." },
  { title: "Depresión Postparto", href: "/es/treatments/postpartum-depression", desc: "Apoyo durante un momento sensible, con espacio para el vínculo y el alivio." },
  { title: "TOC", href: "/es/treatments/ocd", desc: "Apoyo para pensamientos intrusivos y comportamientos compulsivos." },
  { title: "Dolor Crónico", href: "/es/treatments/chronic-pain", desc: "Opciones cuando el dolor persistente ha sido difícil de manejar." },
  { title: "Cefaleas por Tensión", href: "/es/treatments/tension-headaches", desc: "Apoyo para dolores de cabeza recurrentes y tensión asociada." },
  { title: "Cuidado Paliativo y Compasión", href: "/es/treatments/palliative-compassion-care", desc: "Cuidado de apoyo centrado en la comodidad y la dignidad." },
];

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Tratamientos</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Apoyo con ketamina totalmente guiada para una variedad de preocupaciones de salud mental y relacionadas con el dolor — con cuidado que prioriza la seguridad, la compasión y el cambio duradero.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Miami block */}
      <section className="py-12 px-6 bg-white text-center">
        <p className="text-lg text-[#555] max-w-3xl mx-auto">
          Las personas que buscan <strong>tratamiento de ketamina en Miami</strong> suelen buscar cuidado presencial en el área metropolitana de Aventura / North Miami. Ese cuidado está en <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">nuestra clínica</Link> y listado bajo <Link href="/es/services" className="text-[#C9A66B] font-semibold hover:underline">servicios</Link>. Sesiones totalmente guiadas disponibles.
        </p>
        <p className="mt-4 text-[#555]">Todos los tratamientos se ofrecen en <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">nuestra clínica de ketamina en Aventura</Link>.</p>
      </section>

      {/* Comparison */}
      <section className="py-16 px-6 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-10">Cómo se Compara la Ketamina</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">Antidepresivos Estándar</h3>
              <p className="text-sm text-[#666] mb-2">Tasa de Respuesta Típica</p>
              <p className="text-3xl font-bold text-[#0B1D36] mb-4">30% – 60%</p>
              <p className="text-sm text-[#666] mb-2">Beneficio a Largo Plazo</p>
              <p className="text-3xl font-bold text-[#0B1D36] mb-4">5% – 15%</p>
              <p className="text-sm text-[#666]">Tiempo para Efecto Notable</p>
              <p className="text-xl font-semibold text-[#0B1D36]">A menudo 4–8 semanas</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">Terapia con Ketamina</h3>
              <p className="text-sm text-[#666] mb-2">Tasa de Respuesta Típica</p>
              <p className="text-3xl font-bold text-[#0B1D36] mb-4">70% – 90%</p>
              <p className="text-sm text-[#666] mb-2">Beneficio a Largo Plazo</p>
              <p className="text-3xl font-bold text-[#0B1D36] mb-4">60% – 80%</p>
              <p className="text-sm text-[#666]">Tiempo para Efecto Notable</p>
              <p className="text-xl font-semibold text-[#0B1D36]">A menudo horas a días</p>
            </div>
          </div>
          <p className="mt-8 text-[#555]">Muchas personas exploran la ketamina cuando los enfoques tradicionales no han brindado suficiente alivio. Los resultados individuales varían y el cuidado siempre es personalizado.</p>
          <p className="mt-4 text-[#555]">¿Busca una <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">clínica de ketamina en Miami</Link> en la que confíen los pacientes? Nuestra ubicación en Aventura atiende el área metropolitana de Miami con sesiones totalmente guiadas.</p>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1D36] mb-10">Condiciones que Apoyamos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <Link key={t.href} href={t.href} className="bg-[#F8F5F0] rounded-2xl p-6 border border-gray-200 hover:shadow-md transition block">
                <h3 className="text-xl font-semibold text-[#0B1D36] mb-2">{t.title}</h3>
                <p className="text-[#555] text-sm mb-3">{t.desc}</p>
                <span className="text-[#C9A66B] font-semibold text-sm">Más información →</span>
              </Link>
            ))}
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
