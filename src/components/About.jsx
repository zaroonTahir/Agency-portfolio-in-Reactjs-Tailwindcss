import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  // Animated counters
  useEffect(() => {
    const duration = 2000; // animation duration in ms
    const steps = 100;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setYears(Math.min(10, (10 * currentStep) / steps));
      setProjects(Math.min(50, (50 * currentStep) / steps));
      setClients(Math.min(100, (100 * currentStep) / steps));

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 text-white overflow-hidden"
      style={{
        backgroundColor: "rgb(15, 22, 48)",
        backgroundImage: "radial-gradient(circle at top, #1a1f3d, #0f1630 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
            alt="Team working on project"
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[rgba(27,95,202,0.3)] to-transparent"></div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-[rgb(27,95,202)]">SMJ Solutions</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We are a full-service digital agency helping businesses grow through
            modern web development, creative branding, and effective marketing
            strategies. Our team brings together innovation, design, and
            technology to deliver powerful online experiences.
          </p>
          <p className="text-gray-400 mb-8">
            From concept to execution, we ensure every project aligns with your
            business goals and helps you stand out in the digital world.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-[rgb(27,95,202)] text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[rgb(27,95,202)] transition"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 grid sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto"
      >
        <div className="bg-[rgba(255,255,255,0.05)] p-8 rounded-2xl hover:bg-[rgba(27,95,202,0.2)] transition">
          <h3 className="text-5xl font-bold text-[rgb(27,95,202)] mb-2">
            {Math.round(years)}+
          </h3>
          <p className="text-gray-300 text-lg">Years Experience</p>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] p-8 rounded-2xl hover:bg-[rgba(27,95,202,0.2)] transition">
          <h3 className="text-5xl font-bold text-[rgb(27,95,202)] mb-2">
            {Math.round(projects)}+
          </h3>
          <p className="text-gray-300 text-lg">Projects Completed</p>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] p-8 rounded-2xl hover:bg-[rgba(27,95,202,0.2)] transition">
          <h3 className="text-5xl font-bold text-[rgb(27,95,202)] mb-2">
            {Math.round(clients)}%
          </h3>
          <p className="text-gray-300 text-lg">Client Satisfaction</p>
        </div>
      </motion.div>
    </section>
  );
}
