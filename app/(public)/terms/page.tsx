import TermsAndConditionsPage from '../terms-and-conditions/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Sownmark',
  description: 'The terms that govern use of Sownmark’s website, custom AI agents, and services.',
  alternates: {
    canonical: 'https://sownmark.com/terms/',
  },
};

export default function TermsPage() {
  return <TermsAndConditionsPage />;
}
