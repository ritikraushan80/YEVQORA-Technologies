'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronRight, X, Menu } from 'lucide-react';

interface NavbarProps {
  onOpenPortal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        id="header-nav"
        data-no-fluid="true"
        className={`fixed top-0 left-0 z-50 flex h-[72px] items-center justify-center transition-all duration-300 w-full ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#f0f0f2] shadow-[0_2px_12px_rgba(0,0,0,0.06)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto w-full px-[clamp(20px,4vw,64px)]">
          {/* Desktop Grid Layout (Quantum4U 3-column architecture) */}
          <div className="hidden min-[1120px]:grid gap-x-[16px] grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)_minmax(0,0.38fr)] grid-rows-[42px] max-w-full w-full items-center">
            
            {/* Column 1: Logo */}
            <div className="col-1 flex items-center row-1 self-center shrink-0">
              <Link href="/" className="flex items-center no-underline group">
                <div className="h-[38px] md:h-[42px] w-[160px] md:w-[180px] relative transition-transform duration-200 group-hover:opacity-90">
                  <Image
                    src={scrolled ? '/images/yevqora-logo-horizontal.png' : '/images/yevqora-logo-horizontal-white.png'}
                    alt="Yevqora Technologies"
                    fill
                    className="object-contain object-left pointer-events-none transition-opacity duration-300"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Column 2: Navigation Links (Centered, clean Quantum4U spacing) */}
            <div className="col-2 flex items-center justify-center justify-self-center row-1 self-center shrink-0">
              <nav className="flex items-center justify-center gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`relative flex flex-col items-center gap-[6px] px-[18px] py-[9px] shrink-0 no-underline rounded-[8px] transition-all duration-200 ${
                        scrolled
                          ? isActive
                            ? 'text-[#111113] font-semibold'
                            : 'text-[#1f2732] hover:text-[#111113] hover:bg-black/5 font-normal'
                          : isActive
                            ? 'text-white font-semibold'
                            : 'text-white/80 hover:text-white hover:bg-white/10 font-normal'
                      }`}
                    >
                      <span className="font-['Onest',sans-serif] text-[15px] whitespace-nowrap leading-[1.5]">
                        {link.name}
                      </span>
                      {isActive && (
                        <span
                          className={`absolute bottom-[2px] h-[2px] rounded-full transition-all duration-300 ${
                            scrolled ? 'bg-[#111113]' : 'bg-white'
                          }`}
                          style={{ width: '60%', left: '20%' }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Column 3: Get In Touch Button (Pill button with reactive theme) */}
            <div className="col-3 flex items-center justify-self-end row-1 self-stretch shrink-0">
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-[8px] font-['Onest',sans-serif] font-semibold rounded-[9999px] no-underline whitespace-nowrap cursor-pointer transition-all duration-200 ease-out hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98] text-[13.5px] px-[24px] py-[10px] ${
                  scrolled
                    ? 'bg-[#111113] text-white border border-[#111113] hover:bg-black shadow-[0_2px_10px_rgba(17,17,19,0.15)]'
                    : 'bg-white text-[#111113] border border-white hover:bg-white/95 shadow-[0_2px_12px_rgba(255,255,255,0.2)]'
                }`}
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Mobile Bar */}
          <div className="flex min-[1120px]:hidden items-center justify-between w-full">
            <Link href="/" className="shrink-0 no-underline">
              <div className="h-[34px] w-[140px] relative">
                <Image
                  src={scrolled ? '/images/yevqora-logo-horizontal.png' : '/images/yevqora-logo-horizontal-white.png'}
                  alt="Yevqora Technologies"
                  fill
                  className="object-contain object-left pointer-events-none"
                  priority
                />
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className={`inline-flex h-[42px] w-[42px] items-center justify-center rounded-[10px] transition-colors -mr-[6px] ${
                scrolled
                  ? 'text-[#111113] hover:bg-black/5 active:bg-black/10'
                  : 'text-white hover:bg-white/10 active:bg-white/20'
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-[3px] z-[99] transition-opacity duration-300 min-[1120px]:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Slide-in Drawer */}
      <div
        data-no-fluid="true"
        className={`fixed top-0 right-0 h-[100dvh] max-h-screen w-[min(88vw,380px)] bg-white z-[100] shadow-[-12px_0_48px_rgba(15,23,42,0.15)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] min-[1120px]:hidden flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#f0f0f2] shrink-0">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="shrink-0 no-underline">
            <div className="h-[34px] w-[140px] relative">
              <Image
                src="/images/yevqora-logo-horizontal.png"
                alt="Yevqora Technologies"
                fill
                className="object-contain object-left pointer-events-none"
              />
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            type="button"
            className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#f7f8fa] hover:bg-[#eef0f3] text-[#111113] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex-1 overflow-y-auto px-[16px] py-[20px]">
          <div className="flex flex-col gap-[4px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group relative flex items-center justify-between gap-[12px] font-['Onest',sans-serif] text-[16px] py-[14px] px-[16px] rounded-[12px] no-underline transition-all duration-200 ${
                    isActive
                      ? 'text-[#111113] font-semibold bg-gradient-to-r from-[#111113]/[0.05] to-transparent'
                      : 'text-[#1f2732] font-normal hover:bg-[#f7f8fa]'
                  }`}
                >
                  <span className="flex items-center gap-[12px]">
                    {isActive && (
                      <span className="block h-[18px] w-[3px] rounded-full bg-[#111113]" aria-hidden="true" />
                    )}
                    <span>{link.name}</span>
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'text-[#111113] translate-x-0.5' : 'text-slate-400 group-hover:translate-x-1'
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-[20px] border-t border-[#f0f0f2] bg-[#f7f8fa]/50 shrink-0 space-y-3">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-[8px] font-['Onest',sans-serif] font-semibold rounded-[9999px] bg-[#111113] text-white hover:bg-black text-[14px] py-[12px] shadow-sm transition-all"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="text-center">
            <span className="text-[11px] text-slate-400 font-['Onest',sans-serif]">
              © {new Date().getFullYear()} Yevqora Technologies Pvt. Ltd.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
