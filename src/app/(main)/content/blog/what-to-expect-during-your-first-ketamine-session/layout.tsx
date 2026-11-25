import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Expect During Your First Ketamine Session",
  description: "A calm, practical guide to your first ketamine session at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "What to Expect at Your First Ketamine Session | Rewired Ketamine",
    description: "What happens before, during, and after your first visit.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-to-expect-during-your-first-ketamine-session",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}