import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bienestar Funcional | Rewired Ketamine Aventura",
  description: "Vitaminas personalizadas y apoyo de bienestar funcional integrado con la terapia de ketamina en nuestra clínica de propiedad local en Aventura. Sirviendo Miami y Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Bienestar Funcional | Rewired Ketamine",
    description: "Apoyo de bienestar funcional personalizado y vitaminas personalizadas junto con el cuidado de ketamina.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/functional-wellness",
    languages: {
      en: "https://www.rewiredketamine.com/services/functional-wellness",
      es: "https://www.rewiredketamine.com/es/services/functional-wellness",
      "x-default": "https://www.rewiredketamine.com/services/functional-wellness",
    },
  },
};

export default function FunctionalWellnessLayout({ children }: { children: React.ReactNode }) {
  return children;
}