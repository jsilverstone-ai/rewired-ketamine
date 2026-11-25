import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caregiver’s Guide to At-Home Ketamine in Florida",
  description: "How to support a loved one during at-home ketamine treatment: being present, safety basics, when to call us, and taking care of yourself. From our Aventura clinic. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "A Caregiver’s Guide to At-Home Ketamine | Rewired Ketamine",
    description: "Practical ways to support someone you love through at-home ketamine treatment in Florida.",
    type: "article",
    url: "https://www.rewiredketamine.com/content/blog/caregivers-guide-at-home-ketamine-florida",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/caregivers-guide-at-home-ketamine-florida",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
