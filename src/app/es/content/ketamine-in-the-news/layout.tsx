import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamina en las Noticias | Rewired Ketamine Aventura",
  description: "Últimas investigaciones y cobertura sobre terapia con ketamina. Clínica de propiedad local en Aventura, FL. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/content/ketamine-in-the-news",
    languages: {
      "en": "https://www.rewiredketamine.com/content/ketamine-in-the-news",
      "es": "https://www.rewiredketamine.com/es/content/ketamine-in-the-news",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
