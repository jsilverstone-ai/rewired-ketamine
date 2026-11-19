import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bienestar Funcional | Rewired Ketamine Aventura",
  description: "Vitaminas personalizadas y apoyo de bienestar funcional integrado con la terapia de ketamina en nuestra clínica de propiedad local en Aventura. Sirviendo Miami y Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    title: "Bienestar Funcional | Rewired Ketamine",
    description: "Apoyo de bienestar funcional personalizado y vitaminas personalizadas junto con el cuidado de ketamina.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/functional-wellness",
  },
};

export default function FunctionalWellnessLayout({ children }: { children: React.ReactNode }) {
  return children;
}