import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Ketamine Therapy Insights from Aventura",
  description: "Read articles about ketamine therapy, mental wellness, depression, anxiety, PTSD and more from our locally owned Aventura clinic. Serving Miami & South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine Blog | Rewired Ketamine Aventura",
    description: "Helpful insights on ketamine therapy and mental health from our South Florida clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog",
    languages: {
      en: "https://www.rewiredketamine.com/content/blog",
      es: "https://www.rewiredketamine.com/es/content/blog",
      "x-default": "https://www.rewiredketamine.com/content/blog",
    },
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}