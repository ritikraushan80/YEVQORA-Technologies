'use client';

import React from 'react';

interface ValueItem {
  title: string;
  description: string;
}

const valuesList: ValueItem[] = [
  {
    title: 'Innovation',
    description:
      'We look for practical ways to use new technology, especially AI, so your product feels smarter and easier to use.',
  },
  {
    title: 'Integrity',
    description:
      'We are honest about timelines, costs and what is possible, and we tell you early if something changes.',
  },
  {
    title: 'Collaboration',
    description:
      'We work as one team with you, sharing progress openly and welcoming your feedback at every step.',
  },
  {
    title: 'Customer Delight',
    description:
      'We care about the people who will use your product, and we measure our work by how useful it is to them.',
  },
];

export const AboutValuesSection: React.FC = () => {
  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[38px] md:py-[80px]">
        {/* Header (Quantum4U Style) */}
        <div className="text-center mb-[36px] md:mb-[60px]">
          <div className="font-semibold text-[12px] text-[#7d7d7d] tracking-[2px] uppercase mb-[16px]">
            Our Values
          </div>
          <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#1f2732] m-0">
            Guided by Excellence
          </h2>
        </div>

        {/* 4 Cards Flex / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {valuesList.map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-[20px] p-[32px] shadow-[0_2px_20px_rgba(0,0,0,0.04)] h-full border border-[#f0f0f0] hover:border-[#111113]/20 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-[20px] text-[#1f2732] mb-[10px] m-0">
                {val.title}
              </h3>
              <p className="font-['Onest',sans-serif] font-normal text-[15px] text-[#7d7d7d] leading-[24px] m-0 mt-2">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
