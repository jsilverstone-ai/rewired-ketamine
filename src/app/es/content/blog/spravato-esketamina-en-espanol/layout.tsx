import { blogPostEsMetadata } from "@/data/blog-posts-es";

export const metadata = blogPostEsMetadata("spravato-esketamina-en-espanol");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
