import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Ketamine Sessions Do Most People Need?",
  description: "Most people begin with a 6-session induction series. See why packages exist, real pricing at our Aventura clinic, and how boosters are decided later. ¡Hablamos Español!",
  openGraph: {
    title: "How Many Ketamine Sessions | Rewired Ketamine Aventura",
    description: "Typical induction series and package options at our South Florida clinic.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/how-many-ketamine-sessions-do-most-people-need",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}