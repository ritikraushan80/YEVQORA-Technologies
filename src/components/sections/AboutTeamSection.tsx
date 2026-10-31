'use client';

import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'MD Idris',
    role: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Ritik Raushan',
    role: 'Co-Founder & CTO',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Nikhil Baisoya',
    role: 'Lead AI Engineer',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Misha Kumari',
    role: 'Senior FullStack Developer',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
];

export const AboutTeamSection: React.FC = () => {
  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[38px] md:py-[80px]">
        {/* Header (Quantum4U Style) */}
        <div className="text-center mb-[36px] md:mb-[60px]">
          <div className="font-semibold text-[12px] text-[#7d7d7d] tracking-[2px] uppercase mb-[16px]">
            Our Team
          </div>
          <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#1f2732] m-0">
            The People Behind Yevqora
          </h2>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-[32px] sm:gap-[48px] md:gap-[64px]">
          {teamMembers.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <div className="w-[84px] h-[84px] md:w-[104px] md:h-[104px] rounded-full bg-gradient-to-br from-[#1f2732] to-[#111113] mb-[12px] md:mb-[16px] overflow-hidden shadow-lg border-2 border-white">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="font-['Onest',sans-serif] font-semibold text-[16px] text-[#1f2732] leading-[22px]">
                {m.name}
              </div>
              <div className="font-['Onest',sans-serif] font-normal text-[14px] text-[#7d7d7d] leading-[20px] mt-[4px]">
                {m.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
