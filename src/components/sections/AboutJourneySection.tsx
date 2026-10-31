'use client';

import React from 'react';

interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

const milestonesList: MilestoneItem[] = [
  {
    year: '01',
    title: 'Foundation',
    description:
      'Yevqora Technologies was founded on a clear mission: to make artificial intelligence practical, accessible and valuable in everyday websites and mobile applications.',
  },
  {
    year: '02',
    title: 'Engineering Capability',
    description:
      'We built a core team and a modern engineering stack for high-performance web platforms and native and cross-platform Android and iOS applications, with AI embedded where it adds real value.',
  },
  {
    year: '03',
    title: 'Industry Expertise',
    description:
      'We develop tailored solutions for healthcare, fintech, e-commerce, education, logistics, sports and other sectors, each shaped around the specific needs of the business.',
  },
  {
    year: '04',
    title: 'Product Delivery',
    description:
      'Every idea is turned into a production-ready product through clear milestones, regular demos and support after launch.',
  },
  {
    year: '05',
    title: 'Vision Ahead',
    description:
      'We aim to grow into a trusted global technology partner, helping organisations in every industry innovate with confidence.',
  },
];

export const AboutJourneySection: React.FC = () => {
  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[38px] md:py-[80px]">
        {/* Header */}
        <div className="text-center mb-[36px] md:mb-[60px]">
          <div className="font-semibold text-[12px] text-[#7d7d7d] tracking-[2px] uppercase mb-[16px]">
            Our Journey
          </div>
          <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#1f2732] m-0">
            Building Yevqora, Step by Step
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-[640px] mx-auto">
          {milestonesList.map((m, idx) => {
            const isLast = idx === milestonesList.length - 1;
            return (
              <div key={m.year} className="flex gap-[28px] md:gap-[32px] items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-[52px] h-[52px] md:w-[56px] md:h-[56px] rounded-full bg-[#111113] flex items-center justify-center shadow-md">
                    <span className="font-['Onest',sans-serif] font-bold text-[13px] md:text-[14px] text-white">
                      {m.year}
                    </span>
                  </div>
                  {!isLast && <div className="w-[2px] h-[64px] bg-[#e5e5e5]" />}
                </div>
                <div className="pb-[36px]">
                  <h3 className="font-semibold text-[17px] md:text-[19px] text-[#1f2732] mb-[6px] m-0">
                    {m.title}
                  </h3>
                  <p className="font-['Onest',sans-serif] font-normal text-[14px] md:text-[15px] text-[#7d7d7d] leading-[24px] m-0">
                    {m.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
