import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, UserCheck, Cpu, Lock, Globe, ArrowRight } from 'lucide-react';
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
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Consent & Carrier Compliance',
      desc: 'We build strict opt-in verification and opt-out handling into every SMS, email, and voice cadence.',
      icon: <Lock className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: 'Systems-First Engineering',
      desc: 'Your AI agent, CRM pipelines, calendar rules, and marketing campaigns are designed as one integrated system.',
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
    },
    {
      title: 'No Fabricated Claims',
      desc: 'Transparent pricing factors, clear boundaries on what AI cannot do, and zero false promises.',
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
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

      <div className="bg-white text-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              International AI Automation Partner
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              About Sownmark
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Sownmark is an international AI automation, software development and digital growth company. We build custom Multi AI Agents that help businesses capture, engage, qualify, follow up with and schedule customers across voice, SMS and email.
            </p>
          </div>
        </section>

        {/* Narrative & Working Model */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-6 mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Engineering Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2957]">Our Approach to Business Automation</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Most businesses do not have a lead generation problem alone—they have a speed-to-lead and follow-up problem. Every missed phone call or slow form response allows an interested buyer to reach a competing service provider.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Rather than selling generic one-size-fits-all chatbots or off-the-shelf software tools that break, Sownmark engineers custom Multi AI Agents tailored to your company's actual operating rules, CRM fields, and customer vocabulary. We connect voice, texting, email, and live calendar synchronization so that no opportunity is lost.
              </p>

              {/* International Transparency Note from Phase 12 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 text-sm text-gray-700 leading-relaxed shadow-sm">
                <strong className="text-gray-900 block mb-1">Global Delivery & Dedicated Engineering</strong>
                Sownmark operates from India and serves clients across the United States, Australia, Canada, Singapore, the United Kingdom, and New Zealand. Our engineering team provides high-touch custom setup, continuous monitoring, and timezone-aligned support for international service businesses.
              </div>
            </div>

            {/* Responsible AI Principles */}
            <div className="mb-20">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2957] mb-3">Responsible AI Principles</h2>
                <p className="text-sm text-gray-600">
                  How we design and deploy AI agents that protect customer trust and operational stability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {principles.map((item, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-3 hover:shadow-md transition-all">
                    <div className="p-3 rounded-2xl bg-white border border-gray-100 shadow-sm w-fit">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#1a2957]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mb-20">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2957] text-center mb-10">Engineering Leadership</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center mx-auto text-xl font-black text-blue-700">
                    SP
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Surya Pratap Singh</h3>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">CEO & Founder</p>
                  <p className="text-xs sm:text-sm text-gray-600 pt-1 leading-relaxed">
                    Directing strategic architecture, customer discovery, and Multi AI agent workflows for international business operations.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center mx-auto text-xl font-black text-emerald-700">
                    DK
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Deepak Kumar</h3>
                  <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider">CTO & Head of Engineering</p>
                  <p className="text-xs sm:text-sm text-gray-600 pt-1 leading-relaxed">
                    Leading software architecture, real-time telephony pipelines, CRM connectors, and high-availability cloud infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-10 sm:p-12 rounded-3xl bg-[#1a2957] text-white text-center shadow-xl space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Let’s Discuss Your Automation Roadmap</h3>
              <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed pb-4">
                Reach out directly to review your call volume, missed opportunities, and technical stack.
              </p>
              <Button asChild size="lg" className="bg-white text-[#1a2957] hover:bg-gray-100 font-bold rounded-full px-8 shadow-lg">
                <Link href="/contact#strategy-call">Book an AI Strategy Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
