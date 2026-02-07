"use client";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-[#010a33]">Get in Touch</h3>
        <p className="text-gray-600 mt-2 text-lg mb-12">
          Send us a message and our team at iMvelenhle Cleaning Services will get back to you promptly.
        </p>

        <div className="bg-[#f9f9f9] p-8 rounded-3xl shadow-lg">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#147595]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#147595]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#147595]"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#147595]"
            />
            <button
              type="submit"
              className="w-full bg-[#147595] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
