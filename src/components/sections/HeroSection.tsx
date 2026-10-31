'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';

interface HeroSlide {
  id: string;
  tabLabel: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string;
  ctaText: string;
  ctaHref: string;
  bgImage: string;
}

export const HeroSection: React.FC = () => {
  const slides: HeroSlide[] = [
    {
      id: 'ai-cloud',
      tabLabel: 'AI & Cloud Services',
      icon: <Sparkles className="w-3.5 h-3.5 text-indigo-400" />,
      title: 'AI solutions & cloud architectures for measurable growth.',
      description:
        'Custom AI integrations, intelligent automated workflows, and resilient multi-cloud orchestration that streamline enterprise operations and unlock sustainable global scale.',
      bullets: 'Machine Learning • Intelligent Automation • Cloud Orchestration',
      ctaText: 'Start Your AI Project',
      ctaHref: '/services',
      bgImage: '/images/hero-ai-services.png',
    },
    {
      id: 'mobile-web',
      tabLabel: 'Mobile & Web Apps',
      icon: <Smartphone className="w-3.5 h-3.5 text-sky-400" />,
      title: 'Mobile & web experiences your global users love.',
      description:
        'Production-ready iOS, Android, and high-concurrency web platforms engineered for lightning speed, flawless usability, and lasting modern user expectations across every device.',
      bullets: 'iOS & Android • High-Concurrency Web • Native Performance',
      ctaText: 'Explore Mobile Solutions',
      ctaHref: '/solutions',
      bgImage: '/images/hero-mobile-apps.png',
    },
    {
      id: 'about-yevqora',
      tabLabel: 'About Yevqora',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
      title: 'Engineering digital products trusted worldwide.',
      description:
        'An award-winning engineering and cloud studio shipping reliable, high-performance digital platforms and zero-trust security postures for forward-thinking global organizations.',
      bullets: '100M+ Ecosystem Reach • 99.999% SLA • Founded by Architects',
      ctaText: 'Know More About Us',
      ctaHref: '/about',
      bgImage: '/images/hero-about.png',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0); // forces re-render of progress bar animation
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Automatically advance to the next slide every 5 seconds
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      setTimerKey((k) => k + 1);
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, slides.length]);

  const handleTabClick = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndex(index);
    setTimerKey((k) => k + 1);
  };

  const currentSlide = slides[activeIndex];

  return (
    <section id="hero-draft" className="relative w-full overflow-hidden bg-black">
      <div
        className="relative flex flex-col items-center justify-end shrink-0 w-full p-0"
        style={{ height: '82svh', minHeight: '560px' }}
      >
        {/* Cinematic Background Images Cross-Fade */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                idx === activeIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-[1.05]'
              }`}
            >
              <img
                src={slide.bgImage}
                alt={slide.tabLabel}
                className={`absolute inset-0 max-w-none object-cover object-right md:object-center size-full ${
                  idx === activeIndex ? 'animate-hero-pan' : ''
                }`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Balanced Contrast Overlay: guarantees text legibility on left while allowing right-hand 3D visual watermark to shine vividly */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

          {/* Ambient Yevqora Brand Watermark Emblem */}
          <div className="absolute right-[-2%] md:right-[6%] top-1/2 -translate-y-1/2 w-[320px] sm:w-[440px] md:w-[580px] aspect-square opacity-[0.06] pointer-events-none select-none z-0">
            <img
              src="/images/yevqora-mark.png"
              alt=""
              className="w-full h-full object-contain filter invert"
            />
          </div>
        </div>

        {/* Hero Interactive Content Layer */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] pb-[clamp(44px,7svh,88px)] pt-[110px] flex flex-col gap-[clamp(16px,2.5svh,28px)] items-start">
          
          {/* Top 3 Interactive Service Pills with Live Progress Bar */}
          <div className="flex flex-row flex-wrap gap-[8px] sm:gap-[12px] items-center relative w-full z-20">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleTabClick(idx)}
                  className={`relative overflow-hidden px-[14px] sm:px-[22px] py-[8px] sm:py-[9px] rounded-full text-[13px] sm:text-[14.5px] font-['Onest',sans-serif] font-medium transition-all duration-200 border cursor-pointer select-none ${
                    isActive
                      ? 'bg-black/60 border-white/30 text-white shadow-lg'
                      : 'bg-black/30 border-white/10 text-white/65 hover:text-white hover:bg-black/40'
                  }`}
                  style={{ touchAction: 'manipulation' }}
                >
                  {/* Active Slide Timer Progress Bar */}
                  {isActive && (
                    <span
                      key={timerKey}
                      className="absolute inset-y-0 left-0 bg-white/25 rounded-full pointer-events-none"
                      style={{
                        animation: 'heroServiceProgress 5000ms linear forwards',
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-[7px]">
                    {slide.icon}
                    <span>{slide.tabLabel}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Slide Headline & Description with Masked Entrance */}
          <div className="flex flex-col gap-[clamp(20px,3svh,32px)] md:flex-row md:items-end md:justify-between md:gap-[clamp(40px,7vw,140px)] relative w-full">
            
            <div className="flex flex-col gap-[10px] flex-1 w-full relative">
              {/* Title with Mask Rise */}
              <h1
                key={`title-${activeIndex}`}
                className="font-['Onest',sans-serif] font-bold text-[30px] sm:text-[46px] md:text-[54px] leading-[1.08] tracking-[-0.02em] m-0 text-white max-w-4xl animate-mask-rise"
              >
                {currentSlide.title}
              </h1>

              {/* Description */}
              <p
                key={`desc-${activeIndex}`}
                className="font-['Onest',sans-serif] font-normal leading-[1.6] md:leading-[28px] m-0 text-[16px] sm:text-[18px] text-white/85 max-w-3xl animate-fade-up pt-1"
              >
                {currentSlide.description}
              </p>

              {/* Sub-Bullets Tagline */}
              <p
                key={`bullets-${activeIndex}`}
                className="font-['Onest',sans-serif] font-medium leading-[1.4] m-0 mt-[4px] text-[13px] sm:text-[15px] text-indigo-300/90 tracking-[0.4px] animate-fade-up"
              >
                {currentSlide.bullets}
              </p>
            </div>

            {/* Main Action Pill CTA */}
            <div className="shrink-0 pt-2 md:pt-0">
              <Link
                href={currentSlide.ctaHref}
                className="btn-pill btn-pill-white text-[14.5px] px-[28px] py-[12px] shadow-[0_4px_24px_rgba(255,255,255,0.2)] group"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-[#111113] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
