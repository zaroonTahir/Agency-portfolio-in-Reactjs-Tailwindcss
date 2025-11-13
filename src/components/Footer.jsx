// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Digimax</h3>
          <p>Your trusted partner in digital growth and online success.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#portfolio" className="hover:text-yellow-400">Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <p>Email: info@digimax.com</p>
          <p>Phone: +92 300 1234567</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Digimax. All rights reserved.
      </div>
    </footer>
  );
}
