import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spravato en Aventura | Spray Nasal de Esketamina",
  description: "Spravato (esketamina) en nuestra clínica certificada REMS en Aventura. Aprobado por la FDA para depresión resistente al tratamiento en adultos. Autorización previa con Cigna, United y Aetna. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Spravato en Aventura | Rewired Ketamine",
    description: "Spray nasal de esketamina en clínica con monitoreo. La cobertura depende de su plan.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/spravato",
    languages: {
      en: "https://www.rewiredketamine.com/services/spravato",
      es: "https://www.rewiredketamine.com/es/services/spravato",
      "x-default": "https://www.rewiredketamine.com/services/spravato",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}