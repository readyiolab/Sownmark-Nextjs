"use client";

import React from 'react';
import Link from 'next/link';
import { LineChart, Search, Tv, Share2, Star, Globe, Code, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <LineChart size={32} className="text-blue-500" />,
    title: 'Digital Marketing',
    description: 'Propel your brand growth with custom data-backed performance campaigns and programmatic strategies.',
    link: '/services/digital-marketing',
    delay: 0.1,
  },
  {
    icon: <Search size={32} className="text-cyan-400" />,
    title: 'SEO + GEO + AEO',
    description: 'Ensure visibility on traditional Google search and modern AI conversational systems like ChatGPT & Perplexity.',
    link: '/services/seo',
    delay: 0.2,
  },
  {
    icon: <Tv size={32} className="text-indigo-500" />,
    title: 'Display Advertising',
    description: 'Reach 90% of the Indian internet with targeted Google Display Network campaigns, native ads & programmatic retargeting.',
    link: '/services/display-advertising',
    delay: 0.3,
  },
  {
    icon: <Share2 size={32} className="text-pink-500" />,
    title: 'Social Media Management',
    description: 'Strategic social content creation, scheduling, copywriting & community management on Instagram, LinkedIn, and YouTube.',
    link: '/services/social-media-management',
    delay: 0.4,
  },
  {
    icon: <Star size={32} className="text-yellow-400" />,
    title: 'Influencer Marketing',
    description: 'Access a vetted network of 10,000+ nano to celebrity creators to amplify brand trust and conversions.',
    link: '/services/influencer-marketing',
    delay: 0.5,
  },
  {
    icon: <Globe size={32} className="text-emerald-500" />,
    title: 'Web Development',
    description: 'High-converting landing pages, robust corporate sites & dynamic E-commerce portals using modern frameworks.',
    link: '/services/web-development',
    delay: 0.6,
  },
  {
    icon: <Code size={32} className="text-purple-500" />,
    title: 'Software Development',
    description: 'Custom SaaS products, CRM/ERP integrations, cross-platform mobile apps & AI tools matching agile sprint models.',
    link: '/services/software-development',
    delay: 0.7,
  },
  {
    icon: <Users size={32} className="text-teal-400" />,
    title: 'Hiring Solutions',
    description: 'Hire top tech and marketing talent in India using our rigorous contract, permanent placement & augmentation pipelines.',
    link: '/services/hiring-solutions',
    delay: 0.8,
  },
];

const ServicesSection: React.FC = React.memo(() => {
  return (
    <section className="py-24 bg-[#0a0f24]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest">
            Expert Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Comprehensive Tech & Growth Solutions
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col p-8 bg-gradient-to-br from-[#121834]/80 to-[#0a0e28]/95 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
            >
              {/* Subtle top light highlight inside card */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />



              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/50 leading-relaxed flex-grow font-medium">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-cyan-400 tracking-wider uppercase transition-colors duration-300 mt-auto pt-2"
                aria-label={`Learn more about ${service.title}`}
              >
                <span>Learn More <span className="sr-only">about {service.title}</span></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;