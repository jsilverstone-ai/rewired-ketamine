import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terapia de Conversación | Cuidado Informado en Psicodélicos en Aventura",
  description: "Terapia de conversación interna y referida con especialistas que entienden la ketamina y la neuroplasticidad. Clínica de propiedad local en Aventura, FL. ¡Hablamos Español!",
  openGraph: {
    title: "Terapia de Conversación | Rewired Ketamine Aventura",
    description: "Terapia de conversación informada en psicodélicos y apoyo de integración en el Sur de Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/services/talk-therapy",
  },
};

export default function TalkTherapyLayout({ children }: { children: React.ReactNode }) {
  return children;
}