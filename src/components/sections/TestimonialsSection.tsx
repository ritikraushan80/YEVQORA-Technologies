'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text:
        'Yevqora transformed our entire cloud and mobile stack. Their AI integration is phenomenal and has completely streamlined our enterprise workflow while reducing server overhead by 40%.',
      author: 'Faisal Yahya Al-Dhafar',
      role: 'VP of Technology',
      company: 'Logistics Group',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 2,
      text:
        'The mobile application built by Yevqora has delivered a world-class experience for our 2M+ active monthly users. The attention to detail in animations, responsiveness, and zero-latency backend is unmatched.',
      author: 'Sarah Jenkins',
      role: 'Head of Product',
      company: 'FinScale Payments',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 3,
      text:
        'Our SOC2 and HIPAA audit preparedness was completed in record time thanks to Yevqora SecOps blueprint. Highly recommended for any serious, scaling enterprise.',
      author: 'Michael Chen',
      role: 'Chief Information Security Officer',
      company: 'CloudHealth Global',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative w-full bg-[#111113] py-[clamp(56px,7vw,100px)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full flex flex-col gap-[40px] items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[700px]">
          <h2 className="font-['Onest',sans-serif] font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.15] tracking-[-0.01em] text-white m-0">
            Hear why 500k+ customers trust
          </h2>
        </div>

        {/* Testimonials Carousel Track */}
        <div className="w-full max-w-[1200px] relative">
          
          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center justify-between absolute inset-y-0 -left-6 -right-6 pointer-events-none z-20">
            <button
              type="button"
              onClick={prevSlide}
              className="pointer-events-auto w-[42px] h-[42px] rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-all shadow-lg cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="pointer-events-auto w-[42px] h-[42px] rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-all shadow-lg cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] items-stretch">
            {testimonials.map((item, idx) => {
              const isCenter = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex flex-col justify-between gap-[22px] bg-white/[0.04] border rounded-[24px] p-[28px] transition-all duration-300 cursor-pointer ${
                    isCenter
                      ? 'border-white/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-white/[0.07] scale-[1.02]'
                      : 'border-white/[0.12] hover:border-white/20 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Quote Text */}
                  <p className="font-['Onest',sans-serif] font-normal text-[15px] sm:text-[15.5px] text-center text-white/85 leading-[24px] m-0">
                    &ldquo;{item.text}&rdquo;
                  </p>

                  {/* Stars + Author Info */}
                  <div className="flex flex-col items-center gap-[12px] pt-2">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-[4px]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                      ))}
                    </div>

                    {/* Author & Avatar */}
                    <div className="flex items-center gap-[10px]">
                      <div className="relative rounded-full shrink-0 size-[38px] overflow-hidden border border-white/20">
                        <img
                          src={item.avatar}
                          alt={item.author}
                          className="absolute inset-0 size-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-['Onest',sans-serif] font-bold text-[14px] text-white whitespace-nowrap leading-tight">
                          {item.author}
                        </span>
                        <span className="font-['Onest',sans-serif] font-normal text-[12px] text-white/50 leading-tight">
                          {item.role} &bull; {item.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicator Bars / Dots (Quantum4U Style) */}
          <div className="flex gap-[8px] items-center justify-center pt-[32px]">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? 'bg-white w-[32px]' : 'bg-white/25 w-[14px] hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
