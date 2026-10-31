'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Inception & Core Engineering',
      description: 'Founded with an initial focus on high-reliability cloud clustering and distributed server frameworks.',
    },
    {
      year: '2021',
      title: 'Series A & Zero-Trust Architecture',
      description: 'Scaled across 500+ cloud instances globally and launched native zero-trust compliance blueprints.',
    },
    {
      year: '2024',
      title: 'AI Intelligence Suite 3.0',
      description: 'Integrated streaming telemetry with automated anomaly detection and LLM-driven incident mitigation.',
    },
    {
      year: '2026',
      title: 'Global Scale: 100M+ Users',
      description: 'Expanded technical operations across North America, Europe, and Asia, powering over 100 enterprise clients.',
    },
  ];

  return (
    <section className="py-[clamp(56px,7vw,100px)] relative bg-transparent border-t border-[#eee] dark:border-zinc-800 transition-colors duration-300 font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-[52px]">
          <div className="font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400 mb-[12px]">
            Milestones
          </div>
          <h2 className="font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white m-0">
            A Journey of Relentless Advancement
          </h2>
          <p className="font-normal text-[15.5px] text-[#7d7d7d] dark:text-zinc-400 mt-3 max-w-xl">
            Our track record of continuous engineering breakthroughs and scalable digital products.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-[28px] rounded-[24px] bg-white dark:bg-[#151722] border border-[#eee] dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-[#111113] dark:text-white text-[13px] font-bold tracking-wider mb-4">
                  {m.year}
                </span>
                <h3 className="font-bold text-[18px] text-[#111113] dark:text-white mb-2 leading-snug">
                  {m.title}
                </h3>
                <p className="font-normal text-[13.5px] leading-[22px] text-[#7d7d7d] dark:text-zinc-400 m-0">
                  {m.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#f0f0f2] dark:border-zinc-800/80 flex items-center justify-between text-xs text-[#999] dark:text-zinc-500 font-medium">
                <span>Phase 0{idx + 1}</span>
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner (Quantum4U Style) */}
        <div className="mt-[56px] rounded-[28px] bg-[#111113] text-white p-[36px] sm:p-[48px] flex flex-col md:flex-row items-center justify-between gap-[28px] shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="font-bold text-[24px] sm:text-[30px] text-white m-0 leading-tight">
              Ready to Build What Comes Next?
            </h3>
            <p className="font-normal text-[15px] text-white/70 mt-2 m-0">
              Speak directly with our senior infrastructure architects and start your project today.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="btn-pill btn-pill-white text-[14px] px-[28px] py-[12px] shadow-lg group"
            >
              <span>Talk to Solution Architects</span>
              <ArrowRight className="w-4 h-4 text-[#111113] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
