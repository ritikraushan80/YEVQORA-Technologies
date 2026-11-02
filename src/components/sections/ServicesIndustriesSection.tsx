'use client';

import React from 'react';
import Link from 'next/link';
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  Tv,
  Sprout,
  Trophy,
  Wand2,
  ArrowRight,
} from 'lucide-react';

interface IndustryItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  /** Tailwind gradient used for the icon tile and the hover glow */
  gradient: string;
  glow: string;
  /** Optional highlighted link shown under the description */
  cta?: { label: string; href: string };
}

const iconClass = 'w-[22px] h-[22px] text-white';

const industries: IndustryItem[] = [
  {
    title: 'AI in Healthcare',
    desc: 'AI features for patient apps, appointment tools, health tracking and smart reminders.',
    icon: <HeartPulse className={iconClass} />,
    gradient: 'from-rose-500 to-pink-500',
    glow: 'group-hover:shadow-[0_18px_40px_-14px_rgba(244,63,94,0.45)]',
  },
  {
    title: 'AI in FinTech',
    desc: 'Smart dashboards, spending insights, fraud alerts and AI-assisted customer support for finance apps.',
    icon: <Landmark className={iconClass} />,
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'group-hover:shadow-[0_18px_40px_-14px_rgba(16,185,129,0.45)]',
  },
  {
    title: 'AI in E-Commerce',
    desc: 'Smart recommendations, dynamic pricing, and AI-driven inventory management.',
    icon: <ShoppingCart className={iconClass} />,
    gradient: 'from-orange-500 to-amber-500',
    glow: 'group-hover:shadow-[0_18px_40px_-14px_rgba(249,115,22,0.45)]',
  },
  {
    title: 'AI in EdTech',
    desc: 'Personalized learning paths, AI tutors, and intelligent assessment systems.',
    icon: <GraduationCap className={iconClass} />,
    gradient: 'from-indigo-500 to-violet-500',
    glow: 'group-hover:shadow-[0_18px_40px_-14px_rgba(99,102,241,0.45)]',
  },
  {
    title: 'AI in Logistics',
    desc: 'Route optimization, demand forecasting, and intelligent supply chain management.',
    icon: <Truck className={iconClass} />,
    gradient: 'from-sky-500 to-cyan-500',
    glow: 'group-hover:shadow-[0_18px_40px_-14px_rgba(14,165,233,0.45)]',
  },
  {
    title: 'AI in Real Estate',
    desc: 'Smart property search, buyer matching and market insights for real estate platforms.',
    icon: <Building2 className={iconClass} />,
    gradient: 'from-slate-600 to-slate-800',
    glow: 'group-hover:shadow-[0_18px_40px_-14px_rgba(51,65,85,0.45)]',
  },
  {
    title: 'AI in Media',
    desc: 'Content generation, smart curation, and AI-enhanced video and image processing.',
    icon: <Tv className={iconClass} />,
    gradient: 'from-fuchsia-500 to-purple-600',
    glow: 'group-hover:shadow-[0_18px_40px_-14px_rgba(192,38,211,0.45)]',
  },
  {
    title: 'AI in Agriculture',
    desc: 'Crop analysis, yield prediction, and AI-powered pest detection systems.',
    icon: <Sprout className={iconClass} />,
    gradient: 'from-lime-500 to-green-600',
    glow: 'group-hover:shadow-[0_18px_40px_-14px_rgba(101,163,13,0.45)]',
  },
  {
    title: 'AI in Sports',
    desc: 'Player performance tracking, match analytics, injury-risk prediction, and smart fan engagement.',
    icon: <Trophy className={iconClass} />,
    gradient: 'from-yellow-500 to-orange-500',
    glow: 'group-hover:shadow-[0_18px_40px_-14px_rgba(234,179,8,0.45)]',
  },
  {
    title: 'Other Industries',
    desc: "Don't see yours? We build AI features for any kind of business.",
    icon: <Wand2 className={iconClass} />,
    cta: { label: 'Talk to us', href: '/contact' },
    gradient: 'from-indigo-600 via-violet-500 to-sky-500',
    glow: 'group-hover:shadow-[0_18px_40px_-14px_rgba(99,102,241,0.5)]',
  },
];

export const ServicesIndustriesSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-transparent border-t border-[#ececec] font-['Onest',sans-serif]">
      {/* Soft colour washes + dot grid so the section feels part of the light theme */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-[120px] top-[40px] size-[380px] rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute right-[-100px] bottom-[20px] size-[420px] rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute left-[40%] top-[-80px] size-[300px] rounded-full bg-fuchsia-300/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: 'radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
          }}
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[clamp(58px,7.2vw,96px)]">
        {/* Section Header */}
        <div className="max-w-[760px] mx-auto text-center mb-[clamp(40px,5vw,64px)]">
          <div className="inline-flex items-center gap-[8px] rounded-full border border-indigo-200/70 bg-indigo-50/80 px-[14px] py-[6px] font-semibold text-[12px] tracking-[2px] uppercase text-indigo-600 mb-[16px]">
            <span className="size-[6px] rounded-full bg-indigo-500 animate-pulse" />
            Industries
          </div>
          <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#111113] mb-[16px]">
            Industries we{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-sky-500 bg-clip-text text-transparent">
              build for.
            </span>
          </h2>
          <p className="font-['Onest',sans-serif] font-normal text-[15px] md:text-[16px] leading-[1.7] text-[#7d7d7d] m-0">
            We build across diverse industries — each tailored to unique business requirements.
          </p>
        </div>

        {/* 10 Industry Cards in a 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[14px] md:gap-[18px]">
          {industries.map((item) =>
            (
              <div
                key={item.title}
                className={`group relative overflow-hidden bg-white/85 backdrop-blur-sm rounded-[20px] p-[24px] md:p-[26px] border border-[#eceef3] h-full shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:-translate-y-[4px] hover:border-transparent ${item.glow} transition-all duration-300`}
              >
                {/* Tinted corner glow in the card's own colour */}
                <div
                  aria-hidden="true"
                  className={`absolute -right-[36px] -top-[36px] size-[120px] rounded-full bg-gradient-to-br ${item.gradient} opacity-[0.10] blur-2xl group-hover:opacity-[0.28] transition-opacity duration-300`}
                />
                {/* Gradient edge that appears on hover */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-[20px] top-0 h-[2px] rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div
                  className={`relative size-[48px] rounded-[14px] bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-[18px] shadow-[0_10px_20px_-6px_rgba(15,23,42,0.3)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="relative font-semibold text-[16px] text-[#111113] mb-[8px] leading-[1.3]">
                  {item.title}
                </h3>
                <p className="relative font-normal text-[13.5px] text-[#6b7480] leading-[22px] m-0">
                  {item.desc}
                </p>
                {item.cta && (
                  <Link
                    href={item.cta.href}
                    className="relative mt-[14px] inline-flex items-center gap-[6px] font-bold text-[14px] text-indigo-600 hover:text-indigo-700 no-underline group-hover:gap-[10px] transition-all duration-300"
                  >
                    <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-sky-500 bg-clip-text text-transparent">
                      {item.cta.label}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
