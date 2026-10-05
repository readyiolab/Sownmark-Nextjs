import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingUp,
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
    <main className="bg-slate-950 text-slate-100 min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(marketingSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Digital Marketing</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            Full-Funnel Acquisition Loops
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Digital Marketing That Feeds Qualified Leads Into Your AI Agents
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Paid and organic traffic is wasted if inquiries go unanswered. Pairing acquisition campaigns with an AI agent that responds within moments helps convert more ad spend into qualified booked appointments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="/contact#strategy-call">Book a Growth Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-800 text-slate-300 hover:bg-slate-900">
              <Link href="/ai-agents">See AI Agents</Link>
            </Button>
          </div>
        </div>

        {/* Unified Integrated Funnel Flow */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 mb-16 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">The Integrated Growth System</h2>
          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 text-center font-mono text-xs sm:text-sm text-cyan-300 leading-loose">
            Attract (Ads & SEO) → Capture (Landing Page & Phone) → Engage (AI Voice & SMS) → Qualify → Book → Human Close
          </div>
        </div>

        {/* Marketing Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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
            <div key={idx} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white">{svc.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Realistic Expectations Notice from Brief */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
          <h3 className="text-lg font-bold text-white">Performance-Focused. No Gimmicks.</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We track real operational KPIs: Cost Per Qualified Lead (CPQL), Booked Appointment Rate, and Speed-to-Lead times. We do not make false promises of overnight ranking guarantees.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="/contact#strategy-call">Plan Your Lead Generation Strategy</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
