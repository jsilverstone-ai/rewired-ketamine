import { notFound } from "next/navigation";
import Link from "next/link";
import { faqs } from "../../../data/faqs";

export function generateStaticParams() {
  return faqs.map((page) => ({
    slug: page.slug,
  }));
}

export default function FAQPage({ params }: { params: { slug: string } }) {
  const page = faqs.find((f) => f.slug === params.slug);
  if (!page) return notFound();

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{page.h1}</h1>
        <p className="text-lg text-white/80">{page.description}</p>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {page.faqs.map((item, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-[#0B1D36] mb-2">{item.question}</h2>
              <p className="text-[#555] leading-relaxed">{item.answer}</p>
            </div>
          ))}
          <p className="mt-10">
            <Link href="/faq" className="text-[#C9A66B] font-semibold hover:underline">
              ← All FAQs
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}