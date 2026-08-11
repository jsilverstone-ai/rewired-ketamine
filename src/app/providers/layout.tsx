import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Providers | Clinical & Medical Directors in Aventura",
  description: "Meet the team at Rewired Ketamine in Aventura — Clinical Director Kelsey Vivatson, Medical Director Jacob Silverstone, and our experienced providers. Locally owned clinic serving South Florida. ¡Hablamos Español!",
  openGraph: {
    title: "Our Providers | Rewired Ketamine Aventura",
    description: "Experienced clinical and medical leadership at our locally owned ketamine clinic in Aventura, Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/providers",
  },
};

export default function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return children;
}