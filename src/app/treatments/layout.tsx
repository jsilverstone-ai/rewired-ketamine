import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Treatments | Depression, Anxiety, PTSD & More in Aventura",
  description: "Explore ketamine therapy for depression, anxiety, PTSD, chronic pain, OCD, postpartum depression and more at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Treatments | Rewired Ketamine Aventura",
    description: "Personalized ketamine support for a wide range of mental health and pain conditions in South Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments",
  },
};

export default function TreatmentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}