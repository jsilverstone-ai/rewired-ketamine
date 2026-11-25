import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Research: How Ketamine Activates Opioid Receptors | Aventura",
  description: "A 2026 Nature study shows ketamine can directly activate opioid receptors — insights for patients exploring ketamine therapy in Miami and Aventura. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "How Ketamine Activates Opioid Receptors | Rewired Ketamine",
    description: "New 2026 research on ketamine and opioid receptors. Local care available in Aventura and South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/new-research-how-ketamine-activates-opioid-receptors",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}