'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Cpu, Lock, CheckCircle, Activity, Server, Zap } from 'lucide-react';

interface SolutionsSectionProps {
  hideHeader?: boolean;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ hideHeader = false }) => {
  const comparisonRows = [
    {
      parameter: 'HIPAA & SOC2 Architecture',
      fintech: 'Standard Compliance',
      health: 'Strict / Native',
      secops: 'Continuous Active',
    },
    {
      parameter: 'Sub-Millisecond Processing',
      fintech: 'Guaranteed <5ms SLA',
      health: 'Optimized',
      secops: 'SLA Native',
    },
    {
      parameter: 'Autonomous Threat Modeling',
      fintech: 'Hourly scans',
      health: 'Daily automated',
      secops: 'Real-time SIEM',
    },
    {
      parameter: 'Multi-Region Failover',
      fintech: 'Zero-Downtime',
      health: 'Automated 99.99%',
      secops: 'Zero-Downtime',
    },
  ];

  const frameworks = [
    {
      id: 'fintech-core',
      badge: 'High-TPS Core',
      title: 'Yevqora FinTech Core',
      desc: 'Pre-certified financial network assemblies, automated high-throughput transaction pipelines, and localized risk analytics out of the box.',
      gradientBg: 'from-emerald-950 via-teal-900 to-slate-900',
      icon: <Activity className="w-12 h-12 text-emerald-400" />,
      features: ['Sub-5ms Latency SLA', 'ISO 20022 Messaging', 'Automated Ledger Auditing'],
    },
    {
      id: 'health-hub',
      badge: 'HIPAA Native',
      title: 'HealthScale Data Hub',
      desc: 'Secure, encrypted patient telemetry ingestion and zero-trust FHIR-compliant pipelines engineered for medical-grade availability.',
      gradientBg: 'from-indigo-950 via-blue-900 to-slate-900',
      icon: <Cpu className="w-12 h-12 text-sky-400" />,
      features: ['FHIR/HL7 Data Mapping', 'End-to-End Encryption', 'Zero-Egress Isolation'],
    },
    {
      id: 'secops-suite',
      badge: 'Defensive SIEM',
      title: 'Yevqora SecOps Suite',
      desc: 'Automated continuous vulnerability auditing, autonomous zero-trust identity gates, and autonomic perimeter defense.',
      gradientBg: 'from-purple-950 via-violet-900 to-slate-900',
      icon: <Lock className="w-12 h-12 text-purple-400" />,
      features: ['Automated SOC2 Mapping', 'Mutual TLS Enclave', '24/7 SIEM Surveillance'],
    },
  ];

  return (
    <section id="solutions" className="py-[clamp(56px,7vw,100px)] relative bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-[52px]">
            <div className="font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400 mb-[12px]">
              Industry Vectors
            </div>
            <h2 className="font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white m-0">
              Packaged Enterprise Frameworks
            </h2>
            <p className="font-normal text-[15.5px] text-[#7d7d7d] dark:text-zinc-400 mt-3 max-w-xl">
              Turnkey architectural modules tested across millions of daily payloads, ready to deploy immediately.
            </p>
          </div>
        )}

        {/* Framework Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[64px]">
          {frameworks.map((fw) => (
            <div
              key={fw.id}
              className="rounded-[24px] bg-[#f7f8fa] dark:bg-[#151722] border border-[#eee] dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className={`h-[180px] bg-gradient-to-tr ${fw.gradientBg} flex items-center justify-center relative overflow-hidden p-6`}>
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                    {fw.icon}
                  </div>
                  <span className="absolute top-4 right-4 text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {fw.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-[26px]">
                  <h3 className="font-bold text-[21px] text-[#111113] dark:text-white mb-2">
                    {fw.title}
                  </h3>
                  <p className="font-normal text-[14px] leading-[22px] text-[#7d7d7d] dark:text-zinc-400 mb-6">
                    {fw.desc}
                  </p>

                  <div className="space-y-2.5">
                    {fw.features.map((ft, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs font-semibold text-[#1f2732] dark:text-zinc-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{ft}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-[20px] bg-white dark:bg-zinc-800/40 border-t border-[#eee] dark:border-zinc-800 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1.5 transition-colors no-underline"
                >
                  <span>Request Framework Deployment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Matrix Table */}
        <div className="mt-8 rounded-[28px] overflow-hidden bg-[#f7f8fa] dark:bg-[#151722] border border-[#eee] dark:border-zinc-800 shadow-md">
          <div className="p-[28px] sm:p-[36px] border-b border-[#eee] dark:border-zinc-800">
            <h3 className="font-bold text-[22px] sm:text-[26px] text-[#111113] dark:text-white m-0">
              Framework Capability Matrix
            </h3>
            <p className="font-normal text-[14.5px] text-[#7d7d7d] dark:text-zinc-400 mt-1 m-0">
              Compare architectural benchmarks and enterprise posture support across our core stacks.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#eee] dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#7d7d7d] dark:text-zinc-400">
                    Parameter / Capability
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    FinTech Core
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    HealthScale Hub
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    Yevqora SecOps
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee] dark:divide-zinc-800/80 text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#111113] dark:text-white">
                      {row.parameter}
                    </td>
                    <td className="py-4 px-6 text-[#1f2732] dark:text-zinc-300">
                      {row.fintech}
                    </td>
                    <td className="py-4 px-6 text-[#1f2732] dark:text-zinc-300">
                      {row.health}
                    </td>
                    <td className="py-4 px-6 text-[#1f2732] dark:text-zinc-300">
                      {row.secops}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
