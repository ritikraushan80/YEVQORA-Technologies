'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  imageSrc: string;
  excerpt: string;
}

export const CaseStudySection: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 'cloud-scale-architecture',
      title: 'Architecting Multi-Cloud Resiliency for 100M+ Global Users',
      date: 'Oct 24, 2026',
      category: 'Cloud Architecture',
      imageSrc:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'A blueprint for zero-downtime microservice orchestration, dynamic regional failover, and sub-millisecond edge synchronization.',
    },
    {
      id: 'ai-native-mobile-apps',
      title: 'Building AI-Powered Mobile Applications with Low Latency',
      date: 'Oct 12, 2026',
      category: 'Mobile & AI',
      imageSrc:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'How on-device machine learning models paired with streaming cloud inference enhance mobile app responsiveness without battery drain.',
    },
    {
      id: 'zero-trust-secops',
      title: 'Defensive Cyber Postures: Automated SOC2 & Zero-Trust SIEM',
      date: 'Sep 28, 2026',
      category: 'Cybersecurity',
      imageSrc:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'Continuous compliance, autonomic threat hunting, and cryptographic credential isolation for high-stakes fintech infrastructure.',
    },
  ];

  return (
    <section id="blog" className="relative w-full bg-transparent py-[clamp(56px,7vw,100px)] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full flex flex-col gap-[44px] items-center">
        
        {/* Section Header */}
        <div className="flex flex-col gap-[12px] items-center text-center max-w-[800px]">
          <div className="font-['Onest',sans-serif] font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400">
            Insights & Research
          </div>
          <h2 className="font-['Onest',sans-serif] font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white m-0">
            Latest Blog Posts
          </h2>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full max-w-[1376px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-[22px] overflow-hidden bg-white dark:bg-[#151722] border border-[#eee] dark:border-zinc-800 hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* 16:10 Aspect Ratio Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={post.imageSrc}
                    alt={post.title}
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute top-[14px] left-[14px]">
                    <span className="font-['Onest',sans-serif] text-[11px] font-semibold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-[22px]">
                  <div className="flex items-center gap-[8px] mb-[10px]">
                    <span className="font-['Onest',sans-serif] text-[11.5px] font-medium text-[#7d7d7d] dark:text-zinc-400 bg-[#f7f8fa] dark:bg-zinc-800/80 px-[10px] py-[4px] rounded-[6px] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{post.date}</span>
                    </span>
                  </div>

                  <h3 className="font-['Onest',sans-serif] font-bold text-[17px] sm:text-[18px] text-[#111113] dark:text-white leading-[1.38] mb-[8px] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="font-['Onest',sans-serif] font-normal text-[13.5px] text-[#7d7d7d] dark:text-zinc-400 leading-[22px] line-clamp-2 m-0">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-[22px] pb-[20px] pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Read All Posts Pill CTA Button */}
        <div className="flex justify-center mt-[12px]">
          <Link
            href="/services"
            className="btn-pill btn-pill-dark text-[14px] px-[28px] py-[11px] shadow-md group"
          >
            <span>Read All Posts</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </section>
  );
};
