"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { caseStudiesData } from '@/data/caseStudies';
import { Trophy, ArrowRight, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Categories for filtering
  const filters = ['All', 'Performance Marketing & SEO Branding', 'Start-up & Business Growth Portfolio', 'The Delta Ecosystem', 'High-Performance Tech & Fintech', 'Australian Service Sector', 'USA High-Growth Markets'];

  const filteredStudies = selectedFilter === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((x) => x.category === selectedFilter);

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Sownmark Case Studies',
    'description': 'Discover how Sownmark helps brands scale with SEO, custom development, and performance advertising.',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': caseStudiesData.map((study, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'url': `https://sownmark.com/case-studies/${study.id}`,
        'name': study.headline
      }))
    }
  };

  return (
    <>
      <title>Case Studies & Success Stories – Sownmark Digital</title>
      <meta name="description" content="Explore Sownmark Digital's case studies and success stories. See how we help brands scale with SEO, influencer marketing, and high-converting websites." />
      <link rel="canonical" href="https://sownmark.com/case-studies" />
      <meta name="keywords" content="AI Performance Marketing Agency, Custom Software Development Company, Generative Engine Optimization Services, Scalable MVP Development Services, AI Integration and Automation Agency, ROI-Driven Lead Generation Agency" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />

      <div className="bg-white min-h-screen text-gray-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
          </div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-2 border border-white/20">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-bold tracking-widest uppercase">Portfolio Proof</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
              Our Success Case Studies
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore how we have designed platforms and scaled acquisition campaigns for brands in India, Australia, and the USA.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-gray-50 border-b border-gray-100">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${selectedFilter === filter
                      ? 'bg-[#1a2957] text-white shadow-md scale-105'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300'
                    }`}
                >
                  {filter === 'All' ? 'All Portfolios' : filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white border border-gray-150 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div className="p-8 space-y-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100/50 px-3.5 py-1.5 rounded-full w-fit block">
                      {study.category}
                    </span>

                    <h3 className="font-extrabold text-gray-900 text-xl group-hover:text-blue-600 transition-colors leading-tight">
                      {study.headline}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {study.challenge}
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                      {study.metrics.slice(0, 3).map((m, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="text-lg sm:text-xl font-black text-[#1a2957]">{m.value}</div>
                          <div className="text-[9px] uppercase tracking-widest text-gray-400 font-extrabold leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 bg-gray-50 border-t border-gray-100 flex justify-between items-center group-hover:bg-blue-50/10 transition-colors duration-300">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-extrabold uppercase tracking-widest">
                      <Zap className="w-3.5 h-3.5 fill-current animate-pulse" /> Scaled
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
                    >
                      <span>Read Full Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
