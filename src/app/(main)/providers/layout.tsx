import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Providers | Clinical & Medical Directors in Aventura",
  description: "Meet the team at Rewired Ketamine in Aventura — Clinical Director Kelsey Vivatson, Medical Director Jacob Silverstone, and our experienced providers. Locally owned clinic serving South Florida. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Our Providers | Rewired Ketamine Aventura",
    description: "Experienced clinical and medical leadership at our locally owned ketamine clinic in Aventura, Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/providers",
    languages: {
      en: "https://www.rewiredketamine.com/providers",
      es: "https://www.rewiredketamine.com/es/providers",
      "x-default": "https://www.rewiredketamine.com/providers",
    },
  },
};

export default function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return children;
}