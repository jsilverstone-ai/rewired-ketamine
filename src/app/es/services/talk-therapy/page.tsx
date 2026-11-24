import Link from "next/link";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function TalkTherapyEsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terapia de Conversación</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Terapia centrada en la integración para ayudar a que los insights echen raíces.
        </p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#555] mb-6">
            La terapia de conversación es una parte esencial del proceso de sanación. Ofrecemos conversaciones de apoyo centradas en la integración que te ayudan a procesar las experiencias de tus sesiones y convertir los insights en cambios duraderos.
          </p>
          <p className="text-lg text-[#555]">
            Puedes trabajar con nuestros terapeutas internos o ser conectado con especialistas cuidadosamente seleccionados que entienden los psicodélicos y la neuroplasticidad. Esto asegura que tu apoyo terapéutico esté alineado con la naturaleza única de este trabajo.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
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
