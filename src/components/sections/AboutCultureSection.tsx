'use client';

import React from 'react';
import { Check } from 'lucide-react';

export const AboutCultureSection: React.FC = () => {
  const highlights = [
    'Remarkable to receive such a personalized touch in every solution we offer.',
    'Empowering innovation while ensuring reliability in every project we undertake.',
    'Transforming challenges into opportunities with groundbreaking AI-driven tools.',
  ];

  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[38px] md:py-[80px]">
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[64px] items-center">
          {/* Left Text Column */}
          <div className="flex-1">
            <div className="font-semibold text-[12px] text-[#7d7d7d] tracking-[2px] uppercase mb-[16px]">
              Work Culture
            </div>
            <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[38px] leading-[1.2] text-[#1f2732] mb-[20px]">
              Welcome to Yevqora — where ideas turn into innovation!
            </h2>
            <p className="font-['Onest',sans-serif] font-normal text-[15px] leading-[1.7] text-[#7d7d7d] mb-[24px]">
              At Yevqora Technologies, we work hard & party harder. Our work culture is flexible and our team is encouraged to plan their day & work how they like. Collaboration & building a sense of teamwork is a crucial principle. Besides, Yevqora is a fun place to work where work doesn&apos;t feel like work.
            </p>

            <div className="flex flex-col gap-[14px]">
              {highlights.map((text, idx) => (
                <div key={idx} className="flex gap-[10px] items-start">
                  <div className="shrink-0 mt-[3px] w-[18px] h-[18px] rounded-full bg-[#111113]/5 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#111113]" strokeWidth={2.5} />
                  </div>
                  <span className="font-normal text-[15px] text-[#555] leading-[24px]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full max-w-[460px] aspect-square bg-gradient-to-br from-[#1f2732] to-[#111113] rounded-[32px] flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src="/images/work-culture.png"
                alt="Work culture at Yevqora"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
