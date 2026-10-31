'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FaqItem } from '@/types';

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What does the typical onboarding migration timeline look like?',
    answer:
      'Depending on node volume and multi-cloud dependencies, standard migrations are modeled, staged, and fully deployed within 2 to 4 weeks with zero active systems downtime.',
  },
  {
    id: 'faq-2',
    question: 'Are Yevqora platforms fully compliant with SOC2 and HIPAA standards?',
    answer:
      'Yes, both our FinTech Core and HealthHub platforms are pre-certified and undergo continuous automated posture audits mapped instantly to security directives.',
  },
  {
    id: 'faq-3',
    question: 'Can we run Yevqora systems on our own bare-metal servers?',
    answer:
      'Absolutely. Our Orchestration architecture deployment natively hooks into physical nodes as easily as standard public cloud nodes with secure mutual TLS protection.',
  },
  {
    id: 'faq-4',
    question: 'What SLA response guarantees do you provide for enterprise support?',
    answer:
      'We provide 24/7 dedicated engineering support with sub-15 minute response SLAs for tier-1 critical inquiries and direct access to senior solution architects.',
  },
  {
    id: 'faq-5',
    question: 'How do you ensure zero downtime during high-load app migrations?',
    answer:
      'We use progressive blue-green routing and automated traffic mirroring. Real workloads are validated in staging before production DNS pointers shift with sub-millisecond failover.',
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
            Everything you need to know about our engineering processes, enterprise SLAs, and security standards.
          </p>
        </div>

        {/* Quantum4U Style Accordion List */}
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
