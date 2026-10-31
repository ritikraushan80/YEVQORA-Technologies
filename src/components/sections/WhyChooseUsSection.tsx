'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Plus, Minus, Zap, Sparkles, Search, PenTool, Code2, Rocket, LifeBuoy } from 'lucide-react';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const SHOW_ACCORDION = true;

export const WhyChooseUsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: 'Why add AI to your product?',
      content:
        'AI turns repetitive work into automation and raw data into clear decisions. We add it only where it genuinely helps your users and your team — smart chatbots, search, recommendations and analytics — without rebuilding what already works.',
    },
    {
      id: 2,
      title: 'How we work with you',
      content:
        'We start with a short discovery call, share a clear plan and timeline, then build in small steps with regular demos. You always see progress and can steer the result before anything goes live.',
    },
    {
      id: 3,
      title: 'What you get',
      content:
        'Clean, well-documented code that you own, fast and secure websites and apps, honest communication from start to finish, and support after launch so your product keeps improving.',
    },
  ];

  const journey = [
    { icon: Search, label: 'Discover', note: 'Goals & scope' },
    { icon: PenTool, label: 'Design', note: 'UX & prototypes' },
    { icon: Code2, label: 'Build', note: 'Web, mobile & AI' },
    { icon: Rocket, label: 'Launch', note: 'Store & production' },
    { icon: LifeBuoy, label: 'Support', note: 'Grow & improve' },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="why-choose-us" className="relative w-full bg-transparent py-[clamp(56px,7vw,100px)] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full flex flex-col gap-[48px] items-center">
        
        {/* Header + accordion are hidden for now: set SHOW_ACCORDION to true to bring them back */}
        {SHOW_ACCORDION && (
          <>
          {/* Section Header */}
          <div className="flex flex-col gap-[12px] items-center text-center max-w-[800px]">
            <div className="font-['Onest',sans-serif] font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400">
              Why Yevqora?
            </div>
            <h2 className="font-['Onest',sans-serif] font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white m-0">
              Transforming Ideas into Intelligent Solutions.
            </h2>
          </div>

          {/* Signature Asymmetric Curved Container */}
        <div className="w-full overflow-hidden relative rounded-[20px] md:rounded-bl-[32px] md:rounded-br-[32px] md:rounded-tl-[32px] md:rounded-tr-[120px] min-h-[500px] md:min-h-[560px] shadow-2xl bg-[#07091a]">
          {/* Background: brand gradient, grid and glows */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(99,102,241,0.55),transparent_55%),radial-gradient(ellipse_at_10%_95%,rgba(14,165,233,0.30),transparent_55%),radial-gradient(ellipse_at_60%_70%,rgba(168,85,247,0.28),transparent_55%)]" />
            <div
              className="absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
                maskImage: 'radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)',
              }}
            />
            <div className="absolute -right-[80px] -top-[80px] size-[320px] rounded-full bg-indigo-400/20 blur-3xl" />
            <div className="absolute left-[30%] -bottom-[100px] size-[300px] rounded-full bg-sky-400/15 blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-[32px] md:gap-[40px] p-[24px] sm:p-[40px] md:p-[56px] min-h-[500px] md:min-h-[560px]">
            {/* Accordion */}
            <div className="flex flex-col gap-[14px] w-full md:max-w-[560px] md:shrink-0">
              {accordionItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col overflow-hidden rounded-[18px] border backdrop-blur-md transition-all duration-300 ${
                      isOpen ? 'border-white/25 bg-white/[0.12]' : 'border-white/12 bg-white/[0.06] hover:bg-white/[0.09]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between gap-[12px] p-[18px] sm:p-[20px] text-left cursor-pointer"
                    >
                      <span className="flex items-center gap-[14px]">
                        <span className="size-[30px] shrink-0 rounded-[9px] bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center font-['Onest',sans-serif] font-bold text-[13px] text-white">
                          {idx + 1}
                        </span>
                        <span className="font-['Onest',sans-serif] font-semibold text-[15.5px] sm:text-[17px] text-white">
                          {item.title}
                        </span>
                      </span>
                      <div className="w-[28px] h-[28px] rounded-[8px] bg-white/15 flex items-center justify-center shrink-0 text-white">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-[20px] pb-[22px] pt-[2px] sm:pl-[64px]">
                        <p className="font-['Onest',sans-serif] font-normal text-[14px] sm:text-[14.5px] leading-[24px] text-white/75 m-0">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Project journey visual */}
            <div className="hidden md:flex flex-1 items-center justify-center min-w-0" aria-hidden="true">
              <div className="relative w-full max-w-[420px]">
                <div className="rounded-[24px] border border-white/15 bg-white/[0.07] backdrop-blur-xl p-[26px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center justify-between mb-[22px]">
                    <div>
                      <div className="font-['Onest',sans-serif] font-semibold text-[15px] text-white">Your project journey</div>
                      <div className="font-['Onest',sans-serif] text-[12px] text-white/50">From first call to live product</div>
                    </div>
                    <span className="inline-flex items-center gap-[6px] rounded-full bg-emerald-400/15 border border-emerald-300/25 px-[10px] py-[4px] text-[11px] font-medium text-emerald-200">
                      <span className="size-[6px] rounded-full bg-emerald-400 animate-pulse" />
                      On track
                    </span>
                  </div>

                  <div className="relative flex flex-col gap-[18px]">
                    <div className="absolute left-[19px] top-[20px] bottom-[20px] w-[2px] bg-white/10" />
                    {journey.map(({ icon: Icon, label, note }, i) => (
                      <div key={label} className="relative flex items-center gap-[14px] scene-tile" style={{ animationDelay: `${i * 0.45}s` }}>
                        <span className="relative z-10 size-[40px] shrink-0 rounded-[12px] bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-white shadow-lg shadow-indigo-900/40">
                          <Icon className="w-[18px] h-[18px]" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="font-['Onest',sans-serif] font-semibold text-[14px] text-white leading-tight">{label}</div>
                          <div className="font-['Onest',sans-serif] text-[12px] text-white/50">{note}</div>
                        </div>
                        <span className="size-[18px] rounded-full bg-emerald-400/90 flex items-center justify-center text-[#052e2b]">
                          <Check className="w-[11px] h-[11px]" strokeWidth={3.5} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute -top-[18px] -right-[14px] hero-float flex items-center gap-[8px] rounded-[14px] border border-white/20 bg-[#10173a]/90 backdrop-blur-md px-[12px] py-[8px] shadow-xl">
                  <Sparkles className="w-4 h-4 text-indigo-300" />
                  <span className="font-['Onest',sans-serif] text-[12px] font-semibold text-white">AI where it helps</span>
                </div>
                <div className="absolute -bottom-[16px] -left-[16px] hero-float-delay flex items-center gap-[8px] rounded-[14px] border border-white/20 bg-[#10173a]/90 backdrop-blur-md px-[12px] py-[8px] shadow-xl">
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span className="font-['Onest',sans-serif] text-[12px] font-semibold text-white">Regular demos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
          </>
        )}

        {/* Lower Split Showcase: Visual Process Gallery + About Studio */}
        <div className="flex flex-col lg:flex-row gap-[36px] lg:gap-[60px] items-center lg:items-stretch justify-between w-full mt-[20px]">
          
          {/* Left Column: Asymmetric Double Photo Collage */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="grid grid-cols-2 gap-[14px] md:gap-[20px] overflow-hidden relative rounded-bl-[60px] md:rounded-bl-[120px] rounded-br-[24px] md:rounded-br-[32px] rounded-tl-[24px] md:rounded-tl-[32px] rounded-tr-[24px] md:rounded-tr-[32px] w-full aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[480px] shadow-xl border border-zinc-200 dark:border-zinc-800">
              <div className="overflow-hidden relative size-full">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800"
                  alt="Sketching app screens and user flows"
                  className="absolute inset-0 object-cover size-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden relative size-full">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
                  alt="Building the product in code"
                  className="absolute inset-0 object-cover size-full hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Quantum4U Glass Badge */}
              <div className="absolute bg-white/15 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_12px_36px_rgba(0,0,0,0.35)] inline-flex flex-col items-start justify-end left-[8%] md:left-[12%] bottom-[8%] md:bottom-[10%] px-[20px] py-[12px] md:px-[26px] md:py-[16px] rounded-[16px] z-10">
                <div className="font-['Onest',sans-serif] font-bold text-[15px] md:text-[19px] text-white tracking-tight flex items-center gap-[10px]">
                  <span className="size-[28px] md:size-[34px] shrink-0 rounded-full bg-gradient-to-br from-[#2563eb] via-[#0ea5e9] to-[#2dd4bf] flex items-center justify-center shadow-[0_4px_14px_rgba(14,165,233,0.55),inset_0_1px_0_rgba(255,255,255,0.45)] ring-1 ring-white/40">
                    <Zap className="w-[15px] h-[15px] md:w-[18px] md:h-[18px] text-white fill-white" strokeWidth={2} />
                  </span>
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
              We are a young startup building AI-powered websites and mobile apps.
            </h3>

            <p className="font-['Onest',sans-serif] font-normal text-[#7d7d7d] dark:text-zinc-300 text-[15px] sm:text-[16px] leading-[26px] m-0">
              At Yevqora Technologies, we help businesses in every industry launch smarter digital products. We combine practical AI, clean UI/UX design and solid engineering to turn your idea into a fast, reliable website or mobile app that people enjoy using.
            </p>

            <p className="font-['Onest',sans-serif] font-normal text-[#7d7d7d] dark:text-zinc-300 text-[15px] sm:text-[16px] leading-[26px] m-0">
              Whether you need a new website, a mobile app or AI built into a product you already run, we keep things simple: we listen first, agree on a clear scope, and ship in small steps so you can see and shape the result along the way.
            </p>

            {/* Checkmark points */}
            <div className="flex flex-col gap-[14px] w-full pt-1">
              {[
                'Websites and mobile apps built to be fast, secure and easy to use',
                'Practical AI features, such as chatbots and smart automation, that save time',
                'Clear plans, regular demos and support that continues after launch',
                'Clean, well-documented code that you own, with no lock-in',
                'Design, development and launch handled by one focused team',
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
