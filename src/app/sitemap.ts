import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rewiredketamine.com";
  const lastModified = new Date("2026-11-20");

  // Automatically include every blog post folder
  const blogDir = path.join(process.cwd(), "src/app/(main)/content/blog");
  const blogPosts = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir)
        .filter((name) => fs.statSync(path.join(blogDir, name)).isDirectory())
        .map((slug) => ({
          url: `${baseUrl}/content/blog/${slug}`,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        }))
    : [];

  return [
    // Homepage
    { url: `${baseUrl}`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/es`, lastModified, changeFrequency: "monthly", priority: 1.0 },

    // Treatments
    { url: `${baseUrl}/treatments`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/es/treatments`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/treatments/depression`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/anxiety`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/ptsd`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/ocd`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/postpartum-depression`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/burnout`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/chronic-pain`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/eating-disorder`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/mental-fogginess`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/motivation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/palliative-compassion-care`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/treatments/tension-headaches`, lastModified, changeFrequency: "monthly", priority: 0.8 },

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

    // Other pages
    { url: `${baseUrl}/providers`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/es/providers`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/location`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/es/location`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/es/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/content/blog`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/content/videos`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/content/ketamine-in-the-news`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/es/content`, lastModified, changeFrequency: "monthly", priority: 0.6 },

    // All individual blog posts (auto-generated)
    ...blogPosts,
  ];
}