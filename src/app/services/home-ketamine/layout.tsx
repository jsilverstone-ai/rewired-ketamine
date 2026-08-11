import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Ketamine Therapy | Aventura & South Florida",
  description: "At-home ketamine options including oral, nasal, and rectal modalities at our locally owned Aventura clinic. Fully guided support available. ¡Hablamos Español!",
  openGraph: {
    title: "Home Ketamine Therapy | Rewired Ketamine",
    description: "Convenient at-home ketamine modalities with professional guidance from our Aventura clinic.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/services/home-ketamine",
  },
};

export default function HomeKetamineLayout({ children }: { children: React.ReactNode }) {
  return children;
}