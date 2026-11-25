import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Therapy Cost in Aventura | Rewired Ketamine",
  description: "IV ketamine is usually cash-pay. Spravato may be covered when REMS criteria are met. Clear cost information at our Aventura clinic serving Miami and South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine Therapy Cost | Rewired Ketamine Aventura",
    description: "Cost and insurance information for IV ketamine and Spravato at our South Florida clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/ketamine-therapy-cost",
    languages: {
      en: "https://www.rewiredketamine.com/services/ketamine-therapy-cost",
      es: "https://www.rewiredketamine.com/es/services/ketamine-therapy-cost",
      "x-default": "https://www.rewiredketamine.com/services/ketamine-therapy-cost",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}