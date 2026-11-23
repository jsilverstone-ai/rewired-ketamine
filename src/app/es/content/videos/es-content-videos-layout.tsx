import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Terapia con Ketamina en Aventura | Rewired Ketamine",
  description: "Videos educativos sobre terapia con ketamina. Clínica de propiedad local en Aventura, FL. ¡Hablamos Español!",
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/content/videos",
    languages: {
      "en": "https://www.rewiredketamine.com/content/videos",
      "es": "https://www.rewiredketamine.com/es/content/videos",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
