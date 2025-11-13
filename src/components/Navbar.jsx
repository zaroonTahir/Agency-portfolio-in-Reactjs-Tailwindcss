// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-50"
      style={{
        backgroundColor: "rgb(15, 22, 48)" // updated background color
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Smj Solutions</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-white">
          <li><a href="#hero" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="#team" className="hover:text-blue-500 transition">Team</a></li>
          <li><a href="#portfolio" className="hover:text-blue-500 transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>

        {/* CTA */}
      <a
  href="#contact"
  className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition"
>
  Get Started
</a>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-4 text-white font-medium" style={{ backgroundColor: "rgb(15, 22, 48)" }}>
          <li><a href="#hero" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
          <li><a href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
