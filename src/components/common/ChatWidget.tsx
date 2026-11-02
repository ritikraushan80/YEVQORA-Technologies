'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: number;
  from: 'bot' | 'user';
  text: string;
  link?: { label: string; href: string };
}

interface Reply {
  keywords: string[];
  text: string;
  link?: { label: string; href: string };
}

/* Simple rule-based answers. Swap `getReply` for a call to your AI backend when you have one. */
const replies: Reply[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
    text: 'Hi there! 👋 I can tell you about our services, how we work, or help you get in touch with the team. What would you like to know?',
  },
  {
    keywords: ['thanks', 'thank you', 'thank', 'bye', 'goodbye', 'great', 'awesome', 'cool'],
    text: "You're welcome! If you have more questions, just ask. When you're ready to talk about your project, the Contact page is the quickest way to reach the team.",
    link: { label: 'Contact the team', href: '/contact' },
  },
  {
    keywords: ['industry', 'industries', 'sector', 'domain', 'which businesses'],
    text: 'We build for healthcare, fintech, e-commerce, education, logistics, real estate, media, agriculture and sports. If your industry is not listed, we can still help.',
    link: { label: 'See industries we build for', href: '/services' },
  },
  {
    keywords: ['sport', 'sports', 'athlete', 'fitness', 'match', 'player'],
    text: 'In sports we build tools for player performance tracking, match analytics, injury-risk insights and fan engagement apps.',
    link: { label: 'Talk about a sports project', href: '/contact' },
  },
  {
    keywords: ['health', 'healthcare', 'hospital', 'clinic', 'medical', 'patient'],
    text: 'For healthcare we build patient apps, appointment tools, health tracking and smart reminders, designed with privacy in mind.',
    link: { label: 'Talk about a healthcare project', href: '/contact' },
  },
  {
    keywords: ['fintech', 'finance', 'bank', 'payment', 'payments', 'investment'],
    text: 'For finance we build smart dashboards, spending insights, fraud alerts and AI-assisted customer support inside secure apps.',
    link: { label: 'Talk about a fintech project', href: '/contact' },
  },
  {
    keywords: ['ecommerce', 'e-commerce', 'shop', 'store', 'retail', 'online store', 'marketplace'],
    text: 'For e-commerce we build fast storefronts and apps with smart recommendations, dynamic pricing and inventory insights.',
    link: { label: 'Talk about an e-commerce project', href: '/contact' },
  },
  {
    keywords: ['education', 'edtech', 'learning', 'school', 'course', 'tutor', 'student'],
    text: 'For education we build learning apps with personalised paths, AI tutors and smart assessments.',
    link: { label: 'Talk about an education project', href: '/contact' },
  },
  {
    keywords: ['design', 'ui', 'ux', 'ui/ux', 'figma', 'prototype', 'wireframe'],
    text: 'Our UI/UX design covers user research, wireframes, clickable prototypes and polished screens, so you can see the product before we build it.',
    link: { label: 'View our services', href: '/services' },
  },
  {
    keywords: ['testing', 'test', 'qa', 'bug', 'quality'],
    text: 'We test every app and website before launch, covering functionality, devices, speed and security, so releases are smooth.',
    link: { label: 'View our services', href: '/services' },
  },
  {
    keywords: ['tech', 'technology', 'stack', 'framework', 'language', 'kotlin', 'swift', 'flutter', 'node', 'python', 'tools'],
    text: 'We use modern tools such as Next.js and React for the web, Kotlin and Swift for native mobile apps, and cross-platform options when they fit. We pick the stack that suits your project.',
    link: { label: 'Services overview', href: '/services' },
  },
  {
    keywords: ['process', 'how do you work', 'how it works', 'how we work', 'steps', 'workflow', 'approach', 'methodology', 'agile'],
    text: 'Our process is simple: 1) Discover your goals, 2) Design the experience, 3) Build in short iterations with regular demos, 4) Launch, 5) Support and improve.',
    link: { label: 'Start a conversation', href: '/contact' },
  },
  {
    keywords: ['support', 'maintenance', 'after launch', 'after delivery', 'update', 'updates', 'warranty'],
    text: 'We stay with you after launch for fixes, updates and improvements. We agree the support terms with you up front.',
    link: { label: 'Ask about support', href: '/contact' },
  },
  {
    keywords: ['startup', 'mvp', 'idea', 'new business', 'launch product'],
    text: 'Got an idea? We can help turn it into a working MVP quickly, then grow it with you as users arrive.',
    link: { label: 'Share your idea', href: '/contact' },
  },
  {
    keywords: ['portfolio', 'clients', 'case study', 'case studies', 'previous work', 'projects', 'references', 'experience'],
    text: "We're a young startup, so we're building our portfolio. We're happy to walk you through how we'd approach your project and share relevant examples on a call.",
    link: { label: 'Book a conversation', href: '/contact' },
  },
  {
    keywords: ['career', 'careers', 'job', 'jobs', 'hiring', 'vacancy', 'internship', 'work with us', 'join'],
    text: 'Interested in joining us? Send your details to contact@yevqora.com and tell us about your skills. We would love to hear from you.',
    link: { label: 'Contact us', href: '/contact' },
  },
  {
    keywords: ['hours', 'open', 'working hours', 'time zone', 'timezone', 'available', 'availability'],
    text: 'We work Monday to Friday, 10:00 AM to 7:00 PM IST. You can message us any time and we will reply during working hours.',
    link: { label: 'Send a message', href: '/contact' },
  },
  {
    keywords: ['security', 'secure', 'safe', 'confidential', 'nda', 'data protection'],
    text: 'We take security and confidentiality seriously and are happy to sign an NDA before you share project details.',
    link: { label: 'Read our Privacy Policy', href: '/privacy' },
  },
  {
    keywords: ['privacy', 'policy', 'data', 'cookies', 'gdpr'],
    text: 'You can read how we handle personal information in our Privacy Policy.',
    link: { label: 'Privacy Policy', href: '/privacy' },
  },
  {
    keywords: ['terms', 'conditions', 'agreement', 'contract', 'refund', 'ownership'],
    text: 'Our general website and service terms are published on our Terms & Conditions page. Project-specific terms are agreed in writing before work begins.',
    link: { label: 'Terms & Conditions', href: '/terms' },
  },
  {
    keywords: ['free', 'consultation', 'demo', 'meeting', 'discovery call', 'schedule', 'book'],
    text: 'Yes, you can start with a conversation about your goals. Tell us about your project on the contact page and we will arrange a call.',
    link: { label: 'Book a conversation', href: '/contact' },
  },
  {
    keywords: ['linkedin', 'twitter', 'instagram', 'facebook', 'youtube', 'social', 'follow'],
    text: 'You can find us on our social channels using the icons on the right side of the page and in the footer.',
  },
  {
    keywords: ['where', 'noida', 'india', 'usa', 'international', 'overseas', 'remote'],
    text: 'We are based in Noida, Uttar Pradesh, India, and work with clients remotely across time zones.',
    link: { label: 'Contact us', href: '/contact' },
  },
  {
    keywords: ['service', 'offer', 'what do you do', 'what you do'],
    text: 'We build AI-powered solutions, Android and iOS mobile apps, and modern websites, for businesses in healthcare, fintech, e-commerce, education, sports and more.',
    link: { label: 'View all services', href: '/services' },
  },
  {
    keywords: ['ai', 'chatbot', 'automation', 'machine learning', 'llm'],
    text: 'Our AI work covers chatbots, workflow automation, predictive analytics and smart features added to your website or app.',
    link: { label: 'Explore AI solutions', href: '/services#service-smart-ai-solutions' },
  },
  {
    keywords: ['mobile', 'android', 'ios', 'app'],
    text: 'We design and build fast, polished Android and iOS apps, from the first idea through to App Store and Google Play launch.',
    link: { label: 'Mobile app development', href: '/services#service-android-app-development' },
  },
  {
    keywords: ['web', 'website', 'site', 'next', 'react'],
    text: 'We build modern, quick-loading websites and web platforms that look sharp on every device and are ready for search engines.',
    link: { label: 'Website development', href: '/services#service-website-development' },
  },
  {
    keywords: ['price', 'pricing', 'cost', 'quote', 'budget', 'charge', 'how much'],
    text: 'Every project is different, so we prepare a custom quote after a short conversation about your goals. Share your idea and we will get back to you.',
    link: { label: 'Request a quote', href: '/contact' },
  },
  {
    keywords: ['time', 'timeline', 'long', 'duration', 'deadline', 'how soon'],
    text: 'Timelines depend on scope. A website is usually quicker than a full mobile app. We agree a clear schedule with you before work starts.',
    link: { label: 'Discuss your timeline', href: '/contact' },
  },
  {
    keywords: ['contact', 'email', 'phone', 'address', 'office', 'location', 'reach', 'talk', 'call', 'human', 'team'],
    text: 'You can reach us at contact@yevqora.com or visit our Noida, Uttar Pradesh office. The contact form is the quickest way to start.',
    link: { label: 'Open contact page', href: '/contact' },
  },
  {
    keywords: ['about', 'who are you', 'company', 'startup', 'founder'],
    text: 'Yevqora Technologies is an agile product engineering startup based in Noida, building intelligent digital experiences.',
    link: { label: 'About us', href: '/about' },
  },
];

const fallback: Reply = {
  keywords: [],
  text: "I'm an automated assistant, so I may not have the answer to that. The team can help directly. Send them a message and they will reply.",
  link: { label: 'Contact the team', href: '/contact' },
};

const getReply = (input: string): Reply => {
  const q = ` ${input.toLowerCase().replace(/[^a-z0-9\s]/g, ' ')} `;
  return replies.find((r) => r.keywords.some((k) => q.includes(` ${k} `) || (k.length > 3 && q.includes(k)))) ?? fallback;
};

const quickReplies = ['Our services', 'AI solutions', 'Industries', 'How we work', 'Get a quote', 'Contact us'];

export const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      from: 'bot',
      text: "Hi, I'm the Yevqora assistant. Ask me about our AI, mobile app and website services, or tap an option below.",
    },
  ]);
  const idRef = useRef(1);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    const userMsg: ChatMessage = { id: idRef.current++, from: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);
    const reply = getReply(text);
    timerRef.current = setTimeout(() => {
      setMessages((m) => [...m, { id: idRef.current++, from: 'bot', text: reply.text, link: reply.link }]);
      setTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-[20px] right-[20px] md:bottom-[28px] md:right-[28px] z-50 font-['Onest',sans-serif]" data-no-fluid="true">
      {/* Chat panel */}
      <div
        role="dialog"
        aria-label="Chat with Yevqora assistant"
        aria-hidden={!open}
        className={`absolute bottom-[72px] right-0 w-[min(380px,calc(100vw-40px))] h-[min(540px,calc(100svh-120px))] flex flex-col rounded-[22px] bg-white border border-[#e6e9ee] shadow-[0_24px_70px_-12px_rgba(15,23,42,0.35)] overflow-hidden origin-bottom-right transition-all duration-300 ${
          open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-3 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="relative flex items-center gap-[12px] px-[18px] py-[16px] bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-500 text-white">
          <div className="size-[40px] rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-[15px] leading-tight">Yevqora Assistant</div>
            <div className="flex items-center gap-[6px] text-[12px] text-white/80">
              <span className="size-[7px] rounded-full bg-emerald-300 animate-pulse" />
              Online · Automated replies
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="size-[32px] rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div ref={listRef} className="flex-1 overflow-y-auto px-[16px] py-[16px] flex flex-col gap-[12px] bg-[#f7f8fb]">
          {messages.map((m) => (
            <div key={m.id} className={`flex flex-col gap-[6px] ${m.from === 'user' ? 'items-end' : 'items-start'}`}>
              <div
                className={`max-w-[85%] px-[14px] py-[10px] text-[14px] leading-[21px] ${
                  m.from === 'user'
                    ? 'rounded-[16px] rounded-br-[4px] bg-gradient-to-br from-indigo-600 to-violet-600 text-white'
                    : 'rounded-[16px] rounded-bl-[4px] bg-white border border-[#e9ecf1] text-[#2a3340]'
                }`}
              >
                {m.text}
              </div>
              {m.link && (
                <Link
                  href={m.link.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-indigo-600 hover:text-indigo-700 no-underline px-[12px] py-[6px] rounded-full bg-indigo-50 border border-indigo-100"
                >
                  {m.link.label} →
                </Link>
              )}
            </div>
          ))}

          {typing && (
            <div className="self-start flex items-center gap-[4px] px-[14px] py-[12px] rounded-[16px] rounded-bl-[4px] bg-white border border-[#e9ecf1]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="size-[6px] rounded-full bg-[#9aa3b2] animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          )}

          {messages.length === 1 && !typing && (
            <div className="flex flex-wrap gap-[8px] pt-[4px]">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="px-[12px] py-[7px] rounded-full text-[13px] font-medium text-indigo-700 bg-white border border-indigo-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-[8px] px-[12px] py-[12px] bg-white border-t border-[#eceef3]"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            aria-label="Type your message"
            maxLength={300}
            className="flex-1 h-[42px] rounded-full bg-[#f2f4f8] px-[16px] text-[14px] text-[#111113] placeholder:text-[#9aa3b2] outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim() || typing}
            className="size-[42px] shrink-0 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition-transform cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Launcher button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="relative size-[58px] rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-500 text-white flex items-center justify-center shadow-[0_14px_34px_-6px_rgba(99,102,241,0.65)] hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-indigo-500/40 animate-ping" />}
        <span className="relative">{open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}</span>
      </button>
    </div>
  );
};
