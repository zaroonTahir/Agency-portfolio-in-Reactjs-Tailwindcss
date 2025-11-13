// src/components/Contact.jsx
import { motion } from "framer-motion";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24"
      style={{ backgroundColor: "rgb(15, 22, 48)" }} // same as navbar & hero
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let’s Talk About Your Project
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            Have an idea or need help with your marketing? Fill out the form below and we’ll get back to you quickly.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          className="bg-white rounded-3xl shadow-xl p-10 grid gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <div className="relative">
            <AiOutlineUser className="absolute left-4 top-3 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-12 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <AiOutlineMail className="absolute left-4 top-3 text-gray-400 text-xl" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-12 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <BiMessageDetail className="absolute left-4 top-3 text-gray-400 text-xl" />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-12 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-gray-900 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-300 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
