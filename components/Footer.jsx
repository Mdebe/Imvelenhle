"use client";

export default function Footer() {
  return (
    <footer className="bg-[#147595] text-white py-4">
      <div className="border-t border-white/30 pt-4 text-center text-white/90 text-xs md:text-sm space-y-1">
        <p>&copy; {new Date().getFullYear()} iMvelenhle Cleaning Services. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a href="https://github.com/yourusername" className="hover:text-white transition-colors">
            Mdebe
          </a>
        </p>
      </div>
    </footer>
  );
}
