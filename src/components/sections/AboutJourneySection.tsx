'use client';

import React from 'react';

interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

const milestonesList: MilestoneItem[] = [
  {
    year: '2016',
    title: 'Founded Yevqora Technologies',
    description:
      'Started with a vision to build smart mobile applications and scalable digital solutions for millions of users worldwide.',
  },
  {
    year: '2018',
    title: '10M+ Downloads',
    description:
      'Our utility and productivity platforms crossed 10 million downloads, validating product-market fit.',
  },
  {
    year: '2020',
    title: 'Global Product Expansion',
    description:
      'Scaled products globally and strengthened mobile application performance, cloud infrastructure, and user retention.',
  },
  {
    year: '2022',
    title: 'Enterprise Solutions',
    description:
      'Launched enterprise engineering services, partnering with startups and established brands to build custom mobile and web systems.',
  },
  {
    year: '2023',
    title: 'AI Innovation & Integration',
    description:
      'Integrated on-device machine learning, neural OCR, and automated LLM workflows to deliver intelligent user experiences.',
  },
  {
    year: '2024',
    title: '100M+ Active Users',
    description:
      'Reached the milestone of 100 million active users across our portfolio of web and mobile software.',
  },
  {
    year: '2026',
    title: 'Scaling AI Innovation Globally',
    description:
      'Continuously expanding AI-powered architectures, global cloud networks, and next-generation software platforms.',
  },
];

export const AboutJourneySection: React.FC = () => {
  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[38px] md:py-[80px]">
        {/* Header (Quantum4U Style) */}
        <div className="text-center mb-[36px] md:mb-[60px]">
          <div className="font-semibold text-[12px] text-[#7d7d7d] tracking-[2px] uppercase mb-[16px]">
            Our Journey
          </div>
          <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#1f2732] m-0">
            Milestones That Define Us
          </h2>
        </div>

        {/* Vertical Timeline (Quantum4U Style) */}
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
