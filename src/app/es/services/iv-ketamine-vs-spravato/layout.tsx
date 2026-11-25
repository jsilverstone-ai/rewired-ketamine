import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamina IV vs Spravato en Aventura y Miami | Rewired Ketamine",
  description: "Compare la ketamina IV y Spravato (esketamina) en Rewired Ketamine en Aventura. Conozca las diferencias en ruta, entorno, monitoreo, seguro y quién puede adaptarse a cada opción. Consulta gratuita.",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Ketamina IV vs Spravato en Aventura y Miami",
    description: "Compare la ketamina IV y Spravato en nuestra clínica de Aventura. Sirviendo Miami y el Sur de Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/iv-ketamine-vs-spravato",
    languages: {
      en: "https://www.rewiredketamine.com/services/iv-ketamine-vs-spravato",
      es: "https://www.rewiredketamine.com/es/services/iv-ketamine-vs-spravato",
      "x-default": "https://www.rewiredketamine.com/services/iv-ketamine-vs-spravato",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}