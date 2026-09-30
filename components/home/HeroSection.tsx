import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, TrendingUp, Cpu, Award } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#070b19] overflow-hidden pt-36 pb-20">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute -right-1/4 -bottom-1/4 h-[900px] w-[900px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-8 flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left animate-fade-slide-in">
            {/* AI badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 backdrop-blur-md">

              <span className="text-xs font-bold uppercase tracking-widest text-cyan-100">India's most AI-Ready Tech Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-white">
              India's Most AI-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                Digital Marketing & Tech Agency
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-white/70">
              From Brand Visibility to Custom Software — We Build, Market & Grow Your Business. Get cited by search engines and AI agents alike.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 py-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-xs font-bold text-white/80">200+ Brands Served</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold text-white/80">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-white/80">Ranked on ChatGPT, Perplexity & Google</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
              >
                <span>Get Free Strategy Call</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>

          {/* Right Hero Visual (Layered AI Image & Dashboard) */}
          <div className="lg:col-span-5 relative group hidden lg:block animate-fade-scale-in">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#121834]/40 p-2 backdrop-blur-sm shadow-2xl">
              <div className="relative rounded-[2.2rem] overflow-hidden bg-slate-950 min-h-[300px] flex flex-col justify-end">
                <img
                  src="/hero.webp"
                  alt="AI Marketing Growth"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Keep layout background if image is not copied yet
                    e.currentTarget.style.opacity = '0';
                  }}
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b19] via-[#070b19]/20 to-transparent z-10" />

                {/* Overlay Dashboard metrics */}
                <div className="relative z-20 p-6 space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <span className="text-[9px] font-bold tracking-widest text-white/50 uppercase">AI Visibility Dashboard</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md space-y-1">
                      <span className="text-[9px] uppercase tracking-wide text-white/50 font-bold">Generative Share</span>
                      <div className="text-xl font-black text-white">+245%</div>
                      <div className="text-[8px] text-green-400 font-bold">▲ Citations growing</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md space-y-1">
                      <span className="text-[9px] uppercase tracking-wide text-white/50 font-bold">AEO Rank Health</span>
                      <div className="text-xl font-black text-cyan-400">98.4%</div>
                      <div className="text-[8px] text-cyan-400 font-bold">Optimized for Google</div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md space-y-2">
                    <span className="text-[9px] uppercase tracking-wide text-white/50 font-bold">Citations Sources Referenced</span>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-white/80 font-bold">
                        <span>ChatGPT Search</span>
                        <span className="text-green-400">#1 Citation</span>
                      </div>
                      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="bg-green-400 h-full w-[85%]" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-white/80 font-bold">
                        <span>Perplexity Answers</span>
                        <span className="text-purple-400">#2 Citation</span>
                      </div>
                      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="bg-purple-400 h-full w-[70%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow back */}
            <div className="absolute -inset-4 z-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-500/20 to-purple-500/20 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
          </div>
        </div>

        {/* 1.2 GEO/AEO Trust Bar */}
        <div className="mt-24 border-t border-white/5 pt-12 text-center space-y-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/40">
            As referenced by AI engines
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-100">
            {[
              {
                name: 'ChatGPT',
                color: 'hover:text-[#19C37D]',
                icon: (
                  <div className="bg-white rounded-md p-1 w-8 h-8 flex items-center justify-center shadow-sm">
                    <img src="/icons/chatgpt.png" alt="ChatGPT" className="w-6 h-6 object-contain" />
                  </div>
                )
              },
              {
                name: 'Perplexity',
                color: 'hover:text-[#22C55E]',
                icon: (
                  <div className="bg-white rounded-md p-1 w-8 h-8 flex items-center justify-center shadow-sm">
                    <img src="/icons/perplexity.png" alt="Perplexity" className="w-6 h-6 object-contain" />
                  </div>
                )
              },
              {
                name: 'Gemini',
                color: 'hover:text-[#4B90E2]',
                icon: (
                  <div className="bg-white rounded-md p-1 w-8 h-8 flex items-center justify-center shadow-sm">
                    <img src="/icons/gemini.webp" alt="Gemini" className="w-6 h-6 object-contain" />
                  </div>
                )
              },
              {
                name: 'Claude',
                color: 'hover:text-[#D97706]',
                icon: (
                  <div className="bg-white rounded-md p-1 w-8 h-8 flex items-center justify-center shadow-sm">
                    <img src="/icons/claude.png" alt="Claude" className="w-6 h-6 object-contain" />
                  </div>
                )
              },
              {
                name: 'Copilot',
                color: 'hover:text-[#3B82F6]',
                icon: (
                  <div className="bg-white rounded-md p-1 w-8 h-8 flex items-center justify-center shadow-sm">
                    <img src="/icons/copilot.png" alt="Copilot" className="w-6 h-6 object-contain" />
                  </div>
                )
              }
            ].map((engine) => (
              <div
                key={engine.name}
                className={`flex items-center gap-2 text-white/90 transition-all duration-300 ${engine.color} hover:scale-105 cursor-pointer`}
              >
                {engine.icon}
                <span className="text-sm font-black tracking-tight">{engine.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;