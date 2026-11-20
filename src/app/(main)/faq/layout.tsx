import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Rewired Ketamine",
  description: "Frequently asked questions about ketamine therapy at Rewired Ketamine in Aventura.",
  alternates: {
    canonical: "https://www.rewiredketamine.com/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}