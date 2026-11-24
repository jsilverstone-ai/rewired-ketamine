import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineInTheNewsPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />
      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ketamine in the News</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Selected recent coverage and research about ketamine therapy.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

{/* News Articles */}
<section className="py-20 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] mb-4">
        Ketamine in the News
      </h2>
      <p className="text-lg text-[#555] max-w-2xl mx-auto">
        Recent articles and stories highlighting the potential benefits of ketamine therapy.
      </p>
    </div>
    {/* Article */}
<a 
  href="https://hfbpodcast.com/dr-jacob-silverstone-ketamine-therapy-trauma-healing/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
>
  <p className="text-sm text-[#C9A66B] font-semibold mb-2">HFB Podcast · 2026</p>
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
    Dr. Jacob Silverstone on Ketamine Therapy and Trauma Healing
  </h3>
  <p className="text-[#555] leading-relaxed">
    Dr. Jacob Silverstone discusses ketamine therapy, trauma healing, and the approach at Rewired Ketamine in Aventura.
  </p>
</a>

    <div className="grid gap-8">
            {/* Article: IB Journal */}
      <a 
        href="https://ibjournal.net/ketamine-clinic-in-aventura-reports-3000-infusions-and-85-success-rate-for-treatment-resistant-conditions/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
      >
        <p className="text-sm text-[#C9A66B] font-semibold mb-2">International Business Journal · October 15, 2026</p>
        <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
          Ketamine Clinic in Aventura Reports 3,000 Infusions and 85% Success Rate for Treatment-Resistant Conditions
        </h3>
        <p className="text-[#555] leading-relaxed">
          International Business Journal profiled Rewired Ketamine’s Aventura clinic, noting more than 3,000 guided infusions and the clinic’s reported outcomes for patients who had not found relief with standard treatments. Locally owned, Spanish-speaking, in-clinic care.
        </p>
      </a>

      {/* Article: Woman’s Week */}
      <a 
        href="https://womansweek.net/rewired-ketamine-racks-up-3000-infusions-earned-rems-status/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
      >
        <p className="text-sm text-[#C9A66B] font-semibold mb-2">Woman’s Week · October 15, 2026</p>
        <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
          Rewired Ketamine Racks Up 3,000 Infusions, Earned REMS Status
        </h3>
        <p className="text-[#555] leading-relaxed">
          Woman’s Week covered Rewired Ketamine’s Aventura practice, highlighting 3,000+ infusions and REMS certification for Spravato. The piece notes in-clinic IV ketamine and esketamine options with integration support.
        </p>
      </a>
            {/* Article: Spravato 2025 review */}
      <a 
        href="https://www.dovepress.com/spravato-for-treatment-resistant-depression-efficacy-and-sexual-side-e-peer-reviewed-fulltext-article-NDT" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
      >
        <p className="text-sm text-[#C9A66B] font-semibold mb-2">Neuropsychiatric Disease and Treatment · September 2025</p>
        <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
          Spravato for Treatment-Resistant Depression: A 2025 Review
        </h3>
        <p className="text-[#555] leading-relaxed">
          Raza and colleagues reviewed intranasal esketamine (Spravato) for major depression and treatment-resistant depression. Trials such as TRANSFORM-2, SUSTAIN-1, and ASPIRE are cited for rapid antidepressant effects, often within hours, through NMDA receptor antagonism. Spravato is given in clinic under REMS. Reported effects include dissociation and blood pressure changes. A 2025 review reported lower rates of sexual side effects than many SSRIs; individual results vary. This is a research summary, not a treatment claim.
        </p>
      </a>
      {/* Article — Revista Veritas */}
<a
  href="https://www.revistaveritas.org/index.php/veritas/article/view/1828"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
>
  <p className="text-sm text-[#C9A66B] font-semibold mb-2">
    Revista Veritas · September 30, 2026
  </p>
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
    The NMDA Receptor in Opioid-Induced Hyperalgesia
  </h3>
  <p className="text-[#555] leading-relaxed">
    A narrative review of how opioid exposure can increase pain sensitivity, and why ketamine and magnesium are the agents most directly tied to the NMDA receptor in perioperative research. It supports an opioid-sparing role in acute surgical pain. It is not a depression-treatment claim.
  </p>
</a>
      {/* Article — SciTechDaily / Texas A&M */}
<a
  href="https://scitechdaily.com/scientists-discover-a-brain-signal-linked-to-ketamines-antidepressant-effects/"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
>
  <p className="text-sm text-[#C9A66B] font-semibold mb-2">
    SciTechDaily · September 21, 2026
  </p>
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
    Scientists Discover a Brain Signal Linked to Ketamine’s Antidepressant Effects
  </h3>
  <p className="text-[#555] leading-relaxed">
    SciTechDaily covers Texas A&amp;M research in Translational Psychiatry. Veterans over 55 received a single ketamine infusion. EEG patterns kept changing over the following week. Greater information-sharing in brain signals at 24 hours was linked to more symptom relief by day seven. Early work on possible response markers — not a clinic treatment claim.
  </p>
</a>
      {/* Article — Reuters */}
<a
  href="https://www.reuters.com/business/healthcare-pharmaceuticals/what-know-about-psychedelic-therapies-cited-by-trump-2026-09-15/"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
>
  <p className="text-sm text-[#C9A66B] font-semibold mb-2">
    Reuters · September 15, 2026
  </p>
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
    Psychedelic Therapies Cited by Trump: What You Need to Know
  </h3>
  <p className="text-[#555] leading-relaxed">
    Reuters reviews the clinical and regulatory landscape after an FDA public meeting on psychedelic therapies. Most remain Schedule I in the U.S. Trials are furthest along for severe depression and PTSD. The piece also notes Spravato (esketamine) is FDA-approved for treatment-resistant depression, and that ketamine is authorized as an anesthetic and sometimes used off-label for depression. Research is moving quickly; results and access still vary.
  </p>
</a>
      {/* Article 7 */}
<a 
  href="https://www.nature.com/articles/s41594-026-01839-y" 
  target="_blank" 
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
>
  <p className="text-sm text-[#C9A66B] font-semibold mb-2">Nature Structural & Molecular Biology · 2026</p>
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
    New Insights into NMDA Receptor Structure and Function
  </h3>
  <p className="text-[#555] leading-relaxed">
    A recent paper in Nature Structural & Molecular Biology advances our understanding of NMDA receptor biology — the same receptor system central to how ketamine works in the brain.
  </p>
</a>
      
      {/* Article 1 */}
      <a 
        href="https://www.cnn.com/2025/09/28/health/ketamine-therapy-depression-wellness" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
      >
        <p className="text-sm text-[#C9A66B] font-semibold mb-2">CNN · September 2025</p>
        <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
          Can the party drug ketamine be a mental health breakthrough? It was for me
        </h3>
        <p className="text-[#555] leading-relaxed">
          A personal account of how ketamine therapy helped with long-standing anxiety and depression.
        </p>
      </a>

      {/* Article 2 */}
      <a 
        href="https://www.usmagazine.com/celebrity-news/news/what-celebrities-and-doctors-have-said-about-ketamine-use/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
      >
        <p className="text-sm text-[#C9A66B] font-semibold mb-2">Us Weekly · 2026</p>
        <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
          What Celebrities and Doctors Have Said About Ketamine Use
        </h3>
        <p className="text-[#555] leading-relaxed">
          Celebrities including Chrissy Teigen, Elon Musk, Molly O’Connell and others share their experiences with ketamine therapy.
        </p>
      </a>

      {/* Article 3 */}
      <a 
        href="https://www.dav.org/learn-more/news/2025/green-beret-turns-to-ketamine-to-heal-invisible-wounds/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
      >
        <p className="text-sm text-[#C9A66B] font-semibold mb-2">DAV · 2025</p>
        <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
          Green Beret turns to ketamine to heal invisible wounds
        </h3>
        <p className="text-[#555] leading-relaxed">
          A Green Beret discusses how ketamine helped him recover from PTSD and reclaim daily life.
        </p>
      </a>

      {/* Article 4 */}
      <a 
        href="https://med.stanford.edu/news/all-news/2026/05/drug-ketamine-antisuicide-effects.html" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
      >
        <p className="text-sm text-[#C9A66B] font-semibold mb-2">Stanford Medicine · May 2026</p>
        <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
          Drug combo is the first to prolong ketamine’s antisuicide effects
        </h3>
        <p className="text-[#555] leading-relaxed">
          New research from Stanford shows a promising way to extend ketamine’s anti-suicidal benefits.
        </p>
      </a>

      {/* Article 5 */}
      <a 
        href="https://www.billboard.com/pro/grimes-melissa-etheridge-artists-psychedelic-therapy/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
      >
        <p className="text-sm text-[#C9A66B] font-semibold mb-2">Billboard · July 2026</p>
        <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
          Why Grimes, Melissa Etheridge & More Artists Push Psychedelic Therapy
        </h3>
        <p className="text-[#555] leading-relaxed">
          Musicians and artists openly discuss the potential of ketamine and other psychedelic-assisted therapies.
        </p>
      </a>

{/* Article 6 */}
<a 
  href="https://www.rutgers.edu/news/ketamine-may-fight-chronic-fatigue-study-suggests" 
  target="_blank" 
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
>
  <p className="text-sm text-[#C9A66B] font-semibold mb-2">Rutgers University · 2024</p>
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
    Ketamine May Fight Chronic Fatigue, Study Suggests
  </h3>
  <p className="text-[#555] leading-relaxed">
    New research from Rutgers suggests ketamine may help reduce symptoms of chronic fatigue.
  </p>
</a>
{/* Article 7*/}
<a 
  href="https://www.news-medical.net/news/20260731/Ketamine-boosts-neuroplasticity-through-microglia-in-female-brains.aspx" 
  target="_blank" 
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
>
  <p className="text-sm text-[#C9A66B] font-semibold mb-2">News-Medical.net · July 2026</p>
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
    Ketamine Boosts Neuroplasticity Through Microglia in Female Brains
  </h3>
  <p className="text-[#555] leading-relaxed">
    New research shows ketamine may increase neuroplasticity in female brains by activating microglia, highlighting important sex differences that could help refine future depression treatments.
  </p>
</a>
{/* Article 8*/}
<a 
  href="https://www.medscape.com/viewarticle/ketamine-and-psychotherapy-winning-combination-2026a1000umd" 
  target="_blank" 
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
>
  <p className="text-sm text-[#C9A66B] font-semibold mb-2">Medscape News Canada · August 2026</p>
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
    Ketamine and Psychotherapy: A Winning Combination?
  </h3>
  <p className="text-[#555] leading-relaxed">
    A small Toronto pilot study and the “Montreal model” explore pairing ketamine with weekly psychotherapy. Early findings suggest the combination may support neuropathic pain and help extend ketamine’s short-lived mental-health benefits.
  </p>
</a>
{/* Article — Texas A&M / Futurity coverage */}
<a
  href="https://stories.tamu.edu/news/2026/09/11/study-explores-how-ketamine-reshapes-brain-activity-in-older-adults/"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl p-8 border border-[#eee] hover:shadow-lg transition group"
>
  <p className="text-sm text-[#C9A66B] font-semibold mb-2">
    Futurity · Texas A&M University · September 2026
  </p>
  <h3 className="text-xl md:text-2xl font-bold text-[#0B1D36] mb-3 group-hover:text-[#C9A66B] transition">
    How Ketamine Reshapes Brain Activity in Older Adults
  </h3>
  <p className="text-[#555] leading-relaxed">
    Texas A&M researchers found time-specific brain-activity patterns after ketamine in older adults with treatment-resistant depression. Different information-organization patterns appeared at 1 hour, 24 hours, and 7 days. Greater brain-wide information sharing at 24 hours was linked to better symptom improvement at day 7. The work is aimed at possible biomarkers of response in late-life depression — not a guarantee of outcome.
  </p>
</a>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation. No pressure — just honest answers and a clear path forward.</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Book Free Consultation</Link>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}