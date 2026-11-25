import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Proveedores | Directores Clínicos y Médicos en Aventura",
  description: "Conozca al equipo de Rewired Ketamine en Aventura — Directora Clínica Kelsey Vivatson, Director Médico Jacob Silverstone y nuestros proveedores experimentados. Clínica de propiedad local que atiende el sur de Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Nuestros Proveedores | Rewired Ketamine Aventura",
    description: "Liderazgo clínico y médico experimentado en nuestra clínica de ketamina de propiedad local en Aventura, Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/providers",
    languages: {
      en: "https://www.rewiredketamine.com/providers",
      es: "https://www.rewiredketamine.com/es/providers",
      "x-default": "https://www.rewiredketamine.com/providers",
    },
  },
};

export default function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
