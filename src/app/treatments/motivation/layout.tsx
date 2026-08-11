import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Motivation | Aventura, South Florida",
  description: "Ketamine therapy support for low motivation at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Motivation | Rewired Ketamine",
    description: "Supportive care for individuals seeking help with motivation and drive.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/motivation",
  },
};

export default function MotivationLayout({ children }: { children: React.ReactNode }) {
  return children;
}