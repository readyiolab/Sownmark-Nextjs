import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  UserCheck,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'AI Lead Qualification and Follow-Up | Sownmark',
  description:
    'Custom AI lead qualification and follow-up that engages new leads, scores intent and passes ready prospects to your sales team fast.',
  keywords: [
    'AI lead qualification',
    'automated lead follow-up',
    'speed to lead automation',
    'lead scoring AI',
    'lead nurturing automation',
    'AI sales assistant',
  ],
  alternates: {
    canonical: 'https://sownmark.com/ai-lead-qualification/',
  },
};

const qualSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://sownmark.com/ai-lead-qualification/#webpage',
      url: 'https://sownmark.com/ai-lead-qualification/',
      name: 'AI Lead Qualification and Follow-Up',
      isPartOf: { '@id': 'https://sownmark.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sownmark.com/' },
        { '@type': 'ListItem', position: 2, name: 'Multi AI Agents', item: 'https://sownmark.com/ai-agents/' },
        { '@type': 'ListItem', position: 3, name: 'AI Lead Qualification', item: 'https://sownmark.com/ai-lead-qualification/' },
      ],
    },
    {
      '@type': 'Service',
      name: 'AI Lead Qualification and Follow-Up',
      serviceType: 'Conversational lead scoring and high-intent routing',
      provider: { '@id': 'https://sownmark.com/#organization' },
      areaServed: ['United States', 'Australia', 'Canada', 'Singapore', 'United Kingdom'],
      description: 'Conversational AI lead qualification and speed-to-lead nurturing.',
      url: 'https://sownmark.com/ai-lead-qualification/',
    },
  ],
};

export default function AiLeadQualificationPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qualSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            Speed to Lead & Intent Scoring
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            AI Lead Qualification That Delivers Ready Buyers
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Can AI qualify leads? Yes. The agent asks your qualifying questions by voice, text or email, records answers, applies your criteria and flags high-intent prospects for human follow-up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="bg-white text-[#1a2957] hover:bg-gray-100 font-bold rounded-full shadow-lg">
              <Link href="/contact#strategy-call">Book an AI Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full">
              <Link href="/industries">Explore Industry Scenarios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How Qualification Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm mb-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Precision Triage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2957] mt-3">
                How Conversational Qualification Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {[
                { step: '01', title: 'Define Criteria', desc: 'Budget thresholds, timeline, service urgency, location radius, and eligibility requirements.' },
                { step: '02', title: 'Conversational Inquiry', desc: 'Friendly, natural questions asked in voice or text without feeling like a rigid survey.' },
                { step: '03', title: 'Intent Scoring', desc: 'Answers are mapped to lead tiers (e.g. VIP, Standard, Unqualified, Support).' },
                { step: '04', title: 'Sales Handoff', desc: 'Your sales reps receive a clean 3-bullet summary, score, and complete call transcript.' },
              ].map((s, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-600 block mb-2">{s.step}</span>
                    <h3 className="text-base font-bold text-gray-900 mb-1.5">{s.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guardrails */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-md space-y-4">
            <div className="flex items-center gap-2.5 text-gray-900 font-bold text-lg">
              <ShieldAlert className="w-6 h-6 text-amber-500" />
              Clear Operational Limits
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              The AI agent does not make formal legal determinations, credit decisions, or medical triage diagnoses. It gathers and standardizes information so your human professionals can make informed, rapid decisions.
            </p>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-100 mt-16 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/ai-appointment-scheduling" className="text-sm text-gray-500 hover:text-[#1a2957] font-semibold">
              ← Previous: AI Appointment Scheduling
            </Link>
            <Link href="/industries" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700">
              Next: Industries Overview →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
