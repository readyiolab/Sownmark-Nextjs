'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Search, 
  Edit, 
  Trash2, 
  Plus, 
  Users, 
  MapPin, 
  Clock, 
  Building2,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function JobsAdminPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [filters, setFilters] = useState({ department: '', location: '', job_type: '', status: '' });
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchJobs();
  }, [filters, page, router]);

  const fetchJobs = async () => {
    const token = localStorage.getItem('adminToken');
    setLoading(true);
    try {
      const activeFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value && value !== 'all')
      );
      const query = new URLSearchParams({ ...activeFilters, page: String(page), limit: '10' }).toString();
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://sownmark.com';
      const response = await fetch(`${apiUrl}/api/jobs?${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setJobs(data.jobs || []);
        setTotal(data.total || 0);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
    setLoading(false);
  };

  const handleFilterChange = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value });
    setPage(1);
  };

  const handleDelete = async (id: string | number) => {
    const token = localStorage.getItem('adminToken');
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://sownmark.com';
      const response = await fetch(`${apiUrl}/api/jobs/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        fetchJobs();
      } else {
        console.error('Failed to delete job');
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Job Openings</h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Manage career positions, view applicant submissions, and edit job criteria ({total} total openings)
            </p>
          </div>
        </div>

        <Button asChild className="rounded-xl bg-[#1a2957] hover:bg-blue-900 text-white font-semibold shadow-md shadow-blue-950/20 px-5">
          <Link href="/admin/jobs/create" className="gap-2">
            <Plus className="w-4 h-4" />
            Post New Job
          </Link>
        </Button>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-3">
        <div className="relative w-full md:flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            placeholder="Filter by department (e.g. Design, Tech, Sales)..."
            value={filters.department}
            onChange={(e) => handleFilterChange('department', e.target.value)}
            className="pl-9 h-10 rounded-xl bg-slate-50 border-slate-200 text-xs focus:bg-white"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Select
            value={filters.job_type || 'all'}
            onValueChange={(val) => handleFilterChange('job_type', val)}
          >
            <SelectTrigger className="h-10 rounded-xl text-xs w-full sm:w-40 border-slate-200 bg-slate-50">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full-time">Full-Time</SelectItem>
              <SelectItem value="part-time">Part-Time</SelectItem>
              <SelectItem value="freelance">Freelance</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.status || 'all'}
            onValueChange={(val) => handleFilterChange('status', val)}
          >
            <SelectTrigger className="h-10 rounded-xl text-xs w-full sm:w-36 border-slate-200 bg-slate-50">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-slate-500 font-medium">Fetching career postings...</p>
        </div>
      ) : jobs.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3 shadow-sm">
          <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
            <Briefcase className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">No job openings found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try resetting your filters or post a new job vacancy to start receiving applications.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {jobs.map((job) => (
            <Card key={job.id} className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 bg-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h2 className="text-base font-bold text-slate-900">{job.title}</h2>
                      <Badge
                        variant={job.status === 'open' ? 'default' : 'secondary'}
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${
                          job.status === 'open'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {job.status}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                      {job.department && (
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          {job.department}
                        </span>
                      )}
                      {job.job_type && (
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {job.job_type}
                        </span>
                      )}
                      {job.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {job.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <Button variant="outline" size="sm" asChild className="rounded-xl text-xs h-9 gap-1.5 border-slate-200 text-slate-700 hover:bg-slate-100">
                      <Link href={`/admin/jobs/${job.id}/applications`}>
                        <Users className="w-3.5 h-3.5 text-blue-600" />
                        Applications
                      </Link>
                    </Button>

                    <Button variant="outline" size="sm" asChild className="rounded-xl text-xs h-9 gap-1.5 border-slate-200 text-slate-700 hover:bg-slate-100">
                      <Link href={`/admin/jobs/edit/${job.id}`}>
                        <Edit className="w-3.5 h-3.5 text-slate-600" />
                        Edit
                      </Link>
                    </Button>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="rounded-2xl">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="font-bold">Delete this job posting?</AlertDialogTitle>
                          <AlertDialogDescription className="text-sm">
                            Are you sure you want to delete <span className="font-semibold text-slate-900">"{job.title}"</span>? All associated applications will also be affected.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="rounded-xl border-slate-200">Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(job.id)} className="rounded-xl bg-rose-600 hover:bg-rose-700 text-white">
                            Delete Permanently
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
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
