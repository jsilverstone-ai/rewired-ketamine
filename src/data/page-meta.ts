import type { Metadata } from "next";
import { SITE, CLINIC_REF, REVIEWER_JSONLD, LAST_REVIEWED } from "./medical-review";

const OG_EN = { url: `${SITE}/og/og-home.png`, width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" };
const OG_ES = { url: `${SITE}/og/og-home-es.png`, width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" };

/** Metadata for a page that exists at `enPath` and `/es${enPath}`, with hreflang + x-default. */
export function pairedMetadata(lang: "en" | "es", enPath: string, title: string, description: string): Metadata {
  const en = `${SITE}${enPath}`;
  const es = `${SITE}/es${enPath}`;
  return {
    title: lang === "es" ? { absolute: `${title} | Rewired Ketamine` } : title,
    description,
    openGraph: { title, description, url: lang === "es" ? es : en, images: [lang === "es" ? OG_ES : OG_EN] },
    alternates: {
      canonical: lang === "es" ? es : en,
      languages: { en, es, "x-default": en },
    },
  };
}

type Crumb = { name: string; path: string };

/**
 * MedicalWebPage + BreadcrumbList JSON-LD only. Deliberately no Product, WebApplication/SoftwareApplication,
 * offers or ratings: Google treats those as rich-result types that require prices/reviews
 * (the same issue that flagged the Spravato Product snippet in Search Console).
 */
export function pageJsonLd(opts: {
  lang: "en" | "es";
  path: string; // full path incl. /es for Spanish
  name: string;
  description: string;
  about?: Record<string, unknown> | Record<string, unknown>[];
  crumbs: Crumb[];
}) {
  const url = `${SITE}${opts.path}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url,
      name: opts.name,
      description: opts.description,
      inLanguage: opts.lang === "es" ? "es-US" : "en-US",
      isPartOf: CLINIC_REF,
      ...(opts.about ? { about: opts.about } : {}),
      reviewedBy: REVIEWER_JSONLD,
      lastReviewed: LAST_REVIEWED,
      dateModified: LAST_REVIEWED,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: opts.crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE}${c.path}`,
      })),
    },
  ];
  return { "@context": "https://schema.org", "@graph": graph };
}
