'use client';

import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

// Replace with the company page URL, e.g. https://www.linkedin.com/company/<your-page>
const LINKEDIN_URL = 'https://www.linkedin.com';

export const AboutLinkedInSection: React.FC = () => {
  const bulletPoints = [
    'Product and AI updates',
    'Tips on AI, websites and mobile apps',
    'News about our projects and launches',
    'Behind-the-scenes from the team',
  ];

  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[38px] md:py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[64px] items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-[8px] bg-[#0a66c2]/10 border border-[#0a66c2]/15 rounded-[9999px] px-[12px] py-[5px] mb-[18px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0a66c2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-['Onest',sans-serif] font-semibold text-[12px] tracking-[1px] uppercase text-[#0a66c2]">
                Stay in the loop
              </span>
            </div>

            <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[38px] leading-[1.2] text-[#111113] mb-[18px]">
              Follow us on LinkedIn for the latest from Yevqora.
            </h2>
            <p className="font-['Onest',sans-serif] font-normal text-[15px] md:text-[16px] text-[#5a6470] leading-[1.7] mb-[24px]">
              We share product updates, AI ideas and practical tips for building better websites and mobile apps — straight from the Yevqora team.
            </p>

            <ul className="flex flex-col gap-[12px] mb-[28px] p-0 list-none">
              {bulletPoints.map((item) => (
                <li key={item} className="flex items-start gap-[10px]">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#0a66c2]/12 flex items-center justify-center shrink-0 mt-[2px]">
                    <Check className="w-3 h-3 text-[#0a66c2]" strokeWidth={3} />
                  </div>
                  <span className="font-['Onest',sans-serif] font-normal text-[14px] md:text-[15px] text-[#3a4654] leading-[24px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-[14px] flex-wrap">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[8px] font-['Onest',sans-serif] font-semibold text-[14px] text-white bg-[#0a66c2] hover:bg-[#0958ad] px-[24px] py-[12px] rounded-[9999px] no-underline transition-colors shadow-sm"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>Follow on LinkedIn</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[6px] font-['Onest',sans-serif] font-medium text-[14px] text-[#7d7d7d] hover:text-[#111113] no-underline transition-colors"
              >
                <span>Visit page</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: LinkedIn Preview Card */}
          <div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-white rounded-[20px] overflow-hidden border border-[#e6e9ee] shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)] hover:-translate-y-[2px] transition-all duration-300 no-underline group"
            >
              {/* Banner */}
              <div className="relative w-full aspect-[1128/191] bg-gradient-to-br from-[#0a66c2] via-[#1f88e0] to-[#0958ad]">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 40%)',
                  }}
                />
                {/* Logo Box */}
                <div className="absolute left-[16px] md:left-[24px] -bottom-[36px] md:-bottom-[44px] w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-[16px] md:rounded-[18px] bg-white border-[2px] border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden flex items-center justify-center z-[2] p-2">
                  <img
                    src="/images/yevqora-logo-dark.png"
                    alt="Yevqora Technologies"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="px-[24px] md:px-[32px] pt-[52px] md:pt-[60px] pb-[28px]">
                <h3 className="font-['Onest',sans-serif] font-semibold text-[22px] md:text-[24px] text-[#111113] leading-[1.2] mb-[4px]">
                  Yevqora Technologies
                </h3>
                <p className="font-['Onest',sans-serif] font-normal text-[14px] text-[#5a6470] leading-[20px] mb-[14px]">
                  AI, web & mobile app development · Noida, India
                </p>
                <div className="inline-flex items-center gap-[6px] font-semibold text-[13px] text-[#0a66c2] group-hover:underline">
                  <span>View company on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
