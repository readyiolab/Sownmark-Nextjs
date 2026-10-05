import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Shield,
  ArrowRight,
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
    <main className="bg-white text-gray-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schedulingSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-wider">
            <CalendarCheck className="w-3.5 h-3.5" />
            Live Calendar Synchronization
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            AI Appointment Scheduling Across Voice, SMS & Email
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Can AI schedule appointments? Yes. The agent checks live availability, applies your rules and books through your calendar or scheduling system, then confirms by text or email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="bg-white text-[#1a2957] hover:bg-gray-100 font-bold rounded-full shadow-lg">
              <Link href="/contact#strategy-call">Book an AI Strategy Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full">
              <Link href="/ai-lead-qualification">Next: Lead Qualification</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Scheduling Rules */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2957]">Scheduling Rules We Configure For Your Operations</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Booking is rarely as simple as picking an empty slot. We customize logic for your exact business requirements:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-2">
              {[
                { title: 'Service Type & Duration', desc: 'Different lengths for consultations vs full service appointments.' },
                { title: 'Staff & Resource Assignment', desc: 'Route appointments to the correct provider, room or technician.' },
                { title: 'Buffer Times & Travel Windows', desc: 'Prevent back-to-back strain and dispatch traffic delays.' },
                { title: 'Lead-Time Constraints', desc: 'Enforce minimum notice requirements (e.g. at least 2 hours out).' },
                { title: 'New vs Returning Clients', desc: 'Different intake questions, documents, and deposit triggers.' },
                { title: 'Emergency Slot Reservation', desc: 'Hold critical daily windows for urgent or VIP needs.' },
              ].map((rule, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-base font-bold text-gray-900 mb-1.5">{rule.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{rule.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* No Double Booking Guarantee */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-md space-y-4">
            <h3 className="text-xl font-bold text-[#1a2957]">Live Calendar Sync & Double-Booking Prevention</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Every booking check queries live availability directly through Google Calendar, Microsoft Graph, or your industry CRM. When a slot is held, it locks in real-time, completely eliminating double bookings across voice, text, and web channels.
            </p>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-100 mt-16 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/ai-sms-email-automation" className="text-sm text-gray-500 hover:text-[#1a2957] font-semibold">
              ← Previous: AI SMS & Email
            </Link>
            <Link href="/ai-lead-qualification" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700">
              Next: AI Lead Qualification & Follow-Up →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
