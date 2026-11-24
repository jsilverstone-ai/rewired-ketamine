import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishFAQ() {

  const faqTopics = [
    { title: "Depresión Resistente al Tratamiento", href: "/es/faq/treatment-resistant-depression", desc: "Preguntas sobre ketamina para depresión que no ha respondido a tratamientos habituales." },
    { title: "Ansiedad", href: "/es/faq/generalized-anxiety", desc: "Cómo se apoya la ansiedad en nuestra clínica de Aventura." },
    { title: "TEPT", href: "/es/faq/ptsd", desc: "Preguntas sobre ketamina y apoyo para trauma." },
    { title: "TOC", href: "/es/faq/ocd", desc: "Apoyo para pensamientos intrusivos y comportamientos compulsivos." },
    { title: "Dolor Crónico", href: "/es/faq/chronic-pain", desc: "Opciones cuando el dolor persistente ha sido difícil de manejar." },
    { title: "Spravato", href: "/es/faq/spravato", desc: "Preguntas sobre esketamina nasal aprobado por la FDA." },
    { title: "Depresión Postparto", href: "/es/faq/postpartum-depression", desc: "Apoyo durante un momento sensible." },
    { title: "Costo y Cobertura", href: "/es/faq/cost-and-coverage", desc: "Información sobre precios, seguro y opciones de pago." },
  ];

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Respuestas a preguntas comunes sobre terapia de ketamina en nuestra clínica de propiedad local en Aventura. Sesiones totalmente guiadas disponibles.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Key Questions */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-[#0B1D36] mb-2">¿Qué es la terapia de ketamina?</h2>
            <p className="text-[#555]">La terapia de ketamina es un tratamiento en clínica para personas que no han obtenido suficiente alivio con tratamientos tradicionales. Las sesiones están disponibles totalmente guiadas en nuestra clínica de Aventura.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#0B1D36] mb-2">¿Dónde están ubicados?</h2>
            <p className="text-[#555]">Estamos en 2820 NE 214th St, Suite 1002, Aventura, FL 33180. Servimos a pacientes de Miami, Fort Lauderdale y el Sur de Florida.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#0B1D36] mb-2">¿Hablan español?</h2>
            <p className="text-[#555]">Sí. ¡Hablamos Español! Todo el equipo puede apoyar en español.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#0B1D36] mb-2">¿Ofrecen Spravato?</h2>
            <p className="text-[#555]">Sí. Somos una clínica certificada REMS para Spravato (esketamina nasal). Se administra en clínica bajo observación.</p>
          </div>
        </div>
      </section>

      {/* Topic Cards */}
      <section className="py-16 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1D36] mb-10">Temas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqTopics.map((topic) => (
              <Link key={topic.href} href={topic.href} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition block">
                <h3 className="text-xl font-semibold text-[#0B1D36] mb-2">{topic.title}</h3>
                <p className="text-[#555] text-sm mb-3">{topic.desc}</p>
                <span className="text-[#C9A66B] font-semibold text-sm">Ver preguntas →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tiene más preguntas?</h2>
        <p className="text-lg text-white/80 mb-8">Reserve una consulta gratuita. Estamos aquí para responder con honestidad y claridad.</p>
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
