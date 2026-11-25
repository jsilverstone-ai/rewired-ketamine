import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terapia de Conversación | Cuidado Informado en Psicodélicos en Aventura",
  description: "Terapia de conversación interna y referida con especialistas que entienden la ketamina y la neuroplasticidad. Clínica de propiedad local en Aventura, FL. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Terapia de Conversación | Rewired Ketamine Aventura",
    description: "Terapia de conversación informada en psicodélicos y apoyo de integración en el Sur de Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/talk-therapy",
    languages: {
      en: "https://www.rewiredketamine.com/services/talk-therapy",
      es: "https://www.rewiredketamine.com/es/services/talk-therapy",
      "x-default": "https://www.rewiredketamine.com/services/talk-therapy",
    },
  },
};

export default function TalkTherapyLayout({ children }: { children: React.ReactNode }) {
  return children;
}