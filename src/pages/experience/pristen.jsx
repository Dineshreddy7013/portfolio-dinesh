import React from "react";
import bg from "../../assets/pristen.png";

export default function Pristen() {
  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-black to-blue-950 min-h-screen">
      {/* Hero */}
      <div
        className="bg-cover bg-center h-60 flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-cyan-300 bg-black/60 px-6 py-2 rounded-xl shadow-lg">
          Pristen IT Systems Inc · SaaS Platform Infrastructure Automation
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Summary */}
        <p className="text-gray-300 leading-relaxed mb-10">
          Architected and automated infrastructure for a multi-environment SaaS platform across
          <span className="text-cyan-300"> Azure</span> and <span className="text-cyan-300">AWS</span>.
          Standardized Infrastructure as Code with reusable Terraform modules, enforced secure network
          patterns (Private Link, NSGs), and implemented parallelized CI/CD with Ansible, Jenkins, and
          GitHub Actions to accelerate releases while meeting ISO/SOC2 compliance.
        </p>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "Azure (Private Link, NSGs, Policies)",
            "AWS (VPC, EC2, S3, IAM)",
            "Terraform (modular repos)",
            "Ansible",
            "Jenkins (parallel stages)",
            "GitHub Actions",
            "Docker",
            "Kubernetes (AKS/EKS)",
            "Helm",
            "Azure Monitor / CloudWatch",
            "ISO/SOC2 Controls",
            "Release Orchestration"
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
            Designed multi-env (dev/stage/prod) landing zones and <strong>Terraform modules</strong> for
            VPC/VNet, AKS/EKS, IAM/Policies, and data stores to ensure environment parity and faster onboarding.
          </li>
          <li>
            Implemented <strong>parallelized CI/CD</strong> using <strong>Jenkins</strong> and
            <strong> GitHub Actions</strong> with Ansible deploy steps, reducing cycle time and improving reliability.
          </li>
          <li>
            Enforced <strong>secure connectivity</strong> patterns with <strong>Azure Private Link</strong>,
            <strong> NSGs</strong>, and policy-as-code; aligned with <strong>ISO/SOC2</strong> requirements.
          </li>
          <li>
            Built <strong>release orchestration</strong> for coordinated application and infrastructure updates across
            cloud and on-prem environments.
          </li>
          <li>
            Instrumented <strong>observability</strong> via Azure Monitor and CloudWatch with actionable alerts to on-call channels.
          </li>
        </ul>

        {/* Delivery Process */}
        <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">Delivery Process</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center text-sm text-gray-300">
          {[
            { step: "1. Baseline", desc: "Define env strategy, standards, compliance controls." },
            { step: "2. IaC Build", desc: "Author Terraform modules & policies; stand up landing zones." },
            { step: "3. CI/CD", desc: "Wire Jenkins + Actions, add Ansible deploy/verify stages." },
            { step: "4. Operate", desc: "Observability, audits, cost & drift controls; continuous hardening." }
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
