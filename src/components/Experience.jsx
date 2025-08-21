import React from "react";
import { Link } from "react-router-dom";

// Import images from src/assets
import sanguineImg from "../assets/sanguine.png";
import pristenImg from "../assets/pristen.png";
import expertaidImg from "../assets/expertaid.png";

export default function Experience() {
  const items = [
    {
      name: "Sanguine Software Solutions Inc",
      image: sanguineImg,
      link: "/experience/sanguine",
      brief:
        "CloudOps modernization across AWS & Azure. Terraform modules, CI/CD with Jenkins & GitHub Actions, EKS/AKS with Helm, observability via CloudWatch/Prometheus/Grafana, and resilient backups (EBS snapshots, S3 cross-region).",
    },
    {
      name: "Pristen IT Systems Inc",
      image: pristenImg,
      link: "/experience/pristen",
      brief:
        "Multi-env SaaS infra on Azure & AWS. Reusable Terraform, secure networking (Private Link, NSGs), parallelized CI/CD (Jenkins/Actions + Ansible), release orchestration, and ISO/SOC2 alignment.",
    },
    {
      name: "Expert Aid Technologies Pvt Ltd",
      image: expertaidImg,
      link: "/experience/expertaid",
      brief:
        "Containerized legacy apps with multi-stage Dockerfiles, stood up EKS/AKS, Helm rollouts, GitHub Actions CD to ECR/K8s, and IaC via Terraform/CloudFormation.",
    },
  ];

  return (
    <section
      id="experience"
      className="px-6 py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Professional Experience
      </h2>

      <div className="space-y-10 max-w-6xl mx-auto">
        {items.map((exp) => (
          <Link
            to={exp.link}
            key={exp.name}
            className="group flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl border border-white/10 bg-gray-900/50 hover:bg-gray-900 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={exp.image}
                alt={exp.name}
                className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3 text-left">
              <h3 className="text-2xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {exp.name}
              </h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{exp.brief}</p>
              <span className="inline-block mt-4 text-sm text-cyan-400 group-hover:text-cyan-300 underline">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
