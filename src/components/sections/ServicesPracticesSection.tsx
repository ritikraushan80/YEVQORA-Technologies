'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    image: '/images/services/smart-ai-solutions.jpg',
    description:
      "We design and build practical AI features, from chatbots and workflow automation to recommendations, document processing and predictive analytics, that solve real business problems and fit into the products you already run.",
    detail:
      "Whether it's a smart assistant for your customers, a recommendation engine or a dashboard that forecasts demand, we integrate AI into your website or app using proven tools such as OpenAI APIs, TensorFlow and LangChain, and keep it simple to use and easy to maintain.",
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
    image: '/images/services/android-app-development.jpg',
    description:
      "We build fast, polished Android apps with Kotlin and cross-platform tools, from the first idea to your Google Play launch, adding AI features such as smart recommendations, image recognition and voice where they genuinely help your users.",
    detail:
      "Our Android work covers clean interfaces, offline support, push notifications, secure logins and payments, plus on-device or cloud AI using TensorFlow Lite and similar tools, all tested on a range of devices before release.",
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
    image: '/images/services/ios-app-development.jpg',
    description:
      "We build smooth, native-feeling iPhone and iPad apps with Swift and SwiftUI, from design to App Store launch, with AI features such as smart assistants, text and image understanding and personalization where they add value.",
    detail:
      "We use Apple's Core ML, Vision and Create ML frameworks together with cloud AI services to add features like document scanning, smart search and predictive insights, while following Apple's design and privacy guidelines.",
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
    image: '/images/services/website-development.jpg',
    description:
      "Modern, fast and responsive websites and web apps built with Next.js and React, designed to look sharp on every device, rank well in search and turn visitors into customers.",
    detail:
      "We focus on speed, clean design, accessibility and SEO from day one, and can add AI chatbots, smart search and secure back ends as your product grows.",
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
    image: '/images/services/app-ui-ux-designing.jpg',
    description:
      "We design clear, intuitive app and website interfaces, from wireframes and prototypes to final visuals, so your product is easy to use and enjoyable. We can also use AI-assisted tools to speed up research and explore design ideas.",
    detail:
      "Our process covers user flows, wireframes, interactive prototypes in Figma, usability feedback and a design system your developers can build from.",
    relatedApps: [],
  },
  {
    id: 'app-testing-services',
    slug: 'app-testing-services',
    title: 'App Testing Services',
    accent: '#10b981',
    image: '/images/services/app-testing-services.jpg',
    description:
      "We test websites and mobile apps to catch bugs before your users do, combining manual testing with automated checks, and using AI-assisted tools where they speed up regression testing.",
    detail:
      "Our testing covers functionality, usability, performance, compatibility across devices and browsers, and security basics, with clear bug reports and retesting after every fix.",
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
            Pick the one closest to your problem, or combine them. We add AI only where it genuinely helps.
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
