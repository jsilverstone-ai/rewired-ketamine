import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Ketamine Sessions Are Needed For Depression Relief?",
  description: "A careful look at how many ketamine sessions may be part of a depression plan. Individual results vary. Locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "How Many Ketamine Sessions Are Needed? | Rewired Ketamine",
    description: "What to know about session planning for depression care.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/how-many-ketamine-sessions-are-needed-for-depression-relief",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}