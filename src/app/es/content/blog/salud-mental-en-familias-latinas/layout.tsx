import { blogPostEsMetadata } from "@/data/blog-posts-es";

export const metadata = blogPostEsMetadata("salud-mental-en-familias-latinas");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
