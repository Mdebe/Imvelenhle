"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  const accentColor = "#5da446";

  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Left Image */}
        <motion.div
          className="md:w-1/2 relative h-[380px] w-full rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/valley-coats-about.jpg" // replace with your Valley Coats image path
            alt="Valley Coats Decorative Coatings"
            fill
            className="object-cover rounded-3xl"
            priority
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
            About <span style={{ color: accentColor }}>Valley Coats</span>
          </h3>

          <p className="mt-6 text-lg leading-relaxed" style={{ color: "#333" }}>
            Valley Coats is a specialist decorative coatings and architectural finishes company 
            based in KwaMbonambi, KwaZulu-Natal. We transform ordinary walls and floors into 
            timeless, luxurious design features for residential, commercial, and industrial spaces.
          </p>

          <p className="mt-4 text-lg leading-relaxed" style={{ color: "#333" }}>
            Our team combines technical expertise with artistic craftsmanship, ensuring every 
            surface we treat reflects precision, durability, and aesthetic excellence.
          </p>

          <p className="mt-4 text-lg leading-relaxed" style={{ color: "#333" }}>
            Our mission is simple — to deliver premium decorative coatings and architectural finishes 
            that elevate spaces, working closely with architects, designers, and clients to achieve 
            exceptional results.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
