import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Blog en Español | Ketamina, Depresión y Ansiedad | Rewired Ketamine" },
  description: "Artículos escritos en español sobre depresión, ansiedad, trauma y terapia con ketamina, con revisión médica. Clínica de propiedad local en Aventura, FL. ¡Hablamos Español!",
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
