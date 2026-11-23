import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spravato en Aventura | Spray Nasal de Esketamina",
  description: "Spravato (esketamina) en nuestra clínica certificada REMS en Aventura. Aprobado por la FDA para depresión resistente al tratamiento en adultos. Autorización previa con Cigna, United y Aetna. ¡Hablamos Español!",
  openGraph: {
    title: "Spravato en Aventura | Rewired Ketamine",
    description: "Spray nasal de esketamina en clínica con monitoreo. La cobertura depende de su plan.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/spravato",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}