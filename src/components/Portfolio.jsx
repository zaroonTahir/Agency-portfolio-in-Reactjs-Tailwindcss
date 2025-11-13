// src/components/Portfolio.jsx
const projects = [
  { title: "E-Commerce Campaign", img: "/assets/portfolio1.jpg" },
  { title: "Social Media Growth", img: "/assets/portfolio2.jpg" },
  { title: "Brand Identity Design", img: "/assets/portfolio3.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl shadow">
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover group-hover:scale-110 transition" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-lg font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
