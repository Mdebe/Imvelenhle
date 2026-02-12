"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPalette, FaRulerCombined, FaCheckCircle, FaStar, FaSprayCan } from "react-icons/fa";
import Navbar from "../../components/Navbar";  
import Footer from "../../components/Footer";  

export default function ServicesPage() {
  const services = [
    {
      title: "Decorative Coatings",
      desc: "Premium decorative wall and floor coatings with high durability and aesthetic appeal.",
      img: "/images/consulting.jpg",
      icon: <FaPalette size={36} className="text-[#147595] mb-2 mx-auto" />,
    },
    {
      title: "Architectural Finishes",
      desc: "Custom architectural finishes tailored to residential, commercial, and industrial projects.",
      img: "/images/architectural.jpg",
      icon: <FaRulerCombined size={36} className="text-[#147595] mb-2 mx-auto" />,
    },
    {
      title: "Surface Preparation",
      desc: "Expert surface preparation to ensure flawless application and long-lasting results.",
      img: "/images/coatings.jpg",
      icon: <FaCheckCircle size={36} className="text-[#147595] mb-2 mx-auto" />,
    },
    {
      title: "Inspection & Delivery",
      desc: "Final inspection ensures premium quality and satisfaction before project handover.",
      img: "/images/flooring.jpg",
      icon: <FaStar size={36} className="text-[#147595] mb-2 mx-auto" />,
    },
     
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#010a33]">

        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[30vh] w-full bg-[#147595] flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="text-white/90">Services</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Delivering premium decorative coatings and architectural finishes for residential, commercial, and industrial spaces.
            </p>
          </div>
        </section>

        {/* Services Grid with Icons */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-gray-50 rounded-3xl shadow-xl -mt-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#147595]">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition p-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                {service.icon}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 mt-2">
                  <Image src={service.img} alt={service.title} fill className="object-cover rounded-xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-[#010a33]">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

         

      </main>

      <Footer />
    </>
  );
}
