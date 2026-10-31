'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AiScene, MobileScene, WebScene } from './CapabilityScenes';

interface ServiceCardData {
  id: string;
  badge: string;
  title: string;
  description: string;
  gradientBg: string;
  accentLine: string;
  scene: React.ReactNode;
  tags: string[];
  href: string;
}

export const CapabilitiesSection: React.FC = () => {
  // Mouse position state for spotlight effect on cards
  const [mousePos, setMousePos] = useState<{ [key: string]: { x: number; y: number } }>({});

  // Scroll reveal: cards rise from the bottom when the grid enters the viewport
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos((prev) => ({ ...prev, [id]: { x, y } }));
  };

  const services: ServiceCardData[] = [
    {
      id: 'ai-powered',
      badge: 'Smart AI',
      title: 'AI-Powered Solutions',
      description:
        'Chatbots, workflow automation and predictive analytics that cut manual work, reveal sharper insights and help your team make faster, smarter decisions.',
      gradientBg: 'bg-[linear-gradient(135deg,#3730A3_0%,#4F46E5_45%,#7C3AED_100%)]',
      accentLine: 'bg-[linear-gradient(135deg,#3730A3_0%,#4F46E5_45%,#7C3AED_100%)]',
      scene: <AiScene />,
      tags: ['Chatbots & LLMs', 'Automation', 'Predictive Analytics'],
      href: '/services#service-smart-ai-solutions',
    },
    {
      id: 'mobile-app-dev',
      badge: 'Android & iOS',
      title: 'Mobile App Development',
      description:
        'Fast, polished Android and iOS apps that feel effortless to use, from first idea to App Store and Google Play launch, with AI features built in where they matter.',
      gradientBg: 'bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857]',
      accentLine: 'bg-gradient-to-br from-[#10b981] to-[#047857]',
      scene: <MobileScene />,
      tags: ['Android', 'iOS', 'Cross-Platform'],
      href: '/services#service-android-app-development',
    },
    {
      id: 'website-development',
      badge: 'Web Platforms',
      title: 'Website Development',
      description:
        'Modern, lightning-fast websites and web platforms that look sharp on every device, rank well on search and turn visitors into customers.',
      gradientBg: 'bg-gradient-to-br from-[#0891b2] via-[#0284c7] to-[#1e40af]',
      accentLine: 'bg-gradient-to-br from-[#06b6d4] to-[#0284c7]',
      scene: <WebScene />,
      tags: ['Next.js & React', 'SEO-Ready', 'Scalable Backends'],
      href: '/services#service-website-development',
    },
  ];

  return (
    <section id="services" className="relative w-full bg-transparent pt-[clamp(56px,7vw,100px)] pb-0 transition-colors duration-300">
      <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute left-[8%] top-[-120px] size-[360px] rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute right-[6%] top-[-80px] size-[320px] rounded-full bg-sky-300/20 blur-3xl" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-[52px]">
          <div className="inline-flex items-center gap-[8px] rounded-full border border-indigo-200/70 bg-indigo-50/80 px-[14px] py-[6px] font-['Onest',sans-serif] font-semibold text-[12px] tracking-[2px] uppercase text-indigo-600 mb-[16px]">
            <span className="size-[6px] rounded-full bg-indigo-500 animate-pulse" />
            What We Do
          </div>
          <h2 className="font-['Onest',sans-serif] font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white mb-[14px]">
            Services for{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-sky-500 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
          <p className="font-['Onest',sans-serif] font-normal text-[15.5px] md:text-[17px] leading-[1.65] text-[#7d7d7d] dark:text-zinc-300 max-w-[620px] m-0">
            We provide expert digital solutions designed to accelerate your business growth, ensure technical resilience, and maximize ROI.
          </p>
        </div>

        {/* 3 Interactive Spotlight Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-[24px] lg:gap-[30px] items-stretch">
          {services.map((item, index) => {
            const pos = mousePos[item.id] || { x: 200, y: 150 };
            return (
              <div
                key={item.id}
                className={`h-full transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                  revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[80px]'
                }`}
                style={{ transitionDelay: revealed ? `${index * 160}ms` : '0ms' }}
              >
              <div
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
                    {/* Dot pattern + glow orbs */}
                    <div
                      className="absolute inset-0 opacity-25 pointer-events-none"
                      style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)',
                        backgroundSize: '22px 22px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 75%)',
                        WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 75%)',
                      }}
                    />
                    <div className="absolute -top-[40px] -left-[40px] size-[160px] rounded-full bg-white/25 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-[50px] -right-[30px] size-[180px] rounded-full bg-black/25 blur-3xl pointer-events-none" />

                    {/* Drifting glow */}
                    <div className="absolute left-[18%] bottom-[10%] size-[120px] rounded-full bg-white/20 blur-2xl glow-drift pointer-events-none" />

                    {/* Rising particles */}
                    <div className="absolute inset-x-0 bottom-0 h-[10px] pointer-events-none" aria-hidden="true">
                      {[8, 22, 36, 52, 66, 80, 92].map((left, i) => (
                        <span
                          key={left}
                          className="particle absolute bottom-0 rounded-full bg-white/80"
                          style={{
                            left: `${left}%`,
                            width: i % 3 === 0 ? 5 : 3,
                            height: i % 3 === 0 ? 5 : 3,
                            animationDelay: `${i * 0.85}s`,
                            animationDuration: `${5 + (i % 4)}s`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="shimmer-sweep absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>

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

                    {/* Animated scene */}
                    <div className="relative z-10 mt-[26px] origin-center scale-[0.72] sm:scale-100 md:scale-[0.58] lg:scale-[0.76] xl:scale-[0.92] 2xl:scale-100 transition-transform duration-500">
                      {item.scene}
                    </div>

                    {/* Floating Pill Tag Badge */}
                    <div className="absolute top-[18px] right-[18px] z-10">
                      <span className="font-['Onest',sans-serif] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20">
                        {item.badge}
                      </span>
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

                    {/* Tags + Learn more + accent line */}
                    <div className="w-full pt-4 flex flex-col items-center gap-[14px]">
                      <div className="flex flex-wrap justify-center gap-[6px]">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-['Onest',sans-serif] text-[11.5px] font-medium px-[10px] py-[4px] rounded-full bg-[#f4f5f8] text-[#5a6470] border border-[#eceef2]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-[6px] font-['Onest',sans-serif] font-semibold text-[13.5px] text-indigo-600 no-underline group-hover:gap-[10px] transition-all duration-300"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <div
                        className={`h-[3px] w-full rounded-full ${item.accentLine} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                    </div>
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
