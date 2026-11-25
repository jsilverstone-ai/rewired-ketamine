import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niebla Mental | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Apoyo con ketamina para la niebla mental y claridad cognitiva en Aventura, FL. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/mental-fogginess",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/mental-fogginess",
      "es": "https://www.rewiredketamine.com/es/treatments/mental-fogginess",
      "x-default": "https://www.rewiredketamine.com/treatments/mental-fogginess",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
