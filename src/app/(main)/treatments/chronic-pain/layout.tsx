import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Chronic Pain | Aventura Clinic",
  description: "Ketamine therapy for chronic pain at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami, Fort Lauderdale & South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine for Chronic Pain | Rewired Ketamine",
    description: "Supportive care for individuals living with chronic pain.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments/chronic-pain",
    languages: {
      en: "https://www.rewiredketamine.com/treatments/chronic-pain",
      es: "https://www.rewiredketamine.com/es/treatments/chronic-pain",
      "x-default": "https://www.rewiredketamine.com/treatments/chronic-pain",
    },
  },
};

export default function ChronicPainLayout({ children }: { children: React.ReactNode }) {
  return children;
}