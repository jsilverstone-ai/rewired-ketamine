import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palliative & Compassion Care | Ketamine in Aventura",
  description: "Compassionate ketamine support for palliative care needs at our locally owned Aventura clinic. Fully guided sessions available. Serving South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Palliative & Compassion Care | Rewired Ketamine",
    description: "Thoughtful, supportive care focused on comfort and quality of life.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/palliative-compassion-care",
  },
};

export default function PalliativeCompassionCareLayout({ children }: { children: React.ReactNode }) {
  return children;
}