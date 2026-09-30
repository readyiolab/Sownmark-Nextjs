"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Layers,
  Cpu,
  Volume2,
  Tv,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Shield,
  Zap,
} from 'lucide-react';

const SeoGeoAeoPage: React.FC = () => {
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

  const timelineSteps = [
    {
      id: 'trad-seo',
      step: '01',
      title: 'Traditional SEO (2010s)',
      description: 'Google keyword stuffing, page rank table optimizations, backlink quantities, and raw density monitoring.',
    },
    {
      id: 'voice-search',
      step: '02',
      title: 'Voice Search & Snippets (2018s)',
      description: 'Siri, Alexa, and Google Assistant calling for direct featured snippet answers at position zero.',
    },
    {
      id: 'ai-search',
      step: '03',
      title: 'Generative AI Search (2025s+)',
      description: 'ChatGPT search, Perplexity, Gemini, Claude, and Google AI Overviews citing verified brand sources.',
    },
  ];

  const features = [
    {
      id: 'cite-rate',
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: 'AI Cite Seeding',
      description: 'Aligning your site copy to trigger LLM citations, getting recommended during conversational research phases.',
    },
    {
      id: 'direct-answers',
      icon: <Volume2 className="w-8 h-8 text-white" />,
      title: 'Direct Answer Authority',
      description: 'Optimizing structured data tags, speakable schemas, and tables to claim position zero in Google Overviews.',
    },
    {
      id: 'technical-seo',
      icon: <Layers className="w-8 h-8 text-white" />,
      title: 'Technical Foundation',
      description: 'Core Web Vitals acceleration and schema structured validation to feed clean code to crawler bots.',
    },
  ];

  const layers = [
    {
      id: 'layer-1',
      icon: <Layers className="w-12 h-12 text-white" />,
      title: 'Layer 1: Technical SEO',
      description: 'Ensuring your site is super fast and crawlable for traditional search engines and AI scraper engines alike.',
      benefits: ['Core Web Vitals speed optimization', 'Valid schema structured markup', 'Crawl audit fixing', 'Mobile-first responsiveness'],
    },
    {
      id: 'layer-2',
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      title: 'Layer 2: On-Page & Off-Page SEO',
      description: 'Establishing domain authority and semantic context through long-form optimized copy and high-quality links.',
      benefits: ['Long-form semantic content', 'High-authority backlink outreach', 'Internal linking silo setups', 'Contextual topic cluster design'],
    },
    {
      id: 'layer-3',
      icon: <Cpu className="w-12 h-12 text-white" />,
      title: 'Layer 3: GEO + AEO Optimization',
      description: 'Preparing your content for conversational AI crawlers and voice assistants using structured natural Q&A formats.',
      benefits: ['LLM citation seeding copy', 'FAQPage schema injections', 'Natural Q&A formatting', 'Brand entity index mapping'],
    },
  ];

  const tools = ['Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Search Console', 'Moz', 'GTmetrix'];

  const faqs = [
    { q: 'What is Generative Engine Optimisation (GEO)?', a: 'GEO is the process of optimizing website copy, entity structures, and schemas so that conversational AI engines like ChatGPT, Gemini, and Perplexity list and cite your brand in answers.' },
    { q: 'What is Answer Engine Optimisation (AEO)?', a: 'AEO is the practice of optimizing content for voice searches, direct featured snippets, and Google AI Overviews. It prioritizes direct, structured Q&A formats.' },
    { q: 'Why do brands need GEO in 2025?', a: 'Brands appearing in ChatGPT and Perplexity answers receive 3x more trust signals and high-intent buyers, bypass traditional rank noise, and capture users directly during search research phases.' },
    { q: 'How does Sownmark execute GEO?', a: 'We write content structured for natural language processing, verify and seed schema tags (Product, FAQPage, Organization), and manage external citations and references that LLMs index.' },
    { q: 'Will traditional SEO become obsolete?', a: 'No. GEO and AEO build on top of technical and on-page SEO. AI engines still crawl index databases, so technical crawlability and domain authority remain crucial.' },
    { q: 'What tools does Sownmark use for SEO?', a: 'We use premium industry platforms including Ahrefs, SEMrush, Screaming Frog, Google Search Console, PageSpeed Insights, and custom LLM citation crawlers.' },
    { q: 'Do you guarantee number 1 rankings on Google?', a: 'No ethical agency can guarantee absolute #1 positions on Google due to search algorithm volatility. However, we deliver proven organic growth metrics and verified citations.' },
    { q: 'How do you structure content for AEO?', a: 'We write in concise Q&A structures, use clean HTML heading structures (H2, H3), implement FAQ structured schemas, and format lists for easy readability.' },
    { q: 'How do we measure GEO/AEO success?', a: 'We track citation frequency in AI responses, organic traffic growth from AI Overviews, brand query visibility, and featured snippet acquisition rates.' },
    { q: 'How do I start optimizing my site with Sownmark?', a: 'Schedule a free strategy audit call using our contact page, and our SEO specialists will conduct a full technical review of your domain.' },
  ];

  return (
    <>
      <title>SEO, GEO & AEO Services in India | Rank on Google and AI Searches</title>
      <meta
        name="description"
        content="Sownmark provides traditional SEO plus Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO) to rank your brand on Google, ChatGPT, Perplexity, Gemini, and all AI search engines."
      />
      <link rel="canonical" href="https://sownmark.com/services/seo" />
      <meta name="keywords" content="google images search, google searches, search engine, seo services, search engine marketing, ai search engine" />

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
              <Cpu className="w-5 h-5 text-yellow-300 fill-current" />
              <span className="text-sm font-medium tracking-wide">3-Layer Search Supremacy</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              SEO, GEO & AEO Agency
              <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mt-2">
                in India
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Don't just rank on Google. Get cited, referenced, and recommended by ChatGPT, Perplexity, Gemini, and Claude using Sownmark's 3-Layer Search Optimization.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex group"
            >
              <Link
                href="/contact#contact-form"
                className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center shadow-xl"
                aria-label="Request SEO Scoping consultation"
              >
                Rank My Brand on AI Engines
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
              More Than Just Search Links
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                A Brand Authority Asset
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              AI engines query indexed databases and reference sources. Generative Engine Optimisation makes sure conversational LLM agents read and cite your brand.
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

      {/* 3-Layer SEO Framework Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our 3-Layer
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Search Framework
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive optimization layout targeting technical, organic, and LLM generative levels.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          >
            {layers.map((layer) => (
              <motion.div key={layer.id} variants={fadeInUp} className="group relative h-full">
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
                    >
                      {layer.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight">{layer.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed flex-1">{layer.description}</p>
                    <ul className="space-y-3">
                      {layer.benefits.map((benefit, benefitIndex) => (
                        <li key={`${layer.id}-benefit-${benefitIndex}`} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
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

      {/* Evolution Roadmap Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 100%)' }}>
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              The Evolution
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                of Search Engines
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We guide brands from classical keyword ranking sheets to multi-engine citation indexing.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-white/20" />
            {timelineSteps.map((step, index) => (
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

      {/* Tools We Master Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-100/50">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Industry Standard SEO Tools We Use Daily</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-75">
            {tools.map((t) => (
              <span key={t} className="font-extrabold text-gray-650 text-lg tracking-tight hover:text-blue-600 transition-colors cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container max-w-4xl mx-auto px-4 space-y-12">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Frequently Asked Questions</h2>
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
              Ready to Capture Featured Snippets &
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                Generative AI Citations?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Partner with Sownmark to seed your website content into conversational search directories. Schedule a scoping call today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group h-full">
                <Link
                  href="/contact#contact-form"
                  className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center w-full sm:w-auto shadow-2xl"
                  aria-label="Schedule SEO Audit Call"
                >
                  Schedule Free Audit
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

export default SeoGeoAeoPage;
