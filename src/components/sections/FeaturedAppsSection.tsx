'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  PhoneCall,
  Wifi,
  RefreshCw,
  PhoneForwarded,
  Copy,
  Cast,
  Star,
  DownloadCloud,
  ArrowRight,
} from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  tagline: string;
  downloads: string;
  rating: string;
  iconBg: string;
  icon: React.ReactNode;
}

export const FeaturedAppsSection: React.FC = () => {
  const apps: AppItem[] = [
    {
      id: 'call-recorder',
      name: 'Call Recorder ACR',
      tagline: 'Effortless automated call capture for conversations.',
      downloads: '10M+',
      rating: '4.5',
      iconBg: 'from-blue-600 to-indigo-700',
      icon: <PhoneCall className="w-7 h-7 text-white" />,
    },
    {
      id: 'wifi-analyzer',
      name: 'WiFi Analyzer Pro',
      tagline: 'Real-time wireless signal speed & channel optimization.',
      downloads: '5M+',
      rating: '4.4',
      iconBg: 'from-cyan-500 to-blue-600',
      icon: <Wifi className="w-7 h-7 text-white" />,
    },
    {
      id: 'software-update',
      name: 'Phone Update Engine',
      tagline: 'Effortlessly keep your apps and systems patched.',
      downloads: '2M+',
      rating: '4.3',
      iconBg: 'from-emerald-500 to-teal-700',
      icon: <RefreshCw className="w-7 h-7 text-white" />,
    },
    {
      id: 'smart-caller',
      name: 'Smart Caller ID',
      tagline: 'Instant spam shield and verified identity caller radar.',
      downloads: '15M+',
      rating: '4.6',
      iconBg: 'from-amber-500 to-orange-600',
      icon: <PhoneForwarded className="w-7 h-7 text-white" />,
    },
    {
      id: 'clone-phone',
      name: 'Clone Data Transfer',
      tagline: 'Ultra-fast cross-platform data transfer across devices.',
      downloads: '8M+',
      rating: '4.5',
      iconBg: 'from-purple-600 to-pink-600',
      icon: <Copy className="w-7 h-7 text-white" />,
    },
    {
      id: 'screen-mirror',
      name: 'HD Screen Mirroring',
      tagline: 'Ultra-low latency streaming to any smart display.',
      downloads: '12M+',
      rating: '4.5',
      iconBg: 'from-rose-500 to-red-600',
      icon: <Cast className="w-7 h-7 text-white" />,
    },
  ];

  return (
    <section id="featured-apps" className="relative w-full bg-transparent py-[clamp(56px,7vw,100px)] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full flex flex-col gap-[40px] items-center">
        
        {/* Section Header */}
        <div className="flex flex-col gap-[12px] items-center text-center max-w-[800px]">
          <div className="font-['Onest',sans-serif] font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400">
            Our Apps & Platforms
          </div>
          <h2 className="font-['Onest',sans-serif] font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white m-0">
            Built for Everyone, Made with Passion.
          </h2>
        </div>

        {/* Flagship Hero App Card (Quantum4U Style) */}
        <div className="w-full max-w-[1376px]">
          <div className="bg-brand-dark text-white flex flex-col md:flex-row items-stretch overflow-hidden rounded-[24px] md:rounded-[32px] relative md:aspect-[3/1] shadow-2xl border border-white/10 group">
            {/* Background Graphic with Vignette */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600"
                alt="PDF Pilot Architecture"
                className="absolute inset-0 object-cover size-full group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111113] via-[#111113]/80 to-transparent" />
            </div>

            {/* Left Content Area */}
            <div className="flex flex-col gap-[16px] md:gap-[20px] items-start justify-center px-[28px] py-[36px] md:px-[clamp(48px,5vw,80px)] relative w-full md:w-[60%] z-10">
              {/* App Icon */}
              <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[18px] bg-gradient-to-tr from-rose-500 to-red-600 flex items-center justify-center shadow-xl border border-white/20">
                <FileText className="w-8 h-8 text-white" />
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400 block mb-1">
                  Flagship Product
                </span>
                <h3 className="font-['Onest',sans-serif] font-bold text-[22px] md:text-[28px] text-white leading-tight m-0">
                  PDF Pilot: AI Document Suite
                </h3>
              </div>

              <p className="font-['Onest',sans-serif] font-normal text-[14.5px] md:text-[16px] text-zinc-300 leading-[24px] m-0 max-w-[540px]">
                An all-in-one AI-driven PDF editor and converter. Summarize complex whitepapers, detect AI-generated text, humanize documentation, and sign contracts on the fly with bank-grade encryption.
              </p>

              {/* Stats badges */}
              <div className="flex items-center gap-[24px] pt-1">
                <span className="font-['Onest',sans-serif] font-medium text-[13.5px] text-white/80 flex items-center gap-[6px]">
                  <DownloadCloud className="w-4 h-4 text-sky-400" />
                  <span>10M+ Installs</span>
                </span>
                <span className="font-['Onest',sans-serif] font-medium text-[13.5px] text-white/80 flex items-center gap-[6px]">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>4.8 / 5.0 Rating</span>
                </span>
              </div>

              {/* Explore Our Apps Button */}
              <div className="pt-2">
                <Link
                  href="/solutions"
                  className="btn-pill btn-pill-outline text-[13.5px] px-[24px] py-[9px] group/btn"
                >
                  <span>Explore Our Apps</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Square Grid App Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[16px] md:gap-[20px] w-full max-w-[1376px]">
          {apps.map((app) => (
            <Link
              key={app.id}
              href="/solutions"
              className="no-underline block group"
            >
              <div className="bg-white dark:bg-[#151722] rounded-[22px] p-[20px] border border-[#eee] dark:border-zinc-800 hover:shadow-xl hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-300 text-center h-full flex flex-col items-center justify-between aspect-square">
                
                {/* App Icon */}
                <div
                  className={`w-[54px] h-[54px] rounded-[15px] bg-gradient-to-tr ${app.iconBg} flex items-center justify-center mb-[10px] shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  {app.icon}
                </div>

                {/* Title */}
                <h4 className="font-['Onest',sans-serif] font-bold text-[14px] text-[#111113] dark:text-white leading-[1.3] m-0 mb-[4px] line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {app.name}
                </h4>

                {/* Tagline */}
                <p className="font-['Onest',sans-serif] font-normal text-[11.5px] text-[#7d7d7d] dark:text-zinc-400 leading-[16px] line-clamp-2 m-0 mb-[8px]">
                  {app.tagline}
                </p>

                {/* Metrics */}
                <div className="flex items-center gap-[6px] mt-auto pt-1">
                  <span className="font-['Onest',sans-serif] font-medium text-[11px] text-[#999] dark:text-zinc-500">
                    {app.downloads}
                  </span>
                  <span className="w-[3px] h-[3px] rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="font-['Onest',sans-serif] font-medium text-[11px] text-[#999] dark:text-zinc-500 flex items-center gap-[3px]">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{app.rating}</span>
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* View All Apps Pill CTA */}
        <div className="flex justify-center mt-[12px]">
          <Link
            href="/solutions"
            className="btn-pill btn-pill-dark text-[14px] px-[28px] py-[11px] shadow-md group"
          >
            <span>View All Apps</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </section>
  );
};
