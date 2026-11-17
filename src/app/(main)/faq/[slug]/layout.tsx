import type { Metadata } from "next";
import { faqs } from "../../../data/faqs";

const strongSlugs = [
  "treatment-resistant-depression",
  "generalized-anxiety",
  "ptsd",
  "ocd",
  "chronic-pain",
  "spravato",
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
    title: page?.title ?? "FAQ",
    description: page?.description ?? "",
    alternates: {
      canonical: `https://www.rewiredketamine.com/faq/${slug}`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}