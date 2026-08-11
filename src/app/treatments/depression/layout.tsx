import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Depression in Aventura | Treatment-Resistant Options",
  description: "Ketamine therapy for depression and treatment-resistant depression at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Depression | Rewired Ketamine Aventura",
    description: "Support for depression when traditional treatments have not provided enough relief.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/depression",
  },
};

export default function DepressionLayout({ children }: { children: React.ReactNode }) {
  return children;
}