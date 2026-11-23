"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { faqs } from "../../../../data/faqs";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function FAQPage() {
  const params = useParams();
  const slug = params.slug as string;
  const page = faqs.find((f) => f.slug === slug);


  if (!page) return notFound();

  const strongSlugs = [
    "treatment-resistant-depression",
    // add 3–4 more strong ones here once they’re fully written
  ];

  const isThin = !strongSlugs.includes(slug);

  return (
    <>

      <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
        <SiteHeader />

      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">{page.h1}</h1>
        <p className="text-lg md:text-xl text-white/80 mb-6">{page.description}</p>
        <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {page.faqs.map((item, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-[#0B1D36] mb-2">{item.question}</h2>
              <p className="text-[#555] leading-relaxed">{item.answer}</p>
            </div>
          ))}
          <p className="mt-10">
            Learn more about our <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">ketamine clinic in Aventura serving Miami</Link>.
          </p>
          {page.related && (
            <p className="mt-4">
              Related: <Link href={page.related} className="text-[#C9A66B] font-semibold hover:underline">{page.relatedLabel ?? "treatment page"}</Link>
            </p>
          )}
          <p className="mt-6">
            <Link href="/faq" className="text-[#C9A66B] font-semibold hover:underline">← All FAQs</Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
    </>
  );
}