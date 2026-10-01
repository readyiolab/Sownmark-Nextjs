'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  getAllBlogs,
  getAllJobApplications,
  getAllDigitalMarketingApplications,
  getAllContactMessages,
} from '@/services/api';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Edit, 
  Eye, 
  Briefcase, 
  Users, 
  TrendingUp,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  RefreshCw,
  Plus,
  Mail,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AdminDashboardPage() {
  const [dashboardData, setDashboardData] = useState<{
    blogs: any[];
    jobApplications: any[];
    digitalMarketingApplications: any[];
    contactMessages: any[];
    stats: {
      totalBlogs: number;
      publishedBlogs: number;
      draftBlogs: number;
      totalJobApplications: number;
      approvedJobApplications: number;
      pendingJobApplications: number;
      rejectedJobApplications: number;
      totalDigitalMarketingApplications: number;
      totalContactMessages: number;
      newContactMessages: number;
      recentApplications: number;
    };
  }>({
    blogs: [],
    jobApplications: [],
    digitalMarketingApplications: [],
    contactMessages: [],
    stats: {
      totalBlogs: 0,
      publishedBlogs: 0,
      draftBlogs: 0,
      totalJobApplications: 0,
      approvedJobApplications: 0,
      pendingJobApplications: 0,
      rejectedJobApplications: 0,
      totalDigitalMarketingApplications: 0,
      totalContactMessages: 0,
      newContactMessages: 0,
      recentApplications: 0,
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchDashboardData();
  }, [router]);

  const fetchDashboardData = async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError('');

    try {
      const [blogsResponse, jobApplicationsResponse, digitalMarketingResponse, contactMessagesResponse] = await Promise.allSettled([
        getAllBlogs(),
        getAllJobApplications(),
        getAllDigitalMarketingApplications(),
        getAllContactMessages(),
      ]);

      let blogs = [];
      let jobApplications = [];
      let digitalMarketingApplications = [];
      let contactMessages = [];

      if (blogsResponse.status === 'fulfilled') {
        blogs = blogsResponse.value.data || [];
      } else {
        console.error('Failed to fetch blogs:', blogsResponse.reason);
      }

      if (jobApplicationsResponse.status === 'fulfilled') {
        jobApplications = jobApplicationsResponse.value.data.applications || [];
      } else {
        console.error('Failed to fetch job applications:', jobApplicationsResponse.reason);
      }

      if (digitalMarketingResponse.status === 'fulfilled') {
        digitalMarketingApplications = digitalMarketingResponse.value.data.applications || [];
      } else {
        console.error('Failed to fetch digital marketing applications:', digitalMarketingResponse.reason);
      }

      if (contactMessagesResponse.status === 'fulfilled') {
        contactMessages = contactMessagesResponse.value.data.messages || [];
      } else {
        console.error('Failed to fetch contact messages:', contactMessagesResponse.reason);
      }

      const stats = calculateStats(blogs, jobApplications, digitalMarketingApplications, contactMessages);

      setDashboardData({
        blogs,
        jobApplications,
        digitalMarketingApplications,
        contactMessages,
        stats,
      });

    } catch (err) {
      setError('Failed to fetch dashboard data. Please try again.');
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const calculateStats = (blogs: any[], jobApplications: any[], digitalMarketingApplications: any[], contactMessages: any[]) => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    return {
      totalBlogs: blogs.length,
      publishedBlogs: blogs.filter(blog => blog.status === 'published').length,
      draftBlogs: blogs.filter(blog => blog.status === 'draft').length,
      totalJobApplications: jobApplications.length,
      approvedJobApplications: jobApplications.filter(app => app.status === 'approved').length,
      pendingJobApplications: jobApplications.filter(app => app.status === 'pending').length,
      rejectedJobApplications: jobApplications.filter(app => app.status === 'rejected').length,
      totalDigitalMarketingApplications: digitalMarketingApplications.length,
      totalContactMessages: contactMessages.length,
      newContactMessages: contactMessages.filter(msg => msg.status === 'new').length,
      recentApplications: [
        ...jobApplications.filter(app => new Date(app.createdAt || app.created_at) > oneWeekAgo),
        ...digitalMarketingApplications.filter(app => new Date(app.createdAt || app.created_at) > oneWeekAgo),
        ...contactMessages.filter(msg => new Date(msg.created_at) > oneWeekAgo),
      ].length,
    };
  };

  const handleRefresh = () => {
    fetchDashboardData(true);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <span className="text-slate-600 text-sm font-medium">Loading studio metrics...</span>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Blogs',
      value: dashboardData.stats.totalBlogs,
      icon: FileText,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
      description: `${dashboardData.stats.publishedBlogs} published · ${dashboardData.stats.draftBlogs} drafts`,
      link: '/admin/blogs',
    },
    {
      title: 'Job Applications',
      value: dashboardData.stats.totalJobApplications,
      icon: Briefcase,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      description: `${dashboardData.stats.pendingJobApplications} pending review`,
      link: '/admin/jobs',
    },
    {
      title: 'Marketing Inquiries',
      value: dashboardData.stats.totalDigitalMarketingApplications,
      icon: TrendingUp,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
      description: 'Digital agency leads',
      link: '/admin/marketing-applications',
    },
    {
      title: 'Contact Messages',
      value: dashboardData.stats.totalContactMessages,
      icon: Mail,
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
      description: `${dashboardData.stats.newContactMessages} new messages`,
      link: '/admin/contact-messages',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Welcome Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b1329] via-[#121f45] to-[#1a2957] p-6 sm:p-8 text-white shadow-xl shadow-blue-950/20">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Overview Studio
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Welcome to Admin Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Monitor active blogs, client inquiries, applicant submissions, and publishing activities across Sownmark.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={handleRefresh}
              disabled={refreshing}
              variant="outline"
              size="sm"
              className="rounded-xl bg-white/10 hover:bg-white/20 border-white/10 text-white text-xs font-semibold h-10 px-4"
            >
              <RefreshCw className={`w-3.5 h-3.5 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              {refreshing ? 'Syncing...' : 'Sync Data'}
            </Button>

            <Button
              asChild
              size="sm"
              className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs h-10 px-4 shadow-lg shadow-blue-600/30"
            >
              <Link href="/admin/blog/create">
                <Plus className="w-4 h-4 mr-1.5" /> New Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" className="rounded-2xl border-red-200 bg-red-50 text-red-900">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertTitle className="font-bold">Sync Error</AlertTitle>
          <AlertDescription className="text-xs">{error}</AlertDescription>
        </Alert>
      )}

      {/* Key Metric KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="rounded-2xl border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2 pt-5 px-6">
                <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {stat.title}
                </CardTitle>
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${stat.iconBg}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-5 pt-1">
                <div className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                <CardDescription className="text-xs text-slate-500 mt-1 font-medium">
                  {stat.description}
                </CardDescription>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={stat.link}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group"
                  >
                    Manage section
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Application Status Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Status Breakdown */}
        <Card className="rounded-2xl border-slate-200/90 shadow-sm bg-white overflow-hidden lg:col-span-1">
          <CardHeader className="py-4 px-6 border-b border-slate-100">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Job Application Status
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs font-bold text-emerald-950 uppercase tracking-wider">Approved</p>
                  <p className="text-[11px] text-emerald-700">Accepted applicants</p>
                </div>
              </div>
              <span className="text-xl font-black text-emerald-900">
                {dashboardData.stats.approvedJobApplications}
              </span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-amber-50/70 border border-amber-100">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-xs font-bold text-amber-950 uppercase tracking-wider">Pending</p>
                  <p className="text-[11px] text-amber-700">Awaiting screening</p>
                </div>
              </div>
              <span className="text-xl font-black text-amber-900">
                {dashboardData.stats.pendingJobApplications}
              </span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-rose-50/70 border border-rose-100">
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-rose-600" />
                <div>
                  <p className="text-xs font-bold text-rose-950 uppercase tracking-wider">Rejected</p>
                  <p className="text-[11px] text-rose-700">Declined submissions</p>
                </div>
              </div>
              <span className="text-xl font-black text-rose-900">
                {dashboardData.stats.rejectedJobApplications}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Quick Launchpad Actions */}
        <Card className="rounded-2xl border-slate-200/90 shadow-sm bg-white overflow-hidden lg:col-span-2">
          <CardHeader className="py-4 px-6 border-b border-slate-100 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Quick Action Launchpad
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  link: '/admin/blog/create',
                  title: 'Create Blog Post',
                  description: 'Rich paste & publish content',
                  icon: Plus,
                  color: 'text-blue-600 bg-blue-50 border-blue-100',
                },
                {
                  link: '/admin/jobs',
                  title: 'Manage Careers & Jobs',
                  description: 'Post job openings & reviews',
                  icon: Briefcase,
                  color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
                },
                {
                  link: '/admin/marketing-applications',
                  title: 'Marketing Inquiries',
                  description: 'Lead generation submissions',
                  icon: Users,
                  color: 'text-purple-600 bg-purple-50 border-purple-100',
                },
                {
                  link: '/admin/contact-messages',
                  title: 'Contact Messages',
                  description: 'Direct inquiries & requests',
                  icon: Mail,
                  color: 'text-rose-600 bg-rose-50 border-rose-100',
                },
              ].map((action) => (
                <Link
                  key={action.title}
                  href={action.link}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-sm hover:bg-slate-50/50 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${action.color}`}>
                    <action.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{action.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Blogs Showcase */}
      {dashboardData.blogs.length > 0 && (
        <Card className="rounded-2xl border-slate-200/90 shadow-sm bg-white overflow-hidden">
          <CardHeader className="py-4 px-6 border-b border-slate-100 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-bold text-slate-900">Recent Blog Posts</CardTitle>
              <CardDescription className="text-xs text-slate-500">
                Latest articles authored on Sownmark
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="text-xs font-semibold text-blue-600 hover:text-blue-700">
              <Link href="/admin/blogs" className="flex items-center gap-1">
                View all blogs <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50/70">
                  <TableRow>
                    <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider pl-6">Title & Author</TableHead>
                    <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider text-center">Status</TableHead>
                    <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider">Categories</TableHead>
                    <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider text-right pr-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dashboardData.blogs.slice(0, 5).map((blog) => (
                    <TableRow key={blog.id} className="hover:bg-slate-50/60 transition-colors">
                      <TableCell className="pl-6 py-4">
                        <div className="font-bold text-slate-900 text-sm line-clamp-1">{blog.title}</div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">By {blog.author || 'Sownmark Team'}</div>
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <Badge
                          variant={blog.status === 'published' ? 'default' : 'secondary'}
                          className={`rounded-full px-3 py-0.5 text-xs font-semibold capitalize ${
                            blog.status === 'published'
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                              : 'bg-amber-100 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {blog.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-4 text-xs text-slate-600">
                        {Array.isArray(blog.categories) ? blog.categories.join(', ') : (blog.category || 'General')}
                      </TableCell>
                      <TableCell className="text-right pr-6 py-4">
                        <div className="inline-flex items-center gap-1.5">
                          <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0 rounded-lg text-slate-600 hover:text-blue-600">
                            <Link href={`/admin/blog/edit/${blog.id}`} title="Edit Post">
                              <Edit className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0 rounded-lg text-slate-600 hover:text-blue-600">
                            <Link href={`/blog/${blog.slug}`} target="_blank" title="View live on website">
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}
