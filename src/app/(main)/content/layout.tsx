import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content | Blog, Videos & News | Rewired Ketamine Aventura",
  description: "Explore our blog, educational videos, and the latest ketamine news from our locally owned Aventura clinic. Serving Miami, Fort Lauderdale & South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Content | Rewired Ketamine Aventura",
    description: "Blog, videos, and news about ketamine therapy from our South Florida clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content",
    languages: {
      en: "https://www.rewiredketamine.com/content",
      es: "https://www.rewiredketamine.com/es/content",
      "x-default": "https://www.rewiredketamine.com/content",
    },
  },
};

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return children;
}