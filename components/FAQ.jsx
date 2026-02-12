"use client";

import { motion } from "framer-motion";
import { FiLayers, FiPackage, FiTool } from "react-icons/fi"; // Advantages icons
import { HiOutlineClipboardList, HiOutlineColorSwatch, HiOutlineCheckCircle, HiOutlineEye } from "react-icons/hi"; // Process icons
import Image from "next/image";

const advantages = [
  {
    title: "Specialization",
    desc: "Expertise in premium decorative coatings and architectural finishes.",
    icon: <FiLayers size={60} className="text-[#e8d926]" />,
  },
  {
    title: "Premium Materials",
    desc: "We use high-quality materials to ensure long-lasting, luxurious finishes.",
    icon: <FiPackage size={60} className="text-[#e8d926]" />,
  },
  {
    title: "Custom Solutions",
    desc: "Bespoke wall and floor finishes tailored to your unique project.",
    icon: <FiTool size={60} className="text-[#e8d926]" />,
  },
];

const steps = [
  { title: "Consultation & Design", icon: <HiOutlineClipboardList size={60} className="text-[#5da446]" /> },
  { title: "Surface Preparation", icon: <HiOutlineColorSwatch size={60} className="text-[#5da446]" /> },
  { title: "Application & Finishing", icon: <HiOutlineCheckCircle size={60} className="text-[#5da446]" /> },
  { title: "Inspection & Delivery", icon: <HiOutlineEye size={60} className="text-[#5da446]" /> },
];

const certifications = [
  { name: "ISO 9001", logo: "/certs/iso9001.png" },
  { name: "SABS Approved", logo: "/certs/sabs.png" },
  { name: "Manufacturer Certified", logo: "/certs/manufacturer.png" },
];

export default function ValleySections() {
  const accentColor = "#e8d926";

  return (
    <div className="bg-white">

      {/* WHY CHOOSE US */}
      <section id="advantages" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Why Choose <span style={{ color: accentColor }}>Us</span></h2>
          <p className="text-gray-600 text-lg">
            Our dedication to craftsmanship, premium materials, and custom solutions makes Valley Coats the trusted choice for your spaces.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {advantages.map((adv, idx) => (
            <motion.div
              key={adv.title}
              className="bg-gray-50 p-8 rounded-3xl shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="mb-6">
                {adv.icon}
              </div>
              <h4 className="text-2xl font-bold mb-2">{adv.title}</h4>
              <p className="text-gray-600">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STEP-BY-STEP PROCESS */}
      <section id="process" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 text-lg">
            From consultation to final delivery, we ensure every project is executed with precision.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="mb-4">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold">{step.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

 


    </div>
  );
}
