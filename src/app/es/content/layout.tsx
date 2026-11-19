import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contenido | Blog, Videos y Noticias | Rewired Ketamine Aventura",
  description: "Explore nuestro blog, videos educativos y las últimas noticias sobre ketamina de nuestra clínica de propiedad local en Aventura. Atendiendo Miami, Fort Lauderdale y el sur de Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Contenido | Rewired Ketamine Aventura",
    description: "Blog, videos y noticias sobre terapia con ketamina de nuestra clínica en el sur de Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/es/content",
  },
};

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
