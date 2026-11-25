import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "At-Home Ketamine Therapy in Florida | Aventura Clinic",
  description: "Clinician-supervised at-home ketamine in Florida: oral, nasal, rectal, and subcutaneous options after a real consult and screening. Starting at $225. Aventura clinic. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "At-Home Ketamine Therapy in Florida | Rewired Ketamine",
    description: "Clinician-supervised at-home ketamine with a local Aventura medical team. Oral, nasal, rectal, and subcutaneous options.",
    url: "https://www.rewiredketamine.com/services/home-ketamine",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/home-ketamine",
    languages: {
      en: "https://www.rewiredketamine.com/services/home-ketamine",
      es: "https://www.rewiredketamine.com/es/services/home-ketamine",
      "x-default": "https://www.rewiredketamine.com/services/home-ketamine",
    },
  },
};

export default function HomeKetamineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
