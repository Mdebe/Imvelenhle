"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[120px]">

        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Valley Coats Logo"
              width={400}
              height={140}
              className="h-[110px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link text-primary font-bold"
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="ml-4 rounded-md bg-accent px-6 py-3 text-sm font-bold text-black hover:opacity-90 transition"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-[#5da446]">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-link font-bold"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 rounded-md bg-accent px-5 py-3 text-center font-bold text-black"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        :global(.text-primary) {
          color: #5da446;
        }

        :global(.bg-accent) {
          background-color: #e8d926; /* updated gold color */
        }

        .nav-link {
          font-size: 1.05rem;
          font-weight: 700;
          position: relative;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 3px;
          background: #5da446;
          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-link {
          font-size: 1rem;
          font-weight: 700;
          color: #5da446;
        }

        .mobile-link:hover {
          opacity: 0.85;
        }
      `}</style>
    </header>
  );
}
