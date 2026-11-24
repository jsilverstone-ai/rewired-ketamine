import Link from "next/link";
import { blogPosts } from "../../../../data/blog-posts";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function BlogPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
          Insights on ketamine therapy, mental wellness, and care at our locally owned Aventura clinic. Serving Miami and South Florida.
        </p>
        <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/content/blog/${post.slug}`} className="block bg-white border border-[#eee] rounded-2xl p-6 hover:shadow-lg transition">
                <p className="text-sm text-[#C9A66B] font-semibold mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-[#0B1D36] mb-3">{post.title}</h2>
                <p className="text-[#555] text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}