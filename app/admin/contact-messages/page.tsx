'use client';

import React, { useState, useEffect } from 'react';
import { 
  getAllContactMessages, 
  updateContactMessageStatus 
} from '@/services/api';
import { motion } from 'framer-motion';
import { 
  Mail, 
  User, 
  Phone, 
  Clock, 
  AlertCircle,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, [page, statusFilter]);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError('');
      const params = {
        page,
        limit: 10,
        status: statusFilter === 'all' ? undefined : statusFilter
      };
      
      const response = await getAllContactMessages(params);
      setMessages(response.data.messages || []);
      setTotalPages(Math.ceil((response.data.total || 0) / 10) || 1);
    } catch (err) {
      setError('Failed to fetch contact messages. Please try again.');
      console.error('Fetch messages error:', err);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleStatusUpdate = async (id: string | number, newStatus: string) => {
    try {
      await updateContactMessageStatus(id, newStatus);
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, status: newStatus } : msg
      ));
    } catch (err) {
      console.error('Update status error:', err);
      alert('Failed to update status. Please try again.');
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchMessages();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">New</Badge>;
      case 'read':
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Read</Badge>;
      case 'responded':
        return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Responded</Badge>;
      default:
        return <Badge variant="secondary" className="capitalize">{status}</Badge>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Contact Inquiries</h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Review and manage inquiries and message submissions from the website contact page
            </p>
          </div>
        </div>

        <Button
          onClick={handleRefresh}
          disabled={loading || isRefreshing}
          className="rounded-xl bg-[#1a2957] hover:bg-blue-900 text-white font-semibold shadow-md shadow-blue-950/20 px-5 gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="rounded-2xl border-red-200 bg-red-50 text-red-900">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertTitle className="font-bold">Error</AlertTitle>
          <AlertDescription className="text-xs">{error}</AlertDescription>
        </Alert>
      )}

      {/* Main Table Card */}
      <Card className="rounded-2xl border-slate-200 shadow-sm bg-white overflow-hidden">
        <CardHeader className="py-4 px-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="text-base font-bold text-slate-900">All Inquiries</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Filter Status:</span>
            <Select 
              value={statusFilter} 
              onValueChange={(val) => {
                setStatusFilter(val);
                setPage(1);
              }}
            >
              <SelectTrigger className="w-[140px] h-9 text-xs rounded-xl border-slate-200 bg-slate-50">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="responded">Responded</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loading && !isRefreshing ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <p className="text-xs text-slate-500 font-medium">Loading inquiries...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-16 text-slate-500 space-y-2">
              <MessageSquare className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">No contact messages found</p>
              <p className="text-xs text-slate-400">Inquiries submitted via the contact form will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50/70">
                  <TableRow>
                    <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider pl-6">Date</TableHead>
                    <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider">Customer</TableHead>
                    <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider">Contact</TableHead>
                    <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider">Subject & Message</TableHead>
                    <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider text-center">Status</TableHead>
                    <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider text-right pr-6">Update Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((msg) => (
                    <TableRow key={msg.id} className="hover:bg-slate-50/70 transition-colors">
                      <TableCell className="pl-6 py-4 whitespace-nowrap text-xs text-slate-500">
                        <div className="flex items-center gap-1.5 font-medium">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {formatDate(msg.created_at)}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 font-semibold text-slate-900 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center">
                            {msg.name ? msg.name.charAt(0).toUpperCase() : 'U'}
                          </div>
                          {msg.name}
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="flex flex-col text-xs gap-0.5">
                          <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline font-medium">
                            {msg.email}
                          </a>
                          {msg.phone && (
                            <span className="text-slate-500 text-[11px]">{msg.phone}</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 max-w-[300px]">
                        <div className="font-bold text-slate-900 text-xs">{msg.subject || 'No Subject'}</div>
                        <p className="text-xs text-slate-600 line-clamp-2 mt-0.5 leading-relaxed">
                          {msg.message}
                        </p>
                      </TableCell>
                      <TableCell className="py-4 text-center">
                        {getStatusBadge(msg.status)}
                      </TableCell>
                      <TableCell className="py-4 text-right pr-6">
                        <Select 
                          value={msg.status} 
                          onValueChange={(val) => handleStatusUpdate(msg.id, val)}
                        >
                          <SelectTrigger className="w-[125px] h-8 text-xs rounded-lg border-slate-200 ml-auto">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="read">Read</SelectItem>
                            <SelectItem value="responded">Responded</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50/50">
              <p className="text-xs text-slate-500 font-medium">
                Page {page} of {totalPages}
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="rounded-lg h-8 text-xs"
                >
                  <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  className="rounded-lg h-8 text-xs"
                >
                  Next
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
