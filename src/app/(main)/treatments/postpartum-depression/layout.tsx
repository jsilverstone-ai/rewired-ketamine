// Add / update this in app/(main)/treatments/postpartum-depression/layout.tsx
// or page.tsx metadata export

import type { Metadata } from "next";

const canonical = "https://www.rewiredketamine.com/treatments/postpartum-depression";
const ogImage = "https://www.rewiredketamine.com/logo.png"; // replace with 1200x630 when available

export const metadata: Metadata = {
  title: "Ketamine for Postpartum Depression | Aventura, FL",
  description:
    "Support for postpartum depression with ketamine therapy at our Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
  authors: [{ name: "Rewired Ketamine" }],
  robots: { index: true, follow: true },
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    siteName: "Rewired Ketamine",
    locale: "en_US",
    title: "Ketamine for Postpartum Depression | Rewired Ketamine",
    description:
      "Thoughtful care during a critical time for new mothers in South Florida.",
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
    title: "Ketamine for Postpartum Depression | Rewired Ketamine",
    description:
      "Thoughtful care during a critical time for new mothers in South Florida.",
    images: [ogImage],
  },
};
