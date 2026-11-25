import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Does Ketamine Therapy Feel Like?",
  description: "A calm, honest look at what a ketamine session may feel like at our Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "What Does Ketamine Therapy Feel Like? | Rewired Ketamine",
    description: "What to expect during a ketamine therapy session in South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-does-ketamine-therapy-feel-like",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}