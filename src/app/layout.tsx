import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeContext';
import { FluidCursor } from '@/components/effects/FluidCursor';
import { FloatingSocialBar } from '@/components/common/SocialLinks';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Yevqora Technologies | AI, Website & Mobile App Development in Noida',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Yevqora Technologies is a Noida-based startup building AI-powered websites and Android & iOS mobile apps for businesses in healthcare, e-commerce, fintech, education and more.',
  keywords: [
    'Yevqora Technologies',
    'AI development company',
    'mobile app development Noida',
    'website development Noida',
    'Android app development',
    'iOS app development',
    'AI chatbot development',
    'UI/UX design',
    'software company India',
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Yevqora Technologies | AI, Website & Mobile App Development',
    description:
      'AI-powered websites and mobile apps for businesses in every industry. Based in Noida, India.',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yevqora Technologies | AI, Website & Mobile App Development',
    description:
      'AI-powered websites and mobile apps for businesses in every industry. Based in Noida, India.',
    images: [OG_IMAGE],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/yevqora-logo-horizontal.png`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description:
    'Noida-based startup building AI-powered websites and Android & iOS mobile apps for businesses in every industry.',
  email: 'contact@yevqora.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201301',
    addressCountry: 'IN',
  },
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'sales', email: 'contact@yevqora.com', areaServed: 'Worldwide', availableLanguage: ['English', 'Hindi'] },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth light">
      <body suppressHydrationWarning className="antialiased min-h-screen bg-white text-slate-900 selection:bg-indigo-500 selection:text-white transition-colors duration-300 font-['Onest',sans-serif]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <FluidCursor />
          <FloatingSocialBar />
          <div id="app-root-content" className="relative z-10 min-h-screen bg-transparent">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
