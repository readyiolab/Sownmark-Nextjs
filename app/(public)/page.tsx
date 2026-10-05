import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Custom Multi AI Agents for Voice, SMS and Email | Sownmark',
  description:
    'Sownmark builds custom Multi AI Agents that answer calls, text and email leads, qualify prospects and book appointments. Book a strategy call.',
  keywords: [
    'custom AI agents for business',
    'multi AI agent system',
    'AI voice agent for business',
    'missed call recovery AI',
    'AI appointment scheduling',
    'AI lead qualification',
  ],
  alternates: {
    canonical: 'https://sownmark.com/',
  },
  openGraph: {
    title: 'Custom Multi AI Agents for Voice, SMS and Email | Sownmark',
    description:
      'Sownmark builds custom Multi AI Agents that answer calls, text and email leads, qualify prospects and book appointments.',
    url: 'https://sownmark.com/',
    siteName: 'Sownmark',
    type: 'website',
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sownmark.com/#organization',
      name: 'Sownmark',
      url: 'https://sownmark.com/',
      logo: 'https://sownmark.com/logo.png',
      description:
        'Sownmark is a custom Multi AI Agent and business automation company that also provides software development and digital marketing.',
      email: 'hello@sownmark.com',
      telephone: '+91-9792166702',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'hello@sownmark.com',
        telephone: '+91-9792166702',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://sownmark.com/#website',
      url: 'https://sownmark.com/',
      name: 'Sownmark',
      publisher: { '@id': 'https://sownmark.com/#organization' },
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://sownmark.com/#webpage',
      url: 'https://sownmark.com/',
      name: 'Custom Multi AI Agents for Voice, SMS and Email | Sownmark',
      isPartOf: { '@id': 'https://sownmark.com/#website' },
      about: { '@id': 'https://sownmark.com/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a Multi AI Agent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A coordinated set of AI agents that share knowledge and conversation history across voice, SMS, email and scheduling.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can an AI agent answer business calls?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A voice agent connects to your phone system, converses in natural speech, follows your approved information and rules, and can book, take a message or transfer to a person.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Sownmark build a custom AI voice agent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Agents are built to your workflows, services and escalation rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI agents send and receive SMS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, where you have the appropriate consent and messaging registration, the agent can hold two-way text conversations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI manage business emails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It can classify, respond to, follow up on and route email based on configured rules, with human review where you require it.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI schedule appointments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, using your calendar availability and scheduling rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI qualify leads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. It asks your qualifying questions, records answers and flags high-intent prospects.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI follow up with missed leads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, across configured channels and cadences, subject to consent and applicable rules.',
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomePageClient />
    </>
  );
}

