import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depresión | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Apoyo con ketamina totalmente guiada para la depresión en Aventura, FL. Clínica de propiedad local. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/depression",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/depression",
      "es": "https://www.rewiredketamine.com/es/treatments/depression",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}