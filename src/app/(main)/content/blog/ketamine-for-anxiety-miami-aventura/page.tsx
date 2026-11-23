import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ketamineforanxietymiamiaventura() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section className="relative bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Ketamine for Anxiety in Miami and Aventura
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            What a 2026 review found, and how guided care at Rewired Ketamine works.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">
            <Link href="/es" className="hover:underline">¡Hablamos Español!</Link>
          </p>
        </div>
      </section>

      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-sm text-[#C9A66B] font-semibold mb-2">October 2026</p>
          <p className="text-lg leading-relaxed mb-6">
            A 2026 systematic review in the <em>Journal of Psychopharmacology</em> looked at ketamine and esketamine for anxiety disorders and for anxiety symptoms in depression. Masdrakis and colleagues reported that ketamine was associated with reduced anxiety in anxiety disorders and in treatment-resistant depression. Effects were more likely to hold longer when doses were repeated. This is a research summary, not a promise that ketamine will help every person.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Anxiety care is not one path. Some people do well with therapy, medication, or both. Others have not gotten enough relief. A consult and medical screening decide whether ketamine is appropriate. We do not say it cures anxiety.
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-10 mb-4">What the review reported</h2>
          <p className="text-lg leading-relaxed mb-6">
            The review covered ketamine and esketamine across anxiety-related presentations. The signal was reduced anxiety symptoms, including in people whose depression had not responded enough to usual treatment. Repeated dosing was tied to effects that lasted longer than a single session. Side effects discussed in this literature include dissociation and blood pressure changes, which is why in-clinic monitoring matters.
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-10 mb-4">Guided ketamine for anxiety in Aventura</h2>
          <p className="text-lg leading-relaxed mb-6">
            Rewired Ketamine is a locally owned clinic in Aventura. People searching ketamine for anxiety Miami or ketamine anxiety Aventura are usually looking for in-person care in the North Miami metro, not a mail-order protocol. Fully guided sessions are available. Rooms can be adjusted so the setting supports the process. Screening comes first.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We serve patients from Miami, Fort Lauderdale, and across Florida who can come to the Aventura office. ¡Hablamos Español!
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-10 mb-4">How care is structured</h2>
          <p className="text-lg leading-relaxed mb-6">
            Anxiety treatment at the clinic is described on our{" "}
            <Link href="/treatments/anxiety" className="text-[#C9A66B] font-semibold hover:underline">anxiety</Link>
            {" "}page. The{" "}
            <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">homepage</Link>
            {" "}covers how the clinic works and how to start. A free consult reviews history, medications, and goals before any session is scheduled.
          </p>
          <p className="text-sm text-[#666] mt-8">
            Source: Masdrakis et al., <em>Journal of Psychopharmacology</em>, 2026. DOI 10.1177/02698811251389583.
          </p>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation at our locally owned Aventura clinic. No pressure — just honest answers and a clear path forward. ¡Hablamos Español!</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Book Free Consultation</Link>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}