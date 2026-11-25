import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for OCD in Aventura | South Florida",
  description: "Ketamine therapy support for OCD at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine for OCD | Rewired Ketamine Aventura",
    description: "Exploring ketamine as part of a broader plan for OCD.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments/ocd",
    languages: {
      en: "https://www.rewiredketamine.com/treatments/ocd",
      es: "https://www.rewiredketamine.com/es/treatments/ocd",
      "x-default": "https://www.rewiredketamine.com/treatments/ocd",
    },
  },
};

export default function OCDLayout({ children }: { children: React.ReactNode }) {
  return children;
}