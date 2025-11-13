// src/components/Services.jsx
import { motion } from "framer-motion";

const services = [
  {
    title: "SEO Optimization",
    desc: "Boost your website ranking and attract more visitors through expert SEO techniques.",
    icon: "🚀",
  },
  {
    title: "Social Media Marketing",
    desc: "Grow your brand awareness and engage customers across all platforms.",
    icon: "📱",
  },
  {
    title: "Content Strategy",
    desc: "We craft high-impact content strategies that convert audiences into loyal clients.",
    icon: "✍️",
  },
  {
    title: "Web Development",
    desc: "Build responsive, modern, and secure websites tailored to your brand.",
    icon: "💻",
  },
  {
    title: "Brand Identity Design",
    desc: "Create a cohesive brand identity that resonates with your audience.",
    icon: "🎨",
  },
  {
    title: "Email Marketing",
    desc: "Engage your customers with personalized email campaigns that convert.",
    icon: "📧",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 text-white"
      style={{ backgroundColor: "rgb(15, 22, 48)" }} // same as navbar & hero
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-white">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
