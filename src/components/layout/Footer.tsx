'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Building2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      data-no-fluid="true"
      className="bg-[#111113] w-full text-white relative z-30 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-[clamp(16px,4vw,64px)] pt-[48px] md:pt-[64px] lg:pt-[80px] pb-[0px]">
        {/* Main Footer Flex / Grid Matching Quantum4U */}
        <div className="flex flex-col lg:flex-row gap-[36px] md:gap-[48px] lg:gap-[80px]">
          
          {/* Column 1: Brand Info & Description */}
          <div className="flex flex-col gap-[18px] md:gap-[24px] lg:max-w-[320px] shrink-0">
            <Link href="/" className="no-underline inline-block group">
              <div className="h-[32px] md:h-[36px] w-[180px] relative transition-transform duration-200 group-hover:opacity-90">
                <Image
                  src="/images/yevqora-logo-horizontal-white.png"
                  alt="Yevqora Technologies Pvt. Ltd."
                  fill
                  className="object-contain object-left pointer-events-none"
                />
              </div>
            </Link>
            <p className="font-['Onest',sans-serif] font-normal text-[13px] md:text-[14px] text-white/55 leading-[22px] md:leading-[24px] m-0 max-w-[440px]">
              Award-winning AI, cloud orchestration, web and mobile application engineering studio. Building high-performance digital platforms used by 100M+ users worldwide.
            </p>
          </div>

          {/* Middle Nav Columns: Company, Services, Legal */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-x-[20px] gap-y-[28px] md:gap-x-[32px] md:gap-y-[32px] lg:gap-[48px]">
            
            {/* Company Column */}
            <div>
              <div className="font-['Onest',sans-serif] font-semibold text-[11px] md:text-[13px] text-white/40 tracking-[1.2px] md:tracking-[1.5px] uppercase mb-[14px] md:mb-[20px]">
                Company
              </div>
              <div className="flex flex-col gap-[10px] md:gap-[12px]">
                <Link
                  href="/"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Services
                </Link>
                <Link
                  href="/solutions"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Our Apps
                </Link>
                <Link
                  href="/solutions"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Services Column (with Website Development) */}
            <div>
              <div className="font-['Onest',sans-serif] font-semibold text-[11px] md:text-[13px] text-white/40 tracking-[1.2px] md:tracking-[1.5px] uppercase mb-[14px] md:mb-[20px]">
                Services
              </div>
              <div className="flex flex-col gap-[10px] md:gap-[12px]">
                <Link
                  href="/services/app-web-dev"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Android Development
                </Link>
                <Link
                  href="/services/app-web-dev"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  iOS Development
                </Link>
                <Link
                  href="/services/app-web-dev"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Website Development
                </Link>
                <Link
                  href="/services/ai-data"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Smart AI Solutions
                </Link>
                <Link
                  href="/services"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  UI/UX Designing
                </Link>
                <Link
                  href="/services/cloud-orchestration"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Enterprise Cloud
                </Link>
                <Link
                  href="/services"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  App Testing
                </Link>
              </div>
            </div>

            {/* Legal Column */}
            <div>
              <div className="font-['Onest',sans-serif] font-semibold text-[11px] md:text-[13px] text-white/40 tracking-[1.2px] md:tracking-[1.5px] uppercase mb-[14px] md:mb-[20px]">
                Legal
              </div>
              <div className="flex flex-col gap-[10px] md:gap-[12px]">
                <Link
                  href="/about"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/about"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/about"
                  className="font-['Onest',sans-serif] font-normal text-[13.5px] md:text-[14px] text-white/65 no-underline hover:text-white active:text-white transition-colors py-[2px]"
                >
                  EULA
                </Link>
              </div>
            </div>

          </div>

          {/* Column 4: Contact */}
          <div className="shrink-0 lg:max-w-[240px]">
            <div className="font-['Onest',sans-serif] font-semibold text-[11px] md:text-[13px] text-white/40 tracking-[1.2px] md:tracking-[1.5px] uppercase mb-[14px] md:mb-[20px]">
              Contact
            </div>
            <div className="flex flex-col gap-[12px] md:gap-[14px]">
              {/* Address */}
              <div className="flex gap-[10px] items-start">
                <MapPin className="shrink-0 mt-[3px] text-white/35 w-[14px] h-[14px]" />
                <span className="font-['Onest',sans-serif] font-normal text-[13px] text-white/55 leading-[20px]">
                  Cyber City, Tech Park, Gurgaon, India, 122002
                </span>
              </div>

              {/* Email */}
              <a
                href="mailto:contact@yevqora.com"
                className="flex gap-[10px] items-center no-underline group min-h-[24px] -my-[2px] py-[2px]"
              >
                <Mail className="shrink-0 text-white/35 group-hover:text-white/60 transition-colors w-[14px] h-[14px]" />
                <span className="font-['Onest',sans-serif] font-normal text-[13px] text-white/55 group-hover:text-white active:text-white transition-colors break-all">
                  contact@yevqora.com
                </span>
              </a>

              {/* Corporate Registration / CIN */}
              <div className="flex gap-[10px] items-center">
                <Building2 className="shrink-0 text-white/35 w-[14px] h-[14px]" />
                <span className="font-['Onest',sans-serif] font-normal text-[12px] text-white/35">
                  CIN: U72900HR2023PTC112345
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/[0.06] mt-[36px] md:mt-[56px] lg:mt-[64px]">
          <div className="max-w-[1440px] mx-auto py-[18px] md:py-[20px] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-[6px] md:gap-[12px] text-center sm:text-left">
            <div className="font-['Onest',sans-serif] font-normal text-[11.5px] md:text-[12px] text-white/35">
              &copy; {new Date().getFullYear()} Copyright Yevqora Technologies Pvt. Ltd. All rights reserved.
            </div>
            <div className="hidden sm:block font-['Onest',sans-serif] font-normal text-[12px] text-white/25">
              Yevqora Technologies Pvt. Ltd.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
