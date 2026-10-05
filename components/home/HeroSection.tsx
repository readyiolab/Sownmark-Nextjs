import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  PhoneCall,
  MessageSquare,
  Mail,
  Calendar,
  Database,
  UserCheck,
  Cpu,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-[#1a2957] text-white overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* Background radial lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-8 flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-200">
                Custom Multi AI Agent Systems
              </span>
            </div>

            {/* Main H1 Headline from Phase 2 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight text-white">
              Custom Multi AI Agents That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-emerald-300">
                Answer, Qualify, Follow Up and Schedule
              </span>
            </h1>

            {/* Sub-headline copy from Phase 2 */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-blue-100">
              Sownmark designs and builds custom AI agents that handle customer conversations across voice, SMS and email.
              They answer inbound calls, respond to new leads, ask qualifying questions, book appointments and hand off to
              your team when a person is needed.
            </p>

            {/* Target Industries Line */}
            <div className="text-xs sm:text-sm text-blue-200 font-medium">
              <span className="text-white font-semibold">Built for:</span> Dental, Healthcare, Med Spa, Home Services,
              Legal, Real Estate, Auto Dealerships & Veterinary practices.
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact#strategy-call"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                <span>Book an AI Automation Strategy Call</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#calculator"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <span>See How It Works</span>
              </Link>
            </div>
          </div>

          {/* Right Visual: Central AI Agent Core Architecture */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Sownmark Multi AI Brain
                  </span>
                </div>
                <span className="text-[11px] text-cyan-200 font-mono bg-blue-900/60 border border-blue-400/30 px-2 py-0.5 rounded">
                  Connected Core
                </span>
              </div>

              {/* Central Core & Channels */}
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg text-center w-full max-w-[260px]">
                    <Cpu className="w-7 h-7 mx-auto mb-1.5 text-white" />
                    <div className="text-sm font-extrabold">One Central AI Agent</div>
                    <div className="text-[10px] text-white/90">Shared memory & business rules</div>
                  </div>
                </div>

                {/* Satellite Nodes Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/15 border border-white/15 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-400/20 text-blue-200">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">AI Voice</div>
                      <div className="text-[10px] text-blue-200">Inbound & Missed Calls</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/15 border border-white/15 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-400/20 text-emerald-200">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Two-Way SMS</div>
                      <div className="text-[10px] text-blue-200">Instant Lead Text-Back</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/15 border border-white/15 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-400/20 text-purple-200">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">AI Email</div>
                      <div className="text-[10px] text-blue-200">Triage & Follow-up</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/15 border border-white/15 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-400/20 text-amber-200">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Scheduling</div>
                      <div className="text-[10px] text-blue-200">Live Calendar Booking</div>
                    </div>
                  </div>
                </div>

                {/* Workflow Flow Banner */}
                <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between text-[11px] text-white">
                  <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                    <UserCheck className="w-3.5 h-3.5" />
                    Human Handoff
                  </span>
                  <span className="text-blue-300">→</span>
                  <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                    <Database className="w-3.5 h-3.5" />
                    CRM Sync
                  </span>
                  <span className="text-blue-300">→</span>
                  <span className="text-white font-bold">Booked Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Trust & Credibility Strip from Phase 2 */}
        <div className="mt-16 pt-10 border-t border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
              <div className="text-xs font-bold text-white mb-1">Custom-Built Workflows</div>
              <div className="text-[11px] text-blue-200">Designed for your exact process, not generic templates</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
              <div className="text-xs font-bold text-white mb-1">Human Handoff Guaranteed</div>
              <div className="text-[11px] text-blue-200">Smooth escalation with full context when callers need a person</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
              <div className="text-xs font-bold text-white mb-1">Consent & Data Controls</div>
              <div className="text-[11px] text-blue-200">Built-in opt-out handling, encryption, and auditability</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
              <div className="text-xs font-bold text-white mb-1">Direct Engineering Support</div>
              <div className="text-[11px] text-blue-200">hello@sownmark.com · +91 9792166702</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;