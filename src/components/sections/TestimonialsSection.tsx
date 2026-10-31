'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquareText, ShieldCheck, LifeBuoy, ArrowRight } from 'lucide-react';

interface Promise {
  icon: React.ReactNode;
  title: string;
  text: string;
  accent: string;
}

/**
 * Replaces the earlier testimonials carousel. We are a new company and have no
 * client reviews yet, so this section states what clients can expect instead.
 */
export const TestimonialsSection: React.FC = () => {
  const promises: Promise[] = [
    {
      icon: <MessageSquareText className="w-6 h-6" />,
      title: 'Clear, honest communication',
      text: 'You get a straightforward plan, a realistic timeline and regular demos. If something changes, you hear it from us first.',
      accent: 'from-indigo-500 to-sky-400',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Quality and security built in',
      text: 'Clean, well-tested code and sensible security practices from day one, so your product is solid before it reaches your users.',
      accent: 'from-sky-500 to-teal-400',
    },
    {
      icon: <LifeBuoy className="w-6 h-6" />,
      title: 'Support after launch',
      text: 'We stay with you once you go live, fixing issues, improving features and helping your product grow.',
      accent: 'from-violet-500 to-fuchsia-400',
    },
  ];

  return (
    <section id="testimonials" className="relative w-full bg-brand-dark py-[clamp(56px,7vw,100px)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-[10%] -top-[120px] size-[340px] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute right-[8%] -bottom-[120px] size-[320px] rounded-full bg-sky-500/15 blur-3xl" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full flex flex-col gap-[44px] items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[720px] gap-[14px]">
          <div className="font-['Onest',sans-serif] font-semibold text-[12px] tracking-[2px] uppercase text-white/45">
            Our Promise
          </div>
          <h2 className="font-['Onest',sans-serif] font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.15] tracking-[-0.01em] text-white m-0">
            What you can expect when you work with us
          </h2>
          <p className="font-['Onest',sans-serif] font-normal text-[15.5px] md:text-[16.5px] leading-[1.65] text-white/55 m-0">
            We are a new team, and we would rather earn your trust with our work than ask for it up front. Here is what we commit to on every project.
          </p>
        </div>

        {/* Promise cards */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-[20px] items-stretch">
          {promises.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col gap-[18px] bg-white/[0.04] border border-white/[0.12] rounded-[24px] p-[28px] md:p-[32px] hover:bg-white/[0.07] hover:border-white/25 hover:-translate-y-[4px] transition-all duration-300"
            >
              <span
                className={`size-[52px] rounded-[16px] bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-lg`}
              >
                {item.icon}
              </span>
              <h3 className="font-['Onest',sans-serif] font-bold text-[19px] md:text-[20px] text-white leading-[1.3] m-0">
                {item.title}
              </h3>
              <p className="font-['Onest',sans-serif] font-normal text-[14.5px] md:text-[15px] text-white/60 leading-[24px] m-0">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="btn-pill text-[14.5px] px-[28px] py-[12px] text-white bg-white/[0.12] hover:bg-white/[0.22] border border-white/30 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] group"
        >
          <span>Start a conversation</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </section>
  );
};
