import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { faqs } from "../../../data/faqs";

export default function FAQPage({ params }: { params: { slug: string } }) {
  const page = faqs.find((f) => f.slug === params.slug);
  if (!page) return notFound();

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">{page.h1}</h1>
        <p className="text-lg md:text-xl text-white/80 mb-6">{page.description}</p>
        <p className="text-[#C9A66B] font-bold text-lg">¡Hablamos Español!</p>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {page.faqs.map((item, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-[#0B1D36] mb-2">{item.question}</h2>
              <p className="text-[#555] leading-relaxed">{item.answer}</p>
            </div>
          ))}
          {page.related && (
            <p className="mt-10">
              Learn more on our{" "}
              <Link href={page.related} className="text-[#C9A66B] font-semibold hover:underline">
                related treatment page
              </Link>
              .
            </p>
          )}
          <p className="mt-6">
            <Link href="/faq" className="text-[#C9A66B] font-semibold hover:underline">
              ← All FAQs
            </Link>
          </p>
        </div>
      </section>

      <footer className="bg-[#0B1D36] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <Image src="/logo.png" alt="Rewired Ketamine" width={200} height={60} className="h-12 w-auto mb-4" />
              <p className="text-white/70 text-sm">Locally owned ketamine clinic in Aventura serving Miami and South Florida.</p>
            </div>
            <div>
              <a href="https://www.legitscript.com/websites/?checker_keywords=rewiredketamine.com" target="_blank" rel="noopener noreferrer">
                <Image src="/legitscript.png" alt="LegitScript Certified" width={150} height={75} className="h-16 w-auto" />
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-5 text-[#C9A66B]">Quick Links</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link href="/" className="hover:text-[#C9A66B] transition">Home</Link></li>
                <li><Link href="/services" className="hover:text-[#C9A66B] transition">Our Services</Link></li>
                <li><Link href="/treatments" className="hover:text-[#C9A66B] transition">Treatments</Link></li>
                <li><Link href="/providers" className="hover:text-[#C9A66B] transition">Providers</Link></li>
                <li><Link href="/content/blog" className="hover:text-[#C9A66B] transition">Blog</Link></li>
                <li><Link href="/location" className="hover:text-[#C9A66B] transition">Location</Link></li>
                <li><Link href="/#contact" className="hover:text-[#C9A66B] transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p className="mb-4 max-w-4xl mx-auto">The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis, or treatment. All content is for general information purposes only.</p>
            © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}
