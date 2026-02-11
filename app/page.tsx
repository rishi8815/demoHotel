import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Rooms } from "@/components/rooms";
import { Amenities } from "@/components/amenities";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Rooms />
      <Amenities />
      <Gallery />
      <Contact />

      {/* Visual Break / Quote Section */}
      <section className="py-32 bg-azure-900 flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <p className="text-gold-400 text-5xl mb-8 font-serif">“</p>
          <h2 className="text-2xl md:text-4xl font-serif text-white leading-relaxed italic mb-8">
            The service was beyond impeccable. From the moment we arrived, we felt like royalty.
            The attention to detail and the sheer luxury of the property is unmatched.
          </h2>
          <p className="text-gold-500 text-xs font-bold uppercase tracking-[0.5em]">
            The Telegraph, London
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-azure-950 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-widest uppercase text-gold-500">
                Grand Azure
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500">
                Resort & Spa
              </span>
            </Link>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
              A member of Preferred Hotels & Resorts. <br />
              Setting the standard for luxury hospitality since 1924.
            </p>
          </div>

          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-8">Destinations</h5>
            <ul className="space-y-4">
              <FooterLink>Azure Bay, Greece</FooterLink>
              <FooterLink>Amalfi Coast, Italy</FooterLink>
              <FooterLink>Male Atoll, Maldives</FooterLink>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-8">Experience</h5>
            <ul className="space-y-4">
              <FooterLink>Concierge Services</FooterLink>
              <FooterLink>Yacht Charters</FooterLink>
              <FooterLink>Private Events</FooterLink>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-8">Newsletter</h5>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-6">Join our exclusive circle</p>
            <div className="flex border-b border-gold-500/30 pb-2">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-none text-[10px] text-white focus:ring-0 w-full placeholder:text-zinc-700 uppercase tracking-widest"
              />
              <button className="text-gold-500 text-xs">→</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[9px] uppercase tracking-widest italic">
            Developed by LXRE - Hotel Growth Partners
          </p>
          <div className="flex gap-10">
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Terms</FooterLink>
            <FooterLink>Accessibility</FooterLink>
          </div>
        </div>
      </footer>
    </main>
  );
}

const FooterLink = ({ children }: { children: React.ReactNode }) => (
  <li>
    <Link href="#" className="text-zinc-500 hover:text-gold-500 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors">
      {children}
    </Link>
  </li>
);
