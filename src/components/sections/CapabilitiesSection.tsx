'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Smartphone, Apple, Cpu, Shield, Globe, Terminal, Layers } from 'lucide-react';

interface ServiceCardData {
  id: string;
  badge: string;
  title: string;
  description: string;
  gradientBg: string;
  accentLine: string;
  icon: React.ReactNode;
  tags: string[];
  href: string;
}

export const CapabilitiesSection: React.FC = () => {
  // Mouse position state for spotlight effect on cards
  const [mousePos, setMousePos] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos((prev) => ({ ...prev, [id]: { x, y } }));
  };

  const services: ServiceCardData[] = [
    {
      id: 'ai-powered',
      badge: 'Cognitive Tech',
      title: 'AI-Powered Solutions',
      description:
        'Intelligent automation, custom LLM fine-tuning, and machine learning pipelines designed to streamline operations, enhance personalization, and drive measurable enterprise ROI.',
      gradientBg: 'bg-[linear-gradient(135deg,#3730A3_0%,#4F46E5_45%,#7C3AED_100%)]',
      accentLine: 'bg-[linear-gradient(135deg,#3730A3_0%,#4F46E5_45%,#7C3AED_100%)]',
      icon: <Sparkles className="w-14 h-14 text-white/90" />,
      tags: ['LLM Workflows', 'AutoML', 'Predictive Systems'],
      href: '/services#service-smart-ai-solutions',
    },
    {
      id: 'mobile-app-dev',
      badge: 'Android & iOS',
      title: 'Android and IOS Mobile App Development',
      description:
        'High-performance native and cross-platform mobile apps for Android and iOS engineered for massive scale, fluid 120Hz interactions, on-device ML, and seamless cloud synchronization.',
      gradientBg: 'bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857]',
      accentLine: 'bg-gradient-to-br from-[#10b981] to-[#047857]',
      icon: <Smartphone className="w-14 h-14 text-white/90" />,
      tags: ['Kotlin & Swift', 'Offline-First', 'CoreML & TFLite'],
      href: '/services#service-android-app-development',
    },
    {
      id: 'website-development',
      badge: 'Web Architecture',
      title: 'Website Development',
      description:
        'High-throughput enterprise websites, serverless web architectures, and interactive digital experiences engineered with Next.js, React, and modern microservices with sub-second page loads.',
      gradientBg: 'bg-gradient-to-br from-[#0891b2] via-[#0284c7] to-[#1e40af]',
      accentLine: 'bg-gradient-to-br from-[#06b6d4] to-[#0284c7]',
      icon: <Globe className="w-14 h-14 text-white/90" />,
      tags: ['Next.js & React', 'Edge CDN', 'Headless APIs'],
      href: '/services#service-website-development',
    },
  ];

  return (
    <section id="services" className="relative w-full bg-transparent py-[clamp(56px,7vw,100px)] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-[52px]">
          <div className="font-['Onest',sans-serif] font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400 mb-[14px]">
            What We Do
          </div>
          <h2 className="font-['Onest',sans-serif] font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white mb-[14px]">
            Services for Growth
          </h2>
          <p className="font-['Onest',sans-serif] font-normal text-[15.5px] md:text-[17px] leading-[1.65] text-[#7d7d7d] dark:text-zinc-300 max-w-[620px] m-0">
            We provide expert digital solutions designed to accelerate your business growth, ensure technical resilience, and maximize ROI.
          </p>
        </div>

        {/* 3 Interactive Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] lg:gap-[30px] items-stretch">
          {services.map((item) => {
            const pos = mousePos[item.id] || { x: 200, y: 150 };
            return (
              <div
                key={item.id}
                onMouseMove={(e) => handleMouseMove(item.id, e)}
                className="group relative h-full rounded-[24px] md:rounded-[28px] transition-transform duration-300 hover:-translate-y-[4px]"
                style={
                  {
                    '--mx': `${pos.x}px`,
                    '--my': `${pos.y}px`,
                  } as React.CSSProperties
                }
              >
                {/* Mouse-following Radial Spotlight Border Glow */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-[24px] md:rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(420px circle at var(--mx) var(--my), rgba(99,102,241,0.65), rgba(168,85,247,0.35) 25%, transparent 65%)',
                  }}
                />

                {/* Card Container */}
                <div className="relative bg-white dark:bg-[#151722] rounded-[24px] md:rounded-[28px] border border-[#eee] dark:border-zinc-800 h-full overflow-hidden transition-all duration-300 group-hover:border-transparent group-hover:shadow-[0_20px_50px_-12px_rgba(99,102,241,0.22),0_8px_24px_rgba(0,0,0,0.06)] flex flex-col justify-between">
                  
                  {/* Top Visual Graphic Canvas with Concentric Radar Rings */}
                  <div
                    className={`relative h-[260px] md:h-[290px] flex items-center justify-center overflow-hidden ${item.gradientBg}`}
                  >
                    {/* Soft White Top Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/25 pointer-events-none" />

                    {/* Spotlight mouse illumination over visual */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          'radial-gradient(280px circle at var(--mx) var(--my), rgba(255,255,255,0.28), rgba(255,255,255,0.08) 40%, transparent 70%)',
                      }}
                    />

                    {/* Outer Concentric Animated Radar Rings */}
                    <div className="absolute w-[320px] h-[320px] rounded-full border border-white/15 animate-[spin_60s_linear_infinite]" />
                    <div className="absolute w-[240px] h-[240px] rounded-full border border-white/20" />
                    <div className="absolute w-[160px] h-[160px] rounded-full border border-white/25" />

                    {/* Center Glassmorphic Floating Orb */}
                    <div className="relative z-10 w-[96px] h-[96px] rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                      {item.icon}
                    </div>

                    {/* Floating Pill Tag Badge */}
                    <div className="absolute top-[18px] right-[18px] z-10">
                      <span className="font-['Onest',sans-serif] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20">
                        {item.badge}
                      </span>
                    </div>

                    {/* Left Small Floating Micro-Badge */}
                    <div className="absolute bottom-[20px] left-[24px] z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/25 text-white text-[12px] font-medium">
                      <Cpu className="w-3.5 h-3.5 text-white/90" />
                      <span>{item.tags[0]}</span>
                    </div>

                    {/* Right Small Floating Micro-Badge */}
                    <div className="absolute bottom-[20px] right-[24px] z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/25 text-white text-[12px] font-medium">
                      <Shield className="w-3.5 h-3.5 text-white/90" />
                      <span>{item.tags[1]}</span>
                    </div>
                  </div>

                  {/* Bottom Text Content & Action */}
                  <div className="flex flex-col gap-[12px] px-[22px] md:px-[28px] pb-[28px] pt-[24px] text-center items-center flex-1 justify-between">
                    <div className="flex flex-col items-center">
                      <Link href={item.href} className="no-underline">
                        <h3 className="font-['Onest',sans-serif] font-bold text-[20px] md:text-[22px] text-[#111113] dark:text-white leading-[28px] mb-[8px] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="font-['Onest',sans-serif] font-normal text-[14px] leading-[22px] text-[#7d7d7d] dark:text-zinc-400 m-0">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Dynamic Gradient Accent Line */}
                    <div className="w-full pt-4">
                      <div
                        className={`h-[3px] w-full rounded-full ${item.accentLine} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* View All Services Pill CTA Button */}
        <div className="flex justify-center mt-[48px]">
          <Link
            href="/services"
            className="btn-pill btn-pill-dark text-[14px] px-[28px] py-[11px] shadow-lg group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </section>
  );
};
