import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Mental Fogginess | Aventura Clinic",
  description: "Support for mental fogginess and cognitive clarity with ketamine therapy at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine for Mental Fogginess | Rewired Ketamine",
    description: "Exploring ketamine as part of a plan for mental clarity and focus.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments/mental-fogginess",
    languages: {
      en: "https://www.rewiredketamine.com/treatments/mental-fogginess",
      es: "https://www.rewiredketamine.com/es/treatments/mental-fogginess",
      "x-default": "https://www.rewiredketamine.com/treatments/mental-fogginess",
    },
  },
};

export default function MentalFogginessLayout({ children }: { children: React.ReactNode }) {
  return children;
}