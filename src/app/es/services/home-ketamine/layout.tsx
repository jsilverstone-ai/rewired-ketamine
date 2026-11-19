import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terapia de Ketamina en Casa | Aventura y Sur de Florida",
  description: "Opciones de ketamina en casa incluyendo modalidades orales, nasales y rectales en nuestra clínica de propiedad local en Aventura. Apoyo guiado disponible. ¡Hablamos Español!",
  openGraph: {
    title: "Terapia de Ketamina en Casa | Rewired Ketamine",
    description: "Modalidades convenientes de ketamina en casa con guía profesional de nuestra clínica en Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/home-ketamine",
  },
};

export default function HomeKetamineLayout({ children }: { children: React.ReactNode }) {
  return children;
}