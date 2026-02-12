"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Crafted for",
    subtitle: "Distinctive Spaces",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Decorative Coatings &",
    subtitle: "Architectural Finishes",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Premium Wall & Floor",
    subtitle: "Design Solutions",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const accentColor = "#5da446";

  // Slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Slides */}
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
            className="object-cover scale-110"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }} // stronger parallax
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Hero Text Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-center px-6 text-center md:text-left">
        <div className="text-white max-w-3xl">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: offsetY * 0.3 }} // parallax + entry from left
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            {slides[current].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: offsetY * 0.25 }} // entry from right
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-2"
            style={{ color: accentColor }}
          >
            {slides[current].subtitle}
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: offsetY * 0.2 }} // entry from bottom
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            Valley Coats specialises in premium decorative coatings and architectural finishes
            for residential, commercial, and industrial spaces. We transform walls and floors
            into timeless design features.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: offsetY * 0.15 }} // entry from top
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="inline-block mt-8 px-10 py-4 rounded-md font-bold tracking-wide uppercase transition hover:opacity-90"
            style={{
              backgroundColor: accentColor,
              color: "#000",
              boxShadow: "0 10px 30px rgba(93,164,70,0.25)",
            }}
          >
            Get a Quote →
          </motion.a>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="h-3 w-3 rounded-full transition"
            style={{
              backgroundColor:
                i === current ? accentColor : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* Accent Bar */}
      <div
        className="absolute bottom-0 w-full h-10 z-20"
        style={{ backgroundColor: accentColor }}
      />
    </section>
  );
}
