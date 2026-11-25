import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Clínica de Ketamina en Aventura",
  description: "Preguntas comunes sobre el cuidado con ketamina guiada en nuestra clínica de propiedad local en Aventura. Atendiendo Miami, Fort Lauderdale y el sur de Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Preguntas Frecuentes | Rewired Ketamine Aventura",
    description: "Respuestas a preguntas comunes sobre la terapia con ketamina en nuestra clínica de Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/faq",
    languages: {
      en: "https://www.rewiredketamine.com/faq",
      es: "https://www.rewiredketamine.com/es/faq",
      "x-default": "https://www.rewiredketamine.com/faq",
    },
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
