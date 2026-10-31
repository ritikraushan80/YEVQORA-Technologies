'use client';

import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '100M+', label: 'Active Users' },
  { value: '50+', label: 'Apps Published' },
  { value: '4.5+', label: 'Average Rating' },
  { value: '8+', label: 'Years Experience' },
];

export const AboutStatsSection: React.FC = () => {
  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[45px] md:py-[64px]">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-[32px] sm:gap-[48px] md:gap-[80px]">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-['Onest',sans-serif] font-bold text-[28px] md:text-[40px] leading-[1] text-[#111113]">
                {s.value}
              </div>
              <div className="font-normal text-[13px] md:text-[15px] text-[#7d7d7d] mt-[6px] md:mt-[8px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
