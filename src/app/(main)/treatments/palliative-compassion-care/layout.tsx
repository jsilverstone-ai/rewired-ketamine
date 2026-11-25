import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palliative & Compassion Care | Ketamine in Aventura",
  description: "Compassionate ketamine support for palliative care needs at our locally owned Aventura clinic. Fully guided sessions available. Serving South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Palliative & Compassion Care | Rewired Ketamine",
    description: "Thoughtful, supportive care focused on comfort and quality of life.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments/palliative-compassion-care",
    languages: {
      en: "https://www.rewiredketamine.com/treatments/palliative-compassion-care",
      es: "https://www.rewiredketamine.com/es/treatments/palliative-compassion-care",
      "x-default": "https://www.rewiredketamine.com/treatments/palliative-compassion-care",
    },
  },
};

export default function PalliativeCompassionCareLayout({ children }: { children: React.ReactNode }) {
  return children;
}