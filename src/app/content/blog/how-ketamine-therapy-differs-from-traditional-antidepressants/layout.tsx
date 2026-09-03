import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Ketamine Therapy Differs From Traditional Antidepressants",
  description: "Ketamine vs traditional antidepressants for treatment-resistant depression. Locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine vs Traditional Antidepressants | Rewired Ketamine",
    description: "A clear comparison for patients in Miami and Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/how-ketamine-therapy-differs-from-traditional-antidepressants",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}