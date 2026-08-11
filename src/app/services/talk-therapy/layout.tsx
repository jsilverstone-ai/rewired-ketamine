import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk Therapy | Psychedelic-Informed Care in Aventura",
  description: "In-house and referred talk therapy with specialists who understand ketamine and neuroplasticity. Locally owned clinic in Aventura, FL. ¡Hablamos Español!",
  openGraph: {
    title: "Talk Therapy | Rewired Ketamine Aventura",
    description: "Psychedelic-informed talk therapy and integration support in South Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/services/talk-therapy",
  },
};

export default function TalkTherapyLayout({ children }: { children: React.ReactNode }) {
  return children;
}