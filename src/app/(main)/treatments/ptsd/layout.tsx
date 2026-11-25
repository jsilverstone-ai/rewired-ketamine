import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for PTSD in Aventura | South Florida",
  description: "Ketamine therapy support for PTSD at our locally owned Aventura clinic. Fully guided sessions available. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine for PTSD | Rewired Ketamine Aventura",
    description: "Thoughtful ketamine support for individuals living with PTSD in South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/treatments/ptsd",
    languages: {
      en: "https://www.rewiredketamine.com/treatments/ptsd",
      es: "https://www.rewiredketamine.com/es/treatments/ptsd",
      "x-default": "https://www.rewiredketamine.com/treatments/ptsd",
    },
  },
};

export default function PTSDLayout({ children }: { children: React.ReactNode }) {
  return children;
}