import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Sownmark — India's AI-First Digital Marketing & Tech Agency",
  description:
    "Learn about Sownmark — our story, team, mission, and why we're India's most forward-thinking digital marketing and software development agency.",
  alternates: {
    canonical: 'https://sownmark.com/about',
  },
};

const values = [
  { title: 'Excellence', desc: 'Committed to delivering clean code and high-converting marketing campaigns.', icon: <Award className="w-6 h-6 text-blue-500" />, border: 'border-t-blue-500' },
  { title: 'Innovation', desc: 'Staying at the absolute forefront of generative AI search systems like ChatGPT/GEO.', icon: <Sparkles className="w-6 h-6 text-cyan-500" />, border: 'border-t-cyan-500' },
  { title: 'Integrity', desc: 'Honest billing, clear reporting dashboards, and complete IP transfers.', icon: <ShieldCheck className="w-6 h-6 text-green-500" />, border: 'border-t-green-500' },
  { title: 'Client First', desc: 'Measuring our success entirely by client conversions and pipeline metrics.', icon: <Heart className="w-6 h-6 text-pink-500" />, border: 'border-t-pink-500' },
];

const stats = [
  { value: '200+', label: 'Happy Brands' },
  { value: '500+', label: 'Campaigns Delivered' },
  { value: '15+', label: 'Industries Served' },
  { value: '98%', label: 'Retention Rate' },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'About Sownmark',
  'description': 'Learn about Sownmark — our story, team, mission, and why we are India\'s most forward-thinking digital marketing and software agency.',
  'publisher': {
    '@type': 'Organization',
    'name': 'Sownmark',
    'logo': 'https://sownmark.com/logo.webp'
  }
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Sownmark',
  'founder': [
    {
      '@type': 'Person',
      'name': 'Surya Pratap Singh',
      'jobTitle': 'CEO & Founder'
    },
    {
      '@type': 'Person',
      'name': 'Deepak Kumar',
      'jobTitle': 'CTO & Head of Engineering'
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a2957] text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
          </div>
          <div className="container max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit mx-auto block">
              Meet Sownmark
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              India's AI-First Digital Marketing & Tech Agency
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              We started with a vision to bridge the gap between traditional digital marketing and advanced artificial intelligence indexing.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-[#1a2957]">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in India, Sownmark has grown from a core SEO company into a full-scale digital agency. Our operations team observed that search queries were shifting from blue links to direct, conversational answers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By investing heavily in Generative Engine Optimisation (GEO) and custom React/Next.js/Flutter software frameworks, we prepared our clients to be visible on platforms like ChatGPT, Perplexity, and Google AI Overviews. Today, we manage over ₹50 Crore in ad spend and support 200+ brands.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl grid grid-cols-2 gap-6">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-1">{s.value}</div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-xl font-extrabold text-[#1a2957]">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To empower startups and enterprises globally by delivering predictable customer acquisition channels, high-authority AI search citation footprints, and clean software architectures.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-xl font-extrabold text-[#1a2957]">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To stand as the absolute benchmark for AI-Ready digital marketing and custom software engineering, bridging human creativity with algorithmic search index dominance.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24">
          <div className="container max-w-7xl mx-auto px-4 space-y-16 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-left">
              {values.map((v, idx) => (
                <div key={idx} className={`bg-white p-8 border border-gray-100 ${v.border} border-t-4 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 space-y-4`}>
                  <div className="p-3 bg-gray-50 rounded-2xl w-fit">{v.icon}</div>
                  <h3 className="font-extrabold text-gray-900 text-lg">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GEO/AEO Approach */}
        <section className="py-20 bg-white">
          <div className="container max-w-3xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2957]">Our Approach to GEO & AEO</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              At Sownmark, we treat ChatGPT and Gemini as active citation search targets. We structure website copy, clean up microdata fields, submit press logs, and secure authority references so conversational crawlers record and display your products.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1a2957] text-white text-center">
          <div className="container max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Partner with Sownmark?</h2>
            <p className="text-blue-100 text-sm sm:text-base">Get in touch with our operations team to outline your technical roadmap.</p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-gray-50 transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
