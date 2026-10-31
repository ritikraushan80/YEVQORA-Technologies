'use client';

import React from 'react';
import { LegalDocument, LegalSection } from '@/components/common/LegalDocument';

const sections: LegalSection[] = [
  {
    title: 'Introduction',
    paragraphs: [
      'Yevqora Technologies Pvt. Ltd. respects your privacy. This Privacy Policy explains what personal information we collect, how we use it and the choices you have, in line with applicable Indian laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.',
    ],
  },
  {
    title: 'Information We Collect',
    bullets: [
      'Information you give us: your name, email address, phone number, purpose of enquiry and message when you fill out our contact form or email us.',
      'Information collected automatically: technical data such as browser type, device information, pages visited and approximate location, collected through standard server logs and cookies.',
    ],
  },
  {
    title: 'How We Use Your Information',
    bullets: [
      'To respond to your enquiries and prepare quotes or proposals.',
      'To provide, maintain and improve our services and website.',
      'To communicate with you about projects, updates and support.',
      'To protect our website and comply with legal obligations.',
    ],
  },
  {
    title: 'Cookies',
    paragraphs: [
      'We use cookies and similar technologies to keep the website working properly and to understand how visitors use it. You can control or disable cookies in your browser settings, although some features may not work as intended.',
    ],
  },
  {
    title: 'Sharing of Information',
    paragraphs: [
      'We do not sell your personal information. We may share it with trusted service providers who help us operate our business (for example hosting and email services), and with authorities when required by law. These providers may use your information only to perform services for us.',
    ],
  },
  {
    title: 'Data Security and Retention',
    paragraphs: [
      'We use reasonable technical and organizational safeguards to protect your information. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security. We keep personal information only for as long as needed for the purposes described above or as required by law.',
    ],
  },
  {
    title: 'Your Rights',
    paragraphs: [
      'You may request access to, correction of, or deletion of your personal information, and you may withdraw your consent to our processing of it at any time. To make a request, email us at the address below.',
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      'Our website and services are not directed to children under 18, and we do not knowingly collect their personal information.',
    ],
  },
  {
    title: 'Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated "Last updated" date.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      badgeText=""
      title="Privacy Policy"
      description="Learn how Yevqora Technologies collects, uses and protects your personal information."
      intro="This Privacy Policy describes how Yevqora Technologies Pvt. Ltd. collects, uses and protects your personal information."
      lastUpdated="October 31, 2026"
      sections={sections}
      related={{ href: '/terms', label: 'Read our Terms & Conditions' }}
    />
  );
}
