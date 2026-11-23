import type { Metadata } from "next";
import RootHtml from "@/components/RootHtml";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rewiredketamine.com"),
  title: "Clínica de Ketamina en Miami y Aventura | Terapia IV Guiada | Rewired Ketamine",
  description: "Rewired Ketamine es una clínica de ketamina líder en la que confían los pacientes de Miami, ubicada en Aventura. Sesiones totalmente guiadas disponibles para depresión resistente al tratamiento, ansiedad, PTSD y dolor crónico. Atendiendo Miami, Fort Lauderdale y el sur de Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Rewired Ketamine | Terapia de Ketamina en Aventura, Sur de Florida",
    description: "Clínica de ketamina de propiedad local en Aventura que ofrece sesiones totalmente guiadas. Atendiendo Miami y Fort Lauderdale. ¡Hablamos Español!",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es",
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="es">{children}</RootHtml>;
}
