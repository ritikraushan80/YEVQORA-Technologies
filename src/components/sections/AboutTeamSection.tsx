'use client';

import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ritik Raushan',
    role: 'Engineering Manager',
    bio: 'Leading technical strategy, system architecture, and engineering excellence to deliver scalable, secure, and high-performance products.',
    image:
      '/images/team/ritik.jpg',
    linkedin: 'https://www.linkedin.com/in/ritik-raushan-4250741b6/',
  },
  {
    name: 'MD Idris',
    role: 'Infrastructure Lead',
    bio: 'Managing cloud infrastructure, DevOps, and deployment automation to ensure secure, reliable, and scalable technology systems.',
    image:
      '/images/team/idris.jpg',
    linkedin: 'https://www.linkedin.com/in/md-idris-9111b1210/',
  },
  {
    name: 'Nikhil Baisoya',
    role: 'Lead AI Engineer',
    bio: 'Developing AI models, intelligent agents, chatbots, and automation solutions to deliver scalable, innovative, and data-driven products.',
    image:
      '/images/team/nikhil.jpg',
    linkedin: 'https://www.linkedin.com/in/nikhil-baisoya-819a661a8/',
  },
  {
    name: 'Misha Kumari',
    role: 'Principal Software Engineer',
    bio: 'Building web and mobile applications with expertise in frontend, backend, and UI/UX design to deliver seamless digital experiences.',
    image:
      '/images/team/misha.jpg',
    linkedin: 'https://www.linkedin.com/in/misha-kumari-57721420a/',
  },
];

export const AboutTeamSection: React.FC = () => {
  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] pt-0 pb-[38px] md:pb-[80px]">
        {/* Header */}
        <div className="text-center mb-[36px] md:mb-[60px]">
          <div className="font-semibold text-[12px] text-[#7d7d7d] tracking-[2px] uppercase mb-[16px]">
            Our Team
          </div>
          <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#1f2732] m-0">
            The People Behind Yevqora
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[20px] max-w-[1100px] mx-auto">
          {teamMembers.map((m) => (
            <div
              key={m.name}
              className="group flex flex-col items-center text-center bg-white rounded-[20px] border border-[#eef0f3] p-[24px] md:p-[28px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:-translate-y-[4px] hover:border-[#111113]/15 hover:shadow-[0_16px_40px_-12px_rgba(17,17,19,0.14)] transition-all duration-300"
            >
              <div className="relative w-[112px] h-[112px] md:w-[128px] md:h-[128px] mb-[18px] md:mb-[22px]">
                {/* Soft accent ring */}
                <div className="absolute -inset-[5px] rounded-full bg-gradient-to-br from-indigo-400/40 via-fuchsia-300/30 to-sky-300/40 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative size-full rounded-full overflow-hidden border-[3px] border-white bg-[#f7f8fa] shadow-md">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="font-['Onest',sans-serif] font-semibold text-[17px] text-[#111113] leading-[24px]">
                {m.name}
              </div>
              <div className="font-['Onest',sans-serif] font-medium text-[13.5px] text-[#7d7d7d] leading-[20px] mt-[4px]">
                {m.role}
              </div>
              <p className="font-['Onest',sans-serif] font-normal text-[13.5px] text-[#7d7d7d] leading-[22px] mt-[12px] mb-0">
                {m.bio}
              </p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="mt-[16px] inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#0a66c2]/10 text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white transition-colors duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
