import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agotamiento | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Sesiones IV guiadas para profesionales bajo alto estrés en Aventura, FL. Clínica de propiedad local. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/burnout",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/burnout",
      "es": "https://www.rewiredketamine.com/es/treatments/burnout",
      "x-default": "https://www.rewiredketamine.com/treatments/burnout",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
