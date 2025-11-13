// src/components/Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
  const hoverUp = {
    whileHover: { y: -3, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <footer className="py-10" style={{ backgroundColor: "rgb(15, 22, 48)" }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-gray-300">

        <div>
          <motion.h3
            className="text-xl font-semibold text-white mb-3"
            {...hoverUp}
          >
            SMJ Solutions
          </motion.h3>
          <motion.p {...hoverUp}>
            Your trusted partner in digital growth and online success.
          </motion.p>
        </div>

        <div>
          <motion.h3 className="text-xl font-semibold text-white mb-3" {...hoverUp}>
            Quick Links
          </motion.h3>
          <ul className="space-y-2">
            {["Home", "Services", "Portfolio", "Contact"].map((link, i) => (
              <li key={i}>
                <motion.a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-blue-500 transition"
                  {...hoverUp}
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <motion.h3 className="text-xl font-semibold text-white mb-3" {...hoverUp}>
            Contact
          </motion.h3>
          <motion.p {...hoverUp}>Email: info@smlsols.com</motion.p>
          <motion.p {...hoverUp}>Phone: +92 300 1234567</motion.p>
        </div>

      </div>

      <motion.div
        className="text-center text-gray-500 mt-10 pt-6"
        whileHover={{ y: -2, transition: { type: "spring", stiffness: 300 } }}
      >
        © {new Date().getFullYear()} SMJ. All rights reserved.
      </motion.div>
    </footer>
  );
}
