import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Does Ketamine Therapy Feel Like?",
  description: "A calm, honest look at what a ketamine session may feel like at our Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "What Does Ketamine Therapy Feel Like? | Rewired Ketamine",
    description: "What to expect during a ketamine therapy session in South Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/blog/what-does-ketamine-therapy-feel-like",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}