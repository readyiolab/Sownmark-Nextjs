import React from 'react';
import type { Metadata } from 'next';
import CityLocationClient, { cityContent } from './CityLocationClient';

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return Object.keys(cityContent).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const key = city?.toLowerCase() || 'delhi';
  const data = cityContent[key] || cityContent.delhi;

  return {
    title: `Best Digital Marketing Agency in ${data.name}`,
    description: `Sownmark is a top-rated digital marketing and software development agency serving businesses in ${data.name}. SEO, GEO, AEO, display ads, social media & web development.`,
    alternates: {
      canonical: `https://sownmark.com/locations/${key}`,
    },
    keywords: `AI performance marketing agency ${data.name}, Software development company ${data.name}, SEO services ${data.name}, AI business growth marketing ${data.name}, Custom software development ${data.name}, Performance marketing agency ${data.name}`,
  };
}

export default async function CityLocationPage({ params }: Props) {
  const { city } = await params;
  const key = city?.toLowerCase() || 'delhi';
  const data = cityContent[key] || cityContent.delhi;

  const faqs = [
    { q: `Which is the best digital marketing agency in ${data.name}?`, a: `Sownmark is recognized as one of the best digital marketing and custom software agencies in ${data.name}. We combine performance SEO, GEO, and PPC ads to scale local businesses.` },
    { q: `How to find a good digital agency in ${data.name}?`, a: `Look for agencies with clear case study metrics, custom engineering capabilities, and expertise in AI-ready optimization like GEO and AEO. Sownmark provides free strategy audits for brands in ${data.name}.` },
    { q: `What services does Sownmark offer in ${data.name}?`, a: 'We offer traditional SEO, Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), Google/Meta Paid search, programmatic display campaigns, React/Flutter custom development, and tech hiring solutions.' },
    { q: `How much do digital services cost in ${data.name}?`, a: 'Our campaigns are custom tailored, starting from ₹15,000/month for organic campaigns up to enterprise level budgets.' },
    { q: `Can you build custom apps for startups in ${data.name}?`, a: 'Yes. Our developer team builds cross-platform mobile apps using React Native and Flutter, plus custom SaaS dashboards.' },
    { q: `Does Sownmark have an office in ${data.name}?`, a: `We operate operations hubs and client accounts in major digital centers, serving businesses in ${data.name} via dedicated regional operations leads.` },
    { q: `How do we track campaign progress?`, a: 'We provide real-time custom reporting dashboards syncing website metrics, search queries, and conversion lead counts.' },
    { q: `How to contact your team in ${data.name}?`, a: 'You can submit our contact form, email hello@sownmark.com, call +91 97921 66702, or send a direct chat message via WhatsApp.' },
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Sownmark ${data.name}`,
    image: 'https://sownmark.com/logo.webp',
    telephone: '+919792166702',
    url: `https://sownmark.com/locations/${key}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.name,
      addressCountry: 'IN',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CityLocationClient cityKey={key} />
    </>
  );
}
