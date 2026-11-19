import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Costo de la Terapia de Ketamina en Aventura | Rewired Ketamine",
  description: "La ketamina IV generalmente es de pago en efectivo. Spravato puede estar cubierto cuando se cumplen los criterios REMS. Información clara de costos en nuestra clínica de Aventura que sirve Miami y el Sur de Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Costo de la Terapia de Ketamina | Rewired Ketamine Aventura",
    description: "Información de costos y seguro para ketamina IV y Spravato en nuestra clínica del Sur de Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/ketamine-therapy-cost",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}