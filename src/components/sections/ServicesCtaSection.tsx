'use client';

import React from 'react';
import Link from 'next/link';

export const ServicesCtaSection: React.FC = () => {
  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[clamp(58px,7.2vw,96px)] text-center">
        <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#111113] mb-[18px]">
          Ready to get started?
        </h2>
        <p className="font-['Onest',sans-serif] font-normal text-[15px] md:text-[16px] leading-[1.7] text-[#7d7d7d] max-w-[520px] mx-auto mb-[32px]">
          Tell us about your project and let&apos;s build something great together.
        </p>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="btn-pill btn-pill-dark text-[14px] px-[26px] py-[11px]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};
