"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What services does iMvelenhle Cleaning Services offer?",
    answer: "We provide professional mattress cleaning, bed base cleaning, outdoor cleaning, gardening maintenance, and tree trimming for residential and commercial clients.",
  },
  {
    question: "How can I book a cleaning service?",
    answer: "You can book a service by filling out the booking form on our website or contacting us directly via WhatsApp or email.",
  },
  {
    question: "Do you offer specialized cleaners for elders and moms?",
    answer: "Yes! We have dedicated 'Elder' and 'Moms Only' cleaners, so you can confidently choose the perfect cleaner for your home.",
  },
  {
    question: "What areas do your outdoor and gardening services cover?",
    answer: "We provide lawn cleaning and gardening services for small, medium, and large areas, including trimming of trees of all sizes.",
  },
  {
    question: "How can I contact iMvelenhle Cleaning Services?",
    answer: "You can reach us via WhatsApp at 072 334 0746 or email at info@imvelenhlecleaning.co.za for quick responses.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-[#010a33]">Frequently Asked Questions</h3>
        <p className="text-gray-600 mt-2 text-lg">Everything you need to know about iMvelenhle services</p>

        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-[#010a33] focus:outline-none"
              >
                {item.question}
                <span className={`transform transition-transform ${openIndex === index ? "rotate-45" : "rotate-0"}`}>
                  +
                </span>
              </button>

              <div
                className={`px-6 pb-4 text-gray-700 text-sm transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
