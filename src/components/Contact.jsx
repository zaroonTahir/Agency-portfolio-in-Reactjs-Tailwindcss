// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
        <p className="mb-8 text-lg text-gray-200">
          Let’s discuss how we can help you achieve your marketing goals.
        </p>
        <button className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
