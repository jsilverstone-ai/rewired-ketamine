import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { blogPostsEs, BLOG_ES_BASE } from "@/data/blog-posts-es";

const REDIRECTED_BLOG_SLUGS = ["what-is-ketamine-treatment-for-depression"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rewiredketamine.com";
  const lastModified = new Date("2026-11-20");
  const toolsModified = new Date("2026-11-25");
  const faqModified = new Date("2026-11-26");

  // Automatically include every blog post folder, skipping redirected ones
  const blogDir = path.join(process.cwd(), "src/app/(main)/content/blog");
  const blogPosts = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir)
        .filter((name) => fs.statSync(path.join(blogDir, name)).isDirectory())
        .filter((slug) => !REDIRECTED_BLOG_SLUGS.includes(slug))
        .map((slug) => ({
          url: `${baseUrl}/content/blog/${slug}`,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        }))
    : [];

  // Original Spanish blog posts (Spanish-only: no English twin, so no hreflang pair is added below)
  const blogPostsEsEntries = blogPostsEs.map((post) => ({
    url: `${baseUrl}${BLOG_ES_BASE}/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const entries: MetadataRoute.Sitemap = [
    // Homepage
    { url: `${baseUrl}`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/es`, lastModified, changeFrequency: "monthly", priority: 1.0 },

    // Treatments
    { url: `${baseUrl}/treatments`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/es/treatments`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/treatments/depression`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/depression`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/anxiety`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/anxiety`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/ptsd`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/ptsd`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/ocd`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/ocd`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/postpartum-depression`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/postpartum-depression`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/burnout`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/burnout`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/chronic-pain`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/chronic-pain`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/eating-disorder`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/eating-disorder`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/mental-fogginess`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/mental-fogginess`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/motivation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/motivation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/palliative-compassion-care`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/palliative-compassion-care`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/tension-headaches`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/treatments/tension-headaches`, lastModified, changeFrequency: "monthly", priority: 0.8 },

    // Services
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/es/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/ketamine-therapy-cost`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/es/services/ketamine-therapy-cost`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/ketamine-infusion`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/services/ketamine-infusion`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/spravato`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/services/spravato`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/iv-ketamine-vs-spravato`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/services/iv-ketamine-vs-spravato`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/home-ketamine`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/services/home-ketamine`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/functional-wellness`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/services/functional-wellness`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/medical-management`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/services/medical-management`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/talk-therapy`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/services/talk-therapy`, lastModified, changeFrequency: "monthly", priority: 0.8 },
{ url: `${baseUrl}/services/ketamine-insurance`, lastModified, changeFrequency: "monthly", priority: 0.8 },
{ url: `${baseUrl}/es/services/ketamine-insurance`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    // Free tools, HSA/FSA and per-insurer Spravato guides
    { url: `${baseUrl}/tools`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/tools`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/phq-9-depression-test`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/tools/phq-9-depression-test`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/gad-7-anxiety-test`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/tools/gad-7-anxiety-test`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/ketamine-cost-calculator`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/es/tools/ketamine-cost-calculator`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/hsa-fsa-ketamine`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/es/services/hsa-fsa-ketamine`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/ketamine-insurance/spravato-unitedhealthcare`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/es/services/ketamine-insurance/spravato-unitedhealthcare`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/ketamine-insurance/spravato-cigna`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/es/services/ketamine-insurance/spravato-cigna`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/ketamine-insurance/spravato-aetna`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/es/services/ketamine-insurance/spravato-aetna`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/ketamine-insurance/spravato-florida-blue-bcbs`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/es/services/ketamine-insurance/spravato-florida-blue-bcbs`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/ketamine-insurance/spravato-medicare`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/es/services/ketamine-insurance/spravato-medicare`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/ketamine-insurance/spravato-florida-medicaid`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/es/services/ketamine-insurance/spravato-florida-medicaid`, lastModified: toolsModified, changeFrequency: "monthly", priority: 0.7 },
    // Other pages
    { url: `${baseUrl}/providers`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/es/providers`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/location`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/es/location`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq/cost-and-coverage`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    // English-only FAQs that rank for their own long-tail searches. Their /es twins
    // have no Spanish copy yet (noindex), so they are left out and get no hreflang pair.
    { url: `${baseUrl}/faq/ptsd`, lastModified: faqModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq/spravato`, lastModified: faqModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq/chronic-pain`, lastModified: faqModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq/treatment-resistant-depression`, lastModified: faqModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/es/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/es/faq/cost-and-coverage`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/content`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/content/blog`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/content/videos`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/content/ketamine-in-the-news`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/es/content`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/es/content/blog`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/es/content/videos`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/es/content/ketamine-in-the-news`, lastModified, changeFrequency: "monthly", priority: 0.6 },

    // All individual blog posts (auto-generated)
    ...blogPosts,
    ...blogPostsEsEntries,
  ];

  // hreflang: pair each English URL with its /es counterpart when both are listed.
  const listed = new Set(entries.map((e) => e.url));
  return entries.map((entry) => {
    const path = entry.url.slice(baseUrl.length);
    const enPath = path === "/es" ? "" : path.startsWith("/es/") ? path.slice(3) : path;
    const enUrl = `${baseUrl}${enPath}`;
    const esUrl = `${baseUrl}/es${enPath}`;
    if (!listed.has(enUrl) || !listed.has(esUrl)) return entry;
    return {
      ...entry,
      alternates: {
        languages: { en: enUrl, es: esUrl, "x-default": enUrl },
      },
    };
  });
}