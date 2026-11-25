import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terapia de Infusión de Ketamina en Aventura",
  description: "Terapia de infusión de ketamina IV en nuestra clínica de propiedad local en Aventura. Sesiones completamente guiadas disponibles para depresión, ansiedad, TEPT y dolor crónico. Sirviendo Miami y el Sur de Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Terapia de Infusión de Ketamina | Rewired Ketamine Aventura",
    description: "Infusiones profesionales de ketamina IV en un entorno calmado y privado. Sesiones completamente guiadas disponibles.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/ketamine-infusion",
    languages: {
      en: "https://www.rewiredketamine.com/services/ketamine-infusion",
      es: "https://www.rewiredketamine.com/es/services/ketamine-infusion",
      "x-default": "https://www.rewiredketamine.com/services/ketamine-infusion",
    },
  },
};

export default function KetamineInfusionLayout({ children }: { children: React.ReactNode }) {
  return children;
}