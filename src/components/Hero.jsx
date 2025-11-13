// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empower Your Brand with <span className="text-yellow-400">Creative Digital Solutions</span>
          </h1>
          <p className="text-lg text-gray-200">
            We help businesses build their online presence and grow with modern marketing strategies.
          </p>
          <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            Get Started
          </button>
        </div>

        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="/assets/hero-img.png"
            alt="Marketing Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
