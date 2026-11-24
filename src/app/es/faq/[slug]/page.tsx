"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { faqs } from "../../../../data/faqs";
import SiteHeaderEs from "@/components/es/SiteHeaderEs";
import SiteFooterEs from "@/components/es/SiteFooterEs";

export default function SpanishFAQSlugPage() {
  const params = useParams();
  const slug = params.slug as string;
  const page = faqs.find((f) => f.slug === slug);


  if (!page) return notFound();

  const copy = page.es ?? {
    title: page.title,
    description: page.description,
    h1: page.h1,
    related: page.related,
    relatedLabel: page.relatedLabel,
    faqs: page.faqs,
  };

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a] pb-24 lg:pb-0">
      <SiteHeaderEs />

      {/* HERO */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SUR DE FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">{copy.h1}</h1>
        <p className="text-lg md:text-xl text-white/80 mb-6 max-w-3xl mx-auto">{copy.description}</p>
        <p className="text-[#C9A66B] font-semibold"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* FAQ Content */}
      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {copy.faqs.map((item, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-[#0B1D36] mb-2">{item.question}</h2>
              <p className="text-[#555] leading-relaxed">{item.answer}</p>
            </div>
          ))}
          <p className="mt-10">
            Más información sobre nuestra <Link href="/es" className="text-[#C9A66B] font-semibold hover:underline">clínica de ketamina en Aventura que atiende Miami</Link>.
          </p>
          {copy.related && (
            <p className="mt-4">
              Relacionado: <Link href={copy.related.startsWith("/es") ? copy.related : `/es${copy.related}`} className="text-[#C9A66B] font-semibold hover:underline">{copy.relatedLabel ?? "página de tratamiento"}</Link>
            </p>
          )}
          <p className="mt-6">
            <Link href="/es/faq" className="text-[#C9A66B] font-semibold hover:underline">← Todas las Preguntas Frecuentes</Link>
          </p>
        </div>
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
