import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineInfusionNearMePage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

 {/* HERO */}
<section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
  <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
  <h1 className="text-3xl md:text-5xl font-bold mb-6">Ketamine Infusion Near Me: Aventura Clinic Serving North Miami and Miami</h1>
  <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
    Fully guided IV sessions at our locally owned clinic. Convenient for patients from North Miami Beach, Miami, and Fort Lauderdale.
  </p>
  <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
</section>

<section id="main-content" className="py-16 px-6 bg-white">
  <div className="max-w-3xl mx-auto prose prose-lg text-[#444]">
    <p>
      If you searched “ketamine infusion near me” or “ketamine near me” from North Miami, Miami, or Fort Lauderdale, our clinic is in Aventura. Rewired Ketamine is locally owned and offers fully guided IV ketamine sessions in a private treatment room. Fully guided sessions are available.
    </p>

    <h2>Exact address and parking</h2>
    <p>
      2820 NE 214th Street, Suite 1002, Aventura, FL 33180. We are in the office building attached to the Serena Hotel — look for the Serena Hotel Offices, not “Aventura Medical Center.” We share a parking garage with the hotel.
    </p>
    <ul>
      <li>Park on the 4th or 5th floor of the garage.</li>
      <li>Take the Offices elevator (not the Hotel elevator) to the 10th floor.</li>
      <li>Turn right. Our suite is down the hallway on the right.</li>
      <li>Please arrive about 15 minutes early so you have time to park and settle in.</li>
    </ul>
    <p>
      Full directions and a map are on the <Link href="/location" className="text-[#C9A66B] font-semibold hover:underline">location page</Link>.
    </p>

    <h2>Who travels from nearby areas</h2>
    <p>
      Patients regularly come from North Miami Beach, Miami, Sunny Isles, Hallandale, and Fort Lauderdale. The Aventura location is a short drive for many people searching “ketamine infusion near me” in the Miami metro.
    </p>

    <h2>What a typical visit looks like</h2>
    <p>
      Sessions take place in a private room with monitoring and staff present. Most mental-health infusions are about one hour, with time afterward to settle before you leave with a driver. A driver is required. Integration is available as a shorter follow-up and is not the same as ongoing therapy.
    </p>
    <p>
      Mental-health IV packages start at $2,300 for six sessions. Guided options are listed separately. Details are on the <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">cost page</Link>.
    </p>

    <h2>Next step</h2>
    <p>
      Book a free consult. We review history, medications, and goals before discussing whether an IV series is appropriate. Patients from Miami, North Miami, Fort Lauderdale, and South Florida are welcome. ¡Hablamos Español!
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