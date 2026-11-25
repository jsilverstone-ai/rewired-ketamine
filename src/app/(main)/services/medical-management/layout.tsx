import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Management | Rewired Ketamine Aventura",
  description: "Expert medical management and medication review with our clinical director at the locally owned Aventura ketamine clinic. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Medical Management | Rewired Ketamine",
    description: "Thoughtful medical management and medication assessment as part of comprehensive care.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/medical-management",
    languages: {
      en: "https://www.rewiredketamine.com/services/medical-management",
      es: "https://www.rewiredketamine.com/es/services/medical-management",
      "x-default": "https://www.rewiredketamine.com/services/medical-management",
    },
  },
};

export default function MedicalManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}