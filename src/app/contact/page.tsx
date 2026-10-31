'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeaderHero } from '@/components/common/PageHeaderHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { FaqSection } from '@/components/sections/FaqSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent font-['Onest',sans-serif]">
      {/* Navigation */}
      <Navbar />

      {/* Header Hero */}
      <PageHeaderHero
        badgeText=""
        title="Let's Build Your Next Intelligent Product"
        description="Have an idea for an AI-powered website or mobile app, or need a customized quote? Tell us about your project and our team will get back to you."
        imageSrc="/images/hero-contact-dark.jpg"
        overlayOpacity={0.3}
        imageAlt="A hand holding a phone above a laptop, with phone, chat, email and @ contact icons"
      />

      {/* Split Contact Card (Obsidian Left + Light Right Form) */}
      <ContactSection hideHeader={true} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
