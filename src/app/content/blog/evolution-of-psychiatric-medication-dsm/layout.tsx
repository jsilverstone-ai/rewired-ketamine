import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Evolution of Psychiatric Medication & the DSM | Aventura",
  description: "A clear look at how psychiatric diagnosis and medication have evolved — from early DSM editions to SSRIs — and what it means for patients exploring ketamine for depression in Miami and Aventura. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    title: "Evolution of Psychiatric Medication & the DSM | Rewired Ketamine",
    description: "Understanding the history of psychiatric diagnosis and medication, and how newer approaches like ketamine fit into modern care.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/evolution-of-psychiatric-medication-dsm",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}