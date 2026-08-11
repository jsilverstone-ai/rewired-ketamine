import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Support for Eating Disorders | Aventura",
  description: "Ketamine therapy as part of a supportive plan for eating disorders at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Eating Disorders | Rewired Ketamine",
    description: "Compassionate, clinically supervised support in South Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/eating-disorder",
  },
};

export default function EatingDisorderLayout({ children }: { children: React.ReactNode }) {
  return children;
}