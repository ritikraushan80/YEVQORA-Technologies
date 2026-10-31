'use client';

import React from 'react';
import {
  Brain,
  MessageSquare,
  Eye,
  TrendingUp,
  Sparkles,
  Bot,
  Database,
  Compass,
} from 'lucide-react';

interface CapabilityItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const capabilities: CapabilityItem[] = [
  {
    title: 'On-Device ML',
    desc: 'Deploy TensorFlow Lite and Core ML models that run locally on mobile devices for real-time AI.',
    icon: <Brain className="w-6 h-6 text-[#111113]" />,
  },
  {
    title: 'NLP & Chatbots',
    desc: 'Build conversational AI, voice assistants, and intelligent chatbots powered by LLMs and custom NLP.',
    icon: <MessageSquare className="w-6 h-6 text-[#1f2732]" />,
  },
  {
    title: 'Computer Vision',
    desc: 'Image recognition, object detection, OCR, and real-time video analysis for mobile and web apps.',
    icon: <Eye className="w-6 h-6 text-[#333333]" />,
  },
  {
    title: 'Predictive Analytics',
    desc: 'ML-powered forecasting, user behaviour prediction, and intelligent recommendation engines.',
    icon: <TrendingUp className="w-6 h-6 text-[#444444]" />,
  },
  {
    title: 'Generative AI',
    desc: 'Integrate GPT, Gemini, and custom generative models for content creation, code, and creative tools.',
    icon: <Sparkles className="w-6 h-6 text-[#111113]" />,
  },
  {
    title: 'AI Automation',
    desc: 'Intelligent workflow automation, smart document processing, and AI-driven business operations.',
    icon: <Bot className="w-6 h-6 text-[#1f2732]" />,
  },
  {
    title: 'Data Pipelines',
    desc: 'Build scalable data infrastructure for training, fine-tuning, and deploying ML models in production.',
    icon: <Database className="w-6 h-6 text-[#333333]" />,
  },
  {
    title: 'AI Strategy',
    desc: 'End-to-end AI roadmap, feasibility analysis, and technology consulting for AI-first products.',
    icon: <Compass className="w-6 h-6 text-[#444444]" />,
  },
];

export const AboutCapabilitiesSection: React.FC = () => {
  return (
    <section className="bg-transparent border-t border-[#ececec] font-['Onest',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] py-[clamp(58px,7.2vw,96px)]">
        {/* Section Header */}
        <div className="max-w-[760px] mb-[clamp(40px,5vw,64px)]">
          <div className="font-semibold text-[12px] text-[#7d7d7d] tracking-[2px] uppercase mb-[16px]">
            Capabilities
          </div>
          <h2 className="font-['Onest',sans-serif] font-semibold text-[24px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-[#111113]">
            We are perfect in
          </h2>
        </div>

        {/* 4-Column Technical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[20px]">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[16px] p-[24px] md:p-[28px] border border-[#eef0f3] h-full hover:border-[#111113]/15 hover:-translate-y-[2px] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
            >
              <div className="w-[56px] h-[56px] rounded-[16px] bg-[#f7f8fa] border border-[#eee] flex items-center justify-center mx-auto mb-[16px]">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[15px] text-[#111113] mb-[8px] leading-[1.3]">
                {item.title}
              </h3>
              <p className="font-normal text-[13px] text-[#7d7d7d] leading-[21px] m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
