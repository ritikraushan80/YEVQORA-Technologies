'use client';

import React from 'react';
import Link from 'next/link';

export const AboutBuildCtaSection: React.FC = () => {
  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[clamp(58px,7.2vw,96px)] text-center">
        <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#111113] mb-[18px]">
          Ready to Build Something Great?
        </h2>
        <p className="font-['Onest',sans-serif] font-normal text-[15px] md:text-[16px] leading-[1.7] text-[#7d7d7d] max-w-[520px] mx-auto mb-[32px]">
          Tell us about your project and let&apos;s build something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-[12px] max-w-[400px] sm:max-w-none mx-auto">
          <Link
            href="/contact"
            className="btn-pill btn-pill-dark text-[14px] px-[26px] py-[11px]"
          >
            Start a Project
          </Link>
          <Link
            href="/services"
            className="btn-pill btn-pill-outline text-[14px] px-[26px] py-[11px] text-[#111113] border-[#d4d4d8] hover:bg-[#111113] hover:text-white hover:border-[#111113]"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};
