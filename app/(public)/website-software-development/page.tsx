import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Code,
  Globe,
  Database,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Custom Website and Software Development | Sownmark',
  description:
    'Custom websites, web apps, SaaS, CRMs, dashboards and API integrations that connect to your AI agents and business systems.',
  keywords: [
    'custom software development for business',
    'custom website development',
    'web application development',
    'SaaS development',
    'CRM development',
    'API integration services',
  ],
  alternates: {
    canonical: 'https://sownmark.com/website-software-development/',
  },
};

const devSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://sownmark.com/website-software-development/#webpage',
      url: 'https://sownmark.com/website-software-development/',
      name: 'Custom Website and Software Development | Sownmark',
      isPartOf: { '@id': 'https://sownmark.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sownmark.com/' },
        { '@type': 'ListItem', position: 2, name: 'Software Development', item: 'https://sownmark.com/website-software-development/' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Custom Website and Software Development',
      serviceType: 'Web application, CRM, API integration and software engineering',
      provider: { '@id': 'https://sownmark.com/#organization' },
      description: 'Custom software systems that power and connect your business AI agents.',
      url: 'https://sownmark.com/website-software-development/',
    },
  ],
};

export default function WebsiteSoftwareDevelopmentPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(devSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Software Development</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Code className="w-3.5 h-3.5" />
            Connected Growth Infrastructure
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Custom Websites and Software That Connect to Your AI Agents
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            An AI agent is only as useful as the systems it can reach. Custom websites, CRMs, dashboards and APIs give your agents somewhere to capture leads, read real-time availability, write records and report results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="/contact#strategy-call">Book an AI & Software Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-800 text-slate-300 hover:bg-slate-900">
              <Link href="/ai-agents">Explore Multi AI Agents</Link>
            </Button>
          </div>
        </div>

        {/* What We Build */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Conversion-First Websites',
              desc: 'High-speed Next.js web platforms with built-in appointment widgets, live agent chat, and analytics tracking.',
              icon: Globe,
            },
            {
              title: 'Custom CRMs & Portals',
              desc: 'Tailored lead pipelines, customer dashboards, and dispatch portals designed around your exact business steps.',
              icon: Database,
            },
            {
              title: 'Robust API Integrations',
              desc: 'Secure webhooks and REST integrations connecting your telephony, SMS carriers, payment processors, and databases.',
              icon: Layers,
            },
          ].map((item, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Custom vs Off-the-Shelf Section */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 mb-16 space-y-4">
          <h2 className="text-xl font-bold text-white">When Custom Software Beats Off-The-Shelf Tools</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Off-the-shelf software is ideal when your process is completely standard. But when you need complex dispatch logic, proprietary pricing calculators, unusual calendar assignments, or complete data ownership without monthly seat-license inflation, custom engineering delivers superior ROI and seamless AI agent connectivity.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-800">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
            <Link href="/contact#strategy-call">Discuss Your Software Architecture</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
