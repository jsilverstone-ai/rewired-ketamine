"use client";

import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function LocationPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />
      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Location</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-6">
            A calm, private clinical space in the heart of Aventura — serving Miami, Fort Lauderdale, and South Florida.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>
{/* LOCATION INFO + MAP */}
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    
    {/* Contact Info */}
    <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
      <div>
        <h3 className="font-bold text-[#0B1D36] mb-2">Address</h3>
        <a 
          href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#555] hover:text-[#C9A66B] transition"
        >
          2820 NE 214th St #1002<br />
          Aventura, FL 33180
        </a>
      </div>
      <div>
        <h3 className="font-bold text-[#0B1D36] mb-2">Phone</h3>
        <a href="tel:+13056766070" className="text-[#555] hover:text-[#C9A66B] transition">
          (305) 676-6070
        </a>
      </div>
      <div>
        <h3 className="font-bold text-[#0B1D36] mb-2">Email</h3>
        <a href="mailto:info@rewiredketamine.com" className="text-[#555] hover:text-[#C9A66B] transition">
          info@rewiredketamine.com
        </a>
      </div>
    </div>

    {/* Serena Photo + Google Map */}
    <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">
      
      {/* Serena Hotel Photo */}
      <div className="rounded-2xl overflow-hidden border border-[#eee] shadow-sm">
        <Image
          src="/location/serena-hotel-aventura.jpg"
          alt="Serena Hotel Offices building – home of Rewired Ketamine in Aventura, Florida"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="p-5 bg-white">
          <p className="text-sm text-[#555]">
            Located in the <strong>Serena Hotel Offices</strong> building (not Aventura Medical Center). We share the parking garage with the hotel.
          </p>
        </div>
      </div>

      {/* Live Google Map */}
      <div className="rounded-2xl overflow-hidden border border-[#eee] shadow-sm min-h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.1!2d-80.1449845!3d25.9730993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad36917b816d%3A0x35046cce92dab559!2sRewired%20Ketamine!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "400px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rewired Ketamine location in Aventura, Florida"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
</section>
{/* Parking & Arrival Instructions */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-[#0B1D36] mb-8 text-center">
      Parking & Arrival Instructions
    </h2>

    <div className="bg-[#F8F5F0] rounded-2xl p-8 border border-[#eee]">
      <p>
  Rewired Ketamine is a <Link href="/" className="text-[#C9A66B] hover:underline">ketamine clinic in Aventura</Link> conveniently located for patients throughout Miami-Dade and South Florida.
</p>
      <p className="text-[#555] leading-relaxed mb-6">
        We kindly ask that you arrive about 15 minutes early. This gives you time to park, complete any paperwork or payment, and settle in at a comfortable pace. We want you to feel relaxed from the moment you arrive.
      </p>

      <h3 className="text-xl font-bold text-[#0B1D36] mb-3">Our Address</h3>
      <p className="text-[#555] mb-6">
        2820 NE 214th Street, Suite 1002<br />
        Aventura, FL 33180
      </p>

      <p className="text-[#555] leading-relaxed mb-6">
        Due to nearby construction, the area can be a bit confusing. Please look for the <strong>Serena Hotel Offices</strong> — not “Aventura Medical Center.” We are located in the office building attached to the Serena Hotel and share a parking garage with them.
      </p>

      <h3 className="text-xl font-bold text-[#0B1D36] mb-3">Parking Instructions</h3>
      <ul className="list-disc list-inside text-[#555] space-y-2 mb-8">
        <li>Park on the <strong>4th or 5th floor</strong> of the garage.</li>
        <li>You will see two elevators: one marked <strong>Hotel</strong> and one marked <strong>Offices</strong>.</li>
        <li>Take the <strong>Offices</strong> elevator to the <strong>10th floor</strong>.</li>
        <li>Turn right as you exit the elevator. Our suite is just down the hallway on the right-hand side.</li>
        <li>Restrooms are available in the hallway if you need them before your appointment.</li>
      </ul>

      <p className="text-[#555] mb-8">
        We look forward to welcoming you.
      </p>

{/* Copy Directions Button */}
<div className="text-center">
  <button
    onClick={() => {
      const directions = `Rewired Ketamine – Parking & Arrival Instructions

Please arrive about 15 minutes early. This gives you time to park, complete any paperwork or payment, and settle in at a comfortable pace.

Our Address:
2820 NE 214th Street, Suite 1002
Aventura, FL 33180

Due to nearby construction, the area can be a bit confusing. Please look for the Serena Hotel Offices — not “Aventura Medical Center.” We are located in the office building attached to the Serena Hotel and share a parking garage with them.

Parking Instructions:
• Park on the 4th or 5th floor of the garage.
• You will see two elevators: one marked Hotel and one marked Offices.
• Take the Offices elevator to the 10th floor.
• Turn right as you exit the elevator. Our suite is just down the hallway on the right-hand side.
• Restrooms are available in the hallway if you need them before your appointment.

We look forward to welcoming you.

Rewired Ketamine
(305) 676-6070
info@rewiredketamine.com`;

      navigator.clipboard.writeText(directions).then(() => {
        alert("Parking directions copied! You can now paste them into an email or notes.");
      });
    }}
    className="inline-block bg-[#0B1D36] text-white font-bold px-8 py-3 rounded-full hover:bg-[#C9A66B] hover:text-[#0B1D36] transition"
  >
    Copy Parking Directions
  </button>
</div>

        </div>   {/* closes the bg-[#F8F5F0] box */}
      </div>     {/* closes max-w-4xl */}
    </section>   {/* closes the Parking section */}{/* FOOTER */}

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to visit?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation at our locally owned Aventura clinic. ¡Hablamos Español!</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">
            Book Free Consultation
          </Link>
        </div>
      </section>
<SiteFooter />
    </main>
  );
}