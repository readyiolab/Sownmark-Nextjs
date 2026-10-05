import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneCall,
  ShieldAlert,
  CheckCircle2,
  Headphones,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'AI Voice Agents for Business Calls | Sownmark',
  description:
    'Custom AI voice agents answer inbound calls, qualify callers, book appointments and hand off to your team. Approved outbound workflows available.',
  keywords: [
    'AI voice agent for business',
    'AI receptionist',
    'AI inbound call answering',
    'AI outbound calling',
    'missed call recovery',
    'AI call routing',
  ],
  alternates: {
    canonical: 'https://sownmark.com/ai-voice-agents/',
  },
};

const voiceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://sownmark.com/ai-voice-agents/#webpage',
      url: 'https://sownmark.com/ai-voice-agents/',
      name: 'AI Voice Agents for Business Calls',
      isPartOf: { '@id': 'https://sownmark.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sownmark.com/' },
        { '@type': 'ListItem', position: 2, name: 'Multi AI Agents', item: 'https://sownmark.com/ai-agents/' },
        { '@type': 'ListItem', position: 3, name: 'AI Voice Agents', item: 'https://sownmark.com/ai-voice-agents/' },
      ],
    },
    {
      '@type': 'Service',
      name: 'AI Voice Agents for Business',
      serviceType: 'Voice AI receptionist and inbound call automation',
      provider: { '@id': 'https://sownmark.com/#organization' },
      areaServed: ['United States', 'Australia', 'Canada', 'Singapore', 'United Kingdom', 'New Zealand', 'Ireland'],
      description: 'Custom AI voice agents that answer calls, qualify callers, book appointments, and route to humans.',
      url: 'https://sownmark.com/ai-voice-agents/',
    },
  ],
};

export default function AiVoiceAgentsPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/ai-agents" className="hover:text-white">Multi AI Agents</Link>
          <span>/</span>
          <span className="text-primary font-semibold">AI Voice Agents</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <PhoneCall className="w-3.5 h-3.5" />
            Inbound & Outbound Voice Automation
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Custom AI Voice Agents That Answer, Qualify and Book by Phone
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Can AI answer business calls? Yes. A custom voice agent can answer inbound calls, converse in natural speech, provide approved information, qualify callers, book appointments or transfer to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="/contact#strategy-call">Book an AI Voice Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-800 text-slate-300 hover:bg-slate-900">
              <Link href="/ai-agents">View Multi AI Architecture</Link>
            </Button>
          </div>
        </div>

        {/* What an AI voice agent can do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Headphones className="w-5 h-5 text-blue-400" />
              What Can an AI Voice Agent Do?
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>Answer inbound calls instantly during business hours and after-hours 24/7.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>Recover missed calls by triggering immediate callbacks or text-backs.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>Route calls by department, emergency triage, or caller status (new vs returning).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>Book, confirm, and reschedule appointments directly into your calendar.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>Transfer live to staff with an instant contextual summary and transcript.</span>
              </li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              What Should a Voice Agent Never Handle?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We design strict guardrails into every agent. An AI voice agent must not provide:
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Direct medical advice or clinical diagnosis</li>
              <li>• Legal advice or case merits assessment</li>
              <li>• Emotionally charged disputes or customer grievance negotiations</li>
              <li>• Any information outside your pre-approved knowledge base</li>
            </ul>
            <p className="text-xs text-slate-500 pt-2">
              When encountering these triggers, the agent gracefully acknowledges and executes a warm transfer to human personnel.
            </p>
          </div>
        </div>

        {/* Regulatory & Outbound Notice */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-16 space-y-4">
          <h3 className="text-lg font-bold text-white">Inbound vs Outbound Voice & Legal Compliance</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Inbound is answering calls that reach your business. Outbound is calling leads or customers. Outbound calling is provided based on the client’s requirements, business model, applicable regulations and campaign objectives.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            In many jurisdictions (such as the US under 2024 FCC TCPA declaratory rulings), calls using AI-generated voices count as artificial voices requiring prior express consent and adherence to Do-Not-Call (DNC) registries. We scope outbound only where consent and compliance can be firmly established, and recommend client legal review.
          </p>
        </div>

        {/* Internal Navigation Flow */}
        <div className="border-t border-slate-800 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/ai-agents" className="text-sm text-slate-400 hover:text-white">
            ← Back to Multi AI Agents Pillar
          </Link>
          <Link href="/ai-appointment-scheduling" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80">
            Next: AI Appointment Scheduling →
          </Link>
        </div>
      </div>
    </main>
  );
}
