// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const statsData = [
    { label: "Projects Completed", value: 350 },
    { label: "Satisfied Clients", value: 250 },
    { label: "Client Satisfaction", value: 95 },
  ];

  const [counters, setCounters] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1500; // 1.5 seconds
    const intervalTime = 20; // update every 20ms
    const steps = duration / intervalTime;

    const increments = statsData.map((stat) => stat.value / steps);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCounters((prev) =>
        prev.map((count, idx) =>
          Math.min(Math.round(count + increments[idx]), statsData[idx].value)
        )
      );

      if (currentStep >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-32 pb-32 text-white"
      style={{
        backgroundColor: "rgb(15, 22, 48)",
        backgroundImage:
          "radial-gradient(circle at top, #1a1f3d, #0f1630 100%)",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full bg-[url('https://images.pexels.com/photos/3184308/pexels-photo-3184308.jpeg?auto=compress&cs=tinysrgb&w=800')] opacity-10 animate-pulse mix-blend-overlay"></div>
      </div>

      {/* Hero content */}
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-sm md:text-base tracking-widest text-purple-400 uppercase bg-purple-900 bg-opacity-30 px-4 py-1 rounded-full">
            Welcome to SMJ Solutions
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Your Path to{" "}
            <span className="text-purple-400">Digital Excellence</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
            Combining expertise with the latest technology trends to create
            impactful results.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <button
              style={{ backgroundColor: "rgb(27, 95, 202)" }}
              className="text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Get Started
            </button>
            <button
              className="bg-[rgb(8,15,33)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[rgb(27,95,202)] transition"
            >
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {statsData.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                {counters[index]}
                {stat.label === "Client Satisfaction" ? "%" : "+"}
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Moving Logos */}
        <div className="mt-16 overflow-hidden w-full">
          <div className="flex animate-marquee whitespace-nowrap gap-16 hover:animation-paused">
            {[
              "netflix",
              "microsoft",
              "nike",
              "apple",
              "google",
              "facebook",
              "amazon",
              "adobe",
            ].map((brand) => (
              <img
                key={brand}
                src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${brand}.svg`}
                alt={brand}
                className="h-10 w-auto object-contain transition-all duration-300 filter invert brightness-200 hover:scale-110"
              />
            ))}
            {/* Duplicate for seamless scrolling */}
            {[
              "netflix",
              "microsoft",
              "nike",
              "apple",
              "google",
              "facebook",
              "amazon",
              "adobe",
            ].map((brand) => (
              <img
                key={brand + "-duplicate"}
                src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${brand}.svg`}
                alt={brand}
                className="h-10 w-auto object-contain transition-all duration-300 filter invert brightness-200 hover:scale-110"
              />
            ))}
          </div>
        </div>

        {/* Custom CSS animation */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: inline-flex;
              animation: marquee 20s linear infinite;
            }
            .hover\\:animation-paused:hover {
              animation-play-state: paused;
            }
          `}
        </style>
      </div>
    </section>
  );
}
