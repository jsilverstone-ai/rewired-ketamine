import type { Metadata } from "next";
import RootHtml from "@/components/RootHtml";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rewiredketamine.com"),
  title: "Clínica de Ketamina en Miami y Aventura | Terapia IV Guiada | Rewired Ketamine",
  description: "Rewired Ketamine es una clínica de ketamina líder en la que confían los pacientes de Miami, ubicada en Aventura. Sesiones totalmente guiadas disponibles para depresión resistente al tratamiento, ansiedad, PTSD y dolor crónico. Atendiendo Miami, Fort Lauderdale y el sur de Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Rewired Ketamine | Terapia de Ketamina en Aventura, Sur de Florida",
    description: "Clínica de ketamina de propiedad local en Aventura que ofrece sesiones totalmente guiadas. Atendiendo Miami y Fort Lauderdale. ¡Hablamos Español!",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.rewiredketamine.com/og/og-home-es.png"],
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es",
    languages: {
      en: "https://www.rewiredketamine.com",
      es: "https://www.rewiredketamine.com/es",
      "x-default": "https://www.rewiredketamine.com",
    },
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="es">{children}</RootHtml>;
}
