'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Phone, ArrowLeft, TrendingUp, Search, Calendar, FileText, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Marketing Inquiries & Applications
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Review agency proposals, marketing candidate submissions, and leads ({total} total)
            </p>
          </div>
        </div>

        <Button asChild variant="outline" className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-100">
          <Link href="/admin/dashboard" className="gap-2 text-xs font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-slate-500 font-medium">Loading submissions...</p>
        </div>
      ) : applications.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3 shadow-sm">
          <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
            <TrendingUp className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">No submissions found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            New marketing applications submitted from the landing page will appear here automatically.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {applications.map((app) => (
            <Card key={app.id} className="rounded-2xl border-slate-200 shadow-sm bg-white overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-sm">
                        {app.name ? app.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-slate-900">{app.name}</h2>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-0.5">
                          <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-400" /> {app.email}</span>
                          {app.phone && <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-slate-400" /> {app.phone}</span>}
                        </div>
                      </div>
                    </div>

                    {app.portfolio_url && (
                      <p className="text-xs text-blue-600 font-medium">
                        Portfolio: <a href={app.portfolio_url} target="_blank" rel="noopener noreferrer" className="underline">{app.portfolio_url}</a>
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    {app.createdAt && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {new Date(app.createdAt).toLocaleDateString()}
                      </span>
                    )}
                    <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs capitalize bg-slate-100 text-slate-700">
                      {app.status || 'Received'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </motion.div>
  );
}
