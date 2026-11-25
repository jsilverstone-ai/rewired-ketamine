import { blogPostEsMetadata } from "@/data/blog-posts-es";

export const metadata = blogPostEsMetadata("ketamina-para-la-ansiedad");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
