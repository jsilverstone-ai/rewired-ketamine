import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depresión Postparto | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Apoyo con ketamina totalmente guiada para la depresión postparto en Aventura, FL. Clínica de propiedad local. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/postpartum-depression",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/postpartum-depression",
      "es": "https://www.rewiredketamine.com/es/treatments/postpartum-depression",
      "x-default": "https://www.rewiredketamine.com/treatments/postpartum-depression",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
