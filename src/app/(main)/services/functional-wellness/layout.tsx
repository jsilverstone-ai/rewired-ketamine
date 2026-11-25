import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Functional Wellness | Rewired Ketamine Aventura",
  description: "Custom vitamins and functional wellness support integrated with ketamine therapy at our locally owned Aventura clinic. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Functional Wellness | Rewired Ketamine",
    description: "Personalized functional wellness and custom vitamin support alongside ketamine care.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/functional-wellness",
    languages: {
      en: "https://www.rewiredketamine.com/services/functional-wellness",
      es: "https://www.rewiredketamine.com/es/services/functional-wellness",
      "x-default": "https://www.rewiredketamine.com/services/functional-wellness",
    },
  },
};

export default function FunctionalWellnessLayout({ children }: { children: React.ReactNode }) {
  return children;
}