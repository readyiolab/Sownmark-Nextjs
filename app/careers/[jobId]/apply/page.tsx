'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import JobApplicationForm from '@/components/jobs/JobApplicationForm';
import MainLayout from '@/components/layout/MainLayout';

export default function CareerApplyPage() {
  const params = useParams();
  const jobId = (params?.jobId as string) || '';

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for Position</h1>
            <p className="text-gray-600">Take the next step in your career journey with Sownmark Solutions.</p>
          </div>
          <JobApplicationForm jobId={jobId} />
        </div>
      </div>
    </MainLayout>
  );
}
