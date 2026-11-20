import type { Metadata } from "next";

const canonical = "https://www.rewiredketamine.com/treatments/burnout";
const ogImage = "https://www.rewiredketamine.com/logo.png";

export const metadata: Metadata = {
  title: "Ketamine for Burnout & High-Stress Professionals | Aventura, FL",
  description:
    "Guided IV ketamine for high-stress professionals in Aventura. Transparent package pricing. Serving Miami and Fort Lauderdale. ¡Hablamos Español!",
  authors: [{ name: "Rewired Ketamine" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical,
  },
  openGraph: {
    type: "article",
    url: canonical,
    siteName: "Rewired Ketamine",
    locale: "en_US",
    title: "Ketamine for Burnout & High-Stress Professionals | Rewired Ketamine",
    description:
      "Guided IV sessions with published package rates. Private monitored rooms in Aventura.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Rewired Ketamine — Aventura, Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketamine for Burnout & High-Stress Professionals | Rewired Ketamine",
    description:
      "Guided IV sessions with published package rates. Private monitored rooms in Aventura.",
    images: [ogImage],
  },
};

export default function BurnoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}