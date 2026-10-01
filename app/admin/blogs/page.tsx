'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import {
  FileText,
  Edit,
  Eye,
  Trash2,
  Heart,
  Share2,
  AlertCircle,
  Search,
  Plus,
  ExternalLink,
  Sparkles,
  Calendar,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
} from "@/components/ui/alert-dialog";
import {
  getAllBlogs,
  deleteBlog,
} from "@/services/api";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await getAllBlogs();
        if (response.data && Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          setBlogs([]);
          setError("Unexpected data format received from server");
        }
      } catch (err) {
        setError("Failed to fetch blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [router]);

  const handleDelete = async (id: string | number) => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;
    try {
      await deleteBlog(id, token);
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (err) {
      setError("Failed to delete blog post");
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (Array.isArray(blog.category) && blog.category.some((c: string) => c.toLowerCase().includes(searchTerm.toLowerCase()))) ||
      (typeof blog.category === 'string' && blog.category.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus =
      statusFilter === "all" || blog.status?.toLowerCase() === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500">Loading blog articles...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Page Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Blog Management</h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Manage stories, review drafted content, and publish updates to the website ({blogs.length} articles)
            </p>
          </div>
        </div>

        <Button asChild className="rounded-xl bg-[#1a2957] hover:bg-blue-900 text-white font-semibold shadow-md shadow-blue-950/20 px-5">
          <Link href="/admin/blog/create" className="gap-2">
            <Plus className="w-4 h-4" />
            Create New Blog
          </Link>
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
        {/* Status Pill Filters */}
        <div className="flex items-center space-x-1">
          {(["all", "published", "draft"] as const).map((filter) => (
            <Button
              key={filter}
              type="button"
              variant={statusFilter === filter ? "default" : "ghost"}
              size="sm"
              onClick={() => setStatusFilter(filter)}
              className={`rounded-xl text-xs font-semibold capitalize h-9 px-3.5 ${
                statusFilter === filter
                  ? "bg-[#1a2957] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {filter === "all" ? `All (${blogs.length})` : filter}
            </Button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            placeholder="Search by title or category..." 
            className="pl-9 h-9 text-xs bg-slate-50 border-slate-200 rounded-xl focus:bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive" className="rounded-2xl border-red-200 bg-red-50 text-red-900">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-xs">{error}</AlertDescription>
        </Alert>
      )}

      {/* Main Table or Empty State */}
      {filteredBlogs.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3 shadow-sm">
          <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">
            {searchTerm ? "No blogs match your search query" : "No blogs available yet"}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {searchTerm
              ? "Try adjusting your search terms or clearing status filters."
              : "Start drafting and publishing articles to educate your audience."}
          </p>
          {searchTerm && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => { setSearchTerm(""); setStatusFilter("all"); }}
              className="rounded-xl text-xs"
            >
              Reset filters
            </Button>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50/70">
                <TableRow>
                  <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider pl-6 py-4">Title & Author</TableHead>
                  <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider w-[260px]">Summary</TableHead>
                  <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider text-center">Status</TableHead>
                  <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider text-center">Engagement</TableHead>
                  <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider text-right pr-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBlogs.map((blog) => (
                  <TableRow key={blog.id} className="hover:bg-slate-50/70 transition-colors">
                    <TableCell className="pl-6 py-4">
                      <div className="flex flex-col">
                        <Link
                          href={`/admin/blog/edit/${blog.id}`}
                          className="font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-1 text-sm"
                        >
                          {blog.title}
                        </Link>
                        <span className="text-xs text-slate-500 mt-0.5">By {blog.author || "Sownmark Team"}</span>
                      </div>
                    </TableCell>

                    <TableCell className="py-4">
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {blog.excerpt || "No summary provided"}
                      </p>
                    </TableCell>

                    <TableCell className="text-center py-4">
                      <Badge
                        variant={blog.status === "published" ? "default" : "secondary"}
                        className={`rounded-full px-3 py-0.5 text-xs font-semibold capitalize ${
                          blog.status === "published"
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                            : "bg-amber-100 text-amber-800 border border-amber-200"
                        }`}
                      >
                        {blog.status}
                      </Badge>
                    </TableCell>

                    <TableCell className="text-center py-4">
                      <div className="flex items-center justify-center gap-3 text-slate-500 text-xs">
                        <span className="flex items-center gap-1 font-medium"><Heart className="w-3.5 h-3.5 text-rose-500" /> {blog.likes || 0}</span>
                        <span className="flex items-center gap-1 font-medium"><Share2 className="w-3.5 h-3.5 text-blue-500" /> {blog.shares || 0}</span>
                      </div>
                    </TableCell>

                    <TableCell className="text-right pr-6 py-4">
                      <div className="inline-flex items-center gap-1">
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
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="rounded-2xl">
                            <AlertDialogHeader>
                              <AlertDialogTitle className="font-bold">Delete Blog Post?</AlertDialogTitle>
                              <AlertDialogDescription className="text-sm">
                                Are you sure you want to delete <span className="font-semibold text-slate-900">"{blog.title}"</span>? This will permanently remove the article from the website.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="rounded-xl border-slate-200">Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(blog.id)} className="rounded-xl bg-rose-600 hover:bg-rose-700 text-white">
                                Delete Permanently
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-slate-100">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link href={`/admin/blog/edit/${blog.id}`} className="font-bold text-slate-900 text-sm line-clamp-2">
                      {blog.title}
                    </Link>
                    <span className="text-xs text-slate-500 mt-0.5 block">By {blog.author || "Sownmark Team"}</span>
                  </div>
                  <Badge
                    variant={blog.status === "published" ? "default" : "secondary"}
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold capitalize shrink-0 ${
                      blog.status === "published"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                        : "bg-amber-100 text-amber-800 border border-amber-200"
                    }`}
                  >
                    {blog.status}
                  </Badge>
                </div>

                {blog.excerpt && (
                  <p className="text-xs text-slate-600 line-clamp-2">{blog.excerpt}</p>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-rose-500" /> {blog.likes || 0}</span>
                    <span className="flex items-center gap-1"><Share2 className="w-3.5 h-3.5 text-blue-500" /> {blog.shares || 0}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild className="h-8 rounded-lg text-xs">
                      <Link href={`/admin/blog/edit/${blog.id}`}>Edit</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0 rounded-lg text-slate-600">
                      <Link href={`/blog/${blog.slug}`} target="_blank">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
