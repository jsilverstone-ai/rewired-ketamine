import type { Metadata } from "next";

// Private dashboard: keep it out of search results.
export const metadata: Metadata = {
  title: "SEO Control Center",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.rewiredketamine.com/seo",
  },
};

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
