import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine and Neuroplasticity in Female Brains | Aventura",
  description: "New research explores how ketamine may boost neuroplasticity through microglia in female brains. Insights for patients seeking ketamine for depression in Miami and Aventura. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine and Neuroplasticity | Rewired Ketamine Aventura",
    description: "Exploring new findings on ketamine, microglia, and neuroplasticity for depression care in South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-neuroplasticity-microglia-female-brains",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}