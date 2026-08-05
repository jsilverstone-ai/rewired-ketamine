import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      {/* HEADER - Light background so the real logo shows properly */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Large clear logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Rewired Ketamine"
              width={280}
              height={90}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-[#0B1D36]">
            <Link href="#how-we-help" className="hover:text-[#C9A66B] transition">How We Help</Link>
            <Link href="#experience" className="hover:text-[#C9A66B] transition">The Experience</Link>
            <Link href="#contact" className="hover:text-[#C9A66B] transition">Contact</Link>
          </nav>

          <div className="flex items-center gap-5">
            <a href="tel:3056766070" className="hidden md:block font-semibold text-[#0B1D36] hover:text-[#C9A66B] transition">
              305-676-6070
            </a>
            <a
              href="#contact"
              className="bg-[#0B1D36] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#C9A66B] transition"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-20 pb-24 md:pt-28 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A