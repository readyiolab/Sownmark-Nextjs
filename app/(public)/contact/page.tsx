import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Sownmark | Book an AI Strategy Call',
  description:
    'Book an AI Automation Strategy Call with Sownmark or email hello@sownmark.com. Tell us what you want to automate.',
  keywords: [
    'book AI automation call',
    'contact AI agent company',
    'AI automation consultation',
    'custom AI agent quote',
    'talk to Sownmark',
    'AI strategy call',
  ],
  alternates: {
    canonical: 'https://sownmark.com/contact/',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
