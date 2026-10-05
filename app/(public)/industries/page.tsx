import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Building2,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'AI Agents by Industry: Dental, Legal, Home Services | Sownmark',
  description:
    'Custom AI agents for dental, healthcare, med spa, HVAC, plumbing, roofing, law, real estate, auto and veterinary businesses.',
  keywords: [
    'AI agents by industry',
    'AI receptionist for dental practices',
    'AI for home service companies',
    'AI intake for law firms',
    'AI for med spas',
    'AI for real estate lead follow-up',
  ],
  alternates: {
    canonical: 'https://sownmark.com/industries/',
  },
};

const industriesData = [
  {
    id: 'dental',
    name: 'Dental Practices',
    icon: Stethoscope,
    problem: 'Front desk overloaded; high missed-call volume during lunch hours and after-hours.',
    workflow: 'Call answered promptly, caller identified as new vs existing patient, hygiene or checkup booked into dental software, SMS confirmation sent.',
    compliance: 'Patient data handling: HIPAA applies to US covered entities and may require a Business Associate Agreement (BAA). Non-clinical triage only.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    problem: 'Intake and reschedule call volume creates patient hold times and administrative burnout.',
    workflow: 'Non-clinical intake completed, appointment logistics verified, urgent symptoms routed immediately to clinical triage nurses.',
    compliance: 'No clinical advice by the agent. Strict privacy, access controls, and data encryption required.',
  },
  {
    id: 'med-spa',
    name: 'Med Spas',
    problem: 'Consultation inquiries from paid social campaigns go cold without immediate response.',
    workflow: 'Inquiry answered instantly from approved treatment FAQs, consultation fee/deposit collected, no-show follow-up triggered.',
    compliance: 'Advertising standards and aesthetic treatment claim guidelines strictly enforced.',
  },
  {
    id: 'cosmetic-clinics',
    name: 'Cosmetic Clinics',
    problem: 'High-value surgical and non-surgical consultation leads lost to slow response times.',
    workflow: 'Two-way SMS response within 60 seconds, pre-qualification on procedure readiness, doctor consultation calendar booking.',
    compliance: 'Pre-approved informational content only; no speculative medical promises.',
  },
  {
    id: 'hvac',
    name: 'HVAC Services',
    problem: 'Emergency heating/cooling calls mixed with routine maintenance inquiries, creating dispatch chaos.',
    workflow: 'Triage by urgency (no heat in winter vs annual tune-up), immediate on-call technician alert, quote follow-up automation.',
    compliance: 'Express consent obtained before triggering SMS appointment tracking.',
  },
  {
    id: 'plumbing',
    name: 'Plumbing Contractors',
    problem: 'Missed emergency burst-pipe calls go straight to competing local plumbers.',
    workflow: 'Emergency burst/flood keywords detected, immediate live transfer to on-call plumber, routine jobs booked into dispatch software.',
    compliance: 'Opt-in compliance for mobile updates and service arrival notifications.',
  },
  {
    id: 'roofing',
    name: 'Roofing Contractors',
    problem: 'Long quote cycles and extreme call spikes during hail and storm seasons.',
    workflow: 'On-site storm damage inspection scheduled, insurance-claim question triage, multi-touch follow-up on outstanding estimates.',
    compliance: 'Insurance claim representations require licensed adjuster and human oversight.',
  },
  {
    id: 'home-services',
    name: 'Home Services (Electrical, Painting, Cleaning)',
    problem: 'Multiple small jobs require constant phone tag and calendar juggling while technicians work.',
    workflow: 'Service request details captured, service window offered based on technician GPS/radius, automated reminders.',
    compliance: 'Clear cancellation and scheduling policies disclosed.',
  },
  {
    id: 'law-firms',
    name: 'Law Firms',
    problem: 'Intake screening consumes valuable billable staff time, while callers need empathetic, confidential triage.',
    workflow: 'Practice-area screening, conflict-check preliminary data collection, consultation calendar booking, routing to responsible attorney.',
    compliance: 'Strict adherence to attorney-client privilege and legal ethics. No legal advice given by the agent.',
  },
  {
    id: 'real-estate',
    name: 'Real Estate Brokerages & Teams',
    problem: 'Zillow and portal leads demand sub-5-minute contact, otherwise buyers contact another listing agent.',
    workflow: 'Immediate SMS/voice response to listing inquiry, pre-approval status checked, in-person or virtual showing scheduled.',
    compliance: 'Fair Housing Act language compliance built into prompt guardrails.',
  },
  {
    id: 'auto-dealerships',
    name: 'Auto Dealerships',
    problem: 'Internet inquiries and service department calls compete with busy showroom sales reps.',
    workflow: 'Test-drive appointment booked, trade-in details collected, service lane recall notices scheduled.',
    compliance: 'Pricing disclosures and TCPA consent verification for promotional messaging.',
  },
  {
    id: 'auto-repair',
    name: 'Auto Repair Shops',
    problem: 'Technicians under vehicle hoods cannot pick up the phone, causing callers to look elsewhere.',
    workflow: 'Vehicle year/make/model captured, diagnostic drop-off time scheduled, status updates sent via SMS.',
    compliance: 'Consent-based status notifications and estimate approvals.',
  },
  {
    id: 'veterinary',
    name: 'Veterinary Clinics',
    problem: 'Urgent pet illness questions overwhelm front desk staff during peak morning hours.',
    workflow: 'Urgent life-threat cases routed immediately to on-duty vet team, routine exams and vaccination boosters booked autonomously.',
    compliance: 'Clear disclosure that the agent provides logistical assistance, not veterinary diagnosis.',
  },
];

const industriesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://sownmark.com/industries/#webpage',
      url: 'https://sownmark.com/industries/',
      name: 'AI Agents by Industry: Dental, Legal, Home Services | Sownmark',
      isPartOf: { '@id': 'https://sownmark.com/#website' },
    },
    {
      '@type': 'ItemList',
      itemListElement: industriesData.map((ind, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: ind.name,
        url: `https://sownmark.com/industries/#${ind.id}`,
      })),
    },
  ],
};

export default function IndustriesPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Industries</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Tailored Industry Workflows
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Custom AI Agents Built Around Your Industry’s Workflows
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Every trade and practice has unique scheduling rules, emergency thresholds, and compliance boundaries. We configure custom Multi AI Agents that reflect how your business actually operates.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <Link href="/contact#strategy-call">Book an AI Strategy Call</Link>
          </Button>
        </div>

        {/* Quick Filter Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-16">
          {industriesData.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.id}`}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              {ind.name}
            </a>
          ))}
        </div>

        {/* Detailed Industry Cards (13 sections) */}
        <div className="space-y-10">
          {industriesData.map((ind) => (
            <section
              key={ind.id}
              id={ind.id}
              className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 scroll-mt-24 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  {ind.name}
                </h2>
                <Link
                  href="/contact#strategy-call"
                  className="text-xs font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-1"
                >
                  Configure for {ind.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">The Operational Bottleneck</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{ind.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-emerald-400 tracking-wider mb-2">Example AI Agent Workflow</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{ind.workflow}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-300">Compliance & Regulatory Note: </strong>
                  {ind.compliance}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-800/40 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Don't See Your Specific Trade or Niche?</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            We build custom logic for any business that relies on phone calls, text follow-ups, and booked appointments.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <Link href="/contact#strategy-call">Discuss Your Industry Flow</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
