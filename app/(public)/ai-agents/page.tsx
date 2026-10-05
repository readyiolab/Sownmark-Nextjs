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
  CheckCircle2,
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
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      title: 'Two-Way SMS & Email Automation',
      desc: 'Instant missed-call text-backs, lead inquiry follow-ups, and email triage that keep conversations moving toward a booking.',
      link: '/ai-sms-email-automation',
      icon: MessageSquare,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'AI Appointment Scheduling',
      desc: 'Checks live calendar availability, respects buffer rules, confirms by text/email, and eliminates double bookings.',
      link: '/ai-appointment-scheduling',
      icon: Calendar,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      title: 'AI Lead Qualification & Follow-Up',
      desc: 'Asks defined qualifying questions, scores buyer intent, and instantly flags high-intent prospects for human follow-up.',
      link: '/ai-lead-qualification',
      icon: UserCheck,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pillarSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            Pillar Architecture
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Custom Multi AI Agents for Customer Conversations
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            A coordinated system of AI agents that share one knowledge base and conversation record across voice, SMS, email, and scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#1a2957] hover:bg-gray-100 font-bold rounded-full shadow-lg">
              <Link href="/contact#strategy-call">Book an AI Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full">
              <Link href="/industries">Explore Industry Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Definition & Direct Answer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-100 space-y-4 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Direct Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2957]">What is a Multi AI Agent?</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              A Multi AI Agent is a coordinated system of AI agents, each specialized for a task such as voice, messaging, scheduling or qualification, working from shared business knowledge and one conversation record. Instead of separate tools that do not talk to each other, the agents pass context between channels.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Most businesses run separate tools for phones, texting, email and scheduling. Information gets lost between them. A Multi AI Agent connects those steps so a lead does not fall between systems.
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Execution Flow */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Workflow Engine
            </span>
            <h2 className="text-3xl font-black text-[#1a2957] mt-3">How Does a Multi AI Agent Work?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Trigger', desc: 'An inbound call, missed call, form submission, email or message arrives.' },
              { step: '02', title: 'Routing', desc: 'A central routing layer selects the optimal agent and communication channel.' },
              { step: '03', title: 'Conversation', desc: 'The agent converses naturally using your verified information and guardrails.' },
              { step: '04', title: 'Action', desc: 'It qualifies intent, books into your calendar, follows up, or executes a warm handoff.' },
              { step: '05', title: 'Sync', desc: 'Every transcript, audio record, field, and appointment is synced to your CRM.' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 mb-2 block">{item.step}</span>
                  <h3 className="text-base font-bold text-[#1a2957] mb-1.5">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Supporting Channel Sub-pages */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-[#1a2957] mb-3">Core Functional Capabilities</h2>
            <p className="text-gray-600 text-sm">
              Each specialized agent owns a dedicated intent and works together seamlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {channels.map((c, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-gray-200 transition-all">
                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${c.color}`}>
                    <c.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2957] mb-3">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{c.desc}</p>
                </div>
                <Link href={c.link} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700">
                  Explore detailed capability <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security Guardrails */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-emerald-600 font-bold text-lg">
              <Shield className="w-6 h-6" />
              Security, Privacy and Regulatory Transparency
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Regulations vary by country and industry. Sownmark does not claim automatic compliance with HIPAA, TCPA, GDPR, CCPA, the Australian Privacy Act, Canadian privacy law, Singapore PDPA or any other regime. Implementation requires consent management, data controls, access controls, secure integrations, human escalation, auditability and industry-specific compliance review. Call recording and AI disclosure requirements differ by jurisdiction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-gray-600">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <strong className="text-gray-900 block mb-1">Human Handoff</strong>
                Warm escalation with context whenever caller requests a human.
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <strong className="text-gray-900 block mb-1">Least Privilege</strong>
                Encrypted API connectors with minimal data exposure to LLMs.
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <strong className="text-gray-900 block mb-1">Audit Trail</strong>
                Full conversation logs, timestamps, and opt-out records stored.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-black text-[#1a2957] mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-2">What is the difference between a chatbot and a Multi AI Agent?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A chatbot typically handles one channel and scripted replies. A Multi AI Agent coordinates voice, messaging, scheduling and CRM actions with shared context across phone, SMS, email, and calendars.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-2">Will callers know they are talking to AI?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Disclosure requirements vary by region. We configure disclosure greetings according to your company policy and local legal requirements (such as FCC guidelines in the US).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-2">Can it handle complex or emotional calls?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No. It should escalate them immediately. Scope and escalation triggers are strictly defined up front so sensitive matters reach your human team.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-2">Does it replace my staff?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No. It handles repetitive conversations and after-hours volume so your in-office staff can focus on the critical tasks that require human judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="p-10 sm:p-12 rounded-3xl bg-[#1a2957] text-white space-y-4 shadow-xl">
            <h2 className="text-3xl font-black text-white">Ready to Architect Your Multi AI Agent System?</h2>
            <p className="text-blue-100 text-sm max-w-xl mx-auto leading-relaxed pb-4">
              Tell us about your business, lead channels, and phone flows. We will review your processes honestly and design a custom agent framework.
            </p>
            <Button asChild size="lg" className="bg-white text-[#1a2957] hover:bg-gray-100 font-bold px-8 rounded-full shadow-lg">
              <Link href="/contact#strategy-call">Book an AI Automation Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
