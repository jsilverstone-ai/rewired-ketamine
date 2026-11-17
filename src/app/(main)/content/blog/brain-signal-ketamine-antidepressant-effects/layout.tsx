import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brain Signals After Ketamine: What a New EEG Study Found | Aventura",
  description: "Texas A&M research on EEG changes after one ketamine infusion in older veterans. Context for patients exploring care at our Aventura clinic. ¡Hablamos Español!",
  openGraph: {
    title: "Brain Signal Linked to Ketamine’s Effects | Rewired Ketamine",
    description: "New EEG research after a single ketamine infusion — not a treatment claim.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/brain-signal-ketamine-antidepressant-effects",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}