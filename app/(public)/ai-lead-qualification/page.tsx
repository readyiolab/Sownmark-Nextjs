import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  UserCheck,
  ShieldAlert,
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
    <main className="bg-slate-950 text-slate-100 min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qualSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/ai-agents" className="hover:text-white">Multi AI Agents</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Lead Qualification</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            Speed to Lead & Intent Scoring
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            AI Lead Qualification and Follow-Up That Gets Ready Buyers to Your Team
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Can AI qualify leads? Yes. The agent asks your qualifying questions by voice, text or email, records answers, applies your criteria and flags high-intent prospects for human follow-up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="/contact#strategy-call">Book an AI Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-800 text-slate-300 hover:bg-slate-900">
              <Link href="/industries">Explore Industry Scenarios</Link>
            </Button>
          </div>
        </div>

        {/* How Qualification Works */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 mb-16 space-y-6">
          <h2 className="text-2xl font-bold text-white">How Conversational Qualification Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Define Criteria', desc: 'Budget thresholds, timeline, service urgency, location radius, and eligibility requirements.' },
              { step: '02', title: 'Conversational Inquiry', desc: 'Friendly, natural questions asked in voice or text without feeling like a rigid survey.' },
              { step: '03', title: 'Intent Scoring', desc: 'Answers are mapped to lead tiers (e.g. VIP, Standard, Unqualified, Support).' },
              { step: '04', title: 'Sales Handoff', desc: 'Your sales reps receive a clean 3-bullet summary, score, and complete call transcript.' },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-mono font-bold text-purple-400 block mb-2">{s.step}</span>
                <h3 className="text-base font-bold text-white mb-1">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guardrails */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-16 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            Clear Operational Limits
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            The AI agent does not make formal legal determinations, credit decisions, or medical triage diagnoses. It gathers and standardizes information so your human professionals can make informed, rapid decisions.
          </p>
        </div>

        {/* Navigation */}
        <div className="border-t border-slate-800 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/ai-appointment-scheduling" className="text-sm text-slate-400 hover:text-white">
            ← Previous: AI Appointment Scheduling
          </Link>
          <Link href="/industries" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80">
            Next: Industries Overview →
          </Link>
        </div>
      </div>
    </main>
  );
}
