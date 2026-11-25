import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terapia de Ketamina IV y en Casa | Servicios en Aventura",
  description: "Explore la infusión de ketamina, ketamina en casa, bienestar funcional, manejo médico y terapia de conversación en nuestra clínica de propiedad local en Aventura. Sesiones totalmente guiadas disponibles. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Infusión de Ketamina y Terapia en Casa en Aventura",
    description: "Clínica de ketamina en Aventura que atiende Miami y el sur de Florida. Infusión IV de ketamina, opciones en casa y sesiones totalmente guiadas disponibles. ¡Hablamos Español!",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services",
    languages: {
      en: "https://www.rewiredketamine.com/services",
      es: "https://www.rewiredketamine.com/es/services",
      "x-default": "https://www.rewiredketamine.com/services",
    },
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
