import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Management | Rewired Ketamine Aventura",
  description: "Expert medical management and medication review with our clinical director at the locally owned Aventura ketamine clinic. ¡Hablamos Español!",
  openGraph: {
    title: "Medical Management | Rewired Ketamine",
    description: "Thoughtful medical management and medication assessment as part of comprehensive care.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/services/medical-management",
  },
};

export default function MedicalManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}