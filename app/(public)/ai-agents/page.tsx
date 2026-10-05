import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneCall,
  MessageSquare,
  Calendar,
  UserCheck,
  Shield,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Custom Multi AI Agents for Business Automation | Sownmark',
  description:
    'Learn how custom Multi AI Agents handle voice, SMS, email, scheduling and lead qualification in one connected system. Talk to Sownmark.',
  keywords: [
    'multi AI agent',
    'custom AI agents for business',
    'AI business automation',
    'AI agent for customer conversations',
    'conversational AI for lead management',
    'AI agent CRM integration',
  ],
  alternates: {
    canonical: 'https://sownmark.com/ai-agents/',
  },
  openGraph: {
    title: 'Custom Multi AI Agents for Business Automation | Sownmark',
    description:
      'Learn how custom Multi AI Agents handle voice, SMS, email, scheduling and lead qualification in one connected system.',
    url: 'https://sownmark.com/ai-agents/',
  },
};

const pillarSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://sownmark.com/ai-agents/#webpage',
      url: 'https://sownmark.com/ai-agents/',
      name: 'Custom Multi AI Agents for Business Automation',
      isPartOf: { '@id': 'https://sownmark.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sownmark.com/' },
        { '@type': 'ListItem', position: 2, name: 'Multi AI Agents', item: 'https://sownmark.com/ai-agents/' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Custom Multi AI Agents',
      serviceType: 'AI agent development and business automation',
      provider: { '@id': 'https://sownmark.com/#organization' },
      areaServed: ['United States', 'Australia', 'Canada', 'Singapore', 'United Kingdom', 'New Zealand', 'Ireland'],
      description: 'Custom AI agents for voice, SMS and email that qualify leads and schedule appointments.',
      url: 'https://sownmark.com/ai-agents/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between a chatbot and a Multi AI Agent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A chatbot typically handles one channel and scripted replies. A Multi AI Agent coordinates voice, messaging, scheduling and CRM actions with shared context.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will callers know they are talking to AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Disclosure requirements vary. We configure disclosure according to your policy and applicable jurisdictional rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can it handle complex or emotional calls?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It escalates them to human staff. Scope and triggers are defined up front during the design phase.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does it replace my staff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. It handles repetitive conversations and routine scheduling so staff can focus on high-value human relationships and complex cases.',
          },
        },
      ],
    },
  ],
};

export default function MultiAiAgentsPage() {
  const channels = [
    {
      title: 'AI Voice Agents',
      desc: 'Answers inbound calls, qualifies the caller, provides approved information, books appointments or transfers with full context.',
      link: '/ai-voice-agents',
      icon: PhoneCall,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Two-Way SMS & Email Automation',
      desc: 'Instant missed-call text-backs, lead inquiry follow-ups, and email triage that keep conversations moving toward a booking.',
      link: '/ai-sms-email-automation',
      icon: MessageSquare,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'AI Appointment Scheduling',
      desc: 'Checks live calendar availability, respects buffer rules, confirms by text/email, and eliminates double bookings.',
      link: '/ai-appointment-scheduling',
      icon: Calendar,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'AI Lead Qualification & Follow-Up',
      desc: 'Asks defined qualifying questions, scores buyer intent, and instantly flags high-intent prospects for human follow-up.',
      link: '/ai-lead-qualification',
      icon: UserCheck,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
  ];

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pillarSchema) }}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Pillar Architecture
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto mb-6">
          Custom Multi AI Agents for Customer Conversations and Business Automation
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
          A coordinated system of AI agents that share one knowledge base and conversation record across voice, SMS, email, and scheduling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <Link href="/contact#strategy-call">Book an AI Automation Strategy Call</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-slate-800 text-slate-300 hover:bg-slate-900">
            <Link href="/industries">Explore Industry Solutions</Link>
          </Button>
        </div>
      </section>

      {/* Definition & Direct Answer (AEO friendly) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-20">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">What is a Multi AI Agent?</h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A Multi AI Agent is a coordinated system of AI agents, each specialized for a task such as voice, messaging, scheduling or qualification, working from shared business knowledge and one conversation record. Instead of separate tools that do not talk to each other, the agents pass context between channels.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Most businesses run separate tools for phones, texting, email and scheduling. Information gets lost between them. A Multi AI Agent connects those steps so a lead does not fall between systems.
          </p>
        </div>
      </section>

      {/* Step by Step Execution Flow */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-20">
        <h2 className="text-3xl font-extrabold text-white mb-10 text-center">How does a Multi AI Agent work?</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Trigger', desc: 'An inbound call, missed call, form submission, email or message arrives.' },
            { step: '02', title: 'Routing', desc: 'A central routing layer selects the optimal agent and communication channel.' },
            { step: '03', title: 'Conversation', desc: 'The agent converses naturally using your verified information and guardrails.' },
            { step: '04', title: 'Action', desc: 'It qualifies intent, books into your calendar, follows up, or executes a warm handoff.' },
            { step: '05', title: 'Sync', desc: 'Every transcript, audio record, field, and appointment is synced to your CRM.' },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-primary mb-2 block">{item.step}</span>
                <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Supporting Channel Sub-pages */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-4">Core Functional Capabilities</h2>
          <p className="text-slate-400 text-sm">
            Each specialized agent owns a dedicated intent and works together seamlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((c, i) => (
            <div key={i} className="p-7 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${c.color}`}>
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{c.desc}</p>
              </div>
              <Link href={c.link} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                Explore detailed capability <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance & Security Guardrails */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-20">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg">
            <Shield className="w-6 h-6" />
            Security, Privacy and Regulatory Transparency
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Regulations vary by country and industry. Sownmark does not claim automatic compliance with HIPAA, TCPA, GDPR, CCPA, the Australian Privacy Act, Canadian privacy law, Singapore PDPA or any other regime. Implementation requires consent management, data controls, access controls, secure integrations, human escalation, auditability and industry-specific compliance review. Call recording and AI disclosure requirements differ by jurisdiction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-400">
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong className="text-white block mb-1">Human Handoff</strong>
              Warm escalation with context whenever caller requests a human.
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong className="text-white block mb-1">Least Privilege</strong>
              Encrypted API connectors with minimal data exposure to LLMs.
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
              <strong className="text-white block mb-1">Audit Trail</strong>
              Full conversation logs, timestamps, and opt-out records stored.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mb-20">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2">What is the difference between a chatbot and a Multi AI Agent?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              A chatbot typically handles one channel and scripted replies. A Multi AI Agent coordinates voice, messaging, scheduling and CRM actions with shared context across phone, SMS, email, and calendars.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2">Will callers know they are talking to AI?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Disclosure requirements vary by region. We configure disclosure greetings according to your company policy and local legal requirements (such as FCC guidelines in the US).
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2">Can it handle complex or emotional calls?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              No. It should escalate them immediately. Scope and escalation triggers are strictly defined up front so sensitive matters reach your human team.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2">Does it replace my staff?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              No. It handles repetitive conversations and after-hours volume so your in-office staff can focus on the critical tasks that require human judgment.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-800/40">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Architect Your Multi AI Agent System?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Tell us about your business, lead channels, and phone flows. We will review your processes honestly and design a custom agent framework.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
            <Link href="/contact#strategy-call">Book an AI Automation Strategy Call</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
