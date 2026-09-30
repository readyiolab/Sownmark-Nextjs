"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-neutral-50 pt-32 pb-20 px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-500 mb-8">404</h1>
          <h2 className="heading-lg mb-4">Page Not Found</h2>
          <p className="text-xl text-text-secondary mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            href="/" 
            className="btn btn-primary inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </MainLayout>
  );
}
