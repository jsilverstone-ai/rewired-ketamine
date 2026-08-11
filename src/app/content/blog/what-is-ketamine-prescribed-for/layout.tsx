import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Ketamine Prescribed For? | Aventura Clinic",
  description: "A clear overview of conditions ketamine may support at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "What Is Ketamine Prescribed For? | Rewired Ketamine",
    description: "Conditions commonly explored with ketamine therapy in South Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/blog/what-is-ketamine-prescribed-for",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}