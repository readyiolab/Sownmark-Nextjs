'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Phone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DigitalMarketingApplicationsPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [filters, setFilters] = useState({ minReferrals: '', page: 1, limit: 10 });
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchApplications();
  }, [filters]);

  const fetchApplications = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setLoading(true);
    try {
      const query = new URLSearchParams({
        minReferrals: filters.minReferrals,
        page: String(filters.page),
        limit: String(filters.limit),
      }).toString();
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://sownmark.com';
      const response = await fetch(`${apiUrl}/api/admin/applications?${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setApplications(Array.isArray(data.applications) ? data.applications : []);
        setTotal(typeof data.total === 'number' ? data.total : 0);
      } else {
        console.error('API Error:', data.error || 'Unknown error');
        setApplications([]);
        if (response.status === 401) {
          localStorage.removeItem('adminToken');
          router.push('/admin/login');
        }
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setApplications([]);
    }
    setLoading(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto p-4 sm:p-6"
    >
      <motion.div {...fadeInUp} className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
          Digital Marketing Applications
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild variant="default" className="bg-[#1a2957] hover:bg-blue-900 text-white">
            <Link href="/admin/dashboard" className="inline-flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <Input
            type="number"
            placeholder="Min Referrals (e.g., 10)"
            value={filters.minReferrals}
            onChange={(e) => setFilters({ ...filters, minReferrals: e.target.value, page: 1 })}
            className="w-full sm:w-64"
          />
        </div>
      </motion.div>

      {loading ? (
        <p className="text-foreground text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {applications.length === 0 ? (
            <p className="text-foreground text-center">No applications found.</p>
          ) : (
            applications.map((app) => (
              <motion.div key={app.id} {...fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg sm:text-xl">
                      <User className="w-5 h-5 mr-2" /> {app.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground text-sm flex items-center">
                      <Mail className="w-4 h-4 mr-2" /> {app.email}
                    </p>
                    <p className="text-muted-foreground text-sm flex items-center">
                      <Phone className="w-4 h-4 mr-2" /> {app.phone}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Referral Code: <span className="font-medium">{app.referral_code}</span>
                    </p>
                    {app.referred_by && (
                      <p className="text-muted-foreground text-sm">
                        Referred By: <span className="font-medium">{app.referred_by}</span>
                      </p>
                    )}
                    <p className="text-muted-foreground text-sm">
                      Referrals: <span className="font-medium">{app.referral_count}</span>
                      {app.referral_count >= 10 && (
                        <span className="ml-2 text-green-600 font-semibold">(Top Referrer)</span>
                      )}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Applied: {new Date(app.created_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      )}

      <div className="mt-6 flex justify-center gap-4">
        <Button
          onClick={() => setFilters({ ...filters, page: Math.max(filters.page - 1, 1) })}
          disabled={filters.page === 1}
          variant="default"
        >
          Previous
        </Button>
        <Button
          onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
          disabled={filters.page * filters.limit >= total}
          variant="default"
        >
          Next
        </Button>
      </div>
    </motion.div>
  );
}
