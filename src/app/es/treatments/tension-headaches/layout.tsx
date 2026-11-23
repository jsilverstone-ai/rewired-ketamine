import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cefaleas por Tensión | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Apoyo guiado con ketamina para cefaleas por tensión en Aventura, FL. Clínica de propiedad local. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/tension-headaches",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/tension-headaches",
      "es": "https://www.rewiredketamine.com/es/treatments/tension-headaches",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
