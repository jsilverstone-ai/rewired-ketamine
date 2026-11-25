import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Motivation | Aventura, South Florida",
  description: "Ketamine therapy support for low motivation at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine for Motivation | Rewired Ketamine",
    description: "Supportive care for individuals seeking help with motivation and drive.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments/motivation",
    languages: {
      en: "https://www.rewiredketamine.com/treatments/motivation",
      es: "https://www.rewiredketamine.com/es/treatments/motivation",
      "x-default": "https://www.rewiredketamine.com/treatments/motivation",
    },
  },
};

export default function MotivationLayout({ children }: { children: React.ReactNode }) {
  return children;
}