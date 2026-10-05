import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CalendarCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'AI Appointment Scheduling for Businesses | Sownmark',
  description:
    'AI appointment scheduling that books, confirms and reschedules by voice, SMS and email using your calendar and rules. Reduce manual booking.',
  keywords: [
    'AI appointment scheduling',
    'automated appointment booking',
    'AI scheduling assistant',
    'appointment reminder automation',
    'no-show reduction automation',
    'calendar integration AI',
  ],
  alternates: {
    canonical: 'https://sownmark.com/ai-appointment-scheduling/',
  },
};

const schedulingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://sownmark.com/ai-appointment-scheduling/#webpage',
      url: 'https://sownmark.com/ai-appointment-scheduling/',
      name: 'AI Appointment Scheduling for Businesses',
      isPartOf: { '@id': 'https://sownmark.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sownmark.com/' },
        { '@type': 'ListItem', position: 2, name: 'Multi AI Agents', item: 'https://sownmark.com/ai-agents/' },
        { '@type': 'ListItem', position: 3, name: 'AI Appointment Scheduling', item: 'https://sownmark.com/ai-appointment-scheduling/' },
      ],
    },
    {
      '@type': 'Service',
      name: 'AI Appointment Scheduling',
      serviceType: 'Automated multi-channel calendar booking and no-show reduction',
      provider: { '@id': 'https://sownmark.com/#organization' },
      areaServed: ['United States', 'Australia', 'Canada', 'Singapore', 'United Kingdom'],
      description: 'Intelligent AI appointment scheduling by voice, SMS, and email.',
      url: 'https://sownmark.com/ai-appointment-scheduling/',
    },
  ],
};

export default function AiAppointmentSchedulingPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schedulingSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/ai-agents" className="hover:text-white">Multi AI Agents</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Appointment Scheduling</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <CalendarCheck className="w-3.5 h-3.5" />
            Live Calendar Synchronization
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            AI Appointment Scheduling Across Voice, SMS and Email
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Can AI schedule appointments? Yes. The agent checks live availability, applies your rules and books through your calendar or scheduling system, then confirms by text or email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="/contact#strategy-call">Book an AI Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-800 text-slate-300 hover:bg-slate-900">
              <Link href="/ai-lead-qualification">Next: Lead Qualification</Link>
            </Button>
          </div>
        </div>

        {/* Business Scheduling Rules */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 mb-16 space-y-6">
          <h2 className="text-2xl font-bold text-white">Scheduling Rules We Configure For Your Operations</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Booking is rarely as simple as picking an empty slot. We customize logic for your exact business requirements:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Service Type & Duration', desc: 'Different lengths for consultations vs procedures.' },
              { title: 'Staff & Resource Assignment', desc: 'Route appointments to the correct provider or room.' },
              { title: 'Buffer Times & Travel Windows', desc: 'Prevent back-to-back strain and dispatch delays.' },
              { title: 'Lead-Time Constraints', desc: 'Enforce minimum notice (e.g., at least 2 hours out).' },
              { title: 'New vs Returning Patients', desc: 'Different intake questions and paperwork triggers.' },
              { title: 'Emergency Slot Reservation', desc: 'Hold critical daily windows for urgent needs.' },
            ].map((rule, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-sm font-bold text-white mb-1">{rule.title}</div>
                <div className="text-xs text-slate-400">{rule.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* No Double Booking Guarantee */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-16 space-y-4">
          <h3 className="text-lg font-bold text-white">Live Calendar Sync & Double-Booking Prevention</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every booking check queries live availability directly through Google Calendar, Microsoft Graph, or your industry CRM. When a slot is held, it locks in real-time, completely eliminating double bookings across voice, text, and web channels.
          </p>
        </div>

        {/* Navigation */}
        <div className="border-t border-slate-800 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/ai-sms-email-automation" className="text-sm text-slate-400 hover:text-white">
            ← Previous: AI SMS & Email
          </Link>
          <Link href="/ai-lead-qualification" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80">
            Next: AI Lead Qualification & Follow-Up →
          </Link>
        </div>
      </div>
    </main>
  );
}
