import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Makes Ketamine Different From Other Depression Treatments?",
  description: "How ketamine differs from many traditional antidepressants for treatment-resistant depression. Serving Miami and Aventura. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine vs Other Depression Treatments | Rewired Ketamine",
    description: "A calm comparison for patients in Miami and Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/what-makes-ketamine-different-from-other-depression-treatments",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}