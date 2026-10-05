import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Code,
  Globe,
  Database,
  Layers,
  ArrowRight,
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
    <main className="bg-white text-gray-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(devSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-wider">
            <Code className="w-3.5 h-3.5" />
            Connected Growth Infrastructure
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Custom Websites & Software That Power AI Agents
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            An AI agent is only as useful as the systems it can reach. Custom websites, CRMs, dashboards and APIs give your agents somewhere to capture leads, read real-time availability, write records and report results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="bg-white text-[#1a2957] hover:bg-gray-100 font-bold rounded-full shadow-lg">
              <Link href="/contact#strategy-call">Book an AI & Software Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full">
              <Link href="/ai-agents">Explore Multi AI Agents</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2957]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Custom vs Off-the-Shelf Section */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-100 shadow-md mb-16 space-y-4">
            <h2 className="text-2xl font-bold text-[#1a2957]">When Custom Software Beats Off-The-Shelf Tools</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Off-the-shelf software is ideal when your process is completely standard. But when you need complex dispatch logic, proprietary pricing calculators, unusual calendar assignments, or complete data ownership without monthly seat-license inflation, custom engineering delivers superior ROI and seamless AI agent connectivity.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <Button asChild size="lg" className="bg-[#1a2957] hover:bg-blue-900 text-white font-bold rounded-full px-8 shadow-lg">
              <Link href="/contact#strategy-call">Discuss Your Software Architecture</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
