import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function DrJacobSilverstoneKetamineTherapyTraumaHealingPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <SiteHeader />

      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Dr. Jacob Silverstone on Ketamine Therapy and Trauma Healing</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
          A conversation on guided ketamine care at our locally owned Aventura clinic. Serving Miami and South Florida.
        </p>
        <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg text-[#444]">
          <p>
            Dr. Jacob Silverstone, Medical Director at Rewired Ketamine in Aventura, recently joined the HFB Podcast to discuss ketamine therapy and trauma healing. The clinic at 2820 NE 214th St Suite 1002 serves patients from Miami, Fort Lauderdale, and South Florida. Fully guided sessions are available.
          </p>
          <p>
            <a href="https://hfbpodcast.com/dr-jacob-silverstone-ketamine-therapy-trauma-healing/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] font-semibold hover:underline">
              Listen to the episode on HFB Podcast
            </a>
          </p>
          <p className="mt-8">
            Learn more about our <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">ketamine clinic in Aventura serving Miami</Link>.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}