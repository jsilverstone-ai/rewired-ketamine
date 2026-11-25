import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamina en Casa en Florida | Clínica en Aventura",
  description: "Ketamina en casa con supervisión clínica en Florida: opciones oral, nasal, rectal y subcutánea después de una consulta y evaluación real. Desde $225. Clínica en Aventura. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Ketamina en Casa en Florida | Rewired Ketamine",
    description: "Ketamina en casa con supervisión de un equipo médico local en Aventura. Opciones oral, nasal, rectal y subcutánea.",
    url: "https://www.rewiredketamine.com/es/services/home-ketamine",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/home-ketamine",
    languages: {
      en: "https://www.rewiredketamine.com/services/home-ketamine",
      es: "https://www.rewiredketamine.com/es/services/home-ketamine",
      "x-default": "https://www.rewiredketamine.com/services/home-ketamine",
    },
  },
};

export default function HomeKetamineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
