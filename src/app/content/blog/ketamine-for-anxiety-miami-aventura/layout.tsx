import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Anxiety in Miami and Aventura | Rewired Ketamine",
  description: "What a 2026 review found about ketamine for anxiety, and how guided care works at our Aventura clinic. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Anxiety in Miami and Aventura",
    description: "A 2026 review of ketamine for anxiety, and how guided sessions are offered in Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-for-anxiety-miami-aventura",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}