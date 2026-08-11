import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rewired Ketamine | Ketamine Therapy in Aventura, South Florida",
    template: "%s | Rewired Ketamine Aventura"
  },
  description: "Locally owned ketamine clinic in Aventura, FL offering fully guided sessions for depression, anxiety, PTSD, chronic pain, and more. Serving Miami, Fort Lauderdale & South Florida. ¡Hablamos Español!",
  keywords: [
    "ketamine therapy Aventura",
    "ketamine clinic Miami",
    "ketamine infusion South Florida",
    "treatment resistant depression Aventura",
    "ketamine for anxiety Fort Lauderdale",
    "locally owned ketamine clinic",
    "hablamos español ketamine"
  ],
  authors: [{ name: "Rewired Ketamine" }],
  openGraph: {
    title: "Rewired Ketamine | Ketamine Therapy in Aventura, South Florida",
    description: "Locally owned ketamine clinic in Aventura offering fully guided sessions for depression, anxiety, PTSD and chronic pain. Serving Miami & Fort Lauderdale. ¡Hablamos Español!",
    url: "https://rewiredketamine.com",
    siteName: "Rewired Ketamine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewired Ketamine | Ketamine Therapy in Aventura",
    description: "Locally owned ketamine clinic in Aventura, FL. Fully guided sessions available. ¡Hablamos Español!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rewiredketamine.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}