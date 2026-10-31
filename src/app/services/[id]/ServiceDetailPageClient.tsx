'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeaderHero } from '@/components/common/PageHeaderHero';
import { servicesData } from '@/data/servicesData';
import { ArrowRight, CheckCircle2, ShieldCheck, Check } from 'lucide-react';

export function ServiceDetailPageClient({ params }: { params: { id: string } }) {
  // Find matching service or fallback to cloud orchestration
  const service = servicesData.find((s) => s.id === params.id) || {
    id: 'cloud-orchestration',
    title: 'Next-Gen Cloud Orchestration',
    category: 'INDIVIDUAL DEEP-DIVE',
    description: 'Orchestrate container lifecycles, eliminate configuration drift, and guarantee failover thresholds across dynamic distributed node clusters globally.',
    features: ['Dynamic Failover Logic', 'Continuous Drifting Mitigation', 'Declarative Scale APIs'],
    longDescription: 'Our IT Infrastructure solutions eliminate legacy bottlenecks. We design, deploy, and maintain high-performance server clusters, hybrid cloud architectures, and hardened internal networks ensuring 99.99% enterprise uptime.',
  };

  const steps = [
    { num: '01', title: 'Assessment', desc: 'Our team maps your current cloud footprint, dependencies, and SLA performance targets.' },
    { num: '02', title: 'Staging Pipeline', desc: 'We model and test seamless zero-downtime migration pipelines in fully isolated sandboxes.' },
    { num: '03', title: 'Migration', desc: 'Traffic is incrementally rerouted with live telemetry monitoring, ensuring zero downtime.' },
    { num: '04', title: 'Handover & SLA', desc: 'We deploy unified dashboards to your team and provide continuous 24/7 priority support.' },
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-white font-['Onest',sans-serif]">
      <Navbar />

      {/* Header Hero */}
      <PageHeaderHero
        badgeText={service.category || 'INDIVIDUAL DEEP-DIVE'}
        title={service.title}
        description={service.description}
        backLink={{ href: '/services', label: 'Back to All Services' }}
        imageSrc="/images/hero-services.png"
        imageAlt="Cloud Architecture Matrix"
      />

      {/* Overview & Key Strengths */}
      <section className="py-[clamp(56px,7vw,100px)] bg-transparent text-[#111113] dark:text-white">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-white/10 px-3.5 py-1 rounded-full border border-indigo-200 dark:border-white/10">
                Overview & Context
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight m-0 pt-2">
                Eliminate Architectural Complexity Instantly
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed m-0 pt-2">
                {service.longDescription || service.description}
              </p>
              <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed m-0">
                Operating high-performance workloads across cloud and mobile platforms creates complex network dependencies. Our declarative scheduling framework automatically synchronizes distributed systems, preventing container cascades and ensuring sub-millisecond responsiveness.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4 p-8 rounded-[24px] bg-[#f7f8fa] dark:bg-[#151722] border border-[#eee] dark:border-zinc-800 shadow-sm">
              <h3 className="text-xl font-bold text-[#111113] dark:text-white m-0 mb-4">
                Key Architectural Strengths
              </h3>
              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111113] dark:text-white">{feature}</h4>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Production-grade standard maintained across dynamic clusters.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engagement Blueprint */}
      <section className="py-[clamp(56px,7vw,100px)] bg-transparent border-y border-[#eee] dark:border-zinc-800">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)]">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-white/10 px-3.5 py-1 rounded-full border border-indigo-200 dark:border-white/10">
              The Engagement Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111113] dark:text-white m-0">
              Zero Friction Onboarding Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="p-8 rounded-[24px] bg-white dark:bg-[#151722] border border-[#eee] dark:border-zinc-800 shadow-sm space-y-3 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-sans">{step.num}</div>
                  <h3 className="text-lg font-bold text-[#111113] dark:text-white mt-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed mt-1">{step.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#eee] dark:border-zinc-800/80 text-[11px] text-[#999] font-medium">
                  Guaranteed Execution
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Predictable Capacity Plans */}
      <section className="py-[clamp(56px,7vw,100px)] bg-transparent">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)]">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-white/10 px-3.5 py-1 rounded-full border border-indigo-200 dark:border-white/10">
              Predictable Pricing Models
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111113] dark:text-white m-0">
              Linear Plans Tailored to Your Capacity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Bundle */}
            <div className="p-8 sm:p-10 rounded-[28px] bg-[#f7f8fa] dark:bg-[#151722] border border-[#eee] dark:border-zinc-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#111113] dark:text-white">Standard Production Bundle</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400">For scaling platforms deploying core high-load applications.</p>
                <div className="text-4xl font-bold text-[#111113] dark:text-white font-sans">$1,800<span className="text-sm font-normal text-slate-500">/mo</span></div>
                <div className="space-y-2.5 text-xs text-slate-700 dark:text-zinc-300 font-medium">
                  <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /><span>Up to 50 active container clusters</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /><span>Standard 99.9% uptime SLA guarantee</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /><span>Automated daily configuration backups</span></div>
                </div>
              </div>
              <Link href="/contact" className="btn-pill btn-pill-dark text-xs py-3 w-full text-center">
                <span>Initiate Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Scale Enterprise Suite */}
            <div className="p-8 sm:p-10 rounded-[28px] bg-white dark:bg-[#111113] border-2 border-indigo-600 shadow-2xl space-y-6 flex flex-col justify-between relative">
              <span className="absolute -top-3.5 right-6 px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase rounded-full">Recommended</span>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#111113] dark:text-white">Scale Enterprise Suite</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400">For global organizations running mission-critical workloads.</p>
                <div className="text-4xl font-bold text-[#111113] dark:text-white font-sans">$4,500<span className="text-sm font-normal text-slate-500">/mo</span></div>
                <div className="space-y-2.5 text-xs text-slate-700 dark:text-zinc-300 font-medium">
                  <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /><span>Unlimited node cluster scaling</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /><span>Zero-Trust security posture native</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /><span>Sub-15 min priority engineer support</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /><span>Dedicated solution architect assigned</span></div>
                </div>
              </div>
              <Link href="/contact" className="btn-pill btn-pill-dark text-xs py-3 w-full text-center shadow-lg shadow-indigo-600/30">
                <span>Initiate Enterprise Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
