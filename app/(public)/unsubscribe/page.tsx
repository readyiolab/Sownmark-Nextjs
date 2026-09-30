"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function UnsubscribeContent() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();

  // Extract email from query parameter
  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    } else {
      setError('No email provided in the link.');
    }
  }, [searchParams]);

  const handleUnsubscribe = async () => {
    if (!email) {
      setError('Email is required.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://sownmark.com';
      const response = await fetch(`${apiUrl}/api/newsletter/subscriptions`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to unsubscribe');
      }

      setMessage('Unsubscribed successfully! You’ll receive a confirmation email.');
    } catch (err: any) {
      setError(err.message || 'Failed to unsubscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <motion.div
        {...fadeInUp}
        className="max-w-md w-full p-6 sm:p-8 bg-white rounded-3xl shadow-lg border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Unsubscribe from Newsletter</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 text-red-600 rounded-xl text-sm">
            {error}
          </div>
        )}
        {message && (
          <div className="mb-4 p-3 bg-green-500/10 text-green-600 rounded-xl text-sm">
            {message}
          </div>
        )}
        {email && !message && (
          <>
            <p className="text-gray-600 mb-4">
              Are you sure you want to unsubscribe <strong>{email}</strong> from the Sownmark Newsletter?
            </p>
            <motion.button
              onClick={handleUnsubscribe}
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, #1a2957, #90abff)',
                color: 'white',
              }}
            >
              {isSubmitting ? 'Processing...' : 'Confirm Unsubscribe'}
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-[70vh] flex items-center justify-center">Loading...</div>}>
      <UnsubscribeContent />
    </Suspense>
  );
}
