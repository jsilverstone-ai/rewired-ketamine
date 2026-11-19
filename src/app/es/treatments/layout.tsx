import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamientos con Ketamina | Depresión, Ansiedad, PTSD y Más en Aventura",
  description: "Explore la terapia con ketamina para depresión, ansiedad, PTSD, dolor crónico, OCD, depresión postparto y más en nuestra clínica de propiedad local en Aventura. Sesiones totalmente guiadas disponibles. ¡Hablamos Español!",
  openGraph: {
    title: "Tratamientos con Ketamina | Rewired Ketamine Aventura",
    description: "Apoyo personalizado con ketamina para una amplia gama de condiciones de salud mental y dolor en el sur de Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments",
  },
};

export default function TreatmentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
