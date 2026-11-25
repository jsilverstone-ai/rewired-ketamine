import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TOC | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Apoyo con ketamina para el TOC en Aventura, FL. Clínica de propiedad local. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/ocd",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/ocd",
      "es": "https://www.rewiredketamine.com/es/treatments/ocd",
      "x-default": "https://www.rewiredketamine.com/treatments/ocd",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
