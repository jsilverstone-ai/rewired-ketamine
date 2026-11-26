import type { Metadata } from "next";
import { faqs } from "../../../../data/faqs";

const BASE = "https://www.rewiredketamine.com";

// FAQs whose topic is fully covered by a main page: Google is pointed at that page instead.
const CANONICAL_OVERRIDES: Record<string, string> = {
  ocd: "/treatments/ocd",
  "generalized-anxiety": "/treatments/anxiety",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = faqs.find((f) => f.slug === slug);
  const override = CANONICAL_OVERRIDES[slug];
  const self = `${BASE}/faq/${slug}`;

  // Only pair with /es when the FAQ has real Spanish copy.
  const languages =
    page?.es && !override
      ? { en: self, es: `${BASE}/es/faq/${slug}`, "x-default": self }
      : undefined;

  return {
    robots: page ? "index, follow" : "noindex, follow",
    title: page?.title ?? "FAQ",
    description: page?.description ?? "",
    alternates: {
      canonical: override ? `${BASE}${override}` : self,
      ...(languages ? { languages } : {}),
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
