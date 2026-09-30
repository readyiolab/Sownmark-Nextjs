"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import { getAllBlogs } from '@/services/api';

// Icons
import {
  TrendingUp,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
  Star,
  ChevronRight,
  ChevronLeft,
  Briefcase,
  Layers,
  Heart,
  MessageSquare,
  Share2,
  Tv,
  Check,
  Zap,
  ShoppingBag,
  Cpu,
  Building2,
  GraduationCap,
  Store,
  CreditCard,
  Hotel,
} from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export default function HomePageClient() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const response = await getAllBlogs();
        const data = response.data || response;
        if (Array.isArray(data)) {
          setBlogs(data.slice(0, 3));
        }
      } catch (err) {
        console.error('Error fetching blogs for home page preview:', err);
      }
    };
    fetchRecentBlogs();
  }, []);

  const stats = [
    { value: 200, suffix: '+', label: 'Happy Clients' },
    { value: 500, suffix: '+', label: 'Campaigns Delivered' },
    { value: 15, suffix: '+', label: 'Industries Served' },
    { value: 98, suffix: '%', label: 'Client Retention Rate' },
    { value: 50, prefix: '₹', suffix: ' Cr+', label: 'Ad Spend Managed' },
    { value: 10, suffix: '+', label: 'Team Members' },
  ];

  const deepDives = [
    {
      title: 'Digital Marketing & Growth Hacking',
      subtitle: 'Build high-performance B2B & B2C acquisition loops',
      description: 'We manage full-funnel marketing strategies designed to increase sales, reduce acquisition cost, and accelerate market reach. By combining paid search, Meta Ads, LinkedIn outbound, and CRO, we guarantee predictable pipeline scaling.',
      image: '/images/marketing-dive.webp',
      bullets: ['Targeted Google and Meta Ads', 'High-intent B2B Lead Generation', 'Predictable client onboarding pipelines'],
      link: '/services/digital-marketing',
    },
    {
      title: 'AI Search Supremacy: SEO + GEO + AEO',
      subtitle: 'Appear wherever your buyers search and ask questions',
      description: 'Traditional search engine rankings are only half the battle. Our proprietary 3-layer SEO framework ensures your brand is indexed and cited by conversational AI engines like ChatGPT, Gemini, Claude, and Perplexity, while maintaining rank dominance in Google AI Overviews.',
      image: '/images/seo-dive.webp',
      bullets: ['Generative Engine citation mapping', 'Featured Snippet & Voice search optimisation', 'Crawlable schema structured-data deployments'],
      link: '/services/seo',
    },
    {
      title: 'Web & Custom Software Architecture',
      subtitle: 'Agile sprints delivering enterprise-grade code',
      description: 'From fast landing pages to highly-scalable SaaS products, CRMs, ERPs, and custom mobile apps (iOS & Android). Our engineers execute with dedicated product managers to launch clean, secure, and modern web software optimized for user retention.',
      image: '/images/software-dive.webp',
      bullets: ['Modern React & Next.js frameworks', 'Agile bi-weekly sprinting delivery', 'Dedicated testing & QA verification processes'],
      link: '/services/software-development',
    },
  ];

  const industries = [
    { name: 'E-commerce', icon: ShoppingBag, bg: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
    { name: 'SaaS & Tech', icon: Cpu, bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: 'Healthcare', icon: Heart, bg: 'bg-red-500/10 text-red-400 border-red-500/20' },
    { name: 'Real Estate', icon: Building2, bg: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
    { name: 'Education', icon: GraduationCap, bg: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
    { name: 'Retail', icon: Store, bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
    { name: 'Finance & Fintech', icon: CreditCard, bg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
    { name: 'Hospitality', icon: Hotel, bg: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20' },
  ];

  const cities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Noida', 'Gurgaon', 'Jaipur'
  ];

  const featuredCaseStudies = [
    {
      client: 'Lexington Law Partners',
      metric: '$250k+',
      metricLabel: 'Revenue Generated',
      tagline: 'Trust & CRO Optimization in High-Intent US Markets',
      link: '/case-studies/lexington-law',
    },
    {
      client: 'The Local Plumber (Sydney)',
      metric: '100%',
      metricLabel: 'Lead Conversion Boost',
      tagline: 'Hyperlocal Lead Gen and Map Pack Optimization',
      link: '/case-studies/professional-plumbing',
    },
    {
      client: 'Shina Kaur Branding',
      metric: '3.5x',
      metricLabel: 'ROI Generated',
      tagline: 'Premium Performance Marketing & Brand Placement',
      link: '/case-studies/shina-kaur',
    },
  ];

  const testimonials = [
    {
      name: 'Aarav Mehta',
      title: 'Co-Founder, ShopSphere',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'Sownmark revamped our E-commerce platform and ran our Meta campaigns. Our CPA decreased by 35% in under 90 days. Their tech and marketing integration is unmatched.',
    },
    {
      name: 'Priya Sharma',
      title: 'Director of Growth, HealthPlus',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'Ranking on ChatGPT was a major goal for our brand. Sownmarks GEO strategies got us cited in top health queries, driving organic trust and high-intent patients to our site.',
    },
    {
      name: 'Rohan Deshmukh',
      title: 'CTO, DeltaCorp',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'They built our custom LMS dashboard from scratch. The code was exceptionally clean, and their dedicated PM kept the project ahead of timeline. Outstanding software skills.',
    },
    {
      name: 'Sneha Iyer',
      title: 'Marketing Head, NestReal Estate',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'Our Google Map pack ranking was struggling in Gold Coast. Sownmark took over local SEO and doubled our phone call inquiries in Brisbane and Sydney within 4 months.',
    },
    {
      name: 'Vikram Malhotra',
      title: 'Founder, PayScale Fintech',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'From smart display campaigns to programmatic retargeting, Sownmarks banner campaigns reached 90% of our targeted Indian tech demographics. The ROI was clear and trackable.',
    },
    {
      name: 'Anjali Verma',
      title: 'CEO, EdVantage Group',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'We hired 5 senior React developers through their tech recruitment Solutions. The screening was so thorough that we finalized candidates in the first interview round itself.',
    },
  ];

  const faqItems = [
    {
      q: 'What does Sownmark do?',
      a: 'Sownmark is a leading full-service digital agency based in India. We offer complete digital marketing services (SEO, GEO, AEO, PPC, and programmatic display advertising), web and custom software development, influencer marketing, and tech hiring solutions for small to enterprise-level businesses.',
    },
    {
      q: 'Is Sownmark the best digital marketing agency in India?',
      a: 'Sownmark is one of India\'s most forward-thinking digital agencies due to our AI-ready approach. We are pioneers in combining traditional performance marketing with Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO) to make sure your brand dominates both Google rankings and conversational AI engines.',
    },
    {
      q: 'Which cities does Sownmark serve?',
      a: 'We serve brands nationwide across major cities including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Noida, Gurgaon, and Jaipur, as well as international clients in high-growth markets like the USA and Australia.',
    },
    {
      q: 'What is Generative Engine Optimisation (GEO)?',
      a: 'GEO stands for Generative Engine Optimisation. It is the process of optimizing website copy, entity structures, and technical schema metadata so that conversational AI engines like ChatGPT, Perplexity, Claude, and Gemini retrieve and cite your brand as a trusted answer source.',
    },
    {
      q: 'Does Sownmark offer display advertising?',
      a: 'Yes, Sownmark manages display ad campaigns across the Google Display Network (GDN), YouTube, programmatic demand-side platforms (DSPs), and social channels. We build targeted visual banners, video ad placements, and remarketing frameworks to build massive brand awareness.',
    },
    {
      q: 'What is the difference between SEO and AEO?',
      a: 'Search Engine Optimisation (SEO) focuses on ranking websites in traditional search engine results pages. Answer Engine Optimisation (AEO) focuses on optimizing content to satisfy direct answers, voice search queries, featured snippets, and Google AI Overviews directly.',
    },
    {
      q: 'How does Sownmark structure its service partnerships?',
      a: 'We build customized, outcome-driven partnerships tailored to each brand\'s specific growth objectives, target audience, and scale. Our service agreements are structured around transparent deliverables, dedicated sprint schedules, and milestone-based growth reporting to maximize marketing ROI and technical efficiency.',
    },
    {
      q: 'Can Sownmark build custom software?',
      a: 'Yes. Sownmark has a dedicated software engineering team building custom SaaS portals, mobile applications (iOS/Android) using Flutter and React Native, custom CRMs, ERP integrations, and AI-powered automation tools.',
    },
    {
      q: 'How do I contact Sownmark?',
      a: 'You can contact Sownmark by filling out the contact form on our website, emailing us at hello@sownmark.com, calling us at +91 97921 66702, or clicking the floating WhatsApp button to chat directly.',
    },
    {
      q: 'Does Sownmark work with small businesses?',
      a: 'Yes. We cater to businesses of all sizes, from early-stage start-ups requiring rapid prototype software and basic marketing setups, to established enterprises needing national scaling campaigns.',
    },
  ];

  // Active FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Testimonials carousel hooks & refs
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth * 0.8
        : scrollLeft + clientWidth * 0.8;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollFrame = useRef(0);
  const handleScroll = () => {
    if (scrollFrame.current) return;
    scrollFrame.current = requestAnimationFrame(() => {
      scrollFrame.current = 0;
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 5);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
      }
    });
  };

  useEffect(() => () => cancelAnimationFrame(scrollFrame.current), []);

  // Home Page Schemas
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Sownmark',
    'url': 'https://sownmark.com',
    'logo': 'https://sownmark.com/logo.webp',
    'description': 'Sownmark is India\'s leading full-service digital agency offering SEO, GEO, AEO, display advertising, social media, influencer marketing, web & software development.',
    'sameAs': [
      'https://www.linkedin.com/company/sownmark',
      'https://www.instagram.com/sownmark_',
      'https://x.com/Sownmark143641'
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Sownmark',
    'url': 'https://sownmark.com',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://sownmark.com/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map((item) => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };

  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Sownmark Agency Services',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '248'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      {/* Featured Snippet Block (AEO render above fold, hidden visually) */}
      <p className="sr-only">
        Sownmark is a full-service digital marketing and software development agency based in India, serving brands across Delhi, Mumbai, Bangalore, and all major cities. We specialise in SEO, Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), display advertising, social media management, influencer marketing, web development, and custom software development for small to enterprise-level businesses.
      </p>

      <div className="bg-white text-gray-900 overflow-x-hidden">
        {/* Hero Section (Includes AI engine strip) */}
        <HeroSection />

        {/* Services Grid (8 cards) */}
        <ServicesSection />

        {/* 1.4 Why Sownmark (Stats Section) */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 text-center space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Sownmark By The Numbers</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Modern Brands Trust Us</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-black text-[#1a2957] mb-2">
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-500 leading-relaxed">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1.5 Display Ads Feature Section */}
        <section className="py-24 bg-gradient-to-br from-[#0a0f24] to-[#12183d] text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
          </div>

          <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest">
                New Advertising Channel
              </div>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                Reach 90% of the Indian Internet with Smart Display Advertising
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                Connect with prospective buyers everywhere they go online. Our programmatic display advertising services cover placements across the Google Display Network, YouTube, industry websites, and premium local apps. We utilize dynamic remarketing to capture unconverted visitors and keep your brand top-of-mind.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Affordable for small brands to large enterprises</span>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Dynamic conversion retargeting setups</span>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">High-converting graphic/video asset designs</span>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Real-time placement bidding & scaling</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/services/display-advertising"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-105 transition-all"
                >
                  <span>Start Display Campaign</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-4">
              <div className="text-xs font-black uppercase text-cyan-400 tracking-wider">Campaign Metrics Proof</div>
              <div className="text-4xl font-black text-white">4.8M+</div>
              <div className="text-sm text-white/60">Targeted Demographics Impressions Served Monthly</div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[88%]" />
              </div>
              <div className="flex justify-between text-xs text-white/70 pt-2 font-bold">
                <span>GDN Placements</span>
                <span>Programmatic DSPs</span>
                <span>Mobile Apps</span>
              </div>
            </div>
          </div>
        </section>

        {/* 1.6 Services Deep Dive (Alternating sections) */}
        <section className="py-24 space-y-32">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">Under the Hood Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Take a closer look at our three foundational focus areas built for Indian and global enterprises.</p>
          </div>

          <div className="container max-w-7xl mx-auto px-4 space-y-32">
            {deepDives.map((dive, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <p className="text-gray-600 font-extrabold uppercase tracking-widest text-xs">{dive.subtitle}</p>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1a2957] leading-tight">{dive.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{dive.description}</p>

                  <ul className="space-y-3 pt-2">
                    {dive.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 font-semibold">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      href={dive.link}
                      className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline transition-all"
                    >
                      <span>Explore our {dive.title} solutions</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-bl-[12rem] -mr-8 -mt-8 z-0" />
                    <div className="relative z-10 space-y-4">
                      <Zap className="w-8 h-8 text-blue-600" />
                      <h4 className="font-extrabold text-gray-900 text-lg">Predictable Growth Engine</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">Integrated technical setup ensuring 100% SEO scores, structured schema markups, and clean codebases verified on Google Search Console.</p>
                      <div className="h-2 bg-gray-200 rounded-full w-3/4" />
                      <div className="h-2 bg-gray-200 rounded-full w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1.7 Industries We Serve */}
        <section className="py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 text-center space-y-16">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Diverse Verticals</span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900">Industries We Drive Traffic For</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {industries.map((ind, idx) => {
                const IconComponent = ind.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:scale-105 hover:border-gray-200 transition-all duration-300 text-center space-y-4 group relative overflow-hidden"
                  >
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-300 ${ind.bg} group-hover:scale-110`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="font-extrabold text-gray-900 text-base tracking-tight">{ind.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 1.8 Location Coverage Map */}
        <section className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4 text-center space-y-16">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">National Reach</span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900">Providing Strategic Location Coverage</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">We provide active digital services and local operations across all major digital centers in India.</p>
            </div>

            {/* Coverage Map Representation */}
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {cities.map((city) => (
                  <Link
                    key={city}
                    href={`/locations/${city.toLowerCase()}`}
                    className="group flex items-center gap-3 px-5 py-3.5 bg-white border-2 border-gray-100 hover:border-blue-600 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 font-bold text-gray-800 text-sm hover:text-blue-600"
                  >
                    <span>{city}</span>
                    <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 1.9 Featured Case Studies (3 cards) */}
        <section className="py-24 bg-[#0a0f24] text-white">
          <div className="container max-w-7xl mx-auto px-4 space-y-16">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-white/5 px-3 py-1 rounded-full">Client Success Stories</span>
              <h2 className="text-3xl sm:text-5xl font-black">Proven Growth Outcomes</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredCaseStudies.map((study, idx) => (
                <div key={idx} className="bg-[#121834] border border-white/5 p-8 rounded-3xl space-y-6 flex flex-col hover:border-white/10 hover:-translate-y-1 transition-all h-full">
                  <h3 className="text-xs font-bold uppercase text-blue-400 tracking-wider">{study.client}</h3>
                  <div className="space-y-1 flex-grow">
                    <div className="text-4xl sm:text-5xl font-black text-white">{study.metric}</div>
                    <div className="text-xs text-white/70 uppercase tracking-widest font-bold">{study.metricLabel}</div>
                    <p className="text-sm text-white/70 pt-4 leading-relaxed">{study.tagline}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <Link
                      href={study.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      <span>Read Case Study <span className="sr-only">: {study.client}</span></span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1.10 Testimonials / Reviews */}
        <section className="py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 space-y-16">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Client Feedback</span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900">What Partners Say About Sownmark</h2>
            </div>

            <div className="relative max-w-6xl mx-auto px-4">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-8 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-8"
              >
                {testimonials.map((test, idx) => (
                  <div
                    key={idx}
                    className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] max-w-[420px] snap-start bg-white border border-gray-100 p-8 rounded-3xl shadow-sm space-y-4 hover:shadow-lg transition-shadow shrink-0 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-1 text-yellow-400">
                        {Array(test.rating).fill(0).map((_, rIdx) => (
                          <Star key={rIdx} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed italic">"{test.text}"</p>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-50 mt-4">
                      <Image src={test.photo} alt={test.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{test.name}</p>
                        <p className="text-xs text-gray-500">{test.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel navigation controls */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`p-3 rounded-full border transition-all duration-300 ${canScrollLeft
                    ? 'border-gray-200 bg-white text-gray-850 hover:bg-gray-50 hover:scale-105 shadow-sm'
                    : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`p-3 rounded-full border transition-all duration-300 ${canScrollRight
                    ? 'border-gray-200 bg-white text-gray-850 hover:bg-gray-50 hover:scale-105 shadow-sm'
                    : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 1.11 Blog Preview (3 latest posts) */}
        {blogs.length > 0 && (
          <section className="py-24 bg-white">
            <div className="container max-w-7xl mx-auto px-4 space-y-16">
              <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-gray-100 pb-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Latest Articles</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Read Sownmark Insights</h2>
                </div>
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold rounded-full text-sm transition-all whitespace-nowrap">
                  <span>View All Blog Posts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {blogs.map((post) => (
                  <article key={post.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
                    <div className="h-48 overflow-hidden relative">
                      <Image
                        src={post.image || '/logo.webp'}
                        alt={post.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                        {post.category || 'SEO'}
                      </span>
                    </div>
                    <div className="p-6 flex-grow flex flex-col space-y-4">
                      <h3 className="font-bold text-gray-900 text-lg line-clamp-2">{post.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-grow">{post.excerpt}</p>
                      <div className="pt-4 border-t border-gray-50">
                        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700">
                          <span>Read Article <span className="sr-only">: {post.title}</span></span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 1.12 FAQ Section (AEO — minimum 10 Q&As) */}
        <section className="py-24 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4 space-y-16">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">AEO Answer Box</span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500">Find direct answers compiled for AI engine crawlers and users alike.</p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:text-blue-600 transition-colors gap-4"
                  >
                    <span>{faq.q}</span>
                    <span className="text-2xl font-light shrink-0 text-gray-500" aria-hidden="true">
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

        {/* 1.13 Final CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#ffffff_0%,transparent_50%)]" />
          </div>

          <div className="container max-w-3xl mx-auto px-4 space-y-8 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black leading-tight">Ready to grow? Let's talk.</h2>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto">
              Schedule your free 30-minute growth strategy consultation with Sownmark experts.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-700 hover:bg-gray-100 font-black rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-base"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 text-blue-700" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
