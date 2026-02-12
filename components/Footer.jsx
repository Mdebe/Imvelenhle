"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#010a33] text-white pt-16">
      
      {/* Contact / CTA */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Space?
        </h3>
        <p className="text-gray-300 mb-6">
          Partner with Valley Coats for premium decorative coatings & architectural finishes.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#e8d926] text-black px-8 py-3 rounded-lg font-bold hover:opacity-90 transition"
        >
          Get a Quote
        </Link>
      </section>

      {/* Social Links */}
      <section className="max-w-7xl mx-auto px-6 flex justify-center gap-6 mb-12">
        <a href="#" className="hover:text-[#e8d926] transition"><FaFacebookF size={22} /></a>
        <a href="#" className="hover:text-[#e8d926] transition"><FaInstagram size={22} /></a>
        <a href="#" className="hover:text-[#e8d926] transition"><FaLinkedinIn size={22} /></a>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left mb-12">
        <div>
          <h4 className="font-bold mb-4 text-lg">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#e8d926] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#e8d926] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#e8d926] transition">Services</Link></li>
            <li><Link href="/projects" className="hover:text-[#e8d926] transition">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-[#e8d926] transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg">Services</h4>
          <ul className="space-y-2">
            <li>Decorative Wall Finishes</li>
            <li>Polished Concrete Floors</li>
            <li>Cementitious Finishes</li>
            <li>Custom Design Solutions</li>
            <li>Architectural Surface Treatments</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg">Contact</h4>
          <ul className="space-y-2 text-gray-300">
            <li>📞 035 880 0303 / 067 654 4438</li>
            <li>✉️ info@valleycoats.co.za</li>
            <li>📍 13 Regia Street, KwaMbonambi, KZN</li>
          </ul>
        </div>
      </section>

      {/* Bottom Legal */}
      <div className="border-t border-white/20 py-4 text-center text-xs md:text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Valley Coats. All rights reserved. Developed by{" "}
        <a href="https://github.com/yourusername" className="hover:text-[#e8d926] transition">Mdebe</a>
      </div>
    </footer>
  );
}
