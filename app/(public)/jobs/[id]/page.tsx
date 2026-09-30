'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Clock, MapPin, Briefcase } from 'lucide-react';
import axios from 'axios';
import JobApplicationForm from '@/components/jobs/JobApplicationForm';

interface Job {
  id: string | number;
  title: string;
  department: string;
  location: string;
  job_type: string;
  compensation?: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  preferred_skills?: string[];
  experience_level?: string;
  timezone?: string;
  expiry_date: string;
  created_at: string;
}

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const getJob = async () => {
      setLoading(true);
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://sownmark.com';
        const response = await axios.get(`${apiUrl}/api/jobs/${id}`);
        const jobData = response.data;
        // Check if job is expired
        if (new Date(jobData.expiry_date) < new Date()) {
          setError('This job posting has expired.');
          setJob(null);
        } else {
          setJob(jobData);
        }
        setLoading(false);
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to load job details. Please try again later.');
        setLoading(false);
      }
    };
    getJob();
  }, [id]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <title>{job ? `${job.title} | Sownmark Solutions` : 'Job Details | Sownmark Solutions'}</title>
      <meta
        name="description"
        content={job ? `${job.summary}` : 'Explore career opportunities at Sownmark Solutions.'}
      />
      <link rel="canonical" href={`https://sownmark.com/jobs/${id}`} />

      {/* Structured Data */}
      {job && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'JobPosting',
              title: job.title,
              description: job.summary,
              datePosted: job.created_at,
              validThrough: job.expiry_date,
              employmentType: job.job_type.toUpperCase(),
              hiringOrganization: {
                '@type': 'Organization',
                name: 'Sownmark',
                sameAs: 'https://sownmark.com',
              },
              jobLocation: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: job.location,
                  addressCountry: 'India',
                },
              },
              baseSalary: {
                '@type': 'MonetaryAmount',
                currency: 'INR',
                value: {
                  '@type': 'QuantitativeValue',
                  value: job.compensation || '',
                  unitText: 'YEAR',
                },
              },
            }),
          }}
        />
      )}

      {/* Job Details Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 m-10">
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-gray-600 text-base font-medium">
              <svg
                className="animate-spin h-5 w-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Loading job details...
            </div>
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center bg-red-50 p-4 rounded-lg"
          >
            <p className="text-red-600 text-base font-medium">{error}</p>
            <button
              onClick={() => router.push('/services/hiring-solutions')}
              className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
            >
              Back to Careers
            </button>
          </motion.div>
        )}
        {job && (
          <motion.div {...fadeInUp}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{job.job_type}</span>
              </div>
              {job.compensation && (
                <div className="flex items-center gap-2">
                  <span>{job.compensation}</span>
                </div>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-8">{job.summary}</p>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities?.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Qualifications
              </h2>
              <ul className="space-y-3">
                {job.qualifications?.map((qualification, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            {job.preferred_skills && job.preferred_skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Preferred Skills
                </h2>
                <ul className="space-y-3">
                  {job.preferred_skills.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.experience_level && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Experience Level
                </h2>
                <p className="text-gray-600 text-sm">{job.experience_level}</p>
              </div>
            )}

            {job.timezone && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Timezone
                </h2>
                <p className="text-gray-600 text-sm">{job.timezone}</p>
              </div>
            )}

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const el = document.getElementById('application-form');
                  if (el) {
                    window.scrollTo({
                      top: el.offsetTop - 80,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="px-6 py-3 bg-[#1a2957] text-white rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-300 transition-all duration-200 flex items-center gap-2"
                aria-label={`Apply for ${job.title}`}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </section>

      {/* Application Form Section */}
      {job && (
        <section
          id="application-form"
          className="py-12 sm:py-16"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          }}
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 text-center">
                Apply for{' '}
                <span className="bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
                  {job.title}
                </span>
              </h2>
              <JobApplicationForm jobId={String(job.id)} />
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
