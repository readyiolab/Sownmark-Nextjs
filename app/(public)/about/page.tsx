import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, UserCheck, Cpu, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Sownmark | Custom Multi AI Agent Company',
  description:
    'Sownmark is an international AI automation, software development and digital growth company building custom Multi AI Agents for businesses.',
  keywords: [
    'AI automation company',
    'custom AI agent development company',
    'AI software development company',
    'Sownmark',
    'AI agents for small business',
    'business automation partner',
  ],
  alternates: {
    canonical: 'https://sownmark.com/about/',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Sownmark | Custom Multi AI Agent Company',
  description:
    'Sownmark is an international AI automation, software development and digital growth company building custom Multi AI Agents for businesses.',
  url: 'https://sownmark.com/about/',
  publisher: {
    '@type': 'Organization',
    name: 'Sownmark',
    logo: 'https://sownmark.com/logo.webp',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sownmark',
  founder: [
    {
      '@type': 'Person',
      name: 'Surya Pratap Singh',
      jobTitle: 'CEO & Founder',
    },
    {
      '@type': 'Person',
      name: 'Deepak Kumar',
      jobTitle: 'CTO & Head of Engineering',
    },
  ],
};

export default function AboutPage() {
  const principles = [
    {
      title: 'Human Handoff by Design',
      desc: 'AI handles repetitive questions and speed to lead; humans handle sensitive, emotional, and high-value decisions.',
      icon: <UserCheck className="w-6 h-6 text-blue-400" />,
    },
    {
      title: 'Consent & Carrier Compliance',
      desc: 'We build strict opt-in verification and opt-out handling into every SMS, email, and voice cadence.',
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: 'Systems-First Engineering',
      desc: 'Your AI agent, CRM pipelines, calendar rules, and marketing campaigns are designed as one integrated system.',
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
    },
    {
      title: 'No Fabricated Claims',
      desc: 'Transparent pricing factors, clear boundaries on what AI cannot do, and zero false promises.',
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            International AI Automation Partner
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            About Sownmark
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sownmark is an international AI automation, software development and digital growth company. We build custom Multi AI Agents that help businesses capture, engage, qualify, follow up with and schedule customers across voice, SMS and email.
          </p>
        </section>

        {/* Narrative & Working Model */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Approach to Business Automation</h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Most businesses do not have a lead generation problem alone—they have a speed-to-lead and follow-up problem. Every missed phone call or slow form response allows an interested buyer to reach a competing service provider.
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              Rather than selling generic one-size-fits-all chatbots or off-the-shelf software tools that break, Sownmark engineers custom Multi AI Agents tailored to your company's actual operating rules, CRM fields, and customer vocabulary. We connect voice, texting, email, and live calendar synchronization so that no opportunity is lost.
            </p>

            {/* International Transparency Note from Phase 12 */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-300 leading-relaxed">
              <strong className="text-white block mb-1">Global Delivery & Dedicated Engineering</strong>
              Sownmark operates from India and serves clients across the United States, Australia, Canada, Singapore, the United Kingdom, and New Zealand. Our engineering team provides high-touch custom setup, continuous monitoring, and timezone-aligned support for international service businesses.
            </div>
          </div>
        </section>

        {/* Responsible AI Principles */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Responsible AI Principles</h2>
            <p className="text-sm text-slate-400">
              How we design and deploy AI agents that protect customer trust and operational stability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((item, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 w-fit">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">Engineering Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto text-xl font-black text-blue-400">
                SP
              </div>
              <h3 className="text-lg font-bold text-white">Surya Pratap Singh</h3>
              <p className="text-xs text-primary font-semibold">CEO & Founder</p>
              <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                Directing strategic architecture, customer discovery, and Multi AI agent workflows for international business operations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-xl font-black text-emerald-400">
                DK
              </div>
              <h3 className="text-lg font-bold text-white">Deepak Kumar</h3>
              <p className="text-xs text-emerald-400 font-semibold">CTO & Head of Engineering</p>
              <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                Leading software architecture, real-time telephony pipelines, CRM connectors, and high-availability cloud infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-800/40 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Let’s Discuss Your Automation Roadmap</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Reach out directly to review your call volume, missed opportunities, and technical stack.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                <Link href="/contact#strategy-call">Book an AI Strategy Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
