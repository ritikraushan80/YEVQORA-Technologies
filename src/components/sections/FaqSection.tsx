'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FaqItem } from '@/types';

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What services does Yevqora Technologies offer?',
    answer:
      'We build AI-powered websites, Android and iOS mobile apps, and custom AI solutions, along with UI/UX design and app testing, for businesses in every industry.',
  },
  {
    id: 'faq-2',
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope. A website or small app can take a few weeks, while larger AI-driven platforms take longer. After a short discovery call we share a clear timeline and milestones.',
  },
  {
    id: 'faq-3',
    question: 'Which industries do you work with?',
    answer:
      'We work across healthcare, fintech, e-commerce, education, logistics, sports and more, tailoring each solution to the needs of the business.',
  },
  {
    id: 'faq-4',
    question: 'How do I get started with a project?',
    answer:
      'Send us a message through the contact form with a short description of your idea. We will respond within 24 hours to schedule a discussion and prepare a quote.',
  },
  {
    id: 'faq-5',
    question: 'Do you provide support after launch?',
    answer:
      'Yes. We offer maintenance, updates and ongoing support after launch so your product keeps performing as your business grows.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-[clamp(56px,7vw,100px)] relative bg-transparent font-['Onest',sans-serif]">
      <div className="max-w-[1000px] mx-auto px-[clamp(20px,4vw,64px)] w-full">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-[48px]">
          <div className="font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400">
            Frequently Asked Questions
          </div>
          <h2 className="font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white m-0">
            Got Questions? We Have Answers.
          </h2>
          <p className="font-normal text-[15.5px] text-[#7d7d7d] dark:text-zinc-400 mt-2 max-w-lg mx-auto">
            Everything you need to know about our services, process and how to get started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-[14px]">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-[22px] bg-[#f7f8fa] dark:bg-[#151722] border border-[#eee] dark:border-zinc-800 transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-[22px] sm:p-[26px] text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-[16.5px] sm:text-[18px] font-bold text-[#111113] dark:text-white">
                    {faq.question}
                  </span>
                  <div className="w-[32px] h-[32px] rounded-[10px] bg-white dark:bg-zinc-800 border border-[#eee] dark:border-zinc-700 flex items-center justify-center shrink-0 text-[#111113] dark:text-white shadow-sm">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-[22px] sm:px-[26px] pb-[24px] pt-1 text-[14.5px] sm:text-[15px] text-[#7d7d7d] dark:text-zinc-300 leading-[25px] border-t border-[#eee] dark:border-zinc-800/60 mt-1">
                    {faq.answer}
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
