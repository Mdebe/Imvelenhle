"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  const accentColor = "#147595";

  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Left Video */}
        <motion.div
          className="md:w-1/2 relative h-[380px] w-full rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <video
            src="/videos/about-us.mp4" // replace with your video path
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold" style={{ color: "#010a33" }}>
            About <span style={{ color: accentColor }}>Imvelenhle</span>
          </h3>

          <p className="mt-6 text-lg leading-relaxed" style={{ color: "#333" }}>
            Imvelenhle Cleaning Services is a trusted, professional cleaning
            company committed to delivering high-quality residential and
            commercial cleaning solutions.
          </p>

          <p className="mt-4 text-lg leading-relaxed" style={{ color: "#333" }}>
            We pride ourselves on reliability, attention to detail, and a
            friendly team that ensures every space we clean is left fresh,
            hygienic, and welcoming.
          </p>

          <p className="mt-4 text-lg leading-relaxed" style={{ color: "#333" }}>
            Our mission is simple — to provide affordable, dependable cleaning
            services that give our clients peace of mind and more time to focus
            on what matters most.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
