import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const videos = [
 {
    id: "ydaLQuytZUI",
    title: "Welcome to Rewired Ketamine",
    description: "A warm introduction to our locally owned Aventura clinic and the care we provide.",
  },
  {
    id: "CMlkyMqhAGQ",
    title: "What to Expect at Your First Session",
    description: "A clear walkthrough of your first visit — from arrival to recovery.",
  },
  {
    id: "WA-uAIWuAdU",
    title: "Patient Information",
    description: "No you won't change, you'll just be a better form of you!",
  },
  {
    id: "YigR2tHYeRw",
    title: "Why Rewired Ketamine Is Different",
    description: "An overview of how ketamine therapy is offered at our Aventura clinic.",
  },
  {
  id: "K2Gkqcccs00",
  title: "Dr. Jacob Silverstone on Ketamine Therapy and Trauma Healing",
  description: "A short conversation on guided ketamine care and trauma healing at our Aventura clinic. Serving Miami and South Florida. ¡Hablamos Español!",
},
    {
    id: "mEh9RNfyepo",
    title: "Psychedelic Pipeline vs Ketamine Solutions",
    description: "Most classic psychedelics are still Schedule I. Ketamine is already used in clinics — context for patients comparing ketamine therapy in Miami and Aventura.",
  },
      {
    id: "jOiU_C-ng6A",
    title: "Subcutaneous Ketamine for Depression",
    description: "An overview of subcutaneous ketamine as an alternative to in-clinic IV infusions, with clinical guidance available.",
  },
  {
  id: "IJ5N6Zh1mIk",
  title: "Ketamine + Psychotherapy for Chronic Pain",
  description: "New research explores combining ketamine with psychotherapy for chronic neuropathic pain — and what it could mean for patients in Miami and Aventura.",
},
{
  id: "wDy5-ShpLV4",
  title: "The Evolution of Psychiatric Medication & the DSM",
  description: "A clear look at how psychiatric diagnosis and medication have evolved — from early DSM editions and the rise of chlorpromazine to the DSM-III shift and the arrival of SSRIs.",
},
];

export default function VideosPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Videos</h1>
<p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
  Looking for the{" "}
  <Link href="/" className="text-[#C9A66B] underline underline-offset-2 hover:text-white">
    ketamine clinic in Aventura
  </Link>
  ? Start on the homepage. This page is only our educational videos.
</p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1D36] mb-2">{video.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation at our locally owned Aventura clinic. ¡Hablamos Español!</p>
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