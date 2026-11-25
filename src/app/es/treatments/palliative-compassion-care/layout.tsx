import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuidado Paliativo y Compasión | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Cuidado de apoyo con ketamina centrado en la dignidad y la calidad de vida en Aventura, FL. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/treatments/palliative-compassion-care",
    languages: {
      "en": "https://www.rewiredketamine.com/treatments/palliative-compassion-care",
      "es": "https://www.rewiredketamine.com/es/treatments/palliative-compassion-care",
      "x-default": "https://www.rewiredketamine.com/treatments/palliative-compassion-care",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
