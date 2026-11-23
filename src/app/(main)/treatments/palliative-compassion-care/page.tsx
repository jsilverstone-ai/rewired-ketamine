import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PalliativeCompassionCarePage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Palliative & Compassion Care</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-6">
            Supportive ketamine therapy focused on comfort, dignity, and quality of life at our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-[#444]">
            <p className="text-xl leading-relaxed mb-8">
              Palliative and compassion-focused care centers on comfort, dignity, and quality of life. At our locally owned clinic in Aventura, we offer ketamine therapy as a supportive option for individuals and families navigating complex or advanced illness.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">How Ketamine May Support Comfort and Well-Being</h2>
            <p className="mb-6">
              Ketamine may help ease certain types of pain and emotional distress. Some individuals experience improved comfort and a greater sense of ease during a difficult time.
            </p>
            <p className="mb-6">
              Fully guided sessions are available for those who prefer additional support. We focus on creating a calm, private, and deeply respectful environment.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">A Thoughtful Approach to Care</h2>
            <p className="mb-6">
              Our goal is to support comfort and quality of life with care and compassion. Ketamine therapy may be considered when other approaches have not provided enough relief.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Care at Our Aventura Clinic</h2>
            <p className="mb-6">
              As a locally owned practice serving Miami, Fort Lauderdale, and South Florida, we provide thoughtful, medically supervised care. ¡Hablamos Español!
            </p>
          </div>

          <div className="mt-14 bg-[#0B1D36] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to talk with our team?</h3>
            <p className="text-white/80 mb-6">Schedule a free consultation at our Aventura clinic.</p>
            <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-3 rounded-full hover:bg-white transition">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
                Is ketamine used in palliative and compassion-focused care?
              </h3>
              <p className="text-[#555] leading-relaxed">
                Yes. Ketamine may be considered as a supportive option for individuals seeking greater comfort when other approaches have not provided enough relief.
              </p>
            </div>

            <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
                Are fully guided sessions available for palliative care at your Aventura clinic?
              </h3>
              <p className="text-[#555] leading-relaxed">
                Yes. Fully guided sessions are available in a calm, private, and respectful setting at our Aventura location.
              </p>
            </div>

            <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
                Do you offer this care to patients outside Aventura?
              </h3>
              <p className="text-[#555] leading-relaxed">
                Yes. We serve patients from Miami, Fort Lauderdale, and across South Florida from our Aventura clinic.
              </p>
            </div>

            <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
                How is ketamine used differently in palliative care compared to other treatments?
              </h3>
              <p className="text-[#555] leading-relaxed">
                In palliative settings, the focus is on comfort and quality of life. Ketamine may help ease certain types of pain or emotional distress for some individuals when traditional approaches have not been enough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}