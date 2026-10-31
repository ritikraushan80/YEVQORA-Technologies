import { pageMetadata } from '@/lib/seo';

// Not linked from the navbar right now, so keep it out of search results.
export const metadata = pageMetadata({
  title: 'Solutions',
  description: 'Packaged technology platforms and applications from Yevqora Technologies.',
  path: '/solutions',
  noindex: true,
});

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
