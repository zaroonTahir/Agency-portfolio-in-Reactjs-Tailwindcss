// src/components/Services.jsx
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
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
