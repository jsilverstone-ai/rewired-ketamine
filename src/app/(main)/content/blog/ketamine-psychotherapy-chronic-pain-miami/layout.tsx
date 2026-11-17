import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine and Psychotherapy for Chronic Pain | Miami & Aventura",
  description: "New research explores combining ketamine with psychotherapy for chronic neuropathic pain. Learn what this could mean for patients seeking ketamine treatment in Miami, Aventura, and South Florida. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Ketamine + Psychotherapy for Chronic Pain | Rewired Ketamine Miami",
    description: "Emerging research on combining ketamine and psychotherapy for chronic pain. Local care available in Aventura and Miami.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-psychotherapy-chronic-pain-miami",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}