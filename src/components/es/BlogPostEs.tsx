import Link from "next/link";
import PageShell from "@/components/tools/PageShell";
import { SourceList, EducationNote } from "@/components/tools/ReviewAndSources";
import { pageJsonLd } from "@/data/page-meta";
import type { Source } from "@/data/medical-review";
import { BLOG_AUTHOR_ES, BLOG_AUTHOR_JSONLD, BLOG_ES_BASE, getBlogPostEs } from "@/data/blog-posts-es";

type RelatedLink = { href: string; label: string };

/**
 * Layout for an original Spanish blog post: header with the language switch pointing to the closest
 * English page, hero, reviewer byline + last-reviewed date (from PageShell), author line, body,
 * related links, numbered sources, education/crisis note and the consult CTA.
 * JSON-LD is MedicalWebPage + BreadcrumbList only.
 */
export default function BlogPostEs({
  slug,
  subtitle,
  sources,
  related,
  about,
  children,
}: {
  slug: string;
  subtitle: string;
  sources: Source[];
  related: RelatedLink[];
  about?: Record<string, unknown> | Record<string, unknown>[];
  children: React.ReactNode;
}) {
  const post = getBlogPostEs(slug);
  const path = `${BLOG_ES_BASE}/${slug}`;
  const jsonLd = pageJsonLd({
    lang: "es",
    path,
    name: post.title,
    description: post.description,
    about,
    author: BLOG_AUTHOR_JSONLD,
    datePublished: post.datePublished,
    crumbs: [
      { name: "Inicio", path: "/es" },
      { name: "Contenido", path: "/es/content" },
      { name: "Blog", path: BLOG_ES_BASE },
      { name: post.title, path },
    ],
  });

  return (
    <PageShell lang="es" title={post.title} subtitle={subtitle} jsonLd={jsonLd} altHref={post.englishHref}>
      <p className="text-sm text-[#555] -mt-6 mb-10">
        Por{" "}
        <Link href={BLOG_AUTHOR_ES.href} className="font-semibold text-[#0B1D36] hover:text-[#C9A66B]">
          {BLOG_AUTHOR_ES.name}
        </Link>
        , {BLOG_AUTHOR_ES.role}. Publicado: <time dateTime={post.datePublished}>{post.date}</time>.
      </p>

      <article>{children}</article>

      <div className="mt-14 bg-[#F8F5F0] rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#0B1D36] mb-4">Siga leyendo</h2>
        <ul className="space-y-2">
          {related.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="text-[#C9A66B] font-semibold hover:underline">
                {r.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <SourceList lang="es" sources={sources} />
      <EducationNote lang="es" />
      <p className="text-sm text-[#555] mt-4">
        <Link href={BLOG_ES_BASE} className="text-[#C9A66B] font-semibold hover:underline">
          ← Volver al blog en español
        </Link>
      </p>
    </PageShell>
  );
}
