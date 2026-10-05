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
} from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#070b19] overflow-hidden pt-36 pb-20">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute -right-1/4 -bottom-1/4 h-[900px] w-[900px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-8 flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-200">
                Custom Multi AI Agent Systems
              </span>
            </div>

            {/* Main H1 Headline from Phase 2 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
              Custom Multi AI Agents That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                Answer, Qualify, Follow Up and Schedule
              </span>
            </h1>

            {/* Sub-headline copy from Phase 2 */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-300">
              Sownmark designs and builds custom AI agents that handle customer conversations across voice, SMS and email.
              They answer inbound calls, respond to new leads, ask qualifying questions, book appointments and hand off to
              your team when a person is needed.
            </p>

            {/* Target Industries Line */}
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              <span className="text-slate-300 font-semibold">Built for:</span> Dental, Healthcare, Med Spa, Home Services,
              Legal, Real Estate, Auto Dealerships & Veterinary practices.
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact#strategy-call"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
              >
                <span>Book an AI Automation Strategy Call</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#calculator"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                <span>See How It Works</span>
              </Link>
            </div>
          </div>

          {/* Right Visual: Central AI Agent Core Architecture */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Sownmark Multi AI Brain
                  </span>
                </div>
                <span className="text-[11px] text-cyan-400 font-mono bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                  Connected Core
                </span>
              </div>

              {/* Central Core & Channels */}
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 text-center w-full max-w-[260px]">
                    <Cpu className="w-7 h-7 mx-auto mb-1.5 text-white" />
                    <div className="text-sm font-extrabold">One Central AI Agent</div>
                    <div className="text-[10px] text-white/80">Shared memory & business rules</div>
                  </div>
                </div>

                {/* Satellite Nodes Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">AI Voice</div>
                      <div className="text-[10px] text-slate-400">Inbound & Missed Calls</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Two-Way SMS</div>
                      <div className="text-[10px] text-slate-400">Instant Lead Text-Back</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">AI Email</div>
                      <div className="text-[10px] text-slate-400">Triage & Follow-up</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Scheduling</div>
                      <div className="text-[10px] text-slate-400">Live Calendar Booking</div>
                    </div>
                  </div>
                </div>

                {/* Workflow Flow Banner */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <UserCheck className="w-3.5 h-3.5" />
                    Human Handoff
                  </span>
                  <span className="text-slate-500">→</span>
                  <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                    <Database className="w-3.5 h-3.5" />
                    CRM Sync
                  </span>
                  <span className="text-slate-500">→</span>
                  <span className="text-slate-200 font-bold">Booked Appointment</span>
                </div>
              </div>
            </div>

            {/* Subtle glow behind card */}
            <div className="absolute -inset-4 z-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-500/15 to-purple-500/20 blur-3xl opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* Section 2: Trust & Credibility Strip from Phase 2 */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <div className="text-xs font-bold text-white mb-1">Custom-Built Workflows</div>
              <div className="text-[11px] text-slate-400">Designed for your exact process, not generic templates</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <div className="text-xs font-bold text-white mb-1">Human Handoff Guaranteed</div>
              <div className="text-[11px] text-slate-400">Smooth escalation with full context when callers need a person</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <div className="text-xs font-bold text-white mb-1">Consent & Data Controls</div>
              <div className="text-[11px] text-slate-400">Built-in opt-out handling, encryption, and auditability</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <div className="text-xs font-bold text-white mb-1">Direct Engineering Support</div>
              <div className="text-[11px] text-slate-400">Contact: hello@sownmark.com · +91 9792166702</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;