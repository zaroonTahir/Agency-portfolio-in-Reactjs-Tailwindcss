// src/components/Team.jsx
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const teamMembers = [
  {
    name: "Zaroon Tahir",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Usmaan Ahmed",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Ayesha Khan",
    role: "Lead Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Ali Raza",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    facebook: "#",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-20"
      style={{
        backgroundColor: "rgb(15, 22, 48)",
        backgroundImage: "radial-gradient(circle at top, #1a1f3d, #0f1630 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Our passionate team drives innovation and delivers excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 flex flex-col items-center
                         bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-lg
                         border border-purple-600 shadow-lg transition-transform transform
                         hover:-translate-y-3 hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-purple-400 shadow-md"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-300 mb-4">{member.role}</p>
              <div className="flex justify-center gap-6 text-gray-300">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transform hover:scale-125 transition duration-300"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transform hover:scale-125 transition duration-300"
                >
                  <FaTwitter size={28} />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transform hover:scale-125 transition duration-300"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transform hover:scale-125 transition duration-300"
                >
                  <FaFacebookF size={28} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
