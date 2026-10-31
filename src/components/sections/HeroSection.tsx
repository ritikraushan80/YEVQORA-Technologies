'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';
import { IndustryVisual } from './HeroVisuals';

interface HeroSlide {
  id: string;
  tabLabel: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string;
  ctaText: string;
  ctaHref: string;
  image?: string;
  video?: string;
  poster?: string;
  background: string;
  visual?: React.ReactNode;
}

export const HeroSection: React.FC = () => {
  const slides: HeroSlide[] = [
    {
      id: 'ai-cloud',
      tabLabel: 'AI Solutions',
      icon: <Sparkles className="w-3.5 h-3.5 text-indigo-400" />,
      title: 'AI solutions that move your business forward.',
      description:
        'Custom AI integrations, intelligent automation, and smart analytics that streamline operations and unlock measurable growth for your business.',
      bullets: 'Machine Learning • Intelligent Automation • Predictive Analytics',
      ctaText: 'Start Your AI Project',
      ctaHref: '/services',
      background:
        'radial-gradient(900px circle at 78% 45%, #1e1b4b 0%, #0b0f24 45%, #05060f 100%)',
      video: '/videos/hero-ai-network.mp4',
      poster: '/images/hero-ai-network-poster.jpg',
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
      ctaHref: '/contact',
      background:
        'radial-gradient(900px circle at 78% 50%, #052e3a 0%, #07141f 48%, #040810 100%)',
      image: '/images/hero-mobile-web.jpg',
    },
    {
      id: 'about-yevqora',
      tabLabel: 'About Yevqora',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
      title: 'Intelligent digital products for every industry.',
      description:
        'An agile engineering startup building AI-powered websites and mobile apps for healthcare, fintech, e-commerce, education, sports and more.',
      bullets: 'Healthcare • FinTech • E-Commerce • Education • Sports',
      ctaText: 'Know More About Us',
      ctaHref: '/about',
      background:
        'radial-gradient(900px circle at 78% 50%, #3b0f4f 0%, #14081f 48%, #07040d 100%)',
      visual: <IndustryVisual />,
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
        className="relative flex flex-col items-center justify-start shrink-0 w-full p-0"
        style={{ height: '670px' }}
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
              {slide.video ? (
                <>
                  <div className="absolute inset-0" style={{ backgroundColor: "#05060f" }} />
                  {/* Looping AI network video on the right, fading into the dark background under the copy */}
                  <div
                    className="absolute inset-y-0 right-0 w-full md:w-[72%] opacity-50 md:opacity-100"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent 0%, black 45%)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 45%)',
                    }}
                  >
                    <video
                      className="absolute inset-0 size-full object-cover"
                      src={slide.video}
                      poster={slide.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-hidden="true"
                    />
                  </div>
                </>
              ) : slide.image ? (
                <>
                  <div className="absolute inset-0" style={{ backgroundColor: "#05060f" }} />
                  {/* Photo sits on the right and fades into the dark background under the copy */}
                  <div
                    className="absolute inset-y-0 right-0 w-full md:w-[66%] opacity-40 md:opacity-100"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent 0%, black 38%)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 38%)',
                    }}
                  >
                    <img
                      src={slide.image}
                      alt=""
                      className={`absolute inset-0 max-w-none object-cover object-center size-full ${
                        idx === activeIndex ? 'animate-hero-pan' : ''
                      }`}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0" style={{ background: slide.background }} />
                  {/* Subtle tech grid */}
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                      backgroundSize: '56px 56px',
                      maskImage: 'radial-gradient(ellipse at 75% 50%, black 10%, transparent 70%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at 75% 50%, black 10%, transparent 70%)',
                    }}
                  />
                  {slide.visual}
                </>
              )}
            </div>
          ))}

          {/* Legibility overlay: keeps the copy on the left crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Hero Interactive Content Layer */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] pb-[60px] pt-[130px] md:pt-[210px] flex flex-col gap-[14px] items-start">
          
          {/* Top 3 Interactive Service Pills with Live Progress Bar */}
          <div className="flex flex-row flex-wrap gap-[8px] sm:gap-[12px] items-center relative w-full z-20">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={(e) => {
                    handleTabClick(idx);
                    // Mouse clicks should not leave the button looking focused
                    if (e.detail > 0) e.currentTarget.blur();
                  }}
                  className={`relative overflow-hidden px-[14px] sm:px-[22px] py-[8px] sm:py-[9px] rounded-full text-[13px] sm:text-[14.5px] font-['Onest',sans-serif] font-medium transition-all duration-200 border cursor-pointer select-none outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
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
          <div className="flex flex-col gap-[clamp(20px,3svh,32px)] md:flex-row md:items-start md:justify-between md:min-h-[270px] md:gap-[clamp(40px,7vw,140px)] relative w-full">
            
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
            <div className="shrink-0 pt-2 md:pt-0 md:self-end md:translate-y-[48px]">
              <Link
                href={currentSlide.ctaHref}
                className="btn-pill text-[14.5px] px-[28px] py-[12px] text-white bg-white/[0.12] hover:bg-white/[0.22] border border-white/30 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300 group"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
