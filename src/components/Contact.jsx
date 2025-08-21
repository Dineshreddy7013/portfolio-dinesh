import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope className="text-red-300 text-2xl" />,
      label: "Email",
      value: "reedydinesh@gmail.com",
      href: "mailto:reedydinesh@gmail.com",
      bg: "bg-red-600/20",
    },
    {
      icon: <FaPhoneAlt className="text-green-300 text-2xl" />,
      label: "Phone",
      value: "+1 (781) 579-1695",
      href: "tel:+17815791695",
      bg: "bg-green-600/20",
    },
    {
      icon: <FaLinkedin className="text-blue-300 text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/dinesh-r-349b52316",
      href: "https://www.linkedin.com/in/dinesh-r-349b52316/",
      bg: "bg-blue-600/20",
    },
    {
      icon: <FaGithub className="text-gray-200 text-2xl" />,
      label: "GitHub",
      value: "github.com",
      href: "https://github.com/",
      bg: "bg-gray-600/20",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-red-950 via-gray-900 to-yellow-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400">
          Get in Touch
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Whether it’s about DevOps, cloud architecture, or just to say hello —
          feel free to connect with me through any of the platforms below.
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg transition"
            >
              <div className={`p-4 rounded-full ${item.bg}`}>{item.icon}</div>
              <div className="text-center">
                <div className="text-sm text-gray-400">{item.label}</div>
                <div className="font-medium break-all">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-12">
          &copy; {new Date().getFullYear()} Dinesh Reddy. All rights reserved.
        </p>
      </div>
    </section>
  );
}
