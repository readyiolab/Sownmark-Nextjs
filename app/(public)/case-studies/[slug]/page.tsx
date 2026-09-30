import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudiesData } from '@/data/caseStudies';
import { ArrowLeft, CheckCircle, Quote, Star, Zap } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData.find((x) => x.id === slug);
  if (!study) {
    return {
      title: 'Case Study Not Found - Sownmark',
    };
  }

  return {
    title: `${study.name} Case Study`,
    description: study.headline,
    alternates: {
      canonical: `https://sownmark.com/case-studies/${study.id}`,
    },
    keywords:
      'AI Performance Marketing Agency, Custom Software Development Company, Generative Engine Optimization Services, Scalable MVP Development Services, AI Integration and Automation Agency, ROI-Driven Lead Generation Agency',
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudiesData.find((x) => x.id === slug);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Case Study Not Found</h2>
          <p className="text-gray-500">The requested success story could not be located.</p>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  // Related Case Studies (excluding current one)
  const relatedStudies = caseStudiesData.filter((x) => x.id !== study.id).slice(0, 3);

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.headline,
    description: study.challenge,
    author: {
      '@type': 'Organization',
      name: 'Sownmark',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sownmark',
      logo: 'https://sownmark.com/logo.webp',
    },
  };

  const reviewSchema = study.testimonial
    ? {
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
          '@type': 'Service',
          name: study.name,
        },
        author: {
          '@type': 'Person',
          name: study.testimonial.author,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        reviewBody: study.testimonial.quote,
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}

      <div className="bg-white text-gray-900">
        {/* Header/Hero banner */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a2957] to-[#12183c] text-white">
          <div className="container max-w-5xl mx-auto px-4 space-y-6">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white uppercase tracking-widest transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>

            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit block">
              {study.category}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black leading-tight max-w-4xl">
              {study.headline}
            </h1>
          </div>
        </section>

        {/* Core Content */}
        <section className="py-20">
          <div className="container max-w-5xl mx-auto px-4 grid lg:grid-cols-12 gap-12">
            {/* Left detailed columns */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1a2957]">Client Background</h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {study.clientBackground}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1a2957]">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {study.challenge}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1a2957]">Our Approach & Solution</h2>
                <ul className="space-y-4">
                  {study.approach.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial if exists */}
              {study.testimonial && (
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-6 relative overflow-hidden">
                  <Quote className="w-12 h-12 text-blue-100 absolute top-4 right-4" />
                  <p className="text-gray-700 italic leading-relaxed text-base relative z-10">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 relative z-10">
                    <div className="flex text-yellow-400 gap-0.5">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        {study.testimonial.author}
                      </h4>
                      <p className="text-xs text-gray-500">{study.testimonial.title}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right sidebar metrics card */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#12183c] text-white p-8 rounded-3xl space-y-8 shadow-xl">
                <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 pb-4 border-b border-white/5">
                  Core Results Delivered
                </h3>

                <div className="space-y-6">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-3xl sm:text-4xl font-black text-white">{m.value}</div>
                      <div className="text-xs text-white/50 uppercase tracking-widest font-bold">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-green-400 font-bold text-xs uppercase tracking-widest">
                  <Zap className="w-4 h-4 fill-current animate-pulse" /> Campaign Milestone Achieved
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Case Studies Grid */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container max-w-5xl mx-auto px-4 space-y-12">
            <h2 className="text-2xl font-extrabold text-[#1a2957]">Related Success Stories</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedStudies.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase text-blue-500 tracking-wider block">
                      {rel.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-sm line-clamp-2">
                      {rel.headline}
                    </h3>
                  </div>
                  <div className="pt-6">
                    <Link
                      href={`/case-studies/${rel.id}`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      <span>View Story</span>
                      <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
