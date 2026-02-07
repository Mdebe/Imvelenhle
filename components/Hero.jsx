"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Professional Cleaning",
    subtitle: "You Can Trust",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Homes & Offices",
    subtitle: "Spotless Every Time",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Reliable & Affordable",
    subtitle: "Cleaning Solutions",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const accentColor = "#147595";

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0B3C5D]/70" />
        </div>
      ))}

      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-10 pointer-events-none bubble-wrap">
        <span className="bubble b1" />
        <span className="bubble b2" />
        <span className="bubble b3" />
        <span className="bubble b4" />
        <span className="bubble b5" />
        <span className="bubble b6" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-center px-6 text-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {slides[current].title}
            <br />
            <span style={{ color: accentColor }}>
              {slides[current].subtitle}
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-200">
            Imvelenhle Cleaning Services provides professional residential,
            commercial, and deep cleaning solutions you can rely on.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-7 py-3 rounded-md font-semibold transition hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            Request a Cleaning →
          </a>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition`}
            style={{ backgroundColor: i === current ? accentColor : "rgba(255,255,255,0.5)" }}
          />
        ))}
      </div>

      {/* Accent Bar */}
      <div className="absolute bottom-0 w-full h-10 z-20" style={{ backgroundColor: accentColor }} />

      {/* Bubble Styles */}
      <style jsx>{`
        .bubble-wrap {
          overflow: hidden;
        }

        .bubble {
          position: absolute;
          bottom: -100px;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          animation: floatUp linear infinite;
          filter: blur(0.5px);
        }

        .b1 { left: 10%; width: 18px; height: 18px; animation-duration: 18s; }
        .b2 { left: 25%; width: 28px; height: 28px; animation-duration: 22s; }
        .b3 { left: 40%; width: 14px; height: 14px; animation-duration: 16s; }
        .b4 { left: 60%; width: 22px; height: 22px; animation-duration: 20s; }
        .b5 { left: 75%; width: 32px; height: 32px; animation-duration: 26s; }
        .b6 { left: 90%; width: 16px; height: 16px; animation-duration: 19s; }

        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-110vh) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
