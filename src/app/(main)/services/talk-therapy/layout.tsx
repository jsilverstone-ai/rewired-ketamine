import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk Therapy | Psychedelic-Informed Care in Aventura",
  description: "In-house and referred talk therapy with specialists who understand ketamine and neuroplasticity. Locally owned clinic in Aventura, FL. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Talk Therapy | Rewired Ketamine Aventura",
    description: "Psychedelic-informed talk therapy and integration support in South Florida.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/services/talk-therapy",
    languages: {
      en: "https://www.rewiredketamine.com/services/talk-therapy",
      es: "https://www.rewiredketamine.com/es/services/talk-therapy",
      "x-default": "https://www.rewiredketamine.com/services/talk-therapy",
    },
  },
};

export default function TalkTherapyLayout({ children }: { children: React.ReactNode }) {
  return children;
}