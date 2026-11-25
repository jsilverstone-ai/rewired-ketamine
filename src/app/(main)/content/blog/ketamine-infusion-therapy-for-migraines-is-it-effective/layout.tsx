import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Infusion Therapy For Migraines: Is It Effective?",
  description: "What we can say carefully about ketamine for migraines and chronic migraine care in Florida. Fully guided sessions available. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Is Ketamine Effective for Migraines? | Rewired Ketamine",
    description: "Evidence-aware education for patients in Aventura and Miami.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-infusion-therapy-for-migraines-is-it-effective",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}