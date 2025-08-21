import React from "react";
import bg from "../../assets/sanguine.png";

export default function Sanguine() {
  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-black to-blue-950 min-h-screen">
      {/* Hero */}
      <div
        className="bg-cover bg-center h-60 flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-cyan-300 bg-black/60 px-6 py-2 rounded-xl shadow-lg">
          Sanguine Software Solutions Inc · CloudOps Modernization
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Summary */}
        <p className="text-gray-300 leading-relaxed mb-10">
          Led a cloud migration and automation initiative for business-critical apps across
          <span className="text-cyan-300"> AWS</span> and <span className="text-cyan-300">Azure</span>.
          Designed CI/CD, standardized Infrastructure as Code, and deployed Kubernetes workloads with
          enterprise monitoring and resilient backups.
        </p>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "AWS (EC2, VPC, S3, IAM, Lambda, RDS, EKS)",
            "Azure (AKS, Private Link)",
            "Terraform (modules)",
            "Jenkins",
            "GitHub Actions",
            "Docker",
            "Helm",
            "Kubernetes (EKS/AKS)",
            "Prometheus",
            "Grafana",
            "AWS CloudWatch",
            "Ansible",
            "CI/CD",
            "Backup: EBS Snapshots, S3 Cross-Region"
          ].map((tech) => (
            <span key={tech} className="bg-cyan-700/30 border border-cyan-500/40 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Contributions */}
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Key Contributions</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10">
          <li>
            Designed and implemented enterprise CI/CD pipelines with <strong>Jenkins</strong> and{" "}
            <strong>GitHub Actions</strong>, improving deployment velocity by ~45%.
          </li>
          <li>
            Built reusable <strong>Terraform modules</strong> for AWS/Azure (VPCs, EKS/AKS, EC2/RDS, IAM),
            cutting provisioning time by ~60% and reducing drift.
          </li>
          <li>
            Deployed and operated <strong>Kubernetes</strong> clusters (<strong>EKS/AKS</strong>) with{" "}
            <strong>Helm</strong> charts and zero-downtime rollouts; enforced least-privilege IAM and network policies.
          </li>
          <li>
            Implemented proactive observability with <strong>Prometheus</strong>, <strong>Grafana</strong>, and{" "}
            <strong>CloudWatch</strong> (alerting to on-call channels), significantly lowering MTTR.
          </li>
          <li>
            Established secure, compliant backups using <strong>EBS Snapshots</strong> and{" "}
            <strong>S3 cross-region</strong> policies for DR/BCP.
          </li>
        </ul>

        {/* Delivery Process */}
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Delivery Process</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center text-sm text-gray-300">
          {[
            { step: "1. Discovery", desc: "Assess apps, compliance & SLAs; define target SLOs." },
            { step: "2. Architecture", desc: "Design IaC modules, network & cluster topology." },
            { step: "3. Automation", desc: "Implement CI/CD, Helm releases, policies & guardrails." },
            { step: "4. Operate", desc: "Observability, backups, cost tuning, continuous hardening." }
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
