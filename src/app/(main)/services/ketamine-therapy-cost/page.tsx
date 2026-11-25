import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineTherapyCostPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <SiteHeader />

      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
       <h1 className="text-3xl md:text-5xl font-bold mb-6">What Does Ketamine Therapy Cost in Aventura and Miami?</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
          Clear information on IV ketamine and Spravato pricing at our locally owned Aventura clinic. Serving Miami, Fort Lauderdale, and South Florida.
        </p>
        <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

<section id="main-content" className="py-16 px-6 bg-white">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1D36] mb-4">
      What Does Ketamine Therapy Cost in Aventura and Miami?
    </h2>
    <p className="text-center text-lg text-[#444] max-w-3xl mx-auto mb-10">
      At Rewired Ketamine we show real pricing and explain what is included. Compare total care — guidance, monitoring, private rooms, and next steps — not just the infusion price.
    </p>

    <h3 className="text-2xl font-semibold text-center text-[#0B1D36] mb-8">IV Ketamine Pricing</h3>

    <div className="grid md:grid-cols-2 gap-8 mb-10">
      {/* Mental Health */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-[#0B1D36] text-white text-center py-5">
          <h3 className="text-xl font-semibold">Mental Health Protocol</h3>
          <p className="text-sm text-white/70">1 Hour IV Ketamine Infusion</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex justify-between border-b pb-3"><span>Single Session</span><span className="font-semibold">$440</span></div>
          <div className="flex justify-between border-b pb-3"><span>Package of 3</span><span className="font-semibold">$1,200</span></div>
          <div className="flex justify-between"><span>Package of 6</span><span className="font-semibold">$2,300</span></div>
        </div>
      </div>

      {/* Chronic Pain */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-[#0B1D36] text-white text-center py-5">
          <h3 className="text-xl font-semibold">Chronic Pain Protocol</h3>
          <p className="text-sm text-white/70">2 Hour IV Ketamine Infusion</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex justify-between border-b pb-3"><span>Single Session</span><span className="font-semibold">$590</span></div>
          <div className="flex justify-between border-b pb-3"><span>Package of 3</span><span className="font-semibold">$1,700</span></div>
          <div className="flex justify-between"><span>Package of 6</span><span className="font-semibold">$3,200</span></div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-10">
      {/* Guided 1 Hour */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-[#0B1D36] text-white text-center py-5">
          <h3 className="text-xl font-semibold">Guided Sessions</h3>
          <p className="text-sm text-white/70">1 Hour IV + Guide</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex justify-between border-b pb-3"><span>Single Session</span><span className="font-semibold">$590</span></div>
          <div className="flex justify-between border-b pb-3"><span>Package of 3</span><span className="font-semibold">$1,500</span></div>
          <div className="flex justify-between"><span>Package of 6</span><span className="font-semibold">$2,900</span></div>
        </div>
      </div>

      {/* Guided 2 Hour */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-[#0B1D36] text-white text-center py-5">
          <h3 className="text-xl font-semibold">Guided Sessions</h3>
          <p className="text-sm text-white/70">2 Hour IV + Guide</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex justify-between border-b pb-3"><span>Single Session</span><span className="font-semibold">$690</span></div>
          <div className="flex justify-between border-b pb-3"><span>Package of 3</span><span className="font-semibold">$1,925</span></div>
          <div className="flex justify-between"><span>Package of 6</span><span className="font-semibold">$4,000</span></div>
        </div>
      </div>
    </div>

    <p className="text-center text-sm text-[#555] mb-12">Ask us about available discounts. Consultation required before treatment.</p>
<p className="text-center mb-12 -mt-8"><Link href="/tools/ketamine-cost-calculator" className="text-[#C9A66B] font-semibold hover:underline">Compare single sessions and packages with our cost calculator →</Link> · <Link href="/services/hsa-fsa-ketamine" className="text-[#C9A66B] font-semibold hover:underline">Using HSA or FSA funds →</Link></p>

    {/* What changes the price */}
    <div className="max-w-3xl mx-auto mb-14">
      <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">What changes the price?</h3>
      <ul className="space-y-2 text-[#333] list-disc pl-5">
        <li>1-hour mental health protocol vs 2-hour chronic pain protocol</li>
        <li>Standard session vs fully guided session (a clinical team member stays with you)</li>
        <li>Single session vs package of 3 or 6</li>
        <li>Consultation, continuous monitoring, private treatment room, and follow-up</li>
        <li>Integration support (included in guided options or available separately)</li>
      </ul>
      <p className="mt-4 text-[#444]">
        Our posted mental-health IV protocol starts at $440 per session and $2,300 for six. Guided options are listed separately so you can see the full cost of a typical course.
      </p>
    </div>

    {/* Spravato note */}
    <div className="max-w-3xl mx-auto text-center mb-14">
      <p className="mb-4">
        IV ketamine is usually cash-pay. Spravato (esketamine nasal spray) may be covered by some insurance plans when REMS criteria are met. Coverage is not guaranteed and prior authorization is usually required.
      </p>
      <Link href="/services/iv-ketamine-vs-spravato" className="text-[#C9A66B] font-semibold hover:underline">
        See the full IV Ketamine vs Spravato comparison →
      </Link>
    </div>

    {/* Comparison checklist */}
    <div className="max-w-3xl mx-auto mb-14">
      <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">If you are comparing ketamine clinics in Aventura, ask these questions</h3>
      <ul className="space-y-3 text-[#333]">
        <li>• Is the clinic focused on mental health, or is ketamine one of many wellness services?</li>
        <li>• Who stays with you during the infusion?</li>
        <li>• Is the session fully guided?</li>
        <li>• What monitoring is used?</li>
        <li>• What happens after the infusion?</li>
        <li>• Is integration included or separate?</li>
        <li>• What is the full cost of a typical induction course?</li>
        <li>• If Spravato is discussed, is the clinic REMS-certified and will they handle prior authorization?</li>
      </ul>
      <p className="mt-6 text-[#444]">
        Rewired Ketamine makes pricing, guidance, monitoring, and next steps clear. We are a locally owned clinic in Aventura serving Miami, Fort Lauderdale, and South Florida.
      </p>
    </div>

    <div className="text-center">
      <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded hover:bg-[#0B1D36] hover:text-white transition">
        Book a Free Consultation
      </Link>
      <p className="mt-4 text-sm text-[#555]">Or call/text (305) 676-6070</p>
    </div>
  </div>
</section>
      <SiteFooter />
    </main>
  );
}