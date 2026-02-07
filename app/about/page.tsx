"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer";  

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#010a33]">

        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[40vh] w-full bg-[#8c54ff] flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About <span className="text-white/90">iMvelenhle</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Delivering trusted, professional cleaning solutions for residential, commercial, and outdoor spaces.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Image */}
            <motion.div
              className="relative h-80 w-full rounded-3xl overflow-hidden shadow-lg"
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
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#147595]">Our Mission</h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Our mission is to provide professional, reliable, and affordable cleaning services that make every space safe, hygienic, and welcoming.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We focus on attention to detail, excellent customer service, and creating a cleaning experience you can trust.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#147595]">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Residential Cleaning", desc: "Expert home cleaning, tailored to your needs.", img: "/images/residential.jpg" },
              { title: "Commercial Cleaning", desc: "Professional cleaning for offices and businesses.", img: "/images/commercial.jpg" },
              { title: "Outdoor & Lawn", desc: "Lawn cleaning, gardening, and outdoor maintenance.", img: "/images/outdoor.jpg" },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                  <Image src={service.img} alt={service.title} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-[#010a33]">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#147595]">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Trusted Professionals", desc: "Our team is trained, background-checked, and reliable." },
              { title: "Affordable Pricing", desc: "Competitive rates without compromising quality." },
              { title: "Flexible Scheduling", desc: "We work around your schedule for convenience." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 text-[#010a33]">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-[#18bc80] text-white py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Spotless Space?</h2>
          <p className="mb-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Contact iMvelenhle Cleaning Services today to schedule your cleaning appointment!
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#147595] font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition"
          >
            Book a Cleaning
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}
