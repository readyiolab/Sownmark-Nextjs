"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tv, CheckCircle, ArrowRight, Award, Layers, Shield, Zap, Settings } from 'lucide-react';

const DisplayAdvertisingPage: React.FC = () => {
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
      id: 'reach',
      icon: <Zap className="w-8 h-8 text-white" />,
      title: '90%+ Direct Reach',
      description: 'Expose your services to nearly the entire browsing demographic through Google Display Network integrations.',
    },
    {
      id: 'retargeting',
      icon: <Layers className="w-8 h-8 text-white" />,
      title: 'Custom Retargeting',
      description: 'Serve visual ad banners specifically to warm leads who already visited your high-intent landing pages.',
    },
    {
      id: 'authority',
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Brand Authority',
      description: 'Establish premium authority using continuous visual placements on high-credibility news and blog sites.',
    },
  ];

  const formats = [
    {
      id: 'gdn',
      icon: <Layers className="w-12 h-12 text-white" />,
      title: 'Google Display Network (GDN)',
      description: 'Place responsive banner and text ads across millions of partner websites and blogs targeting relevant customer interests.',
      benefits: ['Contextual keyword targeting', 'Affinity audience matching', 'Dynamic banner resizing', 'Cost-effective click pricing'],
    },
    {
      id: 'youtube-bumpers',
      icon: <Tv className="w-12 h-12 text-white" />,
      title: 'YouTube Bumper & Pre-rolls',
      description: 'Engage video audiences with non-skippable 6-second bumper ads or descriptive pre-roll video ads.',
      benefits: ['High view-through rates', 'Demographic segment filters', 'Channel exclusion options', 'In-feed video ads support'],
    },
    {
      id: 'programmatic',
      icon: <Settings className="w-12 h-12 text-white" />,
      title: 'Programmatic Display (DSP)',
      description: 'Automate media bidding across premium real-time publishing platforms and mobile apps.',
      benefits: ['Real-time bidding auctions', 'Private marketplace access', 'PMP contract management', 'Cross-device target matching'],
    },
    {
      id: 'social-display',
      icon: <Tv className="w-12 h-12 text-white" />,
      title: 'Facebook & Instagram Display',
      description: 'Social display and collection banner ads targeting detailed user interests and demographic profiles.',
      benefits: ['Carousel ad slides', 'Collection instant experiences', 'Lookalike expansion lists', 'In-feed visual placements'],
    },
    {
      id: 'native-ads',
      icon: <Layers className="w-12 h-12 text-white" />,
      title: 'Native Placement Ads',
      description: 'Blended visual recommendations appearing natively at the end of high-authority publisher blogs and news sites.',
      benefits: ['High CTR engagement', 'Content recommendation style', 'Taboola & Outbrain integrations', 'Non-intrusive placement'],
    },
    {
      id: 'retargeting-campaigns',
      icon: <Zap className="w-12 h-12 text-white" />,
      title: 'Conversion Retargeting',
      description: 'Display custom sequential offers to prospects who visited your web properties but did not complete checkouts.',
      benefits: ['Dynamic cart retargeting', 'Sequential ad display schedules', 'Custom discount triggers', 'Cross-network audience sync'],
    },
  ];

  const roadmapSteps = [
    {
      id: 'setup',
      step: '01',
      title: 'Audience Strategy',
      description: 'Defining demographic attributes, geographical scopes, and custom interest categories of target buyers.',
    },
    {
      id: 'creatives',
      step: '02',
      title: 'Creative Asset Design',
      description: 'Designing visual banner sets, interactive display assets, and script-based copy tailored to ad networks.',
    },
    {
      id: 'tracking',
      step: '03',
      title: 'Pixel & Tracking Code Setup',
      description: 'Deploying custom Google Tag Manager tags and social conversion tracking pixels on action steps.',
    },
    {
      id: 'launch',
      step: '04',
      title: 'Campaign Live Deployment',
      description: 'Publishing campaigns across programmatic ad bidding pipelines and checking live placements.',
    },
    {
      id: 'optimization',
      step: '05',
      title: 'Continuous Scoping & Audits',
      description: 'Performing placement reviews, excluding low-performing URLs, adjusting bids, and tracking cost-per-conversion.',
    },
  ];

  const faqs = [
    { q: 'What is display advertising?', a: 'Display advertising involves placing visual banner, video, and rich media ads across websites, apps, and platforms to build brand awareness and drive targeted traffic.' },
    { q: 'How do you structure display campaign budgets?', a: 'Display ad budgets are tailored based on your target audience size, geographic focus, and campaign goals. The budget is split between ad network media spend (paid directly to networks like Google or social platforms on a CPC/CPM basis) and Sownmark\'s campaign design and management.' },
    { q: 'What is the difference between display ads and search ads?', a: 'Search ads are text-based and appear on search engines when users actively search for a keyword. Display ads are visual banners placed on external websites and apps, capturing users during normal browsing.' },
    { q: 'How do display ads build brand awareness?', a: 'They expose visual brand logos and products repeatedly to your target audience, keeping your brand top-of-mind even if they don\'t click immediately.' },
    { q: 'What is retargeting in display advertising?', a: 'Retargeting (or remarketing) serves ads specifically to users who have already visited your website, encouraging them to return and complete their checkout or form submission.' },
    { q: 'Which is better: Google Display or Facebook Ads?', a: 'Both are powerful. Google Display Network offers massive web-wide placement coverage. Facebook Ads provide detailed demographic, interest, and social connection targeting. We often combine both for best outcomes.' },
    { q: 'Can small businesses afford display advertising?', a: 'Yes. With local geo-targeting and custom budgeting, display ads are highly cost-effective and can fit into any local start-up budget.' },
    { q: 'What creatives do I need for display ads?', a: 'You need graphic banners in standard sizes (like 300x250, 728x90, 160x600). Sownmark designs all visual banner creatives as part of our management.' },
    { q: 'How long does it take to see results from display ads?', a: 'Impressions are generated instantly. Conversion results from remarketing campaigns are typically observed within the first 14 to 30 days.' },
    { q: 'Does Sownmark design the ad creatives?', a: 'Yes, our in-house design team handles the graphic banner layout, copywriting, and video assets needed for all ad formats.' },
  ];

  return (
    <>
      <title>Display Advertising Agency in India | Google Display</title>
      <meta
        name="description"
        content="Sownmark's display advertising services help small to enterprise brands build awareness and visibility across Google Display Network, YouTube, programmatic platforms & more."
      />
      <link rel="canonical" href="https://sownmark.com/services/display-advertising" />
      <meta name="keywords" content="display advertising, tv ads, tv advertising, display ads, television advertisement, tv commercial advertising" />

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
              <Award className="w-5 h-5 text-yellow-300 fill-current" />
              <span className="text-sm font-medium tracking-wide">Programmatic Display Ads</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Display Advertising
              <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mt-2">
                Agency in India
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Place premium graphic banners and video ads across millions of partner sites. Reach 90% of the Indian internet and retarget warm prospects with high-converting creatives.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex group"
            >
              <Link
                href="/contact#contact-form"
                className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center shadow-xl"
                aria-label="Start Display Advertising Campaign"
              >
                Start Display Campaign
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
              Why Display Ads for
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Visual Brand Awareness?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Visual placements reinforce brand memory. Sownmark crafts bespoke, dynamic creatives that align with target user demographics and browser habits.
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

      {/* Formats Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Display Ad Formats
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                We Manage
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We deploy campaigns on Google Display Network, YouTube, social apps, and real-time DSP pipelines.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {formats.map((format) => (
              <motion.div key={format.id} variants={fadeInUp} className="group relative h-full">
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
                    >
                      {format.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight">{format.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed flex-1">{format.description}</p>
                    <ul className="space-y-3">
                      {format.benefits.map((benefit, benefitIndex) => (
                        <li key={`${format.id}-benefit-${benefitIndex}`} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
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
              Our Display Advertising
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                Implementation Roadmap
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We design and coordinate creative releases systematically to capture maximum view-through traffic.
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
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Display Advertising FAQs</h2>
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
              Ready to Launch Your
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                Programmatic Display Campaign?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Partner with Sownmark to design high-converting visual creatives and scale your demographic reach. Schedule your consult today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group h-full">
                <Link
                  href="/contact#contact-form"
                  className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center w-full sm:w-auto shadow-2xl"
                  aria-label="Schedule display ads consultation"
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

export default DisplayAdvertisingPage;
