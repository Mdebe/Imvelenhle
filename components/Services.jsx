"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useViewportScroll, useSpring } from "framer-motion";

const services = [
  {
    title: ["Decorative", "Wall Finishes"],
    desc: "Gamazine, Glamourcoat, Venetian Stucco & bespoke wall finishes for premium interiors.",
    img: "/images/wall-finishes.jpg",
  },
  {
    title: ["Flooring", "Systems"],
    desc: "Polished concrete, stone carpet, and cementitious floors that elevate any space.",
    img: "/images/flooring.jpg",
  },
  {
    title: ["Custom", "Architectural"],
    desc: "Bespoke surface treatments and designs tailored for residential, commercial, and industrial spaces.",
    img: "/images/architectural.jpg",
  },
  {
    title: ["Protective", "Coatings"],
    desc: "Durable coatings that combine functionality with luxurious aesthetics.",
    img: "/images/coatings.jpg",
  },
  {
    title: ["Consulting", "Services"],
    desc: "Collaborate with architects and designers for design-led finishing solutions.",
    img: "/images/consulting.jpg",
  },
  {
    title: ["Industrial", "Solutions"],
    desc: "Specialised finishes for factories, warehouses, and infrastructure projects.",
    img: "/images/industrial.jpg",
  },
];

function ServiceCard({ service }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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

  const { scrollY } = useViewportScroll();
  const ySpring = useSpring(useTransform(scrollY, [0, 1000], [0, -50]), { damping: 20, stiffness: 120 });

  const accentColor = "#5da446";

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, y: ySpring }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
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
        <h4 className="text-2xl md:text-3xl font-bold mb-3">
          <span className="text-[#010a33]">{service.title[0]}</span>{" "}
          <span style={{ color: accentColor }}>{service.title[1]}</span>
        </h4>
        <p className="text-gray-600 leading-relaxed">{service.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const accentColor = "#5da446";

  return (
    <section
  id="services"
  className="relative py-24"
  style={{
    backgroundImage: "url('/images/venetian-background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <div className="relative max-w-7xl mx-auto px-6 text-center mb-14 z-10">
    <h2 className="text-5xl md:text-6xl font-bold text-white">
      Our <span style={{ color: accentColor }}>Services</span>
    </h2>
    <p className="text-gray-200 text-lg mt-3 max-w-2xl mx-auto">
      Valley Coats delivers premium decorative coatings, flooring systems, and custom architectural finishes
      for residential, commercial, and industrial spaces.
    </p>
  </div>

  <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 z-10">
    {services.map((service) => (
      <ServiceCard key={service.title.join(" ")} service={service} />
    ))}
  </div>

  {/* Darker Overlay for luxury depth */}
  <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
</section>

  );
}
