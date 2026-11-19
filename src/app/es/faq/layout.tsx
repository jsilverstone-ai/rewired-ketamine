import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Clínica de Ketamina en Aventura",
  description: "Preguntas comunes sobre el cuidado con ketamina guiada en nuestra clínica de propiedad local en Aventura. Atendiendo Miami, Fort Lauderdale y el sur de Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Preguntas Frecuentes | Rewired Ketamine Aventura",
    description: "Respuestas a preguntas comunes sobre la terapia con ketamina en nuestra clínica de Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
