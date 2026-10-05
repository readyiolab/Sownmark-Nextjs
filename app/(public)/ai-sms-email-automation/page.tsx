import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MessageSquare,
  Mail,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
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
    <main className="bg-white text-gray-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smsSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Two-Way Messaging & Inbox Triage
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            AI SMS and Email Automation That Keeps Leads Moving
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Can AI send and receive SMS? Yes. A custom agent can hold two-way text conversations, answer questions, qualify leads and book appointments, using only contacts with proper consent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="bg-white text-[#1a2957] hover:bg-gray-100 font-bold rounded-full shadow-lg">
              <Link href="/contact#strategy-call">Book an AI Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full">
              <Link href="/ai-appointment-scheduling">See Scheduling Integration</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Two Columns: SMS & Email Use Cases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* SMS Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#1a2957]">Two-Way SMS Automation</h2>
              <ul className="space-y-3.5 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Missed-call text-back:</strong> Text callers within 30 seconds of an unanswered call.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Web form response:</strong> Immediately engage form submissions via conversational text.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Appointment reminders & reschedules:</strong> Interactive confirmation and easy rebooking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>No-show reactivation:</strong> Gentle, rule-based re-engagement cadences.</span>
                </li>
              </ul>
            </div>

            {/* Email Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#1a2957]">AI Email Automation & Triage</h2>
              <ul className="space-y-3.5 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                  <span><strong>Inquiry classification:</strong> Categorize leads, billing questions, and urgency.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                  <span><strong>Draft for approval:</strong> AI drafts high-quality responses for your team to one-click approve.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                  <span><strong>Estimate & quote follow-up:</strong> Timed email cadences that stop immediately on reply.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                  <span><strong>Intelligent routing:</strong> Send high-tier requests straight to the responsible team member.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Consent, A2P 10DLC & Best Practices */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-md space-y-4">
            <div className="flex items-center gap-2.5 text-gray-900 font-bold text-lg">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              Consent, Registration and Carrier Guardrails
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              US business texting requires prior consent and carrier registration (A2P 10DLC). Canada, Australia and Singapore have their own consent regimes (CASL, Spam Act, PDPA). We build strict opt-in verification, immediate STOP/opt-out handling, and local quiet-hours rules directly into every sequence.
            </p>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-100 mt-16 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/ai-voice-agents" className="text-sm text-gray-500 hover:text-[#1a2957] font-semibold">
              ← Previous: AI Voice Agents
            </Link>
            <Link href="/ai-appointment-scheduling" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700">
              Next: AI Appointment Scheduling →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
