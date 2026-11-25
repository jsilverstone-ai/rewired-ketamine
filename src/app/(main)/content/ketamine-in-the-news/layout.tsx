import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine in the News | Latest Research & Updates",
  description: "Stay informed with the latest news and research about ketamine therapy. Curated updates from our locally owned Aventura clinic serving South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine in the News | Rewired Ketamine",
    description: "Current news and research related to ketamine therapy.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/ketamine-in-the-news",
    languages: {
      en: "https://www.rewiredketamine.com/content/ketamine-in-the-news",
      es: "https://www.rewiredketamine.com/es/content/ketamine-in-the-news",
      "x-default": "https://www.rewiredketamine.com/content/ketamine-in-the-news",
    },
  },
};

export default function KetamineInTheNewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}