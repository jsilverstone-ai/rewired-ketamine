import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Chronic Pain | Aventura Clinic",
  description: "Ketamine therapy for chronic pain at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami, Fort Lauderdale & South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Chronic Pain | Rewired Ketamine",
    description: "Supportive care for individuals living with chronic pain.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/chronic-pain",
  },
};

export default function ChronicPainLayout({ children }: { children: React.ReactNode }) {
  return children;
}