import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Integration in Aventura | Rewired Ketamine",
  description: "What ketamine integration is at our Aventura clinic — the focused step after a session that is not the same as therapy. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine Integration in Aventura | Rewired Ketamine",
    description: "How integration visits work after a guided session at our Aventura clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-integration-aventura",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}