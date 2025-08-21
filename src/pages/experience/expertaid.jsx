import React from "react";
import bg from "../../assets/expertaid.png";

export default function ExpertAid() {
  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-black to-blue-950 min-h-screen">
      {/* Hero */}
      <div
        className="bg-cover bg-center h-60 flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-cyan-300 bg-black/60 px-6 py-2 rounded-xl shadow-lg">
          Expert Aid Technologies Pvt Ltd · Cloud Migration & Containerization
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Summary */}
        <p className="text-gray-300 leading-relaxed mb-10">
          Supported migration of legacy monoliths to containerized workloads and helped stand up
          Kubernetes environments. Focused on building optimized Docker images, enabling
          zero-downtime releases with Helm, integrating GitHub Actions for continuous deployment,
          and introducing Infrastructure as Code for AWS resources.
        </p>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "Docker (multi-stage builds)",
            "Kubernetes (EKS/AKS)",
            "Helm",
            "NGINX Ingress",
            "GitHub Actions (CD)",
            "Terraform",
            "AWS CloudFormation",
            "AWS (EC2, VPC, IAM, ECR)",
            "Azure (AKS basics)"
          ].map((tech) => (
            <span key={tech} className="bg-cyan-700/30 border border-cyan-500/40 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Key Contributions */}
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Key Contributions</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10">
          <li>
            Containerized Java/Node apps with <strong>multi-stage Dockerfiles</strong>, cutting image size ~30%
            and reducing build time ~20%.
          </li>
          <li>
            Assisted in provisioning <strong>EKS/AKS</strong> clusters and implemented <strong>Helm</strong>
            charts with rolling updates for minimal downtime.
          </li>
          <li>
            Integrated <strong>GitHub Actions</strong> pipelines to automate builds, image pushes to ECR,
            and Kubernetes deploys with environment gates.
          </li>
          <li>
            Contributed <strong>Terraform</strong>/<strong>CloudFormation</strong> for AWS networking, IAM,
            and compute, reducing manual ops and drift.
          </li>
          <li>
            Helped configure <strong>NGINX Ingress</strong> and basic policies for secure service exposure.
          </li>
        </ul>

        {/* Delivery Process */}
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Delivery Process</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center text-sm text-gray-300">
          {[
            { step: "1. Assessment", desc: "Identify services for containerization; baseline perf & size." },
            { step: "2. Build", desc: "Author multi-stage Dockerfiles; set up ECR & base charts." },
            { step: "3. Deploy", desc: "Wire Actions → EKS/AKS with Helm; rolling updates & checks." },
            { step: "4. Improve", desc: "IaC for infra, tune resources, establish run-books & guardrails." }
          ].map(({ step, desc }, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg border border-cyan-700/40">
              <h3 className="font-bold mb-2 text-cyan-300">{step}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
