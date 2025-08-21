import React from 'react'
import {
  FaAws, FaDocker, FaGitAlt, FaPython, FaLinux
} from 'react-icons/fa'
import {
  SiTerraform, SiKubernetes, SiJenkins, SiHelm, SiPrometheus, SiGrafana,
  SiAnsible, SiAzuredevops, SiGooglecloud
} from 'react-icons/si'

export default function Skills() {
  const skills = [
    { name: "AWS", icon: <FaAws />, color: "text-yellow-300" },
    { name: "Azure", icon: <SiAzuredevops />, color: "text-blue-400" },
    { name: "GCP", icon: <SiGooglecloud />, color: "text-red-400" },
    { name: "Terraform", icon: <SiTerraform />, color: "text-purple-400" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "text-blue-500" },
    { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
    { name: "Helm", icon: <SiHelm />, color: "text-cyan-400" },
    { name: "Jenkins", icon: <SiJenkins />, color: "text-red-500" },
    { name: "GitHub Actions", icon: <FaGitAlt />, color: "text-gray-300" },
    { name: "Ansible", icon: <SiAnsible />, color: "text-green-400" },
    { name: "Prometheus", icon: <SiPrometheus />, color: "text-pink-400" },
    { name: "Grafana", icon: <SiGrafana />, color: "text-orange-400" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
    { name: "Bash/Linux", icon: <FaLinux />, color: "text-gray-200" }
  ]

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 animate-fadeIn">
          Technologies I Work With
        </h2>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto animate-fadeIn delay-200">
          My DevOps toolkit spans cloud platforms, infrastructure automation, CI/CD pipelines, and observability solutions.
        </p>

        {/* Horizontal Skills */}
        <div className="flex flex-wrap justify-center gap-10 animate-slideUp delay-400">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group flex flex-col items-center w-28 hover:scale-110 transition-transform duration-300"
            >
              <div
                className={`text-5xl mb-3 ${skill.color} group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] transition-all duration-300`}
              >
                {skill.icon}
              </div>
              <span className="text-sm text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">
                {skill.name}
              </span>
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
      `}</style>
    </section>
  )
}
