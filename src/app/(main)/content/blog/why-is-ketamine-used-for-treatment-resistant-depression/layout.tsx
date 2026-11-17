import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Is Ketamine Used For Treatment-Resistant Depression? | Aventura",
  description: "Why ketamine is used for treatment-resistant depression, how it works differently, and what patients in Miami and Aventura should know. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Why Ketamine Is Used for Treatment-Resistant Depression",
    description: "Educational overview of ketamine for depression care.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/why-is-ketamine-used-for-treatment-resistant-depression",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}