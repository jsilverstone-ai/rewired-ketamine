import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manejo Médico | Rewired Ketamine Aventura",
  description: "Manejo médico experto y revisión de medicamentos con nuestro director clínico en la clínica de ketamina de propiedad local en Aventura. ¡Hablamos Español!",
  openGraph: {
    title: "Manejo Médico | Rewired Ketamine",
    description: "Manejo médico reflexivo y evaluación de medicamentos como parte del cuidado integral.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/medical-management",
  },
};

export default function MedicalManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}