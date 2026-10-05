import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Calculator,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'AI Automation Resources and Guides | Sownmark',
  description:
    'Guides on AI voice agents, missed call recovery, SMS and email automation, scheduling and lead qualification for local and service businesses.',
  keywords: [
    'AI automation guides',
    'AI voice agent guide',
    'missed call recovery guide',
    'AI appointment scheduling guide',
    'AI lead follow-up guide',
    'AI for small business',
  ],
  alternates: {
    canonical: 'https://sownmark.com/resources/',
  },
};

const clusters = [
  {
    title: 'Multi AI Agent Architecture',
    articles: [
      'What Is a Multi AI Agent? A Plain-English Guide',
      'Chatbot vs Voice Agent vs Multi AI Agent: What Is the Difference?',
      'Architecture of a Multi-Channel AI Agent for Local Businesses',
      'Build vs Buy: Custom AI Agents or Off-the-Shelf Tools?',
      'What Should an AI Agent Never Handle? A Scope Checklist',
    ],
  },
  {
    title: 'AI Voice Agents & Receptionists',
    articles: [
      'How Does an AI Voice Agent Work? Speech, Intent and Action',
      'AI Receptionist vs Answering Service vs Voicemail',
      'How to Evaluate an AI Voice Agent Demo: 12 Questions',
      'AI Voice Agent Latency and Interruptions Explained',
      'Do Callers Need to Be Told They Are Talking to AI?',
    ],
  },
  {
    title: 'Missed Call Recovery & Revenue',
    articles: [
      'How Much Do Missed Calls Cost? A Calculation Framework',
      'Missed Call Text-Back: How It Works and When It Fails',
      'Why Most Missed Calls Never Call Back',
      'After-Hours Call Handling Options Compared',
      'How to Audit Your Missed Calls in One Afternoon',
    ],
  },
  {
    title: 'Appointment Scheduling Automation',
    articles: [
      'How AI Books Appointments Against a Live Calendar',
      'Reducing No-Shows With Reminder Sequences',
      'Scheduling Rules Every Service Business Should Define',
      'Handling Emergency vs Routine Bookings',
      'Double Booking Prevention in Automated Scheduling',
    ],
  },
  {
    title: 'Lead Qualification & Speed to Lead',
    articles: [
      'How to Write Qualification Questions an AI Can Ask',
      'Speed to Lead: What the Research Actually Says',
      'Lead Scoring Basics for Service Businesses',
      'When to Hand a Lead to a Human Salesperson',
      'Follow-Up Cadences Without Being Annoying',
    ],
  },
  {
    title: 'Two-Way SMS & Email Automation',
    articles: [
      'Two-Way SMS for Business: Consent, Registration and Best Practice',
      'A2P 10DLC Explained for Business Owners',
      'SMS vs Phone vs Email: Which Channel Converts Which Lead?',
      'Brand Voice Controls for AI Email',
    ],
  },
  {
    title: 'Industry Applications',
    articles: [
      'AI Front Desk for Dental Practices: What Is Realistic',
      'Reducing Dental No-Shows With Automation',
      'AI in Healthcare Front Offices: Privacy and Boundaries',
      'Turning Med Spa Consultation Inquiries Into Bookings',
      'AI Dispatch Support for HVAC Companies',
      'Emergency Call Triage for Plumbers',
      'AI Legal Intake: Benefits, Risks and Ethics Considerations',
      'Responding to Real Estate Portal Leads Within Minutes',
    ],
  },
  {
    title: 'Implementation & ROI',
    articles: [
      'Cost of an AI Agent Project: Pricing Factors Explained',
      'AI Agent Implementation Timeline: What Happens in Each Phase',
      'Which CRM Fields an AI Agent Should Write To',
      'Connecting an AI Agent to Your CRM: What to Expect',
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Resources</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Knowledge Base & Practical Guides
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            AI Automation Resources and Guides
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Objective frameworks, regulatory guides, and practical playbooks on AI voice agents, missed call recovery, two-way SMS, and automated scheduling for service businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="/#calculator" className="inline-flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Launch Lost Revenue Calculator
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-800 text-slate-300 hover:bg-slate-900">
              <Link href="/contact#strategy-call">Book a Strategy Call</Link>
            </Button>
          </div>
        </div>

        {/* Resource Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {clusters.map((cluster, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cluster.title}
              </h2>
              <ul className="space-y-2.5">
                {cluster.articles.map((art, aIdx) => (
                  <li key={aIdx} className="text-sm text-slate-300 hover:text-primary transition-colors flex items-start gap-2">
                    <span className="text-slate-500 text-xs mt-1">▸</span>
                    <span>{art}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Transparent Editorial Policy */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
          <h3 className="text-base font-bold text-white">Editorial & Accuracy Standards</h3>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our guides are written by real software engineers and automation specialists. We do not invent statistics, make speculative ranking promises, or claim automatic regulatory compliance without human verification.
          </p>
        </div>
      </div>
    </main>
  );
}
