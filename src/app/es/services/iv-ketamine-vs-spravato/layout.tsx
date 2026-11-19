import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamina IV vs Spravato en Aventura y Miami | Rewired Ketamine",
  description: "Compara la ketamina IV y Spravato (esketamina) en Rewired Ketamine en Aventura. Conoce las diferencias en ruta, entorno, monitoreo, seguro y quién puede adaptarse a cada opción. Consulta gratuita.",
  openGraph: {
    title: "Ketamina IV vs Spravato en Aventura y Miami",
    description: "Compara la ketamina IV y Spravato en nuestra clínica de Aventura. Sirviendo Miami y el Sur de Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/iv-ketamine-vs-spravato",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}