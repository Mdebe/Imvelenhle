"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

const services = [
   {
      title: ["Residential Cleaning"],
      desc: "Expert home cleaning, tailored to your needs. Safe, reliable, and thorough.",
      img: "/images/residential.jpg",
    },
    {
      title: ["Commercial Cleaning"],
      desc: "Professional cleaning for offices, shops, and commercial spaces. We maintain high hygiene standards.",
      img: "/images/commercial.jpg",
    },
  {
    title: ["Outdoor", "Cleaning"],
    desc: "Lawn maintenance and outdoor cleaning services for small to large areas.",
    img: "/images/lawn.jpg",
  },
  {
    title: ["Gardening", "Maintenance"],
    desc: "Regular gardening services including trimming, planting, and upkeep.",
    img: "/images/gardening.jpg",
  },
  {
    title: ["Tree", "Trimming"],
    desc: "Safe and professional trimming of small to extra-large trees.",
    img: "/images/tree.jpg",
  },
  {
      title: ["Sanitizing Services"],
      desc: "Non-alcohol textile-safe sanitizers for fabrics, mattresses, and home surfaces.",
      img: "/images/sanitizer.jpg",
    },
];

function ServiceCard({ service }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const accentColor = "#147595"; // brand color

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg"
    >
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          src={service.img}
          alt={service.title.join(" ")}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8 text-center">
        <h4 className="text-2xl font-bold mb-3">
          <span className="text-[#010a33]">{service.title[0]}</span>{" "}
          <span style={{ color: accentColor }}>{service.title[1]}</span>
        </h4>

        <p className="text-gray-600 leading-relaxed">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const accentColor = "#147595";

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-bold">
          Our <span style={{ color: "#010a33" }}>Services</span>
        </h2>
        <p className="text-gray-600 text-lg mt-3">
          Professional cleaning solutions for homes, offices, and outdoor spaces
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <ServiceCard
            key={service.title.join(" ")}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}
