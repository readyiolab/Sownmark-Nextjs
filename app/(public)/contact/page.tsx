import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Sownmark | Digital Marketing & Tech Agency India',
  description:
    'Get in touch with Sownmark for digital marketing, GEO/AEO, display advertising, web development, software development, and social media services.',
  alternates: {
    canonical: 'https://sownmark.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
