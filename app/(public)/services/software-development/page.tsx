"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Settings, Zap, Shield, ArrowRight, Server, Cpu } from 'lucide-react';

const SoftwareDevelopmentPage: React.FC = () => {
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
      id: 'scalability',
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Scalability',
      description: 'Software engineered to support rapid user growth and high transactional volumes smoothly.',
    },
    {
      id: 'security',
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Enterprise Security',
      description: 'Advanced data protection, secure API boundaries, and strict encryption protocols.',
    },
    {
      id: 'integration',
      icon: <Settings className="w-8 h-8 text-white" />,
      title: 'Seamless Integration',
      description: 'Interconnect with standard legacy tools, databases, and third-party SaaS interfaces.',
    },
  ];

  const services = [
    {
      id: 'saas',
      icon: () => (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#E0F2FE" />
          <rect x="20" y="20" width="24" height="24" rx="3" fill="#0284C7" />
          <circle cx="28" cy="28" r="3" fill="white" />
          <circle cx="36" cy="28" r="3" fill="white" />
          <path d="M26 36h12v2H26z" fill="white" />
          <rect x="14" y="32" width="10" height="10" rx="2" fill="#06B6D4" stroke="white" strokeWidth="1.5" />
          <rect x="40" y="32" width="10" height="10" rx="2" fill="#3B82F6" stroke="white" strokeWidth="1.5" />
        </svg>
      ),
      title: 'SaaS Platforms',
      description: 'Secure multi-tenant cloud software with dynamic database scaling, payment systems, and usage analytics.',
      benefits: ['Multi-tenant databases', 'Stripe/PayPal systems', 'Advanced analytics dashboards', 'Cloud scalability'],
    },
    {
      id: 'crm-erp',
      icon: () => (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#EDE9FE" />
          <rect x="18" y="20" width="28" height="24" rx="3" fill="#7C3AED" />
          <rect x="22" y="24" width="20" height="6" rx="1" fill="#DDD6FE" />
          <circle cx="25" cy="27" r="1.5" fill="#7C3AED" />
          <circle cx="29" cy="27" r="1.5" fill="#7C3AED" />
          <circle cx="33" cy="27" r="1.5" fill="#7C3AED" />
          <rect x="22" y="32" width="12" height="8" rx="1" fill="#C084FC" />
          <rect x="36" y="32" width="6" height="8" rx="1" fill="#A78BFA" />
        </svg>
      ),
      title: 'Custom CRM & ERPs',
      description: 'Tailored lead pipelines, human resource systems, automated invoices, and inventory control boards.',
      benefits: ['Automated invoicing', 'Lead pipelines tracking', 'Role-based access controls', 'Custom business flows'],
    },
    {
      id: 'mobile-apps',
      icon: () => (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#D1FAE5" />
          <rect x="22" y="16" width="20" height="32" rx="4" fill="#059669" />
          <rect x="24" y="20" width="16" height="24" rx="1" fill="white" />
          <circle cx="32" cy="46" r="1.5" fill="white" />
          <circle cx="32" cy="28" r="4" fill="#34D399" />
        </svg>
      ),
      title: 'Mobile Apps (iOS/Android)',
      description: 'High-performance cross-platform apps built using Flutter and React Native, with store upload support.',
      benefits: ['Native responsiveness', 'App Store & Google Play launch', 'Offline mode support', 'Push notification pipelines'],
    },
    {
      id: 'api-integration',
      icon: () => (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#FFE4E6" />
          <rect x="18" y="22" width="16" height="20" rx="3" fill="#E11D48" />
          <rect x="30" y="22" width="16" height="20" rx="3" fill="#FDA4AF" stroke="#E11D48" strokeWidth="2" />
          <path d="M26 28h12v2H26zM26 34h6v2h-6z" fill="white" />
          <circle cx="40" cy="32" r="3" fill="#E11D48" />
        </svg>
      ),
      title: 'APIs & Integrations',
      description: 'Secure REST/GraphQL API connections syncing internal platforms with payment and messaging endpoints.',
      benefits: ['GraphQL & REST architectures', 'OAuth2 secure access', 'Real-time webhooks', 'Legacy system syncing'],
    },
    {
      id: 'ai-automation',
      icon: () => (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#CFFAFE" />
          <rect x="20" y="20" width="24" height="24" rx="12" fill="#0891B2" />
          <circle cx="28" cy="28" r="3" fill="white" />
          <circle cx="36" cy="28" r="3" fill="white" />
          <path d="M26 36c2 3 10 3 12 0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M14 32h6M44 32h6M32 14v6M32 44v6" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: 'AI & Automation Tools',
      description: 'Integrating large language models, workflow scripting, chatbots, and document processing automation.',
      benefits: ['LLM API integrations', 'Automated workflows', 'Document processing engines', 'Conversational AI bots'],
    },
    {
      id: 'cloud-infrastructure',
      icon: () => (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#FEF3C7" />
          <path d="M44 35.5A6.5 6.5 0 0038.5 29a9 9 0 00-17.5-1.5c-4 1-6 4.5-5 8.5h28z" fill="#F59E0B" />
          <rect x="22" y="38" width="20" height="10" rx="2" fill="#D97706" />
          <circle cx="28" cy="43" r="1.5" fill="white" />
          <circle cx="36" cy="43" r="1.5" fill="white" />
        </svg>
      ),
      title: 'Cloud Infrastructure',
      description: 'Design and deployment of highly available, auto-scaling server systems on AWS, GCP, or Azure.',
      benefits: ['Auto-scaling setups', 'CI/CD pipeline creation', 'Database optimization', '24/7 server monitoring'],
    },
  ];

  const roadmapSteps = [
    {
      id: 'requirements',
      step: '01',
      title: 'Requirements & Design',
      description: 'Understanding user personas, workflows, database architecture blueprints, and technical constraints.',
    },
    {
      id: 'architecture',
      step: '02',
      title: 'Architecture & Specifications',
      description: 'Mapping database schemas, API specs, security access levels, and cloud infrastructure blueprints.',
    },
    {
      id: 'sprints',
      step: '03',
      title: 'Agile Sprint Development',
      description: 'Bi-weekly coding deliverables with continuous client staging access and rapid iteration feedback.',
    },
    {
      id: 'qa',
      step: '04',
      title: 'QA & Testing',
      description: 'Rigorous end-to-end user testing, database load analysis, API stress, and security audits.',
    },
    {
      id: 'deployment',
      step: '05',
      title: 'Deployment & Launch',
      description: 'Seamless zero-downtime migration to AWS, GCP, Vercel, or custom bare-metal cloud servers.',
    },
    {
      id: 'support',
      step: '06',
      title: 'Ongoing Support',
      description: 'Ongoing technical maintenance, dependency updates, server scalability monitoring, and new features.',
    },
  ];

  const technologies = [
    // Frontend
    { id: 'react', name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', color: '#61DAFB', category: 'Frontend' },
    { id: 'nextjs', name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', color: '#000000', category: 'Frontend' },
    { id: 'flutter', name: 'Flutter', icon: 'https://cdn.worldvectorlogo.com/logos/flutter.svg', color: '#02569B', category: 'Frontend' },
    { id: 'react-native', name: 'React Native', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', color: '#61DAFB', category: 'Frontend' },
    // Backend
    { id: 'nodejs', name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', color: '#339933', category: 'Backend' },
    { id: 'python', name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', color: '#3776AB', category: 'Backend' },
    { id: 'django', name: 'Django', icon: 'https://cdn.worldvectorlogo.com/logos/django.svg', color: '#092E20', category: 'Backend' },
    { id: 'mysql', name: 'MySQL', icon: 'https://www.svgrepo.com/show/303251/mysql-logo.svg', color: '#4479A1', category: 'Backend' },
    { id: 'redis', name: 'Redis', icon: 'https://cdn.worldvectorlogo.com/logos/redis.svg', color: '#DC382D', category: 'Backend' },
    // DevOps
    { id: 'aws', name: 'AWS', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', color: '#FF9900', category: 'DevOps' },
    { id: 'gcp', name: 'GCP', icon: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg', color: '#4285F4', category: 'DevOps' },
    { id: 'git', name: 'Git', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg', color: '#F05032', category: 'DevOps' },
    { id: 'docker', name: 'Docker', icon: 'https://cdn.worldvectorlogo.com/logos/docker-3.svg', color: '#2496ED', category: 'DevOps' },
  ];

  const faqs = [
    { q: 'Can Sownmark build custom software?', a: 'Yes, Sownmark has a dedicated software engineering team specializing in SaaS platforms, mobile applications (iOS/Android), custom CRMs/ERPs, and workflow automation tools.' },
    { q: 'What is your technology stack?', a: 'We write backends in Node.js, Python, and PHP. Frontends are built using React and Next.js. For mobile apps, we use Flutter and React Native. Cloud infra is managed on AWS and GCP.' },
    { q: 'What software development methodology do you follow?', a: 'We follow Agile Scrum methodology. We operate in bi-weekly sprints, delivering functional iterations and keeping clients updated via Slack and Jira.' },
    { q: 'Do you assign a dedicated project manager?', a: 'Yes. Every project is assigned a dedicated Project Manager and QA lead to ensure clear timelines and code quality.' },
    { q: 'How do you scope and structure software development partnerships?', a: 'We structure projects based on functional requirements (fixed-scope deliverables for defined specifications) or dedicated resource engagements (sprint-based teams for ongoing product scaling).' },
    { q: 'Who owns the intellectual property and code?', a: 'You do. Once all milestone payments are completed, 100% ownership of the code, repositories, and intellectual property is transferred to your company.' },
  ];

  return (
    <>
      <title>Custom Software Development Company in India</title>
      <meta
        name="description"
        content="Sownmark develops custom software solutions — from MVPs to enterprise systems. Mobile apps, SaaS platforms, CRMs, ERPs, APIs, and AI-powered tools for businesses across India."
      />
      <link rel="canonical" href="https://sownmark.com/services/software-development" />
      <meta name="keywords" content="software, project management software, accounting software, crm software, adaptive software development, software development agency, payroll software, inventory management software, hr software" />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/20 border-b border-gray-100"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#93c5fd_0%,_transparent_50%)]" />
        </div>

        <div className="container relative z-10 text-center text-gray-900 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
              className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2.5 rounded-full mb-8 border border-blue-100/50 shadow-sm"
            >
              <Shield className="w-5 h-5 text-amber-500 fill-current" />
              <span className="text-sm font-semibold tracking-wide text-blue-800">Enterprise Engineering</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight text-gray-900">
              Custom Software Development
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-650 to-purple-600 bg-clip-text text-transparent mt-2">
                Company in India
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              We design, build, and deploy robust, secure, and modern custom software solutions — from early-stage MVPs to enterprise cloud architectures.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex group"
            >
              <Link
                href="/contact#contact-form"
                className="bg-gradient-to-r from-blue-600 to-indigo-650 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center shadow-lg"
                aria-label="Request Software Development Consultation"
              >
                Request Custom Quote
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
              Built for Scale & Security
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Engineered for Impact
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our software solutions prioritize clean design systems, scalable databases, and state-of-the-art security, delivering long-term value to your business.
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
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-150 group-hover:border-blue-200 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-50/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 bg-blue-50 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                    >
                      {React.cloneElement(feature.icon, { className: "w-8 h-8 text-blue-600" })}
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
              Software Solutions
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                We Excel At
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leverage custom logic and high-performance programming languages tailored to your needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service) => {
              const VectorGraphic = service.icon;
              return (
                <motion.div key={service.id} variants={fadeInUp} className="group relative h-full">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-150 group-hover:border-blue-200 h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <VectorGraphic />
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
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-gray-100">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1a2957] mb-6 leading-tight">
              Our Software Development
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-650 to-purple-600 bg-clip-text text-transparent mt-2">
                Connection Roadmap
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-650 max-w-3xl mx-auto leading-relaxed font-medium">
              An agile development roadmap built around sprint checkpoints and continuous feedback.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-indigo-50" />
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className={`relative mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-between`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-650 font-medium">{step.description}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-lg font-bold text-blue-600 shadow-md z-10">
                  {step.step}
                </div>
                <div className="w-5/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-100/50">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Master
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6)' }}
              >
                to Engineer Custom Software
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We leverage reliable languages and cloud services for robust runtime performance.
            </p>
          </motion.div>

          {['Frontend', 'Backend', 'DevOps'].map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{category}</h3>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center"
              >
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <motion.div
                      key={tech.id}
                      variants={fadeInUp}
                      className="group relative flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="mb-2"
                        loading="lazy"
                        style={{ filter: `drop-shadow(0 0 4px ${tech.color}50)` }}
                      />
                      <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                      <div className="absolute -top-8 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container max-w-4xl mx-auto px-4 space-y-12">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Custom Software FAQs</h2>
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
        className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50 border-t border-gray-100 text-gray-900"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Ready to Architect Your
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-650 to-purple-600 bg-clip-text text-transparent mt-2">
                Custom Enterprise Platform?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-650 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              Partner with Sownmark to build secure, robust software that drives your operations. Schedule a custom scoping call today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group h-full">
                <Link
                  href="/contact#contact-form"
                  className="bg-gradient-to-r from-blue-600 to-indigo-650 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center w-full sm:w-auto shadow-lg"
                  aria-label="Schedule Scoping Call"
                >
                  Schedule Scoping Call
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

export default SoftwareDevelopmentPage;
