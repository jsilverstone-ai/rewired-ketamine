import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Treatments | Depression, Anxiety, PTSD & More in Aventura",
  description: "Explore ketamine therapy for depression, anxiety, PTSD, chronic pain, OCD, postpartum depression and more at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine Treatments | Rewired Ketamine Aventura",
    description: "Personalized ketamine support for a wide range of mental health and pain conditions in South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments",
    languages: {
      en: "https://www.rewiredketamine.com/treatments",
      es: "https://www.rewiredketamine.com/es/treatments",
      "x-default": "https://www.rewiredketamine.com/treatments",
    },
  },
};

export default function TreatmentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}