import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'AI, Mobile App & Website Development Services',
  description:
    'Android and iOS app development, website development, AI integration and UI/UX design from Yevqora Technologies, built for businesses in every industry.',
  path: '/services',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
