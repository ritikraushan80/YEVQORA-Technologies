import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About Us',
  description:
    'Yevqora Technologies is an agile Noida-based startup building AI-powered websites and mobile apps for healthcare, e-commerce, fintech, education, sports and more.',
  path: '/about',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
