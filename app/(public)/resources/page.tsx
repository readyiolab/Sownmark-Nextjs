import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Calculator,
  ArrowRight,
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
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Knowledge Base & Practical Guides
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            AI Automation Resources & Guides
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Objective frameworks, regulatory guides, and practical playbooks on AI voice agents, missed call recovery, two-way SMS, and automated scheduling for service businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="bg-white text-[#1a2957] hover:bg-gray-100 font-bold rounded-full shadow-lg">
              <Link href="/#calculator" className="inline-flex items-center gap-2">
                <Calculator className="w-4 h-4 text-blue-600" />
                Launch Lost Revenue Calculator
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full">
              <Link href="/contact#strategy-call">Book a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resource Clusters Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {clusters.map((cluster, idx) => (
              <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-5 hover:shadow-md transition-all">
                <h2 className="text-xl font-bold text-[#1a2957] flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-blue-600" />
                  {cluster.title}
                </h2>
                <ul className="space-y-3">
                  {cluster.articles.map((art, aIdx) => (
                    <li key={aIdx} className="text-sm text-gray-700 hover:text-blue-600 transition-colors flex items-start gap-2.5 font-medium">
                      <span className="text-blue-500 font-bold text-xs mt-1">▸</span>
                      <span>{art}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Transparent Editorial Policy */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-md text-center space-y-3">
            <h3 className="text-xl font-bold text-[#1a2957]">Editorial & Accuracy Standards</h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our guides are written by real software engineers and automation specialists. We do not invent statistics, make speculative ranking promises, or claim automatic regulatory compliance without human verification.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
