// src/components/Portfolio.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Campaign",
    img: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Social Media Growth",
    img: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Brand Identity Design",
    img: "https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Digital Advertising",
    img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Website Redesign",
    img: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Product Launch Campaign",
    img: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 text-white"
      style={{ backgroundColor: "rgb(15, 22, 48)" }} // same as navbar & hero
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-white">Our Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="relative group overflow-hidden rounded-xl shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-lg font-semibold">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
