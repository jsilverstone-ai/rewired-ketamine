import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terapia de Infusión de Ketamina en Aventura",
  description: "Terapia de infusión de ketamina IV en nuestra clínica de propiedad local en Aventura. Sesiones completamente guiadas disponibles para depresión, ansiedad, TEPT y dolor crónico. Sirviendo Miami y el Sur de Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Terapia de Infusión de Ketamina | Rewired Ketamine Aventura",
    description: "Infusiones profesionales de ketamina IV en un entorno calmado y privado. Sesiones completamente guiadas disponibles.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/ketamine-infusion",
  },
};

export default function KetamineInfusionLayout({ children }: { children: React.ReactNode }) {
  return children;
}