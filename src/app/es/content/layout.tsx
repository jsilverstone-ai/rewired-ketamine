import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contenido | Blog, Videos y Noticias | Rewired Ketamine Aventura",
  description: "Explore nuestro blog, videos educativos y las últimas noticias sobre ketamina de nuestra clínica de propiedad local en Aventura. Atendiendo Miami, Fort Lauderdale y el sur de Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home-es.png", width: 1200, height: 630, alt: "Rewired Ketamine — terapia de ketamina en Aventura, Florida" }],
    title: "Contenido | Rewired Ketamine Aventura",
    description: "Blog, videos y noticias sobre terapia con ketamina de nuestra clínica en el sur de Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/content",
    languages: {
      en: "https://www.rewiredketamine.com/content",
      es: "https://www.rewiredketamine.com/es/content",
      "x-default": "https://www.rewiredketamine.com/content",
    },
  },
};

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
