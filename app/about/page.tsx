"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPalette, FaRulerCombined, FaCheckCircle, FaStar } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Decorative Coatings",
      desc: "Premium decorative wall and floor coatings with high durability and aesthetic appeal.",
      img: "/images/decorative.jpg",
      icon: <FaPalette size={36} className="text-[#5da446] mb-2 mx-auto" />,
    },
    {
      title: "Architectural Finishes",
      desc: "Custom architectural finishes tailored to residential, commercial, and industrial projects.",
      img: "/images/architectural.jpg",
      icon: <FaRulerCombined size={36} className="text-[#5da446] mb-2 mx-auto" />,
    },
    {
      title: "Surface Preparation",
      desc: "Expert surface preparation to ensure flawless application and long-lasting results.",
      img: "/images/preparation.jpg",
      icon: <FaCheckCircle size={36} className="text-[#5da446] mb-2 mx-auto" />,
    },
  ];

  const steps = [
    { title: "Consultation & Design", icon: <FaPalette size={40} className="text-[#147595]" /> },
    { title: "Surface Preparation", icon: <FaRulerCombined size={40} className="text-[#147595]" /> },
    { title: "Application & Finishing", icon: <FaCheckCircle size={40} className="text-[#147595]" /> },
    { title: "Inspection & Delivery", icon: <FaStar size={40} className="text-[#147595]" /> },
  ];

  const advantages = [
    "Specialist in decorative coatings & architectural finishes",
    "Premium, durable materials for walls and floors",
    "Custom design solutions tailored to client needs",
    "Trusted by architects, designers, and developers",
    "Attention to detail and artistic craftsmanship",
  ];

  const certificates = [
    "Valley Coats Quality Assurance",
    "Premium Product Certifications",
    "Safety & Compliance Standards",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#010a33]">

        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[35vh] w-full bg-[#5da446] flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Valley <span className="text-white/90">Coats</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Specialists in decorative coatings and architectural finishes, delivering premium wall and floor solutions.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-96 w-full rounded-3xl overflow-hidden shadow-lg"
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#147595]">About Valley Coats</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Valley Coats is a specialist decorative coatings and architectural finishes company based in KwaMbonambi, KwaZulu-Natal. Since 2021, we have built a reputation for delivering high-quality, design-led wall and floor solutions for residential, commercial, and industrial spaces.
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              We combine technical expertise with artistic craftsmanship to transform ordinary surfaces into timeless design features. Our work reflects precision, durability, and aesthetic excellence, making Valley Coats a trusted partner for architects, designers, developers, and property owners seeking premium finishes.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#147595]">Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              To manufacture and apply premium decorative and protective coatings that elevate spaces through durability, beauty, and precision craftsmanship, while partnering closely with architects, designers, and clients to deliver exceptional results.
            </p>
            <h3 className="text-2xl font-semibold mt-4 mb-2 text-[#147595]">Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become a leading African architectural finishes brand, recognised for innovation, craftsmanship, and transforming walls and floors into timeless design features.
            </p>
          </motion.div>
        </section>

        {/* Services Section */}
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

        {/* Step-by-Step Process */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#147595]">How Valley Coats Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {step.icon}
                <h3 className="text-xl font-bold mt-4">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-gray-50 rounded-3xl shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#147595]">Our Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <FaCheckCircle size={28} className="text-[#147595] mb-2 mx-auto" />
                <p className="text-gray-700 font-semibold">{adv}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certificates / Accreditations */}
        <section className="py-20 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#147595]">Certifications & Accreditations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <p className="text-gray-700 font-semibold text-lg">{cert}</p>
              </motion.div>
            ))}
          </div>
        </section>

         

      </main>

      <Footer />
    </>
  );
}
