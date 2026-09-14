import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Clinic in Miami vs Aventura | How to Choose",
  description: "What ketamine clinic Miami searches usually mean, and how to choose a locally owned Aventura provider serving South Florida. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Clinic in Miami vs Aventura | Rewired Ketamine",
    description: "How to choose a local ketamine provider in the Miami metro area.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-clinic-miami-vs-aventura",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}