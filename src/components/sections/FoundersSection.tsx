'use client';

import React from 'react';
import { Mail, Shield, Sparkles, Cpu, Award, ArrowUpRight } from 'lucide-react';
import { FounderItem } from '@/types';

interface FoundersSectionProps {
  hideHeader?: boolean;
}

export const foundersData: (FounderItem & { tags?: string[] })[] = [
  {
    id: 'ritik',
    name: 'Ritik',
    role: 'Co-Founder & CTO',
    bio: 'Strategic engineering architect driving high-throughput web/mobile platforms, cloud automation, and scalable microservice pipelines.',
    email: 'ritik@yevqora.com',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://www.linkedin.com/in/ritik-raushan-4250741b6',
    tags: ['Cloud Architecture', 'Microservices'],
  },
  {
    id: 'md-idris',
    name: 'MD Idris',
    role: 'Co-Founder & CEO',
    bio: 'Visionary technology leader specializing in enterprise IT infrastructure, multi-cloud deployment, and strategic IT operations.',
    email: 'idris@yevqora.com',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com',
    tags: ['IT Strategy', 'Enterprise Cloud'],
  },
  {
    id: 'nikhil',
    name: 'Nikhil Baisoya',
    role: 'Lead AI Engineer',
    bio: 'Pioneering enterprise AI solutions, autonomic neural stream pipelines, and LLM-driven anomaly detection models built for multi-cloud intelligence.',
    email: 'nikhil@yevqora.com',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com',
    tags: ['Generative AI', 'Neural Mesh'],
  },
  {
    id: 'misha',
    name: 'Misha Kumari',
    role: 'Senior FullStack Developer',
    bio: 'Crafting high-throughput full-stack architectures, interactive web applications, and resilient microservices for global enterprises.',
    email: 'misha@yevqora.com',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com',
    tags: ['Next.js & React', 'FullStack APIs'],
  },
];

export const FoundersSection: React.FC<FoundersSectionProps> = ({ hideHeader = false }) => {
  const values = [
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
      title: 'Radical Simplicity',
      desc: 'Complex systems do not have to mean complex UX. We build clean, modular architectures that are intuitive to operate and sustain.',
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Relentless Defense',
      desc: 'Security is never an afterthought. We integrate zero-trust postures and automated threat audits into every node by default.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: 'Empathetic Scale',
      desc: 'Performance is human-centric. We design high-load architectures that empower your end-users without creating operational friction.',
    },
  ];

  return (
    <section id="founders" className="py-[clamp(56px,7vw,100px)] relative overflow-hidden bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-[56px]">
            <div className="font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400 mb-[12px]">
              Our Team & Culture
            </div>
            <h2 className="font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white m-0">
              Leadership & Core Architects
            </h2>
            <p className="font-normal text-[15.5px] text-[#7d7d7d] dark:text-zinc-400 mt-3 max-w-xl">
              Meet the systems architects, cloud strategists, and engineers turning complex technical challenges into scalable platforms.
            </p>
          </div>
        )}

        {/* Core Values Cards (Quantum4U Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mb-[64px]">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-[28px] rounded-[24px] bg-[#f7f8fa] dark:bg-[#151722] border border-[#eee] dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-[52px] h-[52px] rounded-[16px] bg-[#111113] text-white flex items-center justify-center mb-6 shadow-md">
                {val.icon}
              </div>
              <h3 className="font-bold text-[19px] text-[#111113] dark:text-white mb-2">
                {val.title}
              </h3>
              <p className="font-normal text-[14px] leading-[22px] text-[#7d7d7d] dark:text-zinc-400 m-0">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="flex flex-col items-center mb-[36px]">
          <div className="font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400 mb-[8px]">
            Founders & Leads
          </div>
          <h3 className="font-bold text-[26px] sm:text-[32px] text-[#111113] dark:text-white m-0 text-center">
            Pioneering the Future of Digital Platforms
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {foundersData.map((f) => (
            <div
              key={f.id}
              className="rounded-[24px] overflow-hidden bg-white dark:bg-[#151722] border border-[#eee] dark:border-zinc-800 hover:shadow-xl hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-square overflow-hidden bg-zinc-900">
                  <img
                    src={f.avatar}
                    alt={f.name}
                    className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Top Role Badge */}
                  <div className="absolute bottom-[16px] left-[16px] right-[16px] flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[18px] text-white leading-tight m-0">
                        {f.name}
                      </h4>
                      <p className="font-medium text-[12.5px] text-indigo-300 leading-tight m-0 mt-0.5">
                        {f.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="p-[20px]">
                  <p className="font-normal text-[13.5px] text-[#7d7d7d] dark:text-zinc-400 leading-[21px] m-0 mb-4 line-clamp-3">
                    {f.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {f.tags?.map((t, tidx) => (
                      <span
                        key={tidx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#f4f4f5] dark:bg-zinc-800 text-[#1f2732] dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Social Link */}
              <div className="px-[20px] pb-[18px] pt-3 border-t border-[#f0f0f2] dark:border-zinc-800/80 flex items-center justify-between">
                <a
                  href={`mailto:${f.email}`}
                  className="text-xs font-semibold text-[#7d7d7d] dark:text-zinc-400 hover:text-[#111113] dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{f.email}</span>
                </a>
                {f.linkedin && (
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#f4f4f5] dark:bg-zinc-800 flex items-center justify-center text-[#7d7d7d] hover:text-[#111113] dark:hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
