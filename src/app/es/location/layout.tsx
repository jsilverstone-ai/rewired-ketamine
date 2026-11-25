import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ubicación | Clínica de Ketamina en Aventura, Sur de Florida",
  description: "Visite Rewired Ketamine en 2820 NE 214th St #1002, Aventura, FL 33180. Clínica de propiedad local que atiende Miami, Fort Lauderdale y el sur de Florida. Sesiones totalmente guiadas disponibles. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Ubicación | Rewired Ketamine Aventura",
    description: "Convenientemente ubicada en Aventura, Florida. Fácil acceso para pacientes de Miami y Fort Lauderdale.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/location",
    languages: {
      en: "https://www.rewiredketamine.com/location",
      es: "https://www.rewiredketamine.com/es/location",
      "x-default": "https://www.rewiredketamine.com/location",
    },
  },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
