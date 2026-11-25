import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine for Religious Scrupulosity OCD | Aventura",
  description: "Scrupulosity is OCD focused on religious or moral fears. How ketamine may fit alongside ERP therapy, with respect for your faith, at our Aventura clinic. ¡Hablamos Español!",
  openGraph: {
    images: [{ url: "https://www.rewiredketamine.com/og/og-home.png", width: 1200, height: 630, alt: "Rewired Ketamine — ketamine therapy in Aventura, Florida" }],
    title: "Ketamine and Religious Scrupulosity OCD | Rewired Ketamine",
    description: "How ketamine may fit alongside ERP for scrupulosity, with respect for your faith and community.",
    type: "article",
    url: "https://www.rewiredketamine.com/content/blog/ketamine-religious-scrupulosity-ocd",
  },
  alternates: {
    canonical: "https://www.rewiredketamine.com/content/blog/ketamine-religious-scrupulosity-ocd",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
