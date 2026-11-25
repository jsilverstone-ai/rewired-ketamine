import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function HowManySessionsPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">How Many Ketamine Sessions Do Most People Need — and What Does That Cost in Aventura?</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">Most people begin with a 6-session induction. See why packages exist and how boosters are decided. Fully guided sessions available.</p>
        <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* CONTENT */}
      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg text-[#444]">
          <p>One of the most common questions we hear is “How many sessions will I actually need?” The honest answer is that most people complete a course of six IV ketamine sessions for mental health conditions. Some notice meaningful shifts earlier; others continue with maintenance sessions afterward. There is no universal number, but six is the most frequently used initial course in clinical practice.</p>
          <p>At Rewired Ketamine in Aventura, a package of six standard 1-hour mental health infusions is $2,300. Guided options (with a clinician present throughout) are higher and are listed separately so the difference is clear. The total cost of a course is therefore more useful than the price of a single session. A single infusion at $440 looks different when you multiply it by six and then compare it to a package price. Fully guided sessions are available.</p>
          <p>National at-home ketamine companies often structure their pricing as monthly subscriptions or multi-month kits. Because they are typically venture-funded and operate remotely, their model is built around lower per-dose costs and less in-person clinical time. Some patients prefer that convenience. Others want the monitoring and guidance that come with an in-clinic IV session. The number of “sessions” can also mean different things: an at-home lozenge or nasal dose is not the same as a monitored IV infusion.</p>
          <p>There is no single number that fits everyone, and we do not advertise a session count as a guarantee. Plans are individualized after an evaluation and adjusted based on how you respond.</p>
          <p>What tends to influence how many sessions someone needs:</p>
          <ul>
            <li>The condition being treated and how long it has been present</li>
            <li>Whether the sessions include real-time guidance or are primarily the medicine alone</li>
            <li>How the person responds in the first two to three sessions</li>
            <li>Whether there is structured integration support afterward</li>
          </ul>
          <p>Most people who do well with IV ketamine complete the initial series of six and then decide on maintenance based on how they feel. The cost of that path is predictable once you look at package pricing rather than single-session rates. If you are comparing local clinics to national at-home programs, the practical questions are usually about the setting (in-clinic vs. at-home), the level of clinical presence during the session, and what the total course costs once you add everything that is included.</p>
          <p>Current package pricing and what is included with each option are listed on the <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">cost page</Link>. A free consultation is also available if you want to walk through which approach fits what you are looking for. Patients from Miami, Fort Lauderdale, and South Florida are welcome. ¡Hablamos Español!</p>
          <div className="mt-10 text-center">
            <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded hover:bg-[#0B1D36] hover:text-white transition">Book a Free Consult</Link>
            <p className="mt-4 text-sm">Call or text (305) 676-6070</p>
          </div>
        </div>
      </section>

      {/* FOOTER — identical to Blog 1 */}
      <SiteFooter />
    </main>
  );
}