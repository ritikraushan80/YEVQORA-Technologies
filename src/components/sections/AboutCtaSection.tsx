'use client';

import React from 'react';
import Link from 'next/link';

export const AboutCtaSection: React.FC = () => {
  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[clamp(58px,7.2vw,96px)] text-center">
        <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#111113] dark:text-white mb-[18px]">
          Ready to get started?
        </h2>
        <p className="font-['Onest',sans-serif] font-normal text-[15px] md:text-[16px] leading-[1.7] text-[#7d7d7d] dark:text-zinc-400 max-w-[520px] mx-auto mb-[32px]">
          Tell us about your project and let&apos;s build something great together.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-[12px] max-w-[400px] sm:max-w-none mx-auto">
          <Link
            href="/contact"
            className="btn-pill btn-pill-dark text-[13.5px] px-[24px] py-[10px]"
          >
            Get in touch
          </Link>
          <Link
            href="/solutions"
            className="btn-pill btn-pill-outline text-[13.5px] px-[24px] py-[10px] text-[#111113] dark:text-white border-[#d4d4d8] dark:border-zinc-700 hover:bg-[#111113] hover:text-white hover:border-[#111113]"
          >
            View our apps
          </Link>
        </div>
      </div>
    </section>
  );
};
