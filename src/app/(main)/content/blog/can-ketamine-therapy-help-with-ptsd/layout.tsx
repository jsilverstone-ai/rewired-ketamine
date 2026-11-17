import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can Ketamine Therapy Help with PTSD? | Aventura",
  description: "A soft look at how ketamine may support individuals living with PTSD at our locally owned Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine Therapy for PTSD | Rewired Ketamine",
    description: "Exploring ketamine as part of a supportive plan for PTSD in South Florida.",
  },
  alternates: {
    canonical: "https://rewiredketamine.com/content/blog/can-ketamine-therapy-help-with-ptsd",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}