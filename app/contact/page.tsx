"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar";  
import Footer from "../../components/Footer";  

const services = [
  "Mattress Cleaning",
  "Bed Base Cleaning",
  "Outdoor Cleaning",
  "Tree Trimming",
  "Gardening Maintenance",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");

  const phoneNumber = "27723340746";

  const sendWhatsApp = () => {
    const text = `Hello! My name is ${name} (${email}). I would like to book the service: ${service}. Message: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="bg-white text-[#010a33] min-h-screen">

      <Navbar />

      {/* CONTACT DETAILS + FORM */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left: Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#147595]">Contact Details</h2>
            <p className="text-gray-700 text-lg">
              Reach out to iMvelenhle Cleaning Services for any questions or to schedule a cleaning service. We're here to help!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-700">
                <FaPhoneAlt className="text-[#147595] w-6 h-6" />
                <span>+27 72 3340 746</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaWhatsapp className="text-[#147595] w-6 h-6" />
                <span>
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Chat with us on WhatsApp
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaEnvelope className="text-[#147595] w-6 h-6" />
                <span>info@imvelenhlecleaning.co.za</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaMapMarkerAlt className="text-[#147595] w-6 h-6" />
                <span>50 Waterkant Street, Odendaalsrus, South Africa, 9480</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-[#147595]">Send a Message</h2>
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#147595]"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#147595]"
              />

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#147595]"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#147595]"
              />

              <button
                onClick={sendWhatsApp}
                className="bg-[#8c54ff] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
              >
                Send via WhatsApp
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      
    </main>
  );
}
