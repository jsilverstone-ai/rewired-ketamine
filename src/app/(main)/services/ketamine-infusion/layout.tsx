import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Infusion Therapy in Aventura",
  description: "IV ketamine infusion therapy at our locally owned Aventura clinic. Fully guided sessions available for depression, anxiety, PTSD and chronic pain. Serving Miami & South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine Infusion Therapy | Rewired Ketamine Aventura",
    description: "Professional IV ketamine infusions in a calm, private setting. Fully guided sessions available.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/ketamine-infusion",
    languages: {
      en: "https://www.rewiredketamine.com/services/ketamine-infusion",
      es: "https://www.rewiredketamine.com/es/services/ketamine-infusion",
      "x-default": "https://www.rewiredketamine.com/services/ketamine-infusion",
    },
  },
};

export default function KetamineInfusionLayout({ children }: { children: React.ReactNode }) {
  return children;
}