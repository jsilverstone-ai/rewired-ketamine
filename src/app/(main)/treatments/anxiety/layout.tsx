import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Anxiety in Aventura | South Florida",
  description: "Ketamine therapy for anxiety disorders at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami, Fort Lauderdale & South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine for Anxiety | Rewired Ketamine Aventura",
    description: "Exploring ketamine as a supportive option for anxiety when other approaches have not been enough.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments/anxiety",
    languages: {
      en: "https://www.rewiredketamine.com/treatments/anxiety",
      es: "https://www.rewiredketamine.com/es/treatments/anxiety",
      "x-default": "https://www.rewiredketamine.com/treatments/anxiety",
    },
  },
};

export default function AnxietyLayout({ children }: { children: React.ReactNode }) {
  return children;
}