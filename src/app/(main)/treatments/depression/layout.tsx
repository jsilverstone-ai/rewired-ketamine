import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Depression in Aventura | Treatment-Resistant Options",
  description: "Ketamine therapy for depression and treatment-resistant depression at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine for Depression | Rewired Ketamine Aventura",
    description: "Support for depression when traditional treatments have not provided enough relief.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments/depression",
    languages: {
      en: "https://www.rewiredketamine.com/treatments/depression",
      es: "https://www.rewiredketamine.com/es/treatments/depression",
      "x-default": "https://www.rewiredketamine.com/treatments/depression",
    },
  },
};

export default function DepressionLayout({ children }: { children: React.ReactNode }) {
  return children;
}