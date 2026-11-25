import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Ketamine Is Being Explored For Depression Treatment | Aventura",
  description: "Why ketamine is being explored for depression when traditional treatments have not provided enough relief. Locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine and Depression Care | Rewired Ketamine",
    description: "Educational overview without hype.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/why-ketamine-is-a-breakthrough-in-depression-treatment",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}