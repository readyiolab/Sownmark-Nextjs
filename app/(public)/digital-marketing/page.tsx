import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Performance Marketing and Lead Generation | Sownmark',
  description:
    'Google Ads, Meta Ads, SEO, AEO and GEO that bring in leads your AI agents can answer, qualify and book. Performance-focused, no guarantees.',
  keywords: [
    'lead generation services',
    'Google Ads management',
    'Meta Ads management',
    'performance marketing',
    'SEO and AEO services',
    'conversion rate optimization',
  ],
  alternates: {
    canonical: 'https://sownmark.com/digital-marketing/',
  },
};

const marketingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://sownmark.com/digital-marketing/#webpage',
      url: 'https://sownmark.com/digital-marketing/',
      name: 'Performance Marketing and Lead Generation | Sownmark',
      isPartOf: { '@id': 'https://sownmark.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sownmark.com/' },
        { '@type': 'ListItem', position: 2, name: 'Digital Marketing', item: 'https://sownmark.com/digital-marketing/' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Performance Marketing & Lead Generation',
      serviceType: 'Search engine marketing, paid ads and lead generation',
      provider: { '@id': 'https://sownmark.com/#organization' },
      description: 'Performance-driven lead generation designed to feed high-intent prospects to AI agents.',
      url: 'https://sownmark.com/digital-marketing/',
    },
  ],
};

export default function DigitalMarketingPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(marketingSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            Full-Funnel Acquisition Loops
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Digital Marketing That Feeds Qualified Leads to AI Agents
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Paid and organic traffic is wasted if inquiries go unanswered. Pairing acquisition campaigns with an AI agent that responds within moments helps convert more ad spend into qualified booked appointments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="bg-white text-[#1a2957] hover:bg-gray-100 font-bold rounded-full shadow-lg">
              <Link href="/contact#strategy-call">Book a Growth Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full">
              <Link href="/ai-agents">See AI Agents</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Unified Integrated Funnel Flow */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm mb-16 space-y-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              End-to-End Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2957]">The Integrated Growth System</h2>
            <div className="p-6 rounded-2xl bg-white border border-gray-200 font-mono text-xs sm:text-sm text-blue-700 font-bold leading-loose shadow-sm">
              Attract (Ads & SEO) → Capture (Landing Page & Phone) → Engage (AI Voice & SMS) → Qualify → Book → Human Close
            </div>
          </div>

          {/* Marketing Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Google & Paid Search Ads',
                desc: 'High-intent search campaigns targeting emergency buyers ready to call right now.',
              },
              {
                title: 'Meta & Targeted Social Ads',
                desc: 'Engaging visual creative that captures local consultations and aesthetic treatment interest.',
              },
              {
                title: 'SEO, AEO & GEO Optimization',
                desc: 'Foundational search rankings paired with structured schema that helps answer engines cite your brand.',
              },
              {
                title: 'Conversion Rate Optimization (CRO)',
                desc: 'Frictionless landing pages engineered to maximize phone calls and instant calendar bookings.',
              },
            ].map((svc, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-3 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-[#1a2957]">{svc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          {/* Realistic Expectations Notice */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-100 shadow-md text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#1a2957]">Performance-Focused. Transparent Attribution.</h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We track real operational KPIs: Cost Per Qualified Lead (CPQL), Booked Appointment Rate, and Speed-to-Lead times. We do not make false promises of overnight ranking guarantees.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-[#1a2957] hover:bg-blue-900 text-white font-bold rounded-full px-8 shadow-lg">
                <Link href="/contact#strategy-call">Plan Your Lead Generation Strategy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
