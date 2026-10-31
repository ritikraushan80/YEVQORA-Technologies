'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

export interface RelatedApp {
  slug: string;
  name: string;
  category: string;
  rating: string;
  icon: string;
}

export interface ServiceArticle {
  id: string;
  slug: string;
  title: string;
  accent: string;
  image: string;
  description: string;
  detail?: string | null;
  relatedApps: RelatedApp[];
}

export const servicesList: ServiceArticle[] = [
  {
    id: 'smart-ai-solutions',
    slug: 'smart-ai-solutions',
    title: 'Smart AI Solutions',
    accent: '#f59e0b',
    image: '/images/services/smart-ai-solutions.png',
    description:
      'We design and deploy end-to-end AI systems — from custom machine learning models and NLP pipelines to computer vision, generative AI integrations, and intelligent automation. Our AI solutions are built to solve real business problems, not just add buzzwords.',
    detail:
      "Whether it's building recommendation engines, training custom classification models, implementing RAG-based chatbots, or deploying predictive analytics dashboards — we architect AI solutions that integrate seamlessly into your existing products and workflows using TensorFlow, PyTorch, OpenAI APIs, and LangChain.",
    relatedApps: [
      {
        slug: 'teleprompter-ai-script-prompt',
        name: 'Teleprompter AI',
        category: 'Productivity',
        rating: '5.0',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7a/87/98/7a879888-b280-fc5f-9c13-a6d154fe7100/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg',
      },
      {
        slug: 'video-player-all-format-edit',
        name: 'Video Player AI',
        category: 'Entertainment',
        rating: '4.3',
        icon: 'https://play-lh.googleusercontent.com/7wPPW-dINdny34oiEs12nqKxJa3l8P9SUImRt0hSvMrY_0VLfNN0ZgxldBvwqTzMv4iIMM-IDL1wRF5eQFXRXA',
      },
      {
        slug: 'air-print-smart-mobile-printer',
        name: 'Air Print Smart',
        category: 'Productivity',
        rating: '4.3',
        icon: 'https://play-lh.googleusercontent.com/w2LYWH70hL8EtrQKjjFslT3NfmswgHEpjhOd_9s6eNsEPXTP_IQPgpoZ30d5Nzquy6muWWVlM8jGnpwDY1mj',
      },
    ],
  },
  {
    id: 'android-app-development',
    slug: 'android-app-development',
    title: 'Android App Development',
    accent: '#3ddc84',
    image: '/images/services/android-app-development.png',
    description:
      'We build Android applications enhanced with on-device AI from smart content recommendations and intelligent automation to real-time image recognition and predictive user experiences. Every app we ship leverages machine learning to deliver personalized, adaptive experiences at scale.',
    detail:
      'Our Android team integrates TensorFlow Lite, MediaPipe, and custom ML models directly into apps for features like AI-powered call identification, smart photo detection, voice-driven interfaces, and behaviour-based personalization — all running efficiently on-device without cloud dependency.',
    relatedApps: [
      {
        slug: 'call-recorder-automatic-acr',
        name: 'Call Recorder ACR',
        category: 'Communication',
        rating: '4.5',
        icon: 'https://play-lh.googleusercontent.com/cYgW5FSQLEDUSL2oM7559sHNyAigwVML0iXPZ1PXtqPa6tIO9CxKWUDhuH3laFt5Dfh_TjhN_AzWQqNA_AAt2w',
      },
      {
        slug: 'adviceme-love-career-coach',
        name: 'AdviceMe AI Coach',
        category: 'Lifestyle',
        rating: '4.5',
        icon: 'https://play-lh.googleusercontent.com/hNs7St9Yw9PFLDQZ_PJnzPw6sGiCRgiLcMPE_sazMZGoLmcBNCYp8FSmrETPgV2yTU619zCAgcse1nb95iR9Ew',
      },
      {
        slug: 'pdf-pilot',
        name: 'PDF Pilot Pro',
        category: 'Productivity',
        rating: '4.5',
        icon: 'https://play-lh.googleusercontent.com/av126mU0TH3z1tqjCuOzxt__c8BOS2i_vxmjUNwokCpAQFFTw7EcIKOOSNzQtdfDFC1uAzp-OjHvpP-ApcNE',
      },
    ],
  },
  {
    id: 'ios-app-development',
    slug: 'ios-app-development',
    title: 'iOS App Development',
    accent: '#007aff',
    image: '/images/services/ios-app-development.png',
    description:
      "Our iOS apps combine Apple's Core ML and Vision frameworks with custom AI pipelines to deliver intelligent experiences — from on-device NLP and smart assistants to real-time object detection and AI-driven personalization that adapts to each user.",
    detail:
      "We leverage Apple's Neural Engine, CreateML, and Swift-native ML integrations to build apps with features like intelligent document scanning, AI-based health tracking, predictive analytics, and natural language understanding — all optimized for iPhone and iPad performance.",
    relatedApps: [
      {
        slug: 'language-translator-translate',
        name: 'Language Translator',
        category: 'Education',
        rating: '5.0',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/44/b2/81/44b281df-bb48-2db8-1154-74fd08cd840b/AppIcon-0-0-1x_U007emarketing-0-10-0-sRGB-85-220.png/512x512bb.jpg',
      },
      {
        slug: 'lose-weight-in-30-days-fit',
        name: 'Lose Weight 30 Days',
        category: 'Health & Fitness',
        rating: '5.0',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/68/22/f2/6822f297-5dde-928c-73ea-dbca48625762/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg',
      },
      {
        slug: 'running-activity-tracker',
        name: 'Activity Tracker',
        category: 'Health & Fitness',
        rating: '5.0',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/5e/a7/e4/5ea7e495-64fe-7ac5-ca29-9896749412a6/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg',
      },
    ],
  },
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    accent: '#06b6d4',
    image: '/images/services/website-development.png',
    description:
      'High-throughput enterprise websites, serverless web architectures, and interactive digital experiences engineered with Next.js, React, and modern microservices.',
    detail:
      'Every web application ships with sub-second page loads, Lighthouse 98+ scores, automated global CDN edge caching, and conversion-optimized responsive design built to handle millions of daily visits.',
    relatedApps: [
      {
        slug: 'pdf-pilot',
        name: 'PDF Pilot Web Suite',
        category: 'Productivity',
        rating: '4.5',
        icon: 'https://play-lh.googleusercontent.com/av126mU0TH3z1tqjCuOzxt__c8BOS2i_vxmjUNwokCpAQFFTw7EcIKOOSNzQtdfDFC1uAzp-OjHvpP-ApcNE',
      },
      {
        slug: 'adviceme-love-career-coach',
        name: 'AdviceMe Web Portal',
        category: 'Lifestyle',
        rating: '4.5',
        icon: 'https://play-lh.googleusercontent.com/hNs7St9Yw9PFLDQZ_PJnzPw6sGiCRgiLcMPE_sazMZGoLmcBNCYp8FSmrETPgV2yTU619zCAgcse1nb95iR9Ew',
      },
      {
        slug: 'video-player-all-format-edit',
        name: 'Video Stream Web',
        category: 'Entertainment',
        rating: '4.3',
        icon: 'https://play-lh.googleusercontent.com/7wPPW-dINdny34oiEs12nqKxJa3l8P9SUImRt0hSvMrY_0VLfNN0ZgxldBvwqTzMv4iIMM-IDL1wRF5eQFXRXA',
      },
    ],
  },
  {
    id: 'app-ui-ux-designing',
    slug: 'app-ui-ux-designing',
    title: 'App UI/UX Designing',
    accent: '#7c3aed',
    image: '/images/services/app-ui-ux-designing.png',
    description:
      'We design intelligent interfaces that adapt to user behaviour — leveraging AI-powered analytics, heatmap-driven insights, and generative design tools to create experiences that are not just beautiful, but data-informed and continuously optimized.',
    detail:
      'Our design process uses AI to analyse user flows, predict drop-off points, and generate design variations. We combine tools like Figma with AI-assisted prototyping to deliver interfaces that learn from real user data and evolve with your product.',
    relatedApps: [],
  },
  {
    id: 'app-testing-services',
    slug: 'app-testing-services',
    title: 'App Testing Services',
    accent: '#10b981',
    image: '/images/services/app-testing-services.png',
    description:
      'We use AI-powered testing frameworks to catch bugs faster, predict failure points, and automate regression testing at scale. Our intelligent QA approach reduces release cycles while improving app stability and user satisfaction.',
    detail:
      'Our continuous integration test matrix simulates real-world stress, network latency, device fragmentation, and concurrency spikes across hundreds of physical devices to guarantee zero critical regressions.',
    relatedApps: [],
  },
];

export const ServicesPracticesSection: React.FC = () => {
  return (
    <section className="bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] pt-[clamp(72px,9vw,120px)] pb-[clamp(40px,6vw,80px)]">
        {/* Section Header (Quantum4U Style) */}
        <div className="max-w-[760px] mb-[clamp(40px,6vw,72px)]">
          <div className="font-semibold text-[12px] text-[#7d7d7d] tracking-[2px] uppercase mb-[16px]">
            What We Build
          </div>
          <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#111113] mb-[20px]">
            One team. Many practices.
          </h2>
          <p className="font-['Onest',sans-serif] font-normal text-[15px] md:text-[16px] leading-[1.7] text-[#5a6470] m-0">
            Pick the one closest to your problem — or combine them. Every engagement ships AI-aware from day one.
          </p>
        </div>

        {/* Alternating Full-Bleed 12-Column Editorial Showcase (Quantum4U Style) */}
        <div className="flex flex-col">
          {servicesList.map((service, index) => {
            const isOdd = index % 2 === 1;
            return (
              <article
                key={service.id}
                id={`service-${service.slug}`}
                className="scroll-mt-[96px] grid grid-cols-1 md:grid-cols-12 gap-[32px] md:gap-[64px] items-start py-[clamp(45px,6.4vw,90px)] border-t border-[#ececec]"
              >
                {/* Visual Image Column: md:col-span-6, alternates order on odd rows */}
                <div
                  className={`md:col-span-6 md:sticky md:top-[96px] ${
                    isOdd ? 'md:order-2' : ''
                  }`}
                >
                  <div
                    className="relative aspect-[5/4] w-full overflow-hidden rounded-[24px] bg-[#f7f8fa] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                    style={{ border: `1px solid ${service.accent}1F` }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(180deg, transparent 55%, ${service.accent}12 100%)`,
                      }}
                    />
                  </div>
                </div>

                {/* Editorial Content Column: md:col-span-6 */}
                <div className={`md:col-span-6 ${isOdd ? 'md:order-1' : ''}`}>
                  {/* Eyebrow Numbering */}
                  <div className="flex items-center gap-[12px] mb-[24px]">
                    <span
                      className="font-['Onest',sans-serif] font-semibold text-[12px] tracking-[2px]"
                      style={{ color: service.accent }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div
                      className="h-[1px] w-[28px]"
                      style={{ backgroundColor: service.accent }}
                    />
                    <span className="font-['Onest',sans-serif] font-medium text-[12px] tracking-[1.5px] uppercase text-[#7d7d7d]">
                      Service
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Onest',sans-serif] font-semibold text-[26px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-[#111113] mb-[20px]">
                    {service.title}
                  </h3>

                  {/* Descriptions */}
                  <div className="flex flex-col gap-[16px] mb-[32px]">
                    <p className="font-['Onest',sans-serif] font-normal text-[15px] md:text-[16px] leading-[1.7] text-[#5a6470] m-0">
                      {service.description}
                    </p>
                    {service.detail && (
                      <p className="font-['Onest',sans-serif] font-normal text-[14px] md:text-[15px] leading-[26px] text-[#7d7d7d] m-0">
                        {service.detail}
                      </p>
                    )}
                  </div>

                  {/* Shipped Apps (Only if service has shipped apps) */}
                  {service.relatedApps && service.relatedApps.length > 0 && (
                    <div className="mb-[32px] pt-[24px] border-t border-[#f0f0f0]">
                      <div className="font-['Onest',sans-serif] font-medium text-[11px] tracking-[1.5px] uppercase text-[#7d7d7d] mb-[16px]">
                        Apps we&apos;ve shipped
                      </div>
                      <div className="grid grid-cols-3 gap-[10px] md:gap-[12px]">
                        {service.relatedApps.map((app) => (
                          <Link
                            key={app.slug}
                            href="/solutions"
                            className="group/app flex flex-col items-center text-center bg-white hover:bg-[#fafbfc] border border-[#eef0f3] hover:border-[#111113]/15 hover:-translate-y-[2px] rounded-[16px] p-[14px] md:p-[16px] no-underline transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                          >
                            <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-[14px] overflow-hidden shrink-0 bg-[#f7f8fa] border border-[#eef0f3] shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-[12px] group-hover/app:scale-105 transition-transform">
                              {app.icon ? (
                                <img
                                  src={app.icon}
                                  alt={app.name}
                                  className="size-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              ) : (
                                <div className="size-full flex items-center justify-center font-['Onest',sans-serif] font-bold text-[22px] text-[#7d7d7d]">
                                  {app.name.charAt(0)}
                                </div>
                              )}
                            </div>
                            <span className="font-['Onest',sans-serif] font-semibold text-[13px] text-[#111113] leading-[1.25] line-clamp-2 mb-[4px] w-full">
                              {app.name}
                            </span>
                            <span className="font-['Onest',sans-serif] text-[11px] text-[#7d7d7d] leading-[1.4] line-clamp-1 mb-[8px] w-full">
                              {app.category}
                            </span>
                            {app.rating && Number(app.rating) > 0 && (
                              <span className="font-['Onest',sans-serif] font-medium text-[11.5px] text-[#1f2732] leading-[1.4] flex items-center gap-[4px]">
                                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                <span>{app.rating}</span>
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions Row */}
                  <div className="flex items-center gap-[20px] flex-wrap pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-[8px] font-['Onest',sans-serif] font-medium text-[14px] no-underline transition-all hover:gap-[12px]"
                      style={{ color: service.accent }}
                    >
                      <span>Start a project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {service.relatedApps && service.relatedApps.length > 0 && (
                      <Link
                        href="/solutions"
                        className="inline-flex items-center gap-[6px] font-['Onest',sans-serif] font-medium text-[13px] text-[#7d7d7d] hover:text-[#111113] no-underline transition-colors"
                      >
                        See all apps
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
