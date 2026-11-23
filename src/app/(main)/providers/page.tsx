import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ProvidersPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />
      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Clinical Team</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-6">
            Experienced providers dedicated to thoughtful, medically supervised care at our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#0B1D36] font-medium">
            Medically supervised care • Locally owned in Aventura • Fully guided sessions available • LegitScript certified
          </p>
        </div>
      </section>

{/* PROVIDERS */}
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Top two */}
    <div className="grid md:grid-cols-2 gap-10 mb-16">
      
      {/* Kelsey Vivatson, PMHNP-BC, APRN */}
      <div className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src="/providers/kelsey-vivatson.jpg"
            alt="Kelsey Vivatson, PMHNP-BC, APRN - Clinical Director at Rewired Ketamine in Aventura"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Clinical Director</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-1">Kelsey Vivatson, PMHNP-BC, APRN</h2>
          <p className="text-[#666] text-sm mb-4">Board-Certified Psychiatric Mental Health Nurse Practitioner</p>
          <p className="text-[#555] leading-relaxed mb-4">
            Kelsey Vivatson, PMHNP-BC, APRN is a board-certified Psychiatric Mental Health Nurse Practitioner licensed in Florida and North Dakota. She serves as Clinical Director at Rewired Ketamine in Aventura and focuses on thoughtful, individualized care that combines medication management, supportive therapy, and clear collaboration with patients and families.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            Her approach blends diagnostic assessment, evidence-based prescribing, and personalized treatment planning to support individuals across the lifespan.
          </p>
          <div className="border-t border-gray-100 pt-4 mt-4">
            <p className="text-sm text-[#666]">
              <span className="font-semibold text-[#0B1D36]">Education & Credentials:</span> MSN in Psychiatric Mental Health (Walden University) • BSN (University of Mary) • ANCC Board-Certified PMHNP • Licensed in Florida & North Dakota
            </p>
          </div>
        </div>
      </div>

{/* Jacob Silverstone, DPM */}
<div className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm">
  <div className="aspect-[4/3] overflow-hidden">
    <Image
      src="/providers/jacob-silverstone.jpg"
      alt="Jacob Silverstone, DPM - Medical Director at Rewired Ketamine in Aventura"
      width={800}
      height={600}
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-8">
    <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Medical Director</p>
    <h2 className="text-2xl font-bold text-[#0B1D36] mb-1">Jacob Silverstone, DPM</h2>
    <p className="text-[#666] text-sm mb-4">Medical Director · Published Author</p>

    <p className="text-[#555] leading-relaxed mb-4">
      Jacob Silverstone, DPM, serves as Medical Director at Rewired Ketamine. A published sociologist and former Division Chief and Residency Director for Foot & Ankle at Mount Sinai Medical Center, he brings extensive clinical leadership and a deep interest in mental wellness, neuroplasticity, and supportive care approaches.
    </p>

    <p className="text-[#555] leading-relaxed mb-4">
      He has served as primary investigator on numerous advanced pharmaceutical studies and procedural innovations. His work focuses on helping individuals better understand their mental health journey and explore options when traditional approaches have not provided enough relief.
    </p>

    <p className="text-[#555] leading-relaxed mb-5">
      Dr. Silverstone is also the author of <em>Chronically Misunderstood</em> and <em>Stuck in Reverse: Rewiring Your ADHD Brain</em>.
    </p>

    {/* More prominent book link */}
    <a 
      href="https://a.co/d/07BECq33" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#C9A66B] text-[#0B1D36] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#0B1D36] hover:text-white transition mb-6"
    >
      View Book on Amazon →
    </a>

    <div className="border-t border-gray-100 pt-4">
      <p className="text-sm text-[#666]">
        <span className="font-semibold text-[#0B1D36]">Education & Training:</span> BA in Sociology, Hunter College (CUNY) · DPM, New York College of Podiatric Medicine · Foot & Ankle Reconstructive Surgery Residency, Long Island Jewish Medical Center at Hofstra School of Medicine
      </p>
    </div>
  </div>
</div>
    </div>

    {/* Bottom two */}
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* Shlomo Slatus, RCSWI */}
      <div className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src="/providers/shlomo-slatus.jpg"
            alt="Shlomo Slatus, RCSWI - Clinical Team at Rewired Ketamine in Aventura"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Clinical Team</p>
          <h2 className="text-xl font-bold text-[#0B1D36] mb-1">Shlomo Slatus, RCSWI</h2>
          <p className="text-[#666] text-sm mb-4">Registered Clinical Social Worker Intern</p>
          <p className="text-[#555] leading-relaxed mb-4">
            Shlomo Slatus, RCSWI is a Registered Clinical Social Worker Intern with a Master of Social Work from Yeshiva University’s Wurzweiler School of Social Work. He graduated as valedictorian of his MSW program with a specialty certification in Trauma-Informed Practice and was inducted into the Phi Alpha Honor Society for academic excellence.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            Shlomo believes that expressing thoughts, feelings, and experiences in a safe and supportive environment can serve as a powerful catalyst for change. He is committed to establishing a genuine therapeutic rapport that fosters a confidential space where individuals can communicate openly and honestly.
          </p>
          <div className="border-t border-gray-100 pt-4 mt-4">
            <p className="text-sm text-[#666] mb-2">
              <span className="font-semibold text-[#0B1D36]">Areas of Focus:</span>
            </p>
            <ul className="text-sm text-[#555] space-y-1 list-disc list-inside">
              <li>Addiction and substance misuse</li>
              <li>Anxiety and panic disorders</li>
              <li>Depression</li>
              <li>Relationship challenges</li>
              <li>Personal growth and self-esteem</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sorelle Silverstone */}
      <div className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src="/providers/sorelle-silverstone.jpg"
            alt="Sorelle Silverstone - Life Coach & Integration Support at Rewired Ketamine in Aventura"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Patient Experience</p>
          <h2 className="text-xl font-bold text-[#0B1D36] mb-1">Sorelle Silverstone</h2>
          <p className="text-[#666] text-sm mb-4">Life Coach & Integration Support</p>
          <p className="text-[#555] leading-relaxed mb-4">
            Sorelle Silverstone is a life coach who integrates business experience, emotional intelligence, and holistic wellness to support clients in personal and professional growth. As a mother of five, she draws from real-life insight to help individuals navigate challenges such as work-life balance, resilience, and meaningful goal-setting.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            Her approach combines strategic planning experience with empathetic coaching, mindfulness, and practical tools that support authentic self-alignment and lasting personal development.
          </p>
          <div className="border-t border-gray-100 pt-4 mt-4">
            <p className="text-sm text-[#666]">
              <span className="font-semibold text-[#0B1D36]">Education:</span> Bachelor of Science in Business Organization, Nyack University
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CLINICAL STANDARDS */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mb-6">Our Clinical Standards</h2>
    <div className="grid sm:grid-cols-3 gap-8 text-left">
      <div>
        <h3 className="font-semibold text-[#0B1D36] mb-2">Medically Supervised</h3>
        <p className="text-[#555] text-sm leading-relaxed">Every session takes place under professional monitoring in a calm, private setting.</p>
      </div>
      <div>
        <h3 className="font-semibold text-[#0B1D36] mb-2">Fully Guided Options</h3>
        <p className="text-[#555] text-sm leading-relaxed">Fully guided sessions are available for those who prefer additional support during treatment.</p>
      </div>
      <div>
        <h3 className="font-semibold text-[#0B1D36] mb-2">Locally Owned</h3>
        <p className="text-[#555] text-sm leading-relaxed">We are a locally owned practice based in Aventura, serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!</p>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="py-20 px-6 bg-[#0B1D36] text-white">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
    <p className="text-xl text-white/80 mb-10">Book a free consultation at our locally owned Aventura clinic.</p>
    <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">
      Book Free Consultation
    </Link>
  </div>
</section>

{/* FOOTER */}
<SiteFooter />
</main>
);
}