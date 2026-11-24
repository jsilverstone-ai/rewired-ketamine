import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function SpravatoREMSvsIVKetamine() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
<section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
  <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
  <h1 className="text-3xl md:text-5xl font-bold mb-6">At-Home Ketamine Treatment in Florida: Options, Safety, and Cost</h1>
  <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
    Oral, nasal, and rectal options with clinical oversight from our locally owned Aventura clinic. Serving patients across Florida.
  </p>
  <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
</section>

 <section id="main-content" className="py-16 px-6 bg-white">
  <div className="max-w-3xl mx-auto prose prose-lg text-[#444]">
    <p>
      People searching for at-home ketamine in Florida often want a lower-cost option that still has clinical oversight. Rewired Ketamine, a locally owned clinic in Aventura, offers oral, nasal, and rectal formulations for qualified patients. These are not mail-order products with no follow-up. A consult and medical screening come first. Fully guided in-clinic sessions remain available when that is the safer or preferred choice.
    </p>

    <h2>Oral, nasal, and rectal options we offer</h2>
    <p>
      We work with three main at-home routes:
    </p>
    <ul>
      <li><strong>Oral</strong> — rapid-dissolve tablets. Easy to take and often the most affordable starting point.</li>
      <li><strong>Nasal</strong> — a spray that can improve absorption for some people compared with swallowing a tablet.</li>
      <li><strong>Rectal</strong> — another option when oral absorption is limited or when a different route is preferred for comfort or bioavailability.</li>
    </ul>
    <p>
      The right route depends on your history, goals, and how your body handles the medication. That is decided during the consult, not from a standard package.
    </p>

    <h2>Starting prices</h2>
    <p>
      Multiple-dose packages currently start at:
    </p>
    <ul>
      <li>Oral: $225</li>
      <li>Rectal: $275</li>
      <li>Nasal: $325</li>
    </ul>
    <p>
      These are starting points for multiple doses with clinical guidance. Exact pricing is confirmed after screening. Many people find these options more affordable than repeated clinic copays for Spravato or a full series of in-clinic IV sessions. Full details are on the <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">cost page</Link>.
    </p>

    <h2>Screening and follow-up are still required</h2>
    <p>
      At-home treatment is not appropriate for everyone. We review medical history, current medications, blood pressure concerns, substance-use history, and treatment goals before any medication is arranged. Follow-up is part of the plan. If safety issues appear or if you need closer monitoring, we recommend in-clinic care instead.
    </p>
    <p>
      A driver is not required the way it is for an in-clinic infusion, but you should still plan to be in a safe setting and not drive while effects are present.
    </p>

    <h2>When in-clinic guided care is the better fit</h2>
    <p>
      Some people prefer a private treatment room at our Aventura office with continuous monitoring and a team member present. Fully guided sessions are available for those who want that level of support, or when medical screening indicates it is the safer choice. Conditions such as treatment-resistant depression, anxiety, PTSD, or chronic pain can be addressed either way; the consult decides which setting makes sense.
    </p>
    <p>
      Patients from Miami, Fort Lauderdale, North Miami, and across Florida work with us. ¡Hablamos Español!
    </p>

    <p>
      Learn more on the <Link href="/services/home-ketamine" className="text-[#C9A66B] font-semibold hover:underline">home ketamine page</Link> or compare options on the <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">cost page</Link>.
    </p>

    <div className="mt-10 text-center">
      <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded hover:bg-[#0B1D36] hover:text-white transition">Book a Free Consult</Link>
      <p className="mt-4 text-sm">Call or text (305) 676-6070 · Aventura, FL</p>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}