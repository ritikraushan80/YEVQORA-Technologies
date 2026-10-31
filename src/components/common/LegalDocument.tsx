'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeaderHero } from '@/components/common/PageHeaderHero';

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalDocumentProps {
  badgeText: string;
  title: string;
  description: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
  related: { href: string; label: string };
}

export const LegalDocument: React.FC<LegalDocumentProps> = ({
  badgeText,
  title,
  description,
  intro,
  lastUpdated,
  sections,
  related,
}) => (
  <main className="min-h-screen relative overflow-x-hidden bg-transparent font-['Onest',sans-serif]">
    <Navbar />

    <PageHeaderHero
      badgeText={badgeText}
      title={title}
      description={description}
      imageSrc="/images/hero-about.png"
      imageAlt={`${title} - Yevqora Technologies`}
    />

    <section className="bg-transparent">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[clamp(48px,6vw,96px)]">
        <p className="font-['Onest',sans-serif] text-[14px] text-[#7d7d7d] mb-[8px]">Last updated: {lastUpdated}</p>
        <p className="font-['Onest',sans-serif] text-[15px] md:text-[16px] leading-[1.7] text-[#5a6470] mb-[36px] text-justify">
          {intro}
        </p>

        <div className="flex flex-col gap-[28px]">
          {sections.map((s, idx) => (
            <div key={s.title}>
              <h2 className="font-['Onest',sans-serif] font-semibold text-[18px] md:text-[20px] text-[#111113] mb-[10px]">
                {idx + 1}. {s.title}
              </h2>
              {s.paragraphs?.map((p) => (
                <p
                  key={p}
                  className="font-['Onest',sans-serif] text-[15px] leading-[1.75] text-[#5a6470] mb-[10px] last:mb-0 text-justify"
                >
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="list-disc pl-[20px] flex flex-col gap-[8px] m-0">
                  {s.bullets.map((b) => (
                    <li key={b} className="font-['Onest',sans-serif] text-[15px] leading-[1.7] text-[#5a6470] text-justify">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-[56px] md:mt-[72px] rounded-[20px] bg-brand-dark text-white p-[28px] md:p-[36px]">
          <h3 className="font-semibold text-[20px] mb-[8px]">Questions about this page?</h3>
          <p className="text-[15px] leading-[1.7] text-white/65 mb-[16px]">
            Yevqora Technologies Pvt. Ltd., Noida, Uttar Pradesh, India, 201301
            <br />
            Email:{' '}
            <a href="mailto:contact@yevqora.com" className="text-white underline underline-offset-4">
              contact@yevqora.com
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-[16px]">
            <Link href="/contact" className="btn-pill btn-pill-white text-[14px] px-[24px] py-[10px]">
              Contact Us
            </Link>
            <Link href={related.href} className="text-[14px] text-white/70 hover:text-white no-underline">
              {related.label} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);
