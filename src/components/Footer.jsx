// src/components/Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
  const hoverUp = {
    whileHover: { y: -3, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <footer className="py-12" style={{ backgroundColor: "rgb(15, 22, 48)" }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-gray-300">

        {/* Company Info */}
        <div>
          <motion.h3
            className="text-2xl font-semibold text-white mb-4"
            {...hoverUp}
          >
            SMJ Solutions
          </motion.h3>
          <motion.p className="leading-relaxed" {...hoverUp}>
            Your trusted partner in digital growth and online success. We provide
            innovative solutions tailored to your business needs.
          </motion.p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <motion.h3
            className="text-2xl font-semibold text-white mb-4"
            {...hoverUp}
          >
            Quick Links
          </motion.h3>

          <div className="flex flex-wrap gap-3">
            {["Home", "Services", "About", "Team", "Portfolio", "Contact"].map(
              (link, i) => (
                <motion.a
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  className="bg-[rgb(27,95,202)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[rgb(40,110,230)] transition-all shadow-md hover:shadow-lg"
                  {...hoverUp}
                >
                  {link}
                </motion.a>
              )
            )}
          </div>
        </div>

        {/* Contact */}
        <div>
          <motion.h3
            className="text-2xl font-semibold text-white mb-4"
            {...hoverUp}
          >
            Contact
          </motion.h3>
          <motion.p {...hoverUp}>📧 Email: info@smjsols.com</motion.p>
          <motion.p {...hoverUp}>📞 Phone: +92 300 1234567</motion.p>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="text-center text-gray-500 mt-12 pt-6 border-t border-gray-700"
        whileHover={{ y: -2, transition: { type: "spring", stiffness: 300 } }}
      >
        © {new Date().getFullYear()} <span className="text-white">SMJ Solutions</span>. All rights reserved.
      </motion.div>
    </footer>
  );
}
