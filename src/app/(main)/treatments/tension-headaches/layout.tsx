import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Tension Headaches | Aventura, FL",
  description: "Ketamine support for tension headaches and related pain at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine for Tension Headaches | Rewired Ketamine",
    description: "Exploring ketamine as part of care for persistent tension headaches.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments/tension-headaches",
    languages: {
      en: "https://www.rewiredketamine.com/treatments/tension-headaches",
      es: "https://www.rewiredketamine.com/es/treatments/tension-headaches",
      "x-default": "https://www.rewiredketamine.com/treatments/tension-headaches",
    },
  },
};

export default function TensionHeadachesLayout({ children }: { children: React.ReactNode }) {
  return children;
}