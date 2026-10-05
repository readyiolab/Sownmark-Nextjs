import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MessageSquare,
  Mail,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'AI SMS and Email Automation for Leads | Sownmark',
  description:
    'Custom two-way AI SMS and email automation that responds to leads, follows up and routes conversations to your team. Consent-first design.',
  keywords: [
    'AI SMS automation',
    'two-way SMS for business',
    'AI email management',
    'automated lead follow-up email',
    'AI text message follow-up',
    'email triage automation',
  ],
  alternates: {
    canonical: 'https://sownmark.com/ai-sms-email-automation/',
  },
};

const smsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://sownmark.com/ai-sms-email-automation/#webpage',
      url: 'https://sownmark.com/ai-sms-email-automation/',
      name: 'AI SMS and Email Automation for Leads',
      isPartOf: { '@id': 'https://sownmark.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sownmark.com/' },
        { '@type': 'ListItem', position: 2, name: 'Multi AI Agents', item: 'https://sownmark.com/ai-agents/' },
        { '@type': 'ListItem', position: 3, name: 'AI SMS and Email Automation', item: 'https://sownmark.com/ai-sms-email-automation/' },
      ],
    },
    {
      '@type': 'Service',
      name: 'AI SMS and Email Automation',
      serviceType: 'Two-way conversational SMS and automated email follow-up',
      provider: { '@id': 'https://sownmark.com/#organization' },
      areaServed: ['United States', 'Australia', 'Canada', 'Singapore', 'United Kingdom'],
      description: 'Consent-first AI SMS and email automation that keeps leads warm and booked.',
      url: 'https://sownmark.com/ai-sms-email-automation/',
    },
  ],
};

export default function AiSmsEmailAutomationPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smsSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/ai-agents" className="hover:text-white">Multi AI Agents</Link>
          <span>/</span>
          <span className="text-primary font-semibold">AI SMS & Email</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Two-Way Messaging & Inbox Triage
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            AI SMS and Email Automation That Keeps Conversations Moving
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Can AI send and receive SMS? Yes. A custom agent can hold two-way text conversations, answer questions, qualify leads and book appointments, using only contacts with proper consent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="/contact#strategy-call">Book an AI Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-800 text-slate-300 hover:bg-slate-900">
              <Link href="/ai-appointment-scheduling">See Scheduling Integration</Link>
            </Button>
          </div>
        </div>

        {/* Two Columns: SMS & Email Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* SMS Card */}
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Two-Way SMS Automation</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Missed-call text-back:</strong> Text callers within 30 seconds of an unanswered call.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Web form response:</strong> Immediately engage form submissions via conversational text.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Appointment reminders & reschedules:</strong> Interactive confirmation and easy rebooking.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No-show reactivation:</strong> Gentle, rule-based re-engagement cadences.</span>
              </li>
            </ul>
          </div>

          {/* Email Card */}
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">AI Email Automation & Triage</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <span><strong>Inquiry classification:</strong> Categorize leads, billing questions, and urgency.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <span><strong>Draft for approval:</strong> AI drafts high-quality responses for your team to one-click approve.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <span><strong>Estimate & quote follow-up:</strong> Timed email cadences that stop immediately on reply.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <span><strong>Intelligent routing:</strong> Send high-tier requests straight to the responsible team member.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Consent, A2P 10DLC & Best Practices */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-16 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Consent, Registration and Carrier Guardrails
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            US business texting requires prior consent and carrier registration (A2P 10DLC). Canada, Australia and Singapore have their own consent regimes (CASL, Spam Act, PDPA). We build strict opt-in verification, immediate STOP/opt-out handling, and local quiet-hours rules directly into every sequence.
          </p>
        </div>

        {/* Navigation */}
        <div className="border-t border-slate-800 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/ai-voice-agents" className="text-sm text-slate-400 hover:text-white">
            ← Previous: AI Voice Agents
          </Link>
          <Link href="/ai-appointment-scheduling" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80">
            Next: AI Appointment Scheduling →
          </Link>
        </div>
      </div>
    </main>
  );
}
