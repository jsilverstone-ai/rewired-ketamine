import type { Metadata } from "next";
import { faqs } from "../../../../data/faqs";

const strongSlugs = [
  "treatment-resistant-depression",
  "generalized-anxiety",
  "ptsd",
  "ocd",
  "chronic-pain",
  "spravato",
  "cost-and-coverage",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = faqs.find((f) => f.slug === slug);
  const isThin = !page || !strongSlugs.includes(slug);

  return {
    robots: isThin ? "noindex, follow" : "index, follow",
    title: page?.es?.title ?? page?.title ?? "Preguntas Frecuentes",
    description: page?.es?.description ?? page?.description ?? "",
    alternates: {
      canonical: `https://www.rewiredketamine.com/es/faq/${slug}`,
      languages: {
        en: `https://www.rewiredketamine.com/faq/${slug}`,
        es: `https://www.rewiredketamine.com/es/faq/${slug}`,
        "x-default": `https://www.rewiredketamine.com/faq/${slug}`,
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
