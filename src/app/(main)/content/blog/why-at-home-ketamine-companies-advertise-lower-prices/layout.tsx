import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why At-Home Ketamine Companies Advertise Lower Prices — and What That Means for Care in South Florida",
  description: "National at-home ketamine programs often advertise lower monthly prices. See how their model differs from in-clinic IV care at our locally owned Aventura clinic. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "At-Home vs In-Clinic Ketamine Pricing | Rewired Ketamine",
    description: "Why national at-home companies price differently, and what that means for patients in Miami and Aventura.",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/why-at-home-ketamine-companies-advertise-lower-prices",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}