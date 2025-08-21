import React from 'react'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Section Heading */}
        <h2 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-fadeIn">
          About Me
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto animate-fadeIn delay-200">
          DevOps Engineer & AWS Solutions Architect with <span className="text-cyan-300 font-semibold">4+ years</span> of 
          experience building cloud-native, automated, and highly scalable systems across AWS, Azure, and GCP.
        </p>

        {/* Quote / Impact Statement */}
        <div className="mt-8 bg-gray-800/40 backdrop-blur-lg rounded-xl border border-cyan-600 p-6 shadow-lg animate-slideUp">
          <p className="italic text-xl text-cyan-300 font-light">
            “I design, automate, and secure infrastructure so businesses can innovate without limits.”
          </p>
        </div>

        {/* Skills Highlights */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fadeIn delay-400">
          {[
            "AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Jenkins",
            "GitHub Actions", "Docker", "Ansible", "Helm", "Prometheus", "Grafana"
          ].map(skill => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-medium rounded-full border border-cyan-400 text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20 transition"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-14 grid sm:grid-cols-3 gap-6 animate-slideUp delay-600">
          {[
            { num: "30+", label: "Cloud Projects Delivered" },
            { num: "100%", label: "CI/CD Automation Success" },
            { num: "24/7", label: "Uptime for Critical Systems" }
          ].map((stat, i) => (
            <div key={i} className="bg-gray-800/40 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition">
              <h3 className="text-3xl font-bold text-cyan-400">{stat.num}</h3>
              <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.9s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  )
}
