'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, ArrowLeft, Briefcase, Building2, MapPin, DollarSign, Clock, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function JobForm() {
  const params = useParams();
  const router = useRouter();
  const jobId = params?.jobId as string;
  const isEdit = !!jobId;

  const [formData, setFormData] = useState({
    title: '',
    department: '',
    job_type: 'full-time',
    location: '',
    experience_level: 'mid',
    summary: '',
    responsibilities: [''],
    qualifications: [''],
    preferred_skills: [''],
    compensation: '',
    timezone: '',
    status: 'open',
    expiry_date: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    if (isEdit) {
      fetchJob();
    }
  }, [jobId, router, isEdit]);

  const fetchJob = async () => {
    const token = localStorage.getItem('adminToken');
    setLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://sownmark.com';
      const response = await fetch(`${apiUrl}/api/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setFormData({
          ...data,
          responsibilities: Array.isArray(data.responsibilities) && data.responsibilities.length > 0 ? data.responsibilities : [''],
          qualifications: Array.isArray(data.qualifications) && data.qualifications.length > 0 ? data.qualifications : [''],
          preferred_skills: Array.isArray(data.preferred_skills) && data.preferred_skills.length > 0 ? data.preferred_skills : [''],
          expiry_date: data.expiry_date ? data.expiry_date.split('T')[0] : '',
        });
      } else {
        setError(data.error || 'Error loading job details');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Failed to fetch job details');
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index: number, field: 'responsibilities' | 'qualifications' | 'preferred_skills', value: string) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addArrayField = (field: 'responsibilities' | 'qualifications' | 'preferred_skills') => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const removeArrayField = (field: 'responsibilities' | 'qualifications' | 'preferred_skills', index: number) => {
    if (formData[field].length <= 1) {
      setFormData({ ...formData, [field]: [''] });
      return;
    }
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const token = localStorage.getItem('adminToken');
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://sownmark.com';
      const url = isEdit
        ? `${apiUrl}/api/jobs/${jobId}`
        : `${apiUrl}/api/jobs`;

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          responsibilities: formData.responsibilities.filter((r) => r.trim() !== ''),
          qualifications: formData.qualifications.filter((q) => q.trim() !== ''),
          preferred_skills: formData.preferred_skills.filter((s) => s.trim() !== ''),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        router.push('/admin/jobs');
      } else {
        setError(data.error || 'Failed to save job posting');
      }
    } catch (error) {
      console.error('Save error:', error);
      setError('An unexpected error occurred while saving.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 pb-12"
    >
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild className="rounded-xl hover:bg-slate-100">
            <Link href="/admin/jobs">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
          </Button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {isEdit ? 'Edit Job Posting' : 'Post New Job Opportunity'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Configure job specifications, candidate qualifications, and employment parameters
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" asChild className="rounded-xl border-slate-200 text-slate-700">
            <Link href="/admin/jobs">Cancel</Link>
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-xl bg-[#1a2957] hover:bg-blue-900 text-white font-semibold px-6 shadow-md shadow-blue-950/20"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            {isEdit ? 'Update Job' : 'Publish Job'}
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="rounded-2xl border-red-200 bg-red-50 text-red-900">
          <AlertDescription className="text-xs font-semibold">{error}</AlertDescription>
        </Alert>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Main Information) */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="rounded-2xl border-slate-200 shadow-sm bg-white overflow-hidden">
            <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-4 px-6">
              <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" /> Job Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Senior Frontend Engineer"
                  required
                  className="rounded-xl border-slate-200 text-base font-semibold py-5"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Department</label>
                  <Input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="e.g. Engineering, Marketing, Design"
                    required
                    className="rounded-xl border-slate-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Location</label>
                  <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Remote, Bangalore, London"
                    required
                    className="rounded-xl border-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Role Summary</label>
                <Textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  placeholder="A clear overview describing the role and team impact..."
                  rows={4}
                  className="rounded-xl border-slate-200 text-sm"
                />
              </div>
            </CardContent>
          </Card>

          {/* Dynamic Requirements & Responsibilities */}
          {(['responsibilities', 'qualifications', 'preferred_skills'] as const).map((field) => (
            <Card key={field} className="rounded-2xl border-slate-200 shadow-sm bg-white overflow-hidden">
              <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-4 px-6 flex flex-row items-center justify-between">
                <CardTitle className="text-base font-bold text-slate-800 capitalize">
                  {field.replace('_', ' ')}
                </CardTitle>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayField(field)}
                  className="rounded-xl text-xs gap-1 h-8"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Point
                </Button>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                {formData[field].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayChange(index, field, e.target.value)}
                      placeholder={`Enter ${field.slice(0, -1)} point...`}
                      className="rounded-xl border-slate-200 text-xs sm:text-sm"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeArrayField(field, index)}
                      className="rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Column (Parameters & Status) */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="rounded-2xl border-slate-200 shadow-sm bg-white overflow-hidden">
            <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-4 px-6">
              <CardTitle className="text-base font-bold text-slate-800">Parameters</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Job Type</label>
                <Select
                  value={formData.job_type}
                  onValueChange={(val) => setFormData((p) => ({ ...p, job_type: val }))}
                >
                  <SelectTrigger className="rounded-xl border-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-Time</SelectItem>
                    <SelectItem value="part-time">Part-Time</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Experience Level</label>
                <Select
                  value={formData.experience_level}
                  onValueChange={(val) => setFormData((p) => ({ ...p, experience_level: val }))}
                >
                  <SelectTrigger className="rounded-xl border-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid Level</SelectItem>
                    <SelectItem value="senior">Senior Level</SelectItem>
                    <SelectItem value="lead">Lead / Principal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Status</label>
                <Select
                  value={formData.status}
                  onValueChange={(val) => setFormData((p) => ({ ...p, status: val }))}
                >
                  <SelectTrigger className="rounded-xl border-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open (Accepting Applicants)</SelectItem>
                    <SelectItem value="closed">Closed (Archived)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Compensation / Salary</label>
                <Input
                  type="text"
                  name="compensation"
                  value={formData.compensation}
                  onChange={handleChange}
                  placeholder="e.g. ₹8 - ₹14 LPA or Competitive"
                  className="rounded-xl border-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Expiry / Deadline Date</label>
                <Input
                  type="date"
                  name="expiry_date"
                  value={formData.expiry_date}
                  onChange={handleChange}
                  className="rounded-xl border-slate-200"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
