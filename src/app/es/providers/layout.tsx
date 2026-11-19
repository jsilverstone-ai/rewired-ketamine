import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Proveedores | Directores Clínicos y Médicos en Aventura",
  description: "Conozca al equipo de Rewired Ketamine en Aventura — Directora Clínica Kelsey Vivatson, Director Médico Jacob Silverstone y nuestros proveedores experimentados. Clínica de propiedad local que atiende el sur de Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Nuestros Proveedores | Rewired Ketamine Aventura",
    description: "Liderazgo clínico y médico experimentado en nuestra clínica de ketamina de propiedad local en Aventura, Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/providers",
  },
};

export default function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
