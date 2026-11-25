import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spravato in Aventura | Esketamine Nasal Spray",
  description: "Spravato (esketamine) at our REMS-certified Aventura clinic. FDA-approved for treatment-resistant depression in adults. Prior authorization with Cigna, United, and Aetna. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Spravato in Aventura | Rewired Ketamine",
    description: "In-clinic esketamine nasal spray with monitoring. Coverage depends on your plan.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/spravato",
    languages: {
      en: "https://www.rewiredketamine.com/services/spravato",
      es: "https://www.rewiredketamine.com/es/services/spravato",
      "x-default": "https://www.rewiredketamine.com/services/spravato",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}