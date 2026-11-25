import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manejo Médico | Rewired Ketamine Aventura",
  description: "Manejo médico experto y revisión de medicamentos con nuestro director clínico en la clínica de ketamina de propiedad local en Aventura. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Manejo Médico | Rewired Ketamine",
    description: "Manejo médico reflexivo y evaluación de medicamentos como parte del cuidado integral.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/medical-management",
    languages: {
      en: "https://www.rewiredketamine.com/services/medical-management",
      es: "https://www.rewiredketamine.com/es/services/medical-management",
      "x-default": "https://www.rewiredketamine.com/services/medical-management",
    },
  },
};

export default function MedicalManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}