'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export interface HeroChip {
  label: string;
  accent: string;
  slug: string;
}

interface PageHeaderHeroProps {
  badgeText: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  backLink?: { href: string; label: string };
  pills?: string[];
  chips?: HeroChip[];
}

export const PageHeaderHero: React.FC<PageHeaderHeroProps> = ({
  badgeText,
  title,
  description,
  imageSrc = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600',
  imageAlt = 'Technology Grid',
  backLink,
  pills,
  chips,
}) => {
  return (
    <section style={{ backgroundColor: "#111113" }} className="relative overflow-hidden min-h-[50vh] flex items-center font-['Onest',sans-serif]">
      {/* Full-bleed Background Image with Quantum4U Dark Obsidian Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={imageSrc}
          alt={imageAlt || ''}
          className="absolute inset-0 object-cover object-right md:object-center size-full"
          loading="eager"
        />
        {/* Balanced Obsidian Overlay matching Quantum4U: protects copy legibility on left while keeping right watermark visual crisp and visible */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(17,17,19,0.75)" }} />

        {/* Ambient Yevqora Brand Watermark Emblem */}
        <div className="absolute right-[-2%] md:right-[5%] top-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] md:w-[480px] aspect-square opacity-[0.08] pointer-events-none select-none z-0">
          <img
            src="/images/yevqora-mark.png"
            alt=""
            className="w-full h-full object-contain filter invert"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-[1] w-full">
        <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] pt-[160px] md:pt-[200px] pb-[60px] md:pb-[110px]">
          {backLink && (
            <div className="mb-6">
              <Link
                href={backLink.href}
                className="inline-flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-full border border-white/15 transition-all group"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>{backLink.label}</span>
              </Link>
            </div>
          )}

          {/* Category / Badge (Clean uppercase tracking matching Quantum4U) */}
          {badgeText && (
            <div className="font-['Onest',sans-serif] font-semibold text-[13px] md:text-[14px] tracking-[1.5px] uppercase text-white/40 mb-[20px]">
              {badgeText}
            </div>
          )}

          {/* Main Title (Clean 50px bold) */}
          <h1 className="font-['Onest',sans-serif] font-semibold text-[26px] md:text-[50px] leading-[1.1] tracking-[-0.02em] text-white max-w-[800px] mb-[24px]">
            {title}
          </h1>

          {/* Description Paragraph */}
          <p className="font-normal text-[17px] md:text-[18px] text-white/60 leading-[30px] max-w-[620px] mb-0">
            {description}
          </p>

          {/* Interactive Topic / Practice Pills with Accent Dots (Quantum4U Exact Style) */}
          {chips && chips.length > 0 && (
            <div className="flex flex-wrap items-center gap-[10px] md:gap-[12px] mt-[32px] md:mt-[40px]">
              {chips.map((chip) => (
                <a
                  key={chip.slug}
                  href={`#service-${chip.slug}`}
                  className="group inline-flex items-center gap-[8px] px-[16px] md:px-[18px] py-[8px] md:py-[10px] rounded-[9999px] bg-white/[0.06] border border-white/[0.14] backdrop-blur-sm font-['Onest',sans-serif] font-medium text-[13px] md:text-[14px] text-white/85 no-underline transition-all duration-300 hover:bg-white hover:text-[#111113] hover:border-white hover:-translate-y-[1px]"
                >
                  <span
                    aria-hidden="true"
                    className="w-[6px] h-[6px] rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: chip.accent }}
                  />
                  <span>{chip.label}</span>
                </a>
              ))}
            </div>
          )}

          {/* Fallback Legacy string pills */}
          {!chips && pills && pills.length > 0 && (
            <div className="flex flex-wrap items-center gap-[10px] md:gap-[12px] mt-[32px]">
              {pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full text-[12.5px] font-medium text-white/80 bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-colors select-none"
                >
                  {pill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
