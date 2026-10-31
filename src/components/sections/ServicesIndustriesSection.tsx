'use client';

import React from 'react';
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
} from 'lucide-react';

interface IndustryItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const industries: IndustryItem[] = [
  {
    title: 'AI in Healthcare',
    desc: 'AI features for patient apps, appointment tools, health tracking and smart reminders.',
    icon: <HeartPulse className="w-4 h-4 text-white/70" />,
  },
  {
    title: 'AI in FinTech',
    desc: 'Smart dashboards, spending insights, fraud alerts and AI-assisted customer support for finance apps.',
    icon: <Landmark className="w-4 h-4 text-white/70" />,
  },
  {
    title: 'AI in E-Commerce',
    desc: 'Smart recommendations, dynamic pricing, and AI-driven inventory management.',
    icon: <ShoppingCart className="w-4 h-4 text-white/70" />,
  },
  {
    title: 'AI in EdTech',
    desc: 'Personalized learning paths, AI tutors, and intelligent assessment systems.',
    icon: <GraduationCap className="w-4 h-4 text-white/70" />,
  },
  {
    title: 'AI in Logistics',
    desc: 'Route optimization, demand forecasting, and intelligent supply chain management.',
    icon: <Truck className="w-4 h-4 text-white/70" />,
  },
  {
    title: 'AI in Real Estate',
    desc: 'Smart property search, buyer matching and market insights for real estate platforms.',
    icon: <Building2 className="w-4 h-4 text-white/70" />,
  },
  {
    title: 'AI in Media',
    desc: 'Content generation, smart curation, and AI-enhanced video and image processing.',
    icon: <Tv className="w-4 h-4 text-white/70" />,
  },
  {
    title: 'AI in Agriculture',
    desc: 'Crop analysis, yield prediction, and AI-powered pest detection systems.',
    icon: <Sprout className="w-4 h-4 text-white/70" />,
  },
  {
    title: 'AI in Sports',
    desc: 'Player performance tracking, match analytics, injury-risk prediction, and smart fan engagement.',
    icon: <Trophy className="w-4 h-4 text-white/70" />,
  },
  {
    title: 'Other Industries',
    desc: "Don't see yours? We build AI features for any kind of business.",
    icon: <Wand2 className="w-4 h-4 text-white/70" />,
  },
];

export const ServicesIndustriesSection: React.FC = () => {
  return (
    <section className="bg-brand-dark font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[clamp(58px,7.2vw,96px)]">
        {/* Section Header */}
        <div className="max-w-[760px] mb-[clamp(40px,5vw,64px)]">
          <div className="font-semibold text-[12px] text-white/40 tracking-[2px] uppercase mb-[16px]">
            Industries
          </div>
          <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-white mb-[16px]">
            Industries we build for.
          </h2>
          <p className="font-['Onest',sans-serif] font-normal text-[15px] md:text-[16px] leading-[1.7] text-white/50 m-0">
            We build across diverse industries — each tailored to unique business requirements.
          </p>
        </div>

        {/* 10 Industry Cards in a 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[14px] md:gap-[18px]">
          {industries.map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.03] rounded-[14px] p-[22px] md:p-[24px] border border-white/[0.07] h-full hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group"
            >
              <div className="w-[34px] h-[34px] rounded-[10px] bg-white/[0.06] flex items-center justify-center mb-[14px] group-hover:bg-white/[0.1] transition-colors">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[14px] text-white mb-[6px] leading-[1.3]">
                {item.title}
              </h3>
              <p className="font-normal text-[12px] text-white/45 leading-[19px] m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
