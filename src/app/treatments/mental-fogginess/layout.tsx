import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Mental Fogginess | Aventura Clinic",
  description: "Support for mental fogginess and cognitive clarity with ketamine therapy at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Mental Fogginess | Rewired Ketamine",
    description: "Exploring ketamine as part of a plan for mental clarity and focus.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/mental-fogginess",
  },
};

export default function MentalFogginessLayout({ children }: { children: React.ReactNode }) {
  return children;
}