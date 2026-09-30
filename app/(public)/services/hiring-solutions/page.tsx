"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Users, Search, CheckCircle, Clock, Award, Briefcase, ArrowRight, MessageCircle, LocateIcon, MapPin, Shield } from 'lucide-react';
import axios from 'axios';

const HiringSolutionsPage: React.FC = () => {
  const isMobile = React.useRef(typeof window !== 'undefined' ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) : false).current;
  const [showJobs, setShowJobs] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  // Scroll to section if hash is present
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#hire-top-talent') {
      const element = document.getElementById('hire-top-talent');
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 500);
      }
    }
  }, []);

  // Fetch jobs when job list is toggled
  useEffect(() => {
    if (showJobs) {
      const getJobs = async () => {
        setLoading(true);
        try {
          const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://sownmark.com';
          const response = await axios.get(`${apiUrl}/api/jobs/`, {
            params: { page: 1, limit: 10 },
          });
          setJobs(response.data.jobs);
          setLoading(false);
        } catch (err: any) {
          setError(err.response?.data?.error || 'Failed to load jobs. Please try again.');
          setLoading(false);
        }
      };
      getJobs();
    }
  }, [showJobs]);

  const fadeInUp = {
    initial: isMobile ? { opacity: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: isMobile ? 0.1 : 0.2 },
    transition: { duration: isMobile ? 0.4 : 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
  };

  const handleApplyClick = () => {
    setShowJobs(!showJobs);
  };

  const handleJobClick = (jobId: string | number) => {
    router.push(`/jobs/${jobId}`);
  };

  const faqs = [
    { q: 'What roles can Sownmark help recruit?', a: 'We specialize in placing talent across BPO (voice/non-voice, technical support, healthcare BPO), Sales (telesales, field sales, B2B sales), Digital Marketing (SEO, performance marketing, content creators), and IT/Tech (software engineers, app developers, designers).' },
    { q: 'What makes Sownmarks hiring solutions unique?', a: 'Unlike traditional recruiters, we are an active digital marketing and tech agency ourselves. Our in-house technical and marketing experts screen and interview the candidates before presenting them to you, ensuring a 100% practical skills match.' },
    { q: 'How long does it take to find a candidate?', a: 'Typically, we share the first curated shortlist of pre-vetted candidates within 5 to 7 business days of understanding your detailed requirements.' },
    { q: 'Do you offer contract or team augmentation models?', a: 'Yes. We support direct permanent hiring, contract-to-hire arrangements, and full developer/staff augmentation models where resources work exclusively under your directions.' },
    { q: 'What screening steps do candidates go through?', a: 'Every candidate undergoes resume screening, a preliminary HR alignment call, a customized technical/role-specific assignment test, and a live round of expert vetting interviews.' },
    { q: 'How does Sownmark structure recruitment scopes?', a: 'We structure agreements based on permanent hiring placement percentages, contract-to-hire options, or sprint-based developer augmentation retainer scopes.' },
    { q: 'Do you provide replacement guarantees?', a: 'Yes. All our permanent placements come with a standard 90-day replacement guarantee. If a candidate leaves or fails to perform within this period, we replace them at no extra charge.' },
    { q: 'Which industries do you hire for?', a: 'We actively recruit for tech startups, e-commerce brands, healthcare providers, BPO centers, real estate developers, and corporate B2B enterprises.' },
    { q: 'Do you support remote and hybrid hiring?', a: 'Yes. We source talent across India for fully remote, hybrid, or on-site office arrangements based on your company policies.' },
    { q: 'How do we get started?', a: 'Simply submit our inquiry form on the contact page, and our recruitment account manager will set up a call to document your job descriptions.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <title>Hiring Solutions in India – Find the Best Digital Talent</title>
      <meta
        name="description"
        content="Offering professional hiring solutions in India for digital marketing, IT, BPO, and Sales roles. Get high-quality talent for your business."
      />
      <meta
        name="keywords"
        content="hiring solutions India, recruitment services for businesses, digital marketing talent, IT recruitment agency, staff augmentation services"
      />
      <link rel="canonical" href="https://sownmark.com/services/hiring-solutions" />
      <meta property="og:type" content="website" />

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
              <span className="text-sm font-medium tracking-wide">Trusted Recruitment Partner</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Build Your Dream Team
              <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mt-2">
                with Sownmark
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Connect with top-tier digital and tech talent through our expert recruitment services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
                <Link
                  href="/contact#contact-form"
                  className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center shadow-xl"
                  aria-label="Get Started"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Seamless Recruitment
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our systematic screening process ensures candidates excel in skills and align with your organizational culture.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
          >
            {[
              {
                icon: '/gifs/expert talent c-min.gif',
                title: 'Expert Talent Sourcing',
                description: 'Access our private network of pre-vetted, high-caliber candidates.',
              },
              {
                icon: '/gifs/Rigorous Screening-min.gif',
                title: 'Rigorous Screening',
                description: 'Multi-step evaluation covers technical skills and soft alignments.',
              },
              {
                icon: '/gifs/Time Efficiency-min.gif',
                title: 'Time Efficiency & Velocity',
                description: 'Streamlined communication channels reduce average time-to-hire by 50%.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-full"
              >
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden bg-gradient-to-br from-[#1a2957] to-[#3b82f6]"
                    >
                      <img src={feature.icon} alt={feature.title} className="w-12 h-12 rounded-md" loading="lazy" />
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

      {/* Services/Domains Section */}
      <section id="hire-top-talent" className="py-16 sm:py-20 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Specialized Talent Across
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Key Domains
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build high-performing teams with our expertise in BPO, sales, digital marketing, and tech.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              {
                icon: <Award className="w-10 h-10 text-white" />,
                title: 'BPO Hiring',
                roles: ['Voice Process', 'Non-Voice Process', 'Healthcare BPO', 'Tech Support'],
                image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: <Briefcase className="w-10 h-10 text-white" />,
                title: 'Sales Hiring',
                roles: ['Field Sales', 'Inside Sales', 'Telesales', 'Retail Sales'],
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: <Award className="w-10 h-10 text-white" />,
                title: 'Digital Marketing',
                roles: ['SEO Specialists', 'SEM Managers', 'Social Media Managers', 'Content Writers', 'Digital Strategists', 'Performance Marketers'],
                image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: <Briefcase className="w-10 h-10 text-white" />,
                title: 'IT & Tech',
                roles: ['Web Developers', 'Mobile App Developers', 'UI/UX Designers', 'QA Engineers', 'Data Analysts', 'Project Managers'],
                image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((domain, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative h-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  <div className="relative overflow-hidden h-48 shrink-0">
                    <img
                      src={domain.image}
                      alt={domain.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent text-white"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4 shrink-0">
                      <div
                        className="mr-3 p-2 rounded-xl text-white shadow-md"
                        style={{ background: 'linear-gradient(135deg, #1a2957, #3b82f6)' }}
                      >
                        {domain.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{domain.title}</h3>
                    </div>
                    <ul className="space-y-2 flex-1">
                      {domain.roles.map((role, roleIndex) => (
                        <li key={roleIndex} className="flex items-center gap-3 text-gray-700 text-sm">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Apply Button and Job List */}
          <div className="flex justify-center items-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApplyClick}
              className="px-10 py-4 bg-gradient-to-r from-[#1a2957] to-[#3b82f6] text-white rounded-full font-bold text-base hover:shadow-lg transition-all duration-300"
            >
              {showJobs ? 'Hide Active Openings' : 'View Available Openings'}
            </motion.button>
          </div>

          {showJobs && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              className="mt-12 max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-150 p-8 sm:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Available Job Openings</h3>
                {loading && <p className="text-gray-600 text-center py-6">Loading jobs...</p>}
                {error && <p className="text-red-500 text-center py-6">{error}</p>}
                {!loading && !error && jobs.length === 0 && (
                  <p className="text-gray-650 text-center py-6">No jobs available at the moment.</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.map((job) => (
                    <motion.div
                      key={job.id}
                      variants={fadeInUp}
                      className="group relative cursor-pointer"
                      onClick={() => handleJobClick(job.id)}
                    >
                      <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col justify-between">
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h4>
                          <p className="text-gray-500 text-sm flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-500" /> {job.location}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="mt-6 w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#1a2957] py-3 rounded-xl hover:bg-blue-700 transition duration-200"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Hiring Process Roadmap Section */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 100%)' }}>
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our Proven
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                Hiring Process
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to deliver the perfect candidate fits for your team.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-white/20" />
            {[
              {
                step: '01',
                title: 'Scoping & Definition',
                description: 'We dive deep into your culture, expectations, and role parameters.',
              },
              {
                step: '02',
                title: 'Talent Sourcing',
                description: 'We identify and screen top candidates from our vetted database.',
              },
              {
                step: '03',
                title: 'Shortlist Presentation',
                description: 'You receive a curated shortlist of pre-interviewed candidates.',
              },
              {
                step: '04',
                title: 'Interview & Selection',
                description: 'We coordinate interviews and support final placement steps.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
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

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Partner with
              <span
                className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
              >
                Sownmark?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Tailored recruitment with unmatched active screening and dedication.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              {
                title: 'Active Industry Experts',
                description: 'Because we are an active digital agency, our marketing team screens candidates personally.',
              },
              {
                title: 'Rigorous Skill Auditing',
                description: 'Technical challenges and live interview vetting ensure zero resume padding.',
              },
              {
                title: 'Standard replacement Guarantee',
                description: 'Every permanent placement is backed by our standard replacement period for security.',
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative h-full">
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container max-w-4xl mx-auto px-4 space-y-12">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Hiring Solutions FAQs</h2>
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
              Ready to Recruit
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                Your Dream Team?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Partner with Sownmark to secure pre-screened talent across BPO, IT, sales, and digital marketing. Schedule your scoping call today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group h-full">
                <Link
                  href="/contact#contact-form"
                  className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center w-full sm:w-auto shadow-2xl"
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
    </div>
  );
};

export default HiringSolutionsPage;