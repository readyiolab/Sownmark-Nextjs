import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Best Digital Marketing & Software Development Agency in India | Sownmark',
  description:
    "Sownmark is India's leading full-service digital agency offering SEO, GEO, AEO, display advertising, social media, influencer marketing, web & software development. Trusted by 200+ brands across Delhi, Mumbai, Bangalore & all major cities.",
  keywords: [
    'digital marketing agency India',
    'software development company India',
    'SEO GEO AEO services',
    'display advertising agency',
    'social media marketing agency',
  ],
  alternates: {
    canonical: 'https://sownmark.com/',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
