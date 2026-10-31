'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Server, Code, Cloud, Lock, Layout, Headphones, ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '@/types';
import { servicesData } from '@/data/servicesData';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
  hideHeader?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, hideHeader = false }) => {
  const [mousePos, setMousePos] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos((prev) => ({ ...prev, [id]: { x, y } }));
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'server':
        return <Server className="w-6 h-6 text-indigo-500" />;
      case 'code':
        return <Code className="w-6 h-6 text-blue-500" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 text-sky-500" />;
      case 'shield':
        return <Lock className="w-6 h-6 text-purple-500" />;
      case 'layout':
        return <Layout className="w-6 h-6 text-amber-500" />;
      case 'headphones':
        return <Headphones className="w-6 h-6 text-emerald-500" />;
      default:
        return <Server className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section id="services-grid" className="py-[clamp(56px,7vw,100px)] relative bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-[52px]">
            <div className="font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400 mb-[12px]">
              Full Capability Suite
            </div>
            <h2 className="font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white m-0">
              End-to-End Enterprise Services
            </h2>
            <p className="font-normal text-[15.5px] text-[#7d7d7d] dark:text-zinc-400 mt-3 max-w-xl">
              From mission-critical cloud migrations to high-volume consumer mobile apps, we design, deploy, and scale enterprise software.
            </p>
          </div>
        )}

        {/* Services Cards Grid with Spotlight Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {servicesData.map((service) => {
            const pos = mousePos[service.id] || { x: 150, y: 150 };
            return (
              <div
                key={service.id}
                onMouseMove={(e) => handleMouseMove(service.id, e)}
                className="group relative h-full rounded-[24px] transition-transform duration-300 hover:-translate-y-[3px]"
                style={
                  {
                    '--mx': `${pos.x}px`,
                    '--my': `${pos.y}px`,
                  } as React.CSSProperties
                }
              >
                {/* Spotlight border glow */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(350px circle at var(--mx) var(--my), rgba(99,102,241,0.5), transparent 70%)',
                  }}
                />

                <div className="relative bg-[#f7f8fa] dark:bg-[#151722] p-[28px] rounded-[24px] border border-[#eee] dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-[52px] h-[52px] rounded-[16px] bg-white dark:bg-zinc-800 border border-[#eee] dark:border-zinc-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        {getIconComponent(service.iconName)}
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7d7d7d] dark:text-zinc-400 bg-black/5 dark:bg-white/10 px-2.5 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-[20px] text-[#111113] dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="font-normal text-[14px] leading-[22px] text-[#7d7d7d] dark:text-zinc-400 mb-6">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-[#1f2732] dark:text-zinc-300 font-medium">
                          <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Action */}
                  <div className="pt-4 border-t border-[#eee] dark:border-zinc-800/80 flex items-center justify-between">
                    <Link
                      href={`/services/${service.id}`}
                      className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 flex items-center space-x-1.5 transition-colors no-underline"
                    >
                      <span>Explore Service Deep-Dive</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
