import type { Metadata } from "next";
import { faqs } from "../../../../data/faqs";

const BASE = "https://www.rewiredketamine.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = faqs.find((f) => f.slug === slug);
  const self = `${BASE}/es/faq/${slug}`;

  // Only FAQs with real Spanish copy are indexed and paired with English.
  // The rest fall back to English text, so they stay out of the index for now.
  const hasSpanish = Boolean(page?.es);

  return {
    robots: hasSpanish ? "index, follow" : "noindex, follow",
    title: page?.es?.title ?? page?.title ?? "Preguntas Frecuentes",
    description: page?.es?.description ?? page?.description ?? "",
    alternates: {
      canonical: self,
      ...(hasSpanish
        ? {
            languages: {
              en: `${BASE}/faq/${slug}`,
              es: self,
              "x-default": `${BASE}/faq/${slug}`,
            },
          }
        : {}),
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
