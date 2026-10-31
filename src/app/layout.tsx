import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeContext';
import { FluidCursor } from '@/components/effects/FluidCursor';

export const metadata: Metadata = {
  title: 'Yevqora Technologies | Innovating Today. Engineering Tomorrow.',
  description:
    'Yevqora Technologies delivers award-winning AI solutions, cloud orchestration, enterprise web and high-performance mobile applications trusted by over 100M users globally.',
  keywords: [
    'Yevqora Technologies',
    'AI Solutions',
    'Cloud Orchestration',
    'Mobile Application Development',
    'Web Engineering',
    'Cybersecurity',
    'Enterprise Cloud',
    'IT Solutions',
  ],
  icons: {
    icon: '/images/yevqora-mark.png',
    apple: '/images/yevqora-mark.png',
  },
  openGraph: {
    title: 'Yevqora Technologies | Innovating Today. Engineering Tomorrow.',
    description:
      'High-performance AI, multi-cloud orchestration, and mobile applications built for global scale.',
    url: 'https://yevqora.com',
    siteName: 'Yevqora Technologies',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth light">
      <body suppressHydrationWarning className="antialiased min-h-screen bg-white text-slate-900 selection:bg-indigo-500 selection:text-white transition-colors duration-300 font-['Onest',sans-serif]">
        <ThemeProvider>
          <FluidCursor />
          <div id="app-root-content" className="relative z-10 min-h-screen bg-transparent">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
