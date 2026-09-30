"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Cpu,
  Tv,
  Share2,
  Users,
  Mail,
  FileText,
  TrendingUp,
  MapPin,
  HelpCircle,
  ArrowRight,
  CheckCircle,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const AgencyServicesPage: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      id: 'seo',
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: 'Search Engine Optimisation (SEO)',
      description: 'Get ranked at the top of Google organically. Our team manages technical speed audits, on-page content alignment, and link-building to scale high-intent organic traffic.',
    },
    {
      id: 'geo',
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: 'Generative Engine Optimisation (GEO)',
      description: 'The future of search. We structure and write content specifically to make sure conversational AI engines (ChatGPT, Gemini, Claude, Perplexity) cite and recommend your brand.',
    },
    {
      id: 'aeo',
      icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
      title: 'Answer Engine Optimisation (AEO)',
      description: 'Optimize for direct answers, featured snippets, voice search, and Google AI Overviews to capture top-of-funnel customer intents instantly.',
    },
    {
      id: 'ppc',
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Maximize your advertising budget ROI. We launch search and shopping ads across Google and Bing with real-time bid monitoring.',
    },
    {
      id: 'social',
      icon: <Share2 className="w-8 h-8 text-pink-500" />,
      title: 'Social Media Management',
      description: 'Content calendar strategy, premium copywriting, creative designs, scheduling, and community response on Instagram, LinkedIn, and YouTube.',
    },
    {
      id: 'display',
      icon: <Tv className="w-8 h-8 text-purple-500" />,
      title: 'Display Advertising',
      description: 'Prominent banner ads across the Google Display Network, programmatic DSP platforms, and apps, incorporating dynamic retargeting.',
    },
    {
      id: 'email',
      icon: <Mail className="w-8 h-8 text-amber-500" />,
      title: 'Email Marketing',
      description: 'Nurture your leads and retain customers with automated, segment-targeted newsletters and cold sequence workflows.',
    },
    {
      id: 'content',
      icon: <FileText className="w-8 h-8 text-teal-500" />,
      title: 'Content Marketing',
      description: 'Create high-value keyword-rich articles, white papers, and press releases that build E-E-A-T trust signals.',
    },
    {
      id: 'influencer',
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: 'Influencer Marketing',
      description: 'Partner with vetted nano to celebrity creators across India to drive organic referral visibility and purchases.',
    },
  ];

  const processSteps = [
    { label: 'Audit', desc: 'Comprehensive technical and competitor data analysis.' },
    { label: 'Strategy', desc: 'Crafting custom roadmap based on targets and budgets.' },
    { label: 'Execution', desc: 'Precise campaign build, content writing, and launching.' },
    { label: 'Reporting', desc: 'Transparent custom dashboards showing clear pipeline metrics.' },
    { label: 'Scale', desc: 'A/B testing, optimization, and budget expansion.' },
  ];

  const cityHighlights = [
    { city: 'Delhi', desc: 'Serving enterprise and startups in the capital with high-intent lead generation.' },
    { city: 'Mumbai', desc: 'Focusing on high-end branding, fashion e-commerce, and corporate SEO outreach.' },
    { city: 'Bangalore', desc: 'Accelerating tech startups with SaaS acquisition, product marketing, and talent.' },
    { city: 'Hyderabad', desc: 'Executing local search dominance and software visibility campaigns.' },
    { city: 'Chennai', desc: 'Driving e-commerce and retail traffic with integrated performance ads.' },
    { city: 'Pune', desc: 'Helping manufacturing and tech businesses capture B2B client pipelines.' },
  ];

  const faqs = [
    { q: 'What is included in Sownmarks digital marketing services?', a: 'We offer full-funnel digital marketing services: Search Engine Optimisation (SEO), Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), PPC Search ads, Display/programmatic banner advertising, social media content creation, and influencer marketing campaigns.' },
    { q: 'How does Sownmark structure its service partnerships?', a: 'We build customized, outcome-driven partnerships tailored to each brand\'s specific growth objectives, target audience, and scale. Our service agreements are structured around transparent deliverables, dedicated sprint schedules, and milestone-based growth reporting to maximize marketing ROI and technical efficiency.' },
    { q: 'How does Sownmark ensure our business appears in ChatGPT or Perplexity answers?', a: 'We use our Generative Engine Optimisation (GEO) methodology, structuring your site code with Schema Markup, building local citations, and writing authority content that AI engine large language models read, parse, and cite.' },
    { q: 'What is the difference between SEO and PPC?', a: 'SEO focuses on organic rankings that take time to build but generate free traffic. PPC (Pay-Per-Click) provides immediate visibility through paid ads on search engines and social platforms, charging you only when someone clicks.' },
    { q: 'Do you design ad creatives for display campaigns?', a: 'Yes, our internal design team designs premium custom graphic banners, animations, and short-form videos tailored to display placements on websites and mobile apps.' },
    { q: 'How long does it take to see organic SEO results?', a: 'Typically, visible ranking growth and organic traffic increases are seen within 90 to 180 days, depending on website domain authority and target keyword difficulty.' },
    { q: 'Does Sownmark work with international clients?', a: 'Yes, we serve brands across India as well as companies in the USA, Australia, and UK seeking high-quality remote tech recruitment and global marketing execution.' },
    { q: 'Which social media platforms do you manage?', a: 'We manage and run ad campaigns across Instagram, Facebook, LinkedIn, YouTube, Twitter/X, and Pinterest.' },
    { q: 'What is your reporting frequency?', a: 'We provide real-time custom dashboards, supplemented by monthly performance reports and strategy review calls.' },
    { q: 'How do I start a campaign with Sownmark?', a: 'Simply fill out our contact form, email us at hello@sownmark.com, or schedule a free strategy audit call using our CTA links.' },
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Digital Marketing Services',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Sownmark',
      'image': 'https://sownmark.com/logo.webp',
      'telephone': '+919792166702',
      'url': 'https://sownmark.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Delhi',
        'addressCountry': 'IN'
      }
    },
    'description': 'End-to-end digital marketing services including SEO, GEO, AEO, PPC, display advertising, and influencer marketing across India.'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  };

  return (
    <>
      <title>Best Digital Marketing Agency in India & Delhi</title>
      <meta
        name="description"
        content="Sownmark offers end-to-end digital marketing services including SEO, GEO, AEO, PPC, social media, display ads & influencer marketing. Serving brands across India."
      />
      <link rel="canonical" href="https://sownmark.com/services/digital-marketing" />
      <meta name="keywords" content="digital marketing, digital marketing agency, marketing strategy, marketing digital marketing, digital agency marketing" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Featured Snippet Block */}
      <div className="sr-only">
        Sownmark is a full-service digital marketing agency in India providing SEO, GEO (Generative Engine Optimisation), AEO (Answer Engine Optimisation), PPC, social media management, display advertising, and influencer marketing. We serve businesses of all sizes across Delhi, Mumbai, Bangalore, Hyderabad, and all major Indian cities.
      </div>

      <div className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
          </div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Best Digital Marketing Agency in India
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We design and execute result-oriented campaigns combining organic search authority (SEO+GEO) with programmatic display, search, and social ads to double your growth.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                <span>Get Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </Link>
            </div>
          </div>
        </section>
        {/* Process Graphic Framework */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="container max-w-7xl mx-auto px-4 text-center space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Our Blueprint</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2957]">Our Digital Marketing Framework</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-155 shadow-sm hover:shadow-lg transition-all duration-300 text-center space-y-4 group">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl font-black text-blue-600 group-hover:bg-blue-650 group-hover:text-white transition-colors duration-300">
                    0{idx + 1}
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-base">{step.label}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Offered Cards (Expandable on click) */}
        <section className="py-24">
          <div className="container max-w-7xl mx-auto px-4 space-y-16">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Explore Capabilities</span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900">Services We Offer</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Click on any card to toggle full detail notes about our deliverables.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((serv) => {
                const isOpen = activeCard === serv.id;
                return (
                  <div
                    key={serv.id}
                    onClick={() => setActiveCard(isOpen ? null : serv.id)}
                    className={`bg-white border p-8 rounded-[2rem] cursor-pointer transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between ${isOpen
                      ? 'border-blue-600 shadow-xl ring-2 ring-blue-600/10'
                      : 'border-gray-150 hover:border-gray-300 shadow-sm hover:shadow-md'
                      }`}
                  >
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl inline-block transition-colors duration-300 group-hover:bg-blue-50">
                          {serv.icon}
                        </div>
                        <div className="p-2 rounded-full bg-gray-50 text-gray-400">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-extrabold text-gray-900 text-xl tracking-tight">{serv.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{serv.description}</p>
                      </div>
                    </div>
                    {isOpen && (
                      <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-blue-600 font-bold flex items-center gap-1.5 animate-fade-in">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>Includes end-to-end management, strategy, and weekly audits.</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* City Sub-sections with H2s */}
        <section className="py-24">
          <div className="container max-w-7xl mx-auto px-4 space-y-16">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Regional hubs</span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900">Digital Marketing Agency in Major Cities</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {cityHighlights.map((hl) => (
                <div key={hl.city} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-blue-600 font-bold">
                    <MapPin className="w-5 h-5 shrink-0" />
                    <h2 className="text-lg font-black text-gray-900">Digital Marketing Agency in {hl.city}</h2>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{hl.desc}</p>
                  <Link
                    href={`/locations/${hl.city.toLowerCase()}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    <span>View Location Site</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos Ticker */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container max-w-7xl mx-auto px-4 text-center space-y-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trusted by leading brands across major sectors</p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-40 grayscale">
              {['BrandAlpha', 'BetaCorp', 'GammaTech', 'DeltaServices', 'EpsilonReal'].map((logo) => (
                <span key={logo} className="font-extrabold text-gray-900 text-lg tracking-tight">{logo}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section (10+ Q&As) */}
        <section className="py-24 bg-white">
          <div className="container max-w-4xl mx-auto px-4 space-y-16">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">FAQ</span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900">Questions & Answers</h2>
            </div>

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
            <h2 className="text-3xl sm:text-4xl font-extrabold">Grow Your Digital Revenue Now</h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">Let Sownmarks AI-Ready digital marketing execution boost your rankings and customer signups.</p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-gray-50 transition-all"
              >
                <span>Book Free Consultation</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AgencyServicesPage;