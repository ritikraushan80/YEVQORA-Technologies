'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Cpu,
  Layers,
  Server,
  Cloud,
  FileText,
  Activity,
  Smartphone,
  PhoneCall,
  Wifi,
  Sparkles,
  Database,
  Lock,
} from 'lucide-react';

interface MarqueeApp {
  name: string;
  subname: string;
  icon: React.ReactNode;
  bgGradient: string;
  category: string;
}

export const TrustLogosSection: React.FC = () => {
  const apps: MarqueeApp[] = [
    {
      name: 'Call Recorder',
      subname: 'Automatic ACR',
      icon: <PhoneCall className="w-6 h-6 text-white" />,
      bgGradient: 'from-blue-600 to-indigo-700',
      category: 'Mobile Utility',
    },
    {
      name: 'PDF Pilot',
      subname: 'AI Document Editor',
      icon: <FileText className="w-6 h-6 text-white" />,
      bgGradient: 'from-rose-500 to-red-700',
      category: 'AI Productivity',
    },
    {
      name: 'CloudVault',
      subname: 'Zero-Trust Storage',
      icon: <Lock className="w-6 h-6 text-white" />,
      bgGradient: 'from-violet-600 to-purple-800',
      category: 'Enterprise SecOps',
    },
    {
      name: 'WiFi Analyzer',
      subname: 'Network Speed Test',
      icon: <Wifi className="w-6 h-6 text-white" />,
      bgGradient: 'from-cyan-500 to-blue-600',
      category: 'Network Tool',
    },
    {
      name: 'FinScale Pay',
      subname: 'High-TPS Gateway',
      icon: <Activity className="w-6 h-6 text-white" />,
      bgGradient: 'from-emerald-500 to-teal-700',
      category: 'FinTech Cloud',
    },
    {
      name: 'ClusterPilot',
      subname: 'K8s Multi-Region',
      icon: <Server className="w-6 h-6 text-white" />,
      bgGradient: 'from-indigo-600 to-blue-800',
      category: 'Cloud DevOps',
    },
    {
      name: 'CognitiveCore',
      subname: 'LLM Pipeline Engine',
      icon: <Sparkles className="w-6 h-6 text-white" />,
      bgGradient: 'from-fuchsia-600 to-pink-700',
      category: 'Applied AI',
    },
    {
      name: 'DataMirror',
      subname: 'Cross-Device Sync',
      icon: <Smartphone className="w-6 h-6 text-white" />,
      bgGradient: 'from-amber-500 to-orange-600',
      category: 'Mobile Transfer',
    },
    {
      name: 'SentryShield',
      subname: 'Autonomous SOC2',
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      bgGradient: 'from-emerald-600 to-green-800',
      category: 'Cybersecurity',
    },
  ];

  // Duplicate for smooth seamless loop
  const duplicatedApps = [...apps, ...apps, ...apps];

  return (
    <section id="apps-ticker" className="relative w-full bg-[#000000] border-b border-white/[0.08] overflow-hidden">
      <div className="flex flex-col gap-[28px] pb-[52px] pt-[40px] relative w-full">
        
        {/* Header */}
        <div className="flex flex-col font-['Onest',sans-serif] font-medium justify-center text-[20px] md:text-[28px] text-center text-white w-full px-[16px]">
          <p className="leading-[32px] md:leading-[38px] m-0">
            Digital platforms used by{' '}
            <span className="font-bold text-white underline decoration-indigo-500 decoration-2 underline-offset-4">
              100M+ users
            </span>{' '}
            with{' '}
            <span className="font-bold text-amber-400">4.8★+ ratings</span>{' '}
            globally
          </p>
        </div>

        {/* Marquee Track with Side Fade Gradient Masks */}
        <div className="overflow-hidden relative w-full py-2">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-[80px] md:w-[220px] bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-[80px] md:w-[220px] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Continuous Ticker */}
          <div className="flex w-max animate-marquee will-change-transform">
            {duplicatedApps.map((item, idx) => (
              <Link
                key={idx}
                href="/solutions"
                className="group flex items-center px-[18px] md:px-[26px] shrink-0 h-[104px] no-underline cursor-pointer"
              >
                <div className="flex flex-col gap-[9px] items-center justify-end shrink-0">
                  {/* Icon Card with Grayscale to Color Hover */}
                  <div
                    className={`rounded-[14px] size-[54px] flex items-center justify-center bg-gradient-to-br ${item.bgGradient} shadow-md overflow-hidden grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out`}
                  >
                    {item.icon}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col font-['Onest',sans-serif] font-medium text-[12px] text-center text-white opacity-60 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap leading-tight">
                    <span className="leading-tight">{item.name}</span>
                    <span className="leading-tight text-[11px] text-white/50 group-hover:text-white/80">
                      {item.subname}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
