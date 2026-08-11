import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Anxiety in Aventura | South Florida",
  description: "Ketamine therapy for anxiety disorders at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami, Fort Lauderdale & South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Anxiety | Rewired Ketamine Aventura",
    description: "Exploring ketamine as a supportive option for anxiety when other approaches have not been enough.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/treatments/anxiety",
  },
};

export default function AnxietyLayout({ children }: { children: React.ReactNode }) {
  return children;
}