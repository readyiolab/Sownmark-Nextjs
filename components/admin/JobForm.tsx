'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2 } from 'lucide-react';
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
    job_type: '',
    location: '',
    experience_level: '',
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
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://sownmark.com';
      const response = await fetch(`${apiUrl}/api/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setFormData({
          ...data,
          responsibilities: Array.isArray(data.responsibilities) ? data.responsibilities : [''],
          qualifications: Array.isArray(data.qualifications) ? data.qualifications : [''],
          preferred_skills: Array.isArray(data.preferred_skills) ? data.preferred_skills : [''],
          expiry_date: data.expiry_date ? data.expiry_date.split('T')[0] : '',
        });
      } else {
        setError(data.error || 'Error loading job');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Failed to fetch job details');
    }
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
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        router.push('/admin/jobs');
      } else {
        setError(data.error || 'Failed to save job');
      }
    } catch (error) {
      setError('Failed to save job');
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div {...fadeInUp} className="p-4 sm:p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl">
            {isEdit ? 'Edit Job Posting' : 'Create Job Posting'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground">Job Title</label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                aria-required="true"
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Department</label>
              <Input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                aria-required="true"
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Job Type</label>
              <Select
                name="job_type"
                value={formData.job_type}
                onValueChange={(value) => setFormData({ ...formData, job_type: value })}
                required
                aria-required="true"
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-Time</SelectItem>
                  <SelectItem value="part-time">Part-Time</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Location</label>
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                aria-required="true"
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Experience Level</label>
              <Select
                name="experience_level"
                value={formData.experience_level}
                onValueChange={(value) => setFormData({ ...formData, experience_level: value })}
                required
                aria-required="true"
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry</SelectItem>
                  <SelectItem value="mid">Mid</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Summary</label>
              <Textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                required
                aria-required="true"
                className="mt-1"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Responsibilities</label>
              {formData.responsibilities.map((item, index) => (
                <div key={index} className="flex gap-2 mt-1">
                  <Input
                    type="text"
                    value={item}
                    onChange={(e) => handleArrayChange(index, 'responsibilities', e.target.value)}
                    required
                    aria-required="true"
                  />
                  {formData.responsibilities.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeArrayField('responsibilities', index)}
                      variant="destructive"
                      size="icon"
                      aria-label="Remove responsibility"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                onClick={() => addArrayField('responsibilities')}
                variant="outline"
                className="mt-2"
              >
                <Plus className="w-5 h-5 mr-1" />
                Add Responsibility
              </Button>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Qualifications</label>
              {formData.qualifications.map((item, index) => (
                <div key={index} className="flex gap-2 mt-1">
                  <Input
                    type="text"
                    value={item}
                    onChange={(e) => handleArrayChange(index, 'qualifications', e.target.value)}
                    required
                    aria-required="true"
                  />
                  {formData.qualifications.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeArrayField('qualifications', index)}
                      variant="destructive"
                      size="icon"
                      aria-label="Remove qualification"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                onClick={() => addArrayField('qualifications')}
                variant="outline"
                className="mt-2"
              >
                <Plus className="w-5 h-5 mr-1" />
                Add Qualification
              </Button>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Preferred Skills (Optional)</label>
              {formData.preferred_skills.map((item, index) => (
                <div key={index} className="flex gap-2 mt-1">
                  <Input
                    type="text"
                    value={item}
                    onChange={(e) => handleArrayChange(index, 'preferred_skills', e.target.value)}
                  />
                  {formData.preferred_skills.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeArrayField('preferred_skills', index)}
                      variant="destructive"
                      size="icon"
                      aria-label="Remove preferred skill"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                onClick={() => addArrayField('preferred_skills')}
                variant="outline"
                className="mt-2"
              >
                <Plus className="w-5 h-5 mr-1" />
                Add Preferred Skill
              </Button>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Compensation (Optional)</label>
              <Input
                type="text"
                name="compensation"
                value={formData.compensation}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Timezone (Optional)</label>
              <Input
                type="text"
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Status</label>
              <Select
                name="status"
                value={formData.status}
                onValueChange={(value) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Expiry Date (Optional)</label>
              <Input
                type="date"
                name="expiry_date"
                value={formData.expiry_date}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full bg-[#1a2957] hover:bg-blue-900 text-white">
              <Save className="w-5 h-5 mr-2" />
              {isEdit ? 'Update Job' : 'Create Job'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
