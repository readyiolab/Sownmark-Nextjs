import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneCall,
  ShieldAlert,
  CheckCircle2,
  Headphones,
  ArrowRight,
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
    <main className="bg-white text-gray-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-wider">
            <PhoneCall className="w-3.5 h-3.5" />
            Inbound & Outbound Voice Automation
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Custom AI Voice Agents That Answer, Qualify and Book
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Can AI answer business calls? Yes. A custom voice agent can answer inbound calls, converse in natural speech, provide approved information, qualify callers, book appointments or transfer to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="bg-white text-[#1a2957] hover:bg-gray-100 font-bold rounded-full shadow-lg">
              <Link href="/contact#strategy-call">Book an AI Voice Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full">
              <Link href="/ai-agents">View Multi AI Architecture</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities & Guardrails Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-5">
              <h2 className="text-2xl font-bold text-[#1a2957] flex items-center gap-2">
                <Headphones className="w-6 h-6 text-blue-600" />
                What Can an AI Voice Agent Do?
              </h2>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Answer inbound calls instantly during business hours and after-hours 24/7.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Recover missed calls by triggering immediate callbacks or text-backs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Route calls by department, emergency triage, or caller status (new vs returning).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Book, confirm, and reschedule appointments directly into your calendar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Transfer live to staff with an instant contextual summary and transcript.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-[#1a2957] flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-amber-500" />
                What Should It Never Handle?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We design strict guardrails into every agent. An AI voice agent must not provide:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Direct medical advice or clinical diagnosis</li>
                <li>• Legal advice or case merits assessment</li>
                <li>• Emotionally charged disputes or customer grievance negotiations</li>
                <li>• Any information outside your pre-approved knowledge base</li>
              </ul>
              <p className="text-xs text-gray-500 pt-2 leading-relaxed">
                When encountering these triggers, the agent gracefully acknowledges and executes a warm transfer to human personnel.
              </p>
            </div>
          </div>

          {/* Regulatory & Outbound Notice */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-md space-y-4">
            <h3 className="text-xl font-bold text-[#1a2957]">Inbound vs Outbound Voice & Legal Compliance</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Inbound is answering calls that reach your business. Outbound is calling leads or customers. Outbound calling is provided based on the client’s requirements, business model, applicable regulations and campaign objectives.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              In many jurisdictions (such as the US under 2024 FCC TCPA declaratory rulings), calls using AI-generated voices count as artificial voices requiring prior express consent and adherence to Do-Not-Call (DNC) registries. We scope outbound only where consent and compliance can be firmly established, and recommend client legal review.
            </p>
          </div>

          {/* Internal Navigation Flow */}
          <div className="border-t border-gray-100 mt-16 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/ai-agents" className="text-sm text-gray-500 hover:text-[#1a2957] font-semibold">
              ← Back to Multi AI Agents Pillar
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
