import React from 'react';
import { FaCloud, FaServer } from 'react-icons/fa';
import { SiTerraform } from 'react-icons/si';

export default function Education() {
  const items = [
    {
      title: "Master of Science in Information Technology (STEM)",
      institution: "Clark University, Worcester, MA",
      year: "Dec 2023",
      icon: <FaCloud className="text-cyan-400 text-4xl" />,
    },
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Sir C R Reddy College, Eluru, AP",
      year: "May 2020",
      icon: <SiTerraform className="text-purple-400 text-4xl" />,
    },
  ];

  return (
    <section
      id="education"
      className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 py-16 px-6 text-white relative"
    >
      {/* Light techy grid background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,_#00f2ff_1px,_transparent_1px),linear-gradient(-45deg,_#00f2ff_1px,_transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/70 border border-cyan-500/20 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 transition transform hover:-translate-y-2 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-800/70 rounded-full border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">{item.title}</h3>
                  <p className="text-gray-300">{item.institution}</p>
                </div>
              </div>
              <p className="text-sm text-orange-400 font-medium">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
