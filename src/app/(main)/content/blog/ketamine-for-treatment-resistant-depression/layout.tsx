import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Is Ketamine Used for Treatment-Resistant Depression?",
  description: "Learn why ketamine is explored for treatment-resistant depression at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine for Treatment-Resistant Depression | Rewired Ketamine",
    description: "Understanding ketamine’s role when traditional antidepressants have not been enough.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/blog/ketamine-for-treatment-resistant-depression",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}