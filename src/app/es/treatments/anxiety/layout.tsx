import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ansiedad | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Apoyo con ketamina totalmente guiada para la ansiedad en Aventura, FL. Clínica de propiedad local. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/anxiety",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/anxiety",
      "es": "https://www.rewiredketamine.com/es/treatments/anxiety",
      "x-default": "https://www.rewiredketamine.com/treatments/anxiety",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
