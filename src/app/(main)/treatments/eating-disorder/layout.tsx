import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Support for Eating Disorders | Aventura",
  description: "Ketamine therapy as part of a supportive plan for eating disorders at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine for Eating Disorders | Rewired Ketamine",
    description: "Compassionate, clinically supervised support in South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments/eating-disorder",
    languages: {
      en: "https://www.rewiredketamine.com/treatments/eating-disorder",
      es: "https://www.rewiredketamine.com/es/treatments/eating-disorder",
      "x-default": "https://www.rewiredketamine.com/treatments/eating-disorder",
    },
  },
};

export default function EatingDisorderLayout({ children }: { children: React.ReactNode }) {
  return children;
}