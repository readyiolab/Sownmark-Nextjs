"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { cityContent, CityData } from '@/data/cityData';
export { cityContent };
export type { CityData };


interface CityLocationClientProps {
  cityKey: string;
}

export default function CityLocationClient({ cityKey }: CityLocationClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const data = cityContent[cityKey] || cityContent.delhi;

  const faqs = [
    { q: `Which is the best digital marketing agency in ${data.name}?`, a: `Sownmark is recognized as one of the best digital marketing and custom software agencies in ${data.name}. We combine performance SEO, GEO, and PPC ads to scale local businesses.` },
    { q: `How to find a good digital agency in ${data.name}?`, a: `Look for agencies with clear case study metrics, custom engineering capabilities, and expertise in AI-ready optimization like GEO and AEO. Sownmark provides free strategy audits for brands in ${data.name}.` },
    { q: `What services does Sownmark offer in ${data.name}?`, a: 'We offer traditional SEO, Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), Google/Meta Paid search, programmatic display campaigns, React/Flutter custom development, and tech hiring solutions.' },
    { q: `How much do digital services cost in ${data.name}?`, a: 'Our campaigns are custom tailored, starting from ₹15,000/month for organic campaigns up to enterprise level budgets.' },
    { q: `Can you build custom apps for startups in ${data.name}?`, a: 'Yes. Our developer team builds cross-platform mobile apps using React Native and Flutter, plus custom SaaS dashboards.' },
    { q: `Does Sownmark have an office in ${data.name}?`, a: `We operate operations hubs and client accounts in major digital centers, serving businesses in ${data.name} via dedicated regional operations leads.` },
    { q: `How do we track campaign progress?`, a: 'We provide real-time custom reporting dashboards syncing website metrics, search queries, and conversion lead counts.' },
    { q: `How to contact your team in ${data.name}?`, a: 'You can submit our contact form, email hello@sownmark.com, call +91 97921 66702, or send a direct chat message via WhatsApp.' },
  ];

  return (
    <>
      {/* Featured Snippet Block */}
      <div className="sr-only">
        {`Sownmark is a leading digital marketing and technology agency serving businesses in ${data.name}, India. We offer SEO, generative engine optimisation (GEO), answer engine optimisation (AEO), display advertising, social media management, influencer marketing, web development, and software development to brands across ${data.name}.`}
      </div>

      <div className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
          </div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-2 border border-white/20">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold tracking-widest uppercase">{data.name} Market Operations</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
              Best Digital Marketing Agency in {data.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {data.intro}
            </p>
          </div>
        </section>

        {/* Local Insights & Stats */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <h2 className="text-3xl font-extrabold text-[#1a2957]">{data.name} Digital Market Insights</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{data.insights}</p>
              <div className="p-4 bg-white rounded-2xl border border-gray-100 space-y-2">
                <h4 className="font-bold text-gray-900 text-sm">Local Office / Support:</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{data.officeContact}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {data.localStats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600">{stat.value}</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Offered in City */}
        <section className="py-24">
          <div className="container max-w-7xl mx-auto px-4 text-center space-y-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Services Offered in {data.name}</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm space-y-3">
                <h3 className="font-extrabold text-gray-900 text-lg">AI-Ready SEO (GEO+AEO)</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Optimize content keywords and schemas to rank on both traditional Google and chat LLM citation engines.</p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm space-y-3">
                <h3 className="font-extrabold text-gray-900 text-lg">Paid Search & Display Ads</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Run Google Display Network, programmatic bidding, and remarketing campaigns to acquire local leads.</p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm space-y-3">
                <h3 className="font-extrabold text-gray-900 text-lg">Web & Software Dev</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Launch custom React/Next.js platforms and cross-platform mobile apps backed by Agile sprints.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4 space-y-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900">Local FAQs</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:text-blue-600 transition-colors gap-4"
                  >
                    <span>{faq.q}</span>
                    <span className="text-2xl font-light text-gray-400 shrink-0">
                      {activeFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-[300px] border-t border-gray-50' : 'max-h-0'}`}>
                    <p className="p-6 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1a2957] text-white text-center">
          <div className="container max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Partner with Sownmark in {data.name}</h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">Let's audit your technical domain and build a custom local strategy roadmap today.</p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-gray-50 transition-all"
              >
                <span>Book Strategy Call</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
