import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine in the News | Latest Research & Updates",
  description: "Stay informed with the latest news and research about ketamine therapy. Curated updates from our locally owned Aventura clinic serving South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine in the News | Rewired Ketamine",
    description: "Current news and research related to ketamine therapy.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/ketamine-in-the-news",
  },
};

export default function KetamineInTheNewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}