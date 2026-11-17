import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine and Opioid-Induced Hyperalgesia | Aventura",
  description: "What a 2026 narrative review says about the NMDA receptor, opioid-related pain sensitivity, and ketamine. Context from our Aventura clinic. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine and Opioid-Induced Hyperalgesia | Rewired Ketamine",
    description: "A careful look at NMDA research and what it does not claim for clinic care.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-opioid-induced-hyperalgesia",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}