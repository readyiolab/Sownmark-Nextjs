"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Shield, Sparkles, ArrowRight } from 'lucide-react';

const GenerativeEngineOptimisationPage: React.FC = () => {
  const isMobile = React.useRef(typeof window !== 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : false).current;

  const fadeInUp = {
    initial: isMobile ? { opacity: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: isMobile ? 0.1 : 0.2 },
    transition: { duration: isMobile ? 0.4 : 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true },
  };

  const features = [
    {
      id: 'info-gain',
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: 'Information Gain Copywriting',
      description: 'We rewrite copy to include statistics, testimonials, and industry secrets. AI models value unique data points over keyword repetition.',
    },
    {
      id: 'entity-graph',
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Structured Knowledge Graphing',
      description: 'Seeding custom schemas (Product, Organisation, Review) so LLMs translate your content into clean nodes.',
    },
    {
      id: 'citations',
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: 'Citation Index Building',
      description: 'Submitting press releases and obtaining mentions in directories and blogs where AI web-crawlers scan.',
    },
  ];

  const pillars = [
    {
      id: 'ai-crawling',
      icon: <Cpu className="w-12 h-12 text-white" />,
      title: 'How AI Engines Index Content',
      description: 'LLM engines search for direct factual accuracy, readability, unique concepts, and high E-E-A-T. We align your content architecture to trigger citation referencing.',
      benefits: ['Factual citation positioning', 'Structured data references', 'Conversational syntax index', 'LLM source crawl optimization'],
    },
    {
      id: 'llm-sourcing',
      icon: <Shield className="w-12 h-12 text-white" />,
      title: 'Authority Source Seeding',
      description: 'Placing your brand data across third-party index platforms, media outlets, and forums where conversational engines extract answers.',
      benefits: ['Third-party entity mapping', 'Conversational references seeding', 'AI search crawler diagnostics', 'Verified brand node validation'],
    },
  ];

  const roadmapSteps = [
    {
      id: 'audit',
      step: '01',
      title: 'GEO Visibility Audit',
      description: 'Conducting mock queries across ChatGPT, Claude, and Perplexity to analyze current brand citations.',
    },
    {
      id: 'copy-sprints',
      step: '02',
      title: 'Information Gain Sprints',
      description: 'Optimizing product and service landing pages with rich statistics and semantic definitions.',
    },
    {
      id: 'entity-seeding',
      step: '03',
      title: 'Knowledge Graph Seeding',
      description: 'Deploying structured markup schemas and seeding brand references across indexed catalogs.',
    },
    {
      id: 'verification',
      step: '04',
      title: 'Citation Monitoring',
      description: 'Tracking daily citation frequency changes and referral growth from AI search engines.',
    },
  ];

  const faqs = [
    { q: 'What is generative engine optimisation?', a: 'Generative Engine Optimisation (GEO) is the process of optimizing website copy, entity structures, and schemas so that conversational AI engines like ChatGPT, Gemini, and Perplexity list and cite your brand in answers.' },
    { q: 'How to rank on ChatGPT?', a: 'To rank on ChatGPT, you must structure your content with high Information Gain, write concise semantic summaries, use product/FAQ schemas, and have citations across authoritative external platforms that ChatGPT Search crawls.' },
    { q: 'How to appear in Perplexity answers?', a: 'Perplexity acts as a real-time web crawler. To appear in its results, focus on immediate factual answers, high technical speed (Core Web Vitals), clean structured tables, and linking out to reputable citation references.' },
    { q: 'How do you structure GEO services?', a: 'We package GEO within our advanced search optimization offerings, customizing strategy deliverables to your specific target search parameters and brand goals.' },
  ];

  return (
    <>
      <title>Generative Engine Optimisation (GEO) Services India</title>
      <meta
        name="description"
        content="Learn about Generative Engine Optimisation (GEO) from Sownmark. Discover how conversational AI engines crawl data and how to rank your brand on ChatGPT, Perplexity, and Gemini."
      />
      <link rel="canonical" href="https://sownmark.com/services/generative-engine-optimisation" />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 50%, #3b82f6 100%)' }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#93c5fd_0%,_transparent_50%)]" />
        </div>

        <div className="container relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full mb-8 border border-white/20 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-cyan-300 fill-current" />
              <span className="text-sm font-medium tracking-wide">AI Engine Optimization</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Generative Engine Optimisation
              <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mt-2">
                GEO Services
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Optimizing your digital footprint so large language models parse, summarize, and cite your brand in conversational answers.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex group"
            >
              <Link
                href="/contact#contact-form"
                className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center shadow-xl"
                aria-label="Get Started with Sownmark GEO"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Appear Where Customers Ask
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                AI Search Supremacy
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Conversational AI models parse multiple web properties to recommend brands. Sownmark's custom GEO frameworks ensure your brand remains at the front of AI pipelines.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                className="group relative h-full"
              >
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight">{feature.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-1">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive GEO
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Framework Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Aligning content hierarchies, citations, and authority structures to ensure AI engines quote your brand.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {pillars.map((service) => (
              <motion.div key={service.id} variants={fadeInUp} className="group relative h-full">
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed flex-1">{service.description}</p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={`${service.id}-benefit-${benefitIndex}`} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                          <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 100%)' }}>
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our GEO Optimization
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                Implementation Roadmap
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A detailed step-by-step methodology to seed your answers into AI search engines.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-white/20" />
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className={`relative mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-between`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-blue-100">{step.description}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-gray-900 shadow-lg z-10">
                  {step.step}
                </div>
                <div className="w-5/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container max-w-4xl mx-auto px-4 space-y-12">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">GEO Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-gray-100 rounded-2xl p-6 bg-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{faq.q}</h3>
                  <span className="ml-1.5 h-5 w-5 flex-shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-xs text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 50%, #3b82f6 100%)' }}
      >
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#93c5fd_0%,_transparent_50%)]"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Rank Your Brand on
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                ChatGPT, Perplexity & Gemini?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Partner with Sownmark to optimize your site copy for conversational search. Schedule your free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group h-full">
                <Link
                  href="/contact#contact-form"
                  className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center w-full sm:w-auto shadow-2xl"
                  aria-label="Schedule a Free GEO Consultation with Sownmark"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GenerativeEngineOptimisationPage;
