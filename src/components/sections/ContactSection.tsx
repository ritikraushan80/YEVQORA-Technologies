'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Building, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  hideHeader?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ hideHeader = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-transparent py-[clamp(56px,7vw,100px)] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,64px)] w-full">
        
        {/* Optional Header */}
        {!hideHeader && (
          <div className="flex flex-col items-center text-center mb-[48px]">
            <div className="font-['Onest',sans-serif] font-semibold text-[13.5px] tracking-[2px] uppercase text-[#7d7d7d] dark:text-zinc-400 mb-[12px]">
              Contact Us
            </div>
            <h2 className="font-['Onest',sans-serif] font-bold text-[28px] sm:text-[38px] md:text-[46px] leading-[1.12] tracking-[-0.02em] text-[#111113] dark:text-white m-0">
              Let&apos;s Build Something Great Together
            </h2>
          </div>
        )}

        {/* Split Quantum4U Card */}
        <div className="flex flex-col md:flex-row items-stretch w-full overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0px_10px_60px_rgba(0,0,0,0.12)] border border-[#eee] dark:border-zinc-800">
          
          {/* Left Column: Deep Obsidian Info Panel */}
          <div className="bg-[#111113] text-white flex flex-col justify-between p-[28px] sm:p-[36px] md:p-[48px] md:w-[420px] shrink-0">
            <div>
              <div className="font-['Onest',sans-serif] font-semibold text-[13.5px] tracking-[1.5px] uppercase text-white/40 mb-[14px]">
                Get In Touch
              </div>
              <h3 className="font-['Onest',sans-serif] font-bold text-[26px] md:text-[34px] leading-[1.15] tracking-[-0.01em] text-white mb-[12px] m-0">
                Let&apos;s Build Something Great
              </h3>
              <p className="font-['Onest',sans-serif] font-normal text-[14.5px] md:text-[15.5px] leading-[1.65] text-white/55 m-0">
                Have a project or migration in mind? Fill out the form and our technical architects will respond within 24 hours.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="flex flex-col gap-[24px] mt-[40px]">
              
              {/* Office */}
              <div className="flex gap-[16px] items-start">
                <div className="w-[42px] h-[42px] rounded-[12px] bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0 mt-[2px] text-white/70">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="font-['Onest',sans-serif] font-semibold text-[14.5px] text-white mb-[3px]">
                    Office
                  </div>
                  <div className="font-['Onest',sans-serif] font-normal text-[13.5px] text-white/50 leading-[20px]">
                    Yevqora Technologies Pvt. Ltd.<br />
                    Cyber City, Tech Park, Gurgaon, India
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-[16px] items-start">
                <div className="w-[42px] h-[42px] rounded-[12px] bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0 mt-[2px] text-white/70">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <div className="font-['Onest',sans-serif] font-semibold text-[14.5px] text-white mb-[3px]">
                    Email
                  </div>
                  <a
                    href="mailto:contact@yevqora.com"
                    className="font-['Onest',sans-serif] font-normal text-[13.5px] text-white/50 hover:text-white transition-colors"
                  >
                    contact@yevqora.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-[16px] items-start">
                <div className="w-[42px] h-[42px] rounded-[12px] bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0 mt-[2px] text-white/70">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-['Onest',sans-serif] font-semibold text-[14.5px] text-white mb-[3px]">
                    Working Hours
                  </div>
                  <div className="font-['Onest',sans-serif] font-normal text-[13.5px] text-white/50 leading-[20px]">
                    Monday &ndash; Friday: 10:00 AM &ndash; 7:00 PM IST
                  </div>
                </div>
              </div>

              {/* Enterprise Reg */}
              <div className="flex gap-[16px] items-start">
                <div className="w-[42px] h-[42px] rounded-[12px] bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0 mt-[2px] text-white/70">
                  <Building className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="font-['Onest',sans-serif] font-semibold text-[14.5px] text-white mb-[3px]">
                    Enterprise Code
                  </div>
                  <div className="font-['Onest',sans-serif] font-normal text-[13.5px] text-white/50">
                    CIN: U72900HR2023PTC112345
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Clean Light Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#151722] flex-1 flex flex-col gap-[20px] p-[28px] sm:p-[36px] md:p-[48px]"
          >
            <div className="font-['Onest',sans-serif] font-bold text-[22px] sm:text-[24px] text-[#111113] dark:text-white mb-[4px]">
              Send us a message
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-['Onest',sans-serif] font-bold text-xl text-[#111113] dark:text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-[#7d7d7d] dark:text-zinc-400 max-w-sm">
                  Thank you for reaching out. One of our lead architects will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-pill btn-pill-dark text-xs px-5 py-2 mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Onest',sans-serif] font-medium text-[13px] text-[#7d7d7d] dark:text-zinc-400">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="font-['Onest',sans-serif] text-[15px] text-[#111113] dark:text-white px-[18px] py-[13px] rounded-[12px] bg-[#f7f8fa] dark:bg-zinc-800/60 border border-[#eee] dark:border-zinc-700/80 outline-none focus:border-[#111113] dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-zinc-800 transition-all placeholder:text-[#bbb] dark:placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Onest',sans-serif] font-medium text-[13px] text-[#7d7d7d] dark:text-zinc-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="font-['Onest',sans-serif] text-[15px] text-[#111113] dark:text-white px-[18px] py-[13px] rounded-[12px] bg-[#f7f8fa] dark:bg-zinc-800/60 border border-[#eee] dark:border-zinc-700/80 outline-none focus:border-[#111113] dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-zinc-800 transition-all placeholder:text-[#bbb] dark:placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Onest',sans-serif] font-medium text-[13px] text-[#7d7d7d] dark:text-zinc-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="font-['Onest',sans-serif] text-[15px] text-[#111113] dark:text-white px-[18px] py-[13px] rounded-[12px] bg-[#f7f8fa] dark:bg-zinc-800/60 border border-[#eee] dark:border-zinc-700/80 outline-none focus:border-[#111113] dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-zinc-800 transition-all placeholder:text-[#bbb] dark:placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Onest',sans-serif] font-medium text-[13px] text-[#7d7d7d] dark:text-zinc-400">
                      Purpose of Connecting *
                    </label>
                    <select
                      required
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="font-['Onest',sans-serif] text-[15px] text-[#111113] dark:text-white px-[18px] py-[13px] rounded-[12px] bg-[#f7f8fa] dark:bg-zinc-800/60 border border-[#eee] dark:border-zinc-700/80 outline-none focus:border-[#111113] dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-zinc-800 transition-all cursor-pointer"
                    >
                      <option value="">Select purpose</option>
                      <option value="AI / ML Solutions">AI / ML Solutions</option>
                      <option value="Android App Development">Android App Development</option>
                      <option value="iOS App Development">iOS App Development</option>
                      <option value="Enterprise Cloud Orchestration">Enterprise Cloud Orchestration</option>
                      <option value="Cybersecurity & SOC2 Audit">Cybersecurity & SOC2 Audit</option>
                      <option value="Strategic Partnership">Strategic Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label className="font-['Onest',sans-serif] font-medium text-[13px] text-[#7d7d7d] dark:text-zinc-400">
                    Project Specs / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="font-['Onest',sans-serif] text-[15px] text-[#111113] dark:text-white px-[18px] py-[14px] rounded-[12px] bg-[#f7f8fa] dark:bg-zinc-800/60 border border-[#eee] dark:border-zinc-700/80 outline-none focus:border-[#111113] dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-zinc-800 transition-all resize-none placeholder:text-[#bbb] dark:placeholder:text-zinc-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-pill btn-pill-dark text-[14px] px-[32px] py-[12px] shadow-lg group w-full sm:w-auto"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </>
            )}
          </form>

        </div>

      </div>
    </section>
  );
};
