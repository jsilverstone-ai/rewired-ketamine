import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function IVKetamineCostPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <SiteHeader />

<section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
  <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
  <h1 className="text-3xl md:text-5xl font-bold mb-6">Why At-Home Ketamine Companies Advertise Lower Prices — and What That Means for Care in South Florida</h1>
  <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">National at-home programs often advertise lower monthly prices. See how their model differs from in-clinic IV care. Fully guided sessions available.</p>
  <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
</section>

      {/* MAIN CONTENT */}
<section id="main-content" className="py-16 px-6 bg-white">
  <div className="max-w-3xl mx-auto prose prose-lg text-[#444]">
    <p>National at-home ketamine companies frequently advertise lower monthly prices than in-clinic IV programs. The comparison is usually presented as simple: their service costs less, so it must be the better or more accessible option. The reality is more specific.</p>
    <p>Mindbloom and Joyous are two of the better-known examples. Both are venture-backed companies built to operate at national scale. Mindbloom has raised significant venture capital from firms including Founders Fund, Kleiner Perkins, and others, with total reported funding in the tens of millions. Joyous has raised roughly $12–15 million across multiple rounds from investors such as Square Peg Capital, AirTree Ventures, and Icehouse Ventures. These are not local medical practices. They are technology-enabled companies whose investors expect growth through volume.</p>
    <p>That business model shapes the product. At-home programs typically ship lower-dose oral or sublingual ketamine for use at home, with clinical contact happening remotely by video or messaging. The cost per dose can appear lower because the service is designed around remote delivery, standardized protocols, and high patient volume. There is no private treatment room, no continuous in-person monitoring during an IV infusion, and no clinician physically present for the session. The price reflects that difference in delivery.</p>
    <p>In-clinic IV ketamine is a different service. At a local practice such as Rewired Ketamine in Aventura, a standard mental health infusion starts at $440 for a single 1-hour session, or $2,300 for a package of six. Guided sessions with a clinician present throughout cost more and are listed separately. The higher per-session price includes the IV route, continuous monitoring, a private setting, and the option for real-time guidance during the infusion. These are not add-ons that appear later; they are part of the listed service. Fully guided sessions are available.</p>
    <p>The “cheaper” claim usually compares a remote, lower-dose, high-volume product to an in-person IV session. Once the setting, route, and level of clinical presence are the same, the gap narrows. National companies can keep advertised prices low because their model is built for volume across many states and because their investors are funding growth rather than a single local practice. Local clinics price according to the cost of delivering monitored IV care in a physical location.</p>
    <p>Patients in South Florida who are comparing options can look at three practical differences:</p>
    <ul>
      <li>Route and setting (at-home oral or sublingual versus monitored IV in a clinic)</li>
      <li>Clinical presence during the session (remote versus in-person)</li>
      <li>Total cost of a full course once packages and what is included are compared</li>
    </ul>
    <p>Rewired publishes its pricing so the comparison is visible. The at-home companies are also transparent about their model; the difference is that their model is designed for scale and volume, while a local clinic is designed around in-person IV sessions. Both exist. The lower advertised price reflects a different product, not simply a better deal on the same service.</p>
    <p>Current package pricing and what is included with each option are available on the <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">cost page</Link>. A free consultation is also open if you want to compare the two approaches directly. Patients from Miami, Fort Lauderdale, and South Florida are welcome. ¡Hablamos Español!</p>
    <div className="mt-10 text-center">
      <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded hover:bg-[#0B1D36] hover:text-white transition">Book a Free Consult</Link>
      <p className="mt-4 text-sm">Call or text (305) 676-6070</p>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}