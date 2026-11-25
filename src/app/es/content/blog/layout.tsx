import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Artículos educativos sobre terapia con ketamina. Clínica de propiedad local en Aventura, FL. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/content/blog",
    languages: {
      "en": "https://www.rewiredketamine.com/content/blog",
      "es": "https://www.rewiredketamine.com/es/content/blog",
      "x-default": "https://www.rewiredketamine.com/content/blog",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
