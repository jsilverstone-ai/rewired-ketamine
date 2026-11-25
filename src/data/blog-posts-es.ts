import type { Metadata } from "next";
import { esOnlyMetadata } from "./page-meta";
import { SITE } from "./medical-review";

/**
 * Original Spanish blog posts (written in Spanish, not translated). They have no true English
 * equivalent, so each one is Spanish-only: self-canonical, no hreflang. `englishHref` is only used by
 * the header language switch and points to the closest English page so the link never 404s.
 */
export type BlogPostEs = {
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  /** Display date, e.g. "Noviembre 2026" (same style as the English blog index). */
  date: string;
  /** YYYY-MM-DD, used in JSON-LD and the sitemap. */
  datePublished: string;
  englishHref: string;
};

export const BLOG_ES_BASE = "/es/content/blog";

export const BLOG_AUTHOR_ES = {
  name: "Jacob Silverstone, DPM",
  role: "Director Médico, Rewired Ketamine",
  href: "/es/providers",
};

export const BLOG_AUTHOR_JSONLD = {
  "@type": "Person",
  name: "Jacob Silverstone",
  honorificSuffix: "DPM",
  jobTitle: "Medical Director",
  url: `${SITE}/providers`,
};

export const blogPostsEs: BlogPostEs[] = [
  {
    title: "Ketamina para la depresión en Miami: guía en español",
    slug: "ketamina-para-la-depresion-en-miami",
    excerpt: "Qué es la terapia con ketamina, para quién puede ser una opción y cómo es el proceso en nuestra clínica de Aventura, explicado en español.",
    description: "Guía en español sobre la ketamina para la depresión en Miami y Aventura: cómo actúa, quién puede ser candidato, efectos secundarios y cómo es el proceso. Con revisión médica.",
    date: "Noviembre 2026",
    datePublished: "2026-11-25",
    englishHref: "/content/blog/ketamine-for-treatment-resistant-depression",
  },
  {
    title: "¿Cuánto cuesta la ketamina en Miami? Precios, seguro y HSA/FSA",
    slug: "cuanto-cuesta-la-ketamina-en-miami",
    excerpt: "Precios publicados de ketamina IV y en casa, qué cubre el seguro con Spravato y cómo usar su HSA o FSA, sin letras chiquitas.",
    description: "Precios reales de la terapia con ketamina en Miami y Aventura: ketamina IV, sesiones guiadas, ketamina en casa y Spravato con seguro. Qué cambia el precio y cómo usar su HSA/FSA.",
    date: "Noviembre 2026",
    datePublished: "2026-11-25",
    englishHref: "/content/blog/what-does-a-full-course-of-iv-ketamine-cost-in-aventura",
  },
  {
    title: "Ketamina vs. antidepresivos: en qué se parecen y en qué no",
    slug: "ketamina-vs-antidepresivos",
    excerpt: "Cómo actúan los antidepresivos de todos los días, cómo actúa la ketamina y por qué muchas veces no es una cosa o la otra.",
    description: "Diferencias entre la ketamina y los antidepresivos orales: cómo actúan, cuánto tardan, cómo se administran y efectos secundarios. Explicado en español por nuestra clínica en Aventura.",
    date: "Noviembre 2026",
    datePublished: "2026-11-25",
    englishHref: "/content/blog/how-ketamine-therapy-differs-from-traditional-antidepressants",
  },
  {
    title: "Spravato (esketamina) en español: qué es, cómo funciona y el seguro",
    slug: "spravato-esketamina-en-espanol",
    excerpt: "Para qué está aprobado Spravato, cómo es una visita, qué pide el seguro y qué preguntar antes de empezar.",
    description: "Todo sobre Spravato (esketamina en espray nasal) en español: aprobaciones de la FDA, cómo es una visita, programa REMS, autorización previa del seguro y efectos secundarios.",
    date: "Noviembre 2026",
    datePublished: "2026-11-25",
    englishHref: "/content/blog/spravato-for-treatment-resistant-depression",
  },
  {
    title: "Ketamina para la ansiedad: lo que dice la evidencia",
    slug: "ketamina-para-la-ansiedad",
    excerpt: "Lo que se sabe y lo que todavía no se sabe sobre la ketamina para la ansiedad, y cuándo vale la pena preguntar por ella.",
    description: "¿La ketamina puede ayudar con la ansiedad? Qué dice la investigación, por qué su uso para la ansiedad no está aprobado por la FDA y cómo cuidamos la ansiedad durante una sesión en Aventura.",
    date: "Noviembre 2026",
    datePublished: "2026-11-25",
    englishHref: "/content/blog/ketamine-therapy-for-anxiety",
  },
  {
    title: "Ketamina y trauma (TEPT): preguntas honestas antes de empezar",
    slug: "ketamina-para-el-trauma-tept",
    excerpt: "Qué dicen los estudios sobre ketamina y estrés postraumático, y qué pasa si le da miedo revivir el trauma durante una sesión.",
    description: "Ketamina para el trastorno de estrés postraumático (TEPT): qué dicen los estudios, los tratamientos de primera línea, el miedo a revivir el trauma y cómo es una sesión guiada en Aventura.",
    date: "Noviembre 2026",
    datePublished: "2026-11-25",
    englishHref: "/content/blog/can-ketamine-therapy-help-with-ptsd",
  },
  {
    title: "Depresión posparto: señales, tratamientos y dónde entra la ketamina",
    slug: "depresion-posparto-senales-y-tratamiento",
    excerpt: "Cómo distinguir la tristeza posparto de la depresión, qué tratamientos existen y qué hay que platicar sobre la ketamina y la lactancia.",
    description: "Depresión posparto en español: señales, diferencia con la tristeza posparto, tratamientos aprobados, lo que se sabe de la ketamina y la lactancia, y dónde pedir ayuda las 24 horas.",
    date: "Noviembre 2026",
    datePublished: "2026-11-25",
    englishHref: "/treatments/postpartum-depression",
  },
  {
    title: "Salud mental en las familias latinas: cómo romper el silencio",
    slug: "salud-mental-en-familias-latinas",
    excerpt: "\u201cEso se arregla en casa\u201d, \u201cÉchale ganas\u201d. Cómo hablar de la depresión y la ansiedad con su familia sin vergüenza, y cómo pedir ayuda.",
    description: "Salud mental en las familias latinas: el estigma, frases que duelen, cómo hablar de la depresión con su familia y cómo pedir ayuda en español en el Sur de Florida.",
    date: "Noviembre 2026",
    datePublished: "2026-11-25",
    englishHref: "/content/blog",
  },
];

export function getBlogPostEs(slug: string): BlogPostEs {
  const post = blogPostsEs.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown Spanish blog post: ${slug}`);
  return post;
}

export function blogPostEsMetadata(slug: string): Metadata {
  const post = getBlogPostEs(slug);
  return esOnlyMetadata(`${BLOG_ES_BASE}/${slug}`, post.title, post.description);
}
