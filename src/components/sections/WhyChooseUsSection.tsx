'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Plus, Minus, Zap, Shield, Sparkles } from 'lucide-react';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

export const WhyChooseUsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: '1. Why Next-Gen Cloud & AI?',
      content:
        'Artificial Intelligence and modern cloud architectures transform enterprise systems by making them self-healing, adaptive, and lightning-fast. AI automates complex operational overhead, reduces human error, and unlocks measurable product value without forcing you to rebuild legacy platforms from scratch.',
    },
    {
      id: 2,
      title: '2. Key architectural advantages',
      content:
        'Zero-downtime container orchestration, proactive anomaly detection, intelligent conversational agents, sub-millisecond database indexing, and bank-grade data security with continuous SOC2/ISO audit compliance built into every deployment.',
    },
    {
      id: 3,
      title: '3. Measurable enterprise impact',
      content:
        'We integrate AI and resilient cloud pipelines in a practical, battle-tested manner that reduces infrastructure cloud spend by up to 35%, scales concurrency by 4x, and accelerates time-to-market for enterprise features.',
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="why-choose-us" className="relative w-full bg-transparent py-[clamp(56px,7vw,100px)] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full flex flex-col gap-[48px] items-center">
        
        {/* Section Header */}
        <div className="flex flex-col gap-[12px] items-center text-center max-w-[800px]">
          <div className="font-['Onest',sans-serif] font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400">
            Why Yevqora?
          </div>
          <h2 className="font-['Onest',sans-serif] font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white m-0">
            Transforming Ideas into Intelligent Solutions.
          </h2>
        </div>

        {/* Signature Asymmetric Curved Container (Quantum4U Style) */}
        <div className="w-full overflow-hidden relative rounded-[20px] md:rounded-bl-[32px] md:rounded-br-[32px] md:rounded-tl-[32px] md:rounded-tr-[120px] min-h-[500px] md:min-h-[560px] shadow-2xl">
          {/* Background Cinematic Visual */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920"
              alt="Intelligent Infrastructure Stream"
              className="absolute inset-0 object-cover size-full"
            />
            {/* Dark Gradient Mask Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Foreground Accordion Content */}
          <div className="relative z-10 flex flex-col justify-center p-[24px] sm:p-[40px] md:p-[60px] w-full md:max-w-[620px] min-h-[500px] md:min-h-[560px]">
            <div className="flex flex-col gap-[16px] w-full">
              {accordionItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col overflow-hidden rounded-[18px] border border-white/15 bg-white/10 backdrop-blur-md transition-all duration-300"
                  >
                    {/* Accordion Header */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between p-[18px] sm:p-[20px] text-left cursor-pointer hover:bg-white/10 transition-colors"
                    >
                      <span className="font-['Onest',sans-serif] font-semibold text-[15.5px] sm:text-[17px] text-white">
                        {item.title}
                      </span>
                      <div className="w-[28px] h-[28px] rounded-[6px] bg-white/20 flex items-center justify-center shrink-0 ml-3 text-white">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {/* Accordion Body */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-[20px] pb-[22px] pt-[2px] bg-black/20 border-t border-white/10">
                        <p className="font-['Onest',sans-serif] font-normal text-[14px] sm:text-[14.5px] leading-[24px] text-white/80 m-0">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lower Split Showcase: Visual Process Gallery + About Studio */}
        <div className="flex flex-col lg:flex-row gap-[36px] lg:gap-[60px] items-center justify-between w-full mt-[20px]">
          
          {/* Left Column: Asymmetric Double Photo Collage */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="grid grid-cols-2 gap-[14px] md:gap-[20px] overflow-hidden relative rounded-bl-[60px] md:rounded-bl-[120px] rounded-br-[24px] md:rounded-br-[32px] rounded-tl-[24px] md:rounded-tl-[32px] rounded-tr-[24px] md:rounded-tr-[32px] w-full aspect-[4/3] shadow-xl border border-zinc-200 dark:border-zinc-800">
              <div className="overflow-hidden relative size-full">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                  alt="Yevqora Innovation Lab"
                  className="absolute inset-0 object-cover size-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden relative size-full">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Yevqora Engineering Team"
                  className="absolute inset-0 object-cover size-full hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Quantum4U Glass Badge */}
              <div className="absolute bg-[#111113]/85 backdrop-blur-[12px] border border-white/20 inline-flex flex-col items-start justify-end left-[8%] md:left-[12%] bottom-[8%] md:bottom-[10%] px-[20px] py-[12px] md:px-[26px] md:py-[16px] rounded-[16px] z-10 shadow-2xl">
                <div className="font-['Onest',sans-serif] font-bold text-[15px] md:text-[19px] text-white tracking-tight flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Fast & Agile Process</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Us Deep-Dive */}
          <div className="flex-1 flex flex-col gap-[20px] items-start w-full">
            <div className="font-['Onest',sans-serif] font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400">
              About Us
            </div>
            
            <h3 className="font-['Onest',sans-serif] font-bold text-[24px] sm:text-[32px] md:text-[36px] text-[#111113] dark:text-white tracking-[-0.02em] leading-[1.2] m-0">
              We are an award-winning AI, cloud, and mobile application engineering studio.
            </h3>

            <p className="font-['Onest',sans-serif] font-normal text-[#7d7d7d] dark:text-zinc-300 text-[15px] sm:text-[16px] leading-[26px] m-0">
              At Yevqora Technologies, we design and deploy scalable digital ecosystems powered by advanced AI and resilient multi-cloud architectures. We combine algorithmic rigor, modern UI/UX design, and defensive cybersecurity to transform high-stakes challenges into seamless digital opportunities.
            </p>

            {/* 3 Checkmark Points with SVG indicators */}
            <div className="flex flex-col gap-[14px] w-full pt-1">
              {[
                'Empowering enterprise innovation with reliable, future-ready cloud architectures',
                'Building intelligent AI-driven tools that dramatically improve user experiences',
                'Transforming complex digital bottlenecks into secure, high-yield opportunities',
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-[12px]">
                  <div className="w-[20px] h-[20px] rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="font-['Onest',sans-serif] font-medium text-[15px] text-[#1f2732] dark:text-zinc-200 leading-[22px]">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* Pill CTA Button */}
            <div className="pt-3">
              <Link
                href="/about"
                className="btn-pill btn-pill-dark text-[14px] px-[28px] py-[11px] shadow-md group"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
