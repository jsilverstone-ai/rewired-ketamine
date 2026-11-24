import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function IVKetamineCostPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">What Does a Full Course of IV Ketamine Cost in Aventura and Miami?</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
          See real package pricing and what is included at our locally owned clinic. Fully guided sessions available.
        </p>
        <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* MAIN CONTENT */}
      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg text-[#444]">
          <p>
            Most people searching for ketamine therapy eventually land on the same question: what will a full course actually cost, and what am I getting for that money?
          </p>
          <p>
            In Aventura and the broader Miami area, the answer depends on the type of clinic, the length of the session, whether guidance is included, and whether you are comparing a single infusion to a package. At Rewired Ketamine, a full course of IV ketamine for mental health typically runs between six sessions. A single standard 1-hour mental health infusion starts at $440. A package of six is $2,300. Guided sessions (where a clinician is present and working with you throughout the infusion) are higher and are listed clearly on the cost page so you can compare them side by side. Fully guided sessions are available.
          </p>
          <p>
            The biggest difference between clinics is usually not the price of the medicine itself. It is what surrounds the infusion. Some practices include monitoring, a private room, and structured integration support in the listed price. Others advertise a lower number and add fees later. National at-home programs (companies such as Mindbloom, Joyous, and Better U) are often venture-backed and operate on a subscription or kit model. Their advertised monthly costs can look lower at first glance because the medicine is delivered to your home and the clinical oversight is remote. Those companies have raised significant funding and are built to scale across many states. That model works for some people, but it is a different product from in-clinic IV care with a clinician in the room.
          </p>
          <p>
            When you are comparing options in South Florida, it is worth looking at the total package rather than the single lowest number. Questions that tend to matter:
          </p>
          <ul>
            <li>Is the price for a standard infusion or a longer, guided session?</li>
            <li>Does it include monitoring and a private room, or are those extra?</li>
            <li>Is there structured support before and after the session, or is integration left to you?</li>
            <li>Are you dealing with a local clinic or a national company whose clinical team is remote?</li>
          </ul>
          <p>
            Rewired publishes its pricing openly because the goal is for people to compare total care, not just the sticker price of one infusion. If you are looking at both local IV options and national at-home programs, the practical difference is usually the setting and the level of in-person clinical presence. Both approaches exist for a reason. The right fit depends on what you need during the session itself.
          </p>
          <p>
            You can see the current package pricing and what is included on the <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">cost page</Link>, or schedule a free consultation to walk through which option matches your situation. Patients from Miami, Fort Lauderdale, and South Florida are welcome. ¡Hablamos Español!
          </p>
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