import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Ketamine Infusion A New Option For Migraine Treatment?",
  description: "A careful look at ketamine infusion for migraines in Miami and Aventura. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Infusion for Migraines | Rewired Ketamine",
    description: "Condition-specific education for migraine treatment in South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/is-ketamine-infusion-a-new-option-for-migraine-treatment",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}