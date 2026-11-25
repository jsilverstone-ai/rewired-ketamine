import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motivación | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Apoyo con ketamina para restaurar la motivación en Aventura, FL. Clínica de propiedad local. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/motivation",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/motivation",
      "es": "https://www.rewiredketamine.com/es/treatments/motivation",
      "x-default": "https://www.rewiredketamine.com/treatments/motivation",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
