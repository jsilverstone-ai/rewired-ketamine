import Link from "next/link";
import { faqs } from "../../../data/faqs";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function FAQIndexPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <SiteHeader />

      <section className="relative bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Common questions about guided ketamine care at our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {faqs.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/faq/${item.slug}`}
                  className="block bg-white border border-[#eee] rounded-2xl p-6 hover:shadow-md transition"
                >
                  <h2 className="text-xl font-bold text-[#0B1D36] mb-1">{item.h1}</h2>
                  <p className="text-[#555] text-sm">{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

<SiteFooter />
    </main>
  );
}
