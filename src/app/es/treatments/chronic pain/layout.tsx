import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dolor Crónico | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Apoyo con ketamina para el dolor crónico en Aventura, FL. Clínica de propiedad local. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/chronic-pain",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/chronic-pain",
      "es": "https://www.rewiredketamine.com/es/treatments/chronic-pain",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
