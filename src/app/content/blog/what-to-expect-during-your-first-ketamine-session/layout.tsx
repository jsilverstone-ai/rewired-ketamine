import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Expect During Your First Ketamine Session",
  description: "A calm, practical guide to your first ketamine session at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "What to Expect at Your First Ketamine Session | Rewired Ketamine",
    description: "What happens before, during, and after your first visit.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/blog/what-to-expect-during-your-first-ketamine-session",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}