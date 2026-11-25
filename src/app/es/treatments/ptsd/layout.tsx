import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEPT | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Apoyo cuidadoso con ketamina para el TEPT en Aventura, FL. Clínica de propiedad local. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/ptsd",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/ptsd",
      "es": "https://www.rewiredketamine.com/es/treatments/ptsd",
      "x-default": "https://www.rewiredketamine.com/treatments/ptsd",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
