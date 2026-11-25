import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spravato en Aventura | Spray Nasal de Esketamina",
  description: "Spravato (esketamina) en nuestra clínica certificada REMS en Aventura. Aprobado por la FDA para la depresión resistente al tratamiento en adultos, solo o junto con un antidepresivo oral. Dentro de la red con UnitedHealthcare, Cigna y Aetna; Florida Blue está fuera de la red. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Spravato en Aventura | Rewired Ketamine",
    description: "Espray nasal de esketamina en clínica con monitoreo REMS. Para la depresión resistente al tratamiento, se usa solo o junto con un antidepresivo oral. La cobertura depende de su plan.",
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