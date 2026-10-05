"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, MapPin, Phone, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import IndiaMap from '@/components/ui/IndiaMap';

export default function ContactPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does Sownmark offer?',
      answer: 'We offer complete digital marketing services (SEO, GEO, AEO, PPC search, display ad campaigns, and influencer placements), custom web development (React/Next.js/Shopify), software engineering, and technical recruitment solutions.',
    },
    {
      question: 'How do I schedule a strategy consultation call?',
      answer: 'You can submit the contact form above, click our direct WhatsApp chat link, or send a request to hello@sownmark.com to set up a free 30-minute growth review session.',
    },
    {
      question: 'What is your operational response time?',
      answer: 'Our average inquiry review and response time is under 4 hours, and our support lines remain open 24 hours daily.',
    },
    {
      question: 'Can you work with startup budgets?',
      answer: 'Yes. We customize and scope our campaigns and custom software projects to align with startups from MVP launches to national performance scaling campaigns.',
    },
  ];

  const nextSteps = [
    { step: '01', title: 'Strategy Audit Session', desc: 'Our growth team conducts a full crawl and keyword analysis of your current domain.' },
    { step: '02', title: 'Custom Scope Roadmap', desc: 'We deliver a detailed fixed-price plan containing timeline stages and milestones.' },
    { step: '03', title: 'Kickoff & Deployment', desc: 'We assign a dedicated PM, set up communication boards, and launch the campaign.' },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#contact-form' || hash === '#strategy-call') {
        const element = document.getElementById('strategy-call') || document.getElementById('contact-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, []);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Book an AI Automation Strategy Call | Sownmark',
    description:
      'Book an AI Automation Strategy Call with Sownmark or email hello@sownmark.com. Tell us what you want to automate.',
    url: 'https://sownmark.com/contact/',
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sownmark',
    image: 'https://sownmark.com/logo.webp',
    telephone: '+91-9792166702',
    email: 'hello@sownmark.com',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <div className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#070b19] text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
          </div>
          <div className="container max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit mx-auto block">
              AI Strategy Session
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Book an AI Automation Strategy Call
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Tell us about your business and what you want to automate. On the call we will review your call flow, lead sources and systems, and tell you honestly whether an AI agent is a good fit.
            </p>
          </div>
        </section>

        {/* Contact Form and Details */}
        <section className="py-24" id="strategy-call">
          <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm" id="contact-form">
              <ContactForm />
            </div>

            {/* Direct Connect & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Reach Us Directly</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl shrink-0"><Phone className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Call / Phone</h4>
                      <a href="tel:+919792166702" className="text-xs text-gray-500 hover:text-blue-600 font-semibold">+91 97921 66702</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl shrink-0"><Mail className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Email Address</h4>
                      <a href="mailto:hello@sownmark.com" className="text-xs text-gray-500 hover:text-blue-600 font-semibold">hello@sownmark.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl shrink-0"><Clock className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Business Hours</h4>
                      <p className="text-xs text-gray-500 font-semibold">24 Hours Open Daily</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <a
                    href="https://wa.me/919792166702?text=Hi%20Sownmark,%20I'd%20like%20to%20book%20a%20free%20strategy%20consultation%20call."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-2xl shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Embedded Map Representation */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 space-y-4">
                <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Office Location Coverage
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Delhi NCR, Mumbai, and Bangalore operations. Virtual operations serve international clients in high-growth US & Australian regions.
                </p>
                <div className="w-full bg-white rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center py-4">
                  <IndiaMap />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container max-w-7xl mx-auto px-4 text-center space-y-16">
            <h2 className="text-3xl font-extrabold text-[#1a2957]">What Happens Next?</h2>
            
            <div className="relative max-w-5xl mx-auto z-10">
              <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 -translate-y-1/2 hidden md:block z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-left">
                {nextSteps.map((step, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 relative flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl font-black text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 z-10 relative">
                        {step.step}
                      </div>
                      <h3 className="font-extrabold text-gray-900 text-lg tracking-tight">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24">
          <div className="container max-w-4xl mx-auto px-4 space-y-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900">Contact FAQs</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:text-blue-600 transition-colors gap-4"
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl font-light text-gray-400 shrink-0">
                      {openIndex === idx ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 border-t border-gray-50"
                      >
                        <p className="text-sm text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
