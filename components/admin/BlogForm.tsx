'use client';

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Save, 
  AlertCircle, 
  FileText, 
  User, 
  Layers, 
  Tag, 
  Clock, 
  Eye, 
  Settings, 
  Image as ImageIcon,
  Star,
  Search,
  ArrowLeft,
  CheckCircle2,
  X,
  Upload
} from "lucide-react";
import { createBlog, updateBlog, getBlogById } from "@/services/api";
import RichContentEditor from "@/components/admin/RichContentEditor";
import { editorJSToHtml } from "@/components/admin/editorUtils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogFormProps {
  isEdit?: boolean;
}

export default function BlogForm({ isEdit = false }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    author_bio: "",
    status: "published",
    read_time: "5",
    categories: "",
    tags: "",
    meta_description: "",
    is_featured: false,
    featured_image: null as File | null,
    current_image: "",
  });
  const [imagePreview, setImagePreview] = useState<string>("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    if (isEdit && id) {
      const fetchBlog = async () => {
        try {
          setLoading(true);
          const response = await getBlogById(id);
          const blogData = response.data;

          // Convert incoming content to rich HTML regardless of whether it was stored as EditorJS blocks or HTML
          let initialHtml = "";
          if (blogData.content) {
            if (typeof blogData.content === "string") {
              const trimmed = blogData.content.trim();
              if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
                try {
                  const parsed = JSON.parse(trimmed);
                  initialHtml = editorJSToHtml(parsed);
                } catch {
                  initialHtml = blogData.content;
                }
              } else {
                initialHtml = blogData.content;
              }
            } else if (typeof blogData.content === "object") {
              initialHtml = editorJSToHtml(blogData.content);
            }
          }

          setFormData({
            title: blogData.title || "",
            excerpt: blogData.excerpt || "",
            content: initialHtml,
            author: blogData.author || "",
            author_bio: blogData.author_bio || "",
            status: blogData.status || "published",
            read_time: blogData.read_time ? blogData.read_time.toString() : "5",
            categories: Array.isArray(blogData.category)
              ? blogData.category.join(", ")
              : blogData.category || "",
            tags: Array.isArray(blogData.tags)
              ? blogData.tags.join(", ")
              : blogData.tags || "",
            meta_description: blogData.meta_description || "",
            is_featured: !!blogData.is_featured,
            featured_image: null,
            current_image: blogData.image || "",
          });

          if (blogData.image) {
            setImagePreview(blogData.image);
          }
        } catch (err: any) {
          const errorMessage = err.response?.data?.error || "Failed to fetch blog";
          setError(errorMessage);
          if (err.response?.status === 404) {
            alert("Blog not found. Redirecting to blog list.");
            router.push("/admin/blogs");
          }
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    }
  }, [id, isEdit, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, files, type } = target;

    if (type === "file" && files && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, featured_image: file }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleContentChange = (html: string) => {
    setFormData((prev) => ({ ...prev, content: html }));
  };

  const handleImageUpload = async (files: File[]): Promise<string> => {
    if (files && files.length > 0) {
      const token = localStorage.getItem("adminToken");
      const data = new FormData();
      data.append("image", files[0]);
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://sownmark.com";
        const response = await fetch(`${apiUrl}/api/upload-image`, {
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (result.success && result.url) {
          return result.url;
        } else {
          throw new Error(result.error || "Image upload failed");
        }
      } catch (error) {
        console.error("Image upload error:", error);
        throw error;
      }
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!formData.title.trim()) {
      setError("Please enter a blog title.");
      setLoading(false);
      return;
    }

    if (!formData.content || !formData.content.trim() || formData.content === "<p></p>") {
      setError("Blog content cannot be empty. Please write or paste your article.");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("excerpt", formData.excerpt);
    data.append("content", formData.content);
    data.append("author", formData.author || "Sownmark Team");
    data.append("author_bio", formData.author_bio || "");
    data.append("status", formData.status);
    data.append("read_time", formData.read_time || "5");
    data.append("categories", formData.categories);
    data.append("tags", formData.tags);
    data.append("meta_description", formData.meta_description || formData.excerpt);
    data.append("is_featured", formData.is_featured ? "1" : "0");

    if (formData.featured_image) {
      data.append("featured_image", formData.featured_image);
    } else if (isEdit && formData.current_image) {
      data.append("image", formData.current_image);
    }

    try {
      if (isEdit && id) {
        await updateBlog(id, data);
        setSuccess("Blog post updated successfully!");
      } else {
        await createBlog(data);
        setSuccess("Blog post published successfully!");
      }
      setTimeout(() => {
        router.push("/admin/blogs");
      }, 1000);
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to save blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEdit) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Skeleton className="lg:col-span-8 h-[600px] rounded-2xl" />
          <Skeleton className="lg:col-span-4 h-[400px] rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto space-y-6 pb-12"
    >
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild className="rounded-xl hover:bg-slate-100">
            <Link href="/admin/blogs" title="Back to blogs">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
          </Button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {isEdit ? "Edit Blog Post" : "Create New Blog Post"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Paste or type rich content directly. What you see is what will be published to the website.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            asChild
            className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-100"
          >
            <Link href="/admin/blogs">Cancel</Link>
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-xl bg-[#1a2957] hover:bg-blue-900 text-white shadow-md shadow-blue-950/20 px-6 font-semibold"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            {isEdit ? "Update Post" : "Publish Post"}
          </Button>
        </div>
      </div>

      {/* Alerts */}
      {error && (
        <Alert variant="destructive" className="rounded-xl border-red-200 bg-red-50 text-red-900">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertTitle className="font-bold">Cannot Save</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="rounded-xl border-emerald-200 bg-emerald-50 text-emerald-900">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          <AlertTitle className="font-bold">Success!</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      {/* Main 2-Column Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Main Editor & Content) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Post Title & Excerpt Card */}
          <Card className="rounded-2xl border-slate-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-4 px-6">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <CardTitle className="text-base font-bold text-slate-800">Article Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Post Title <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter a compelling title..."
                  className="text-lg font-bold py-5 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Short Excerpt / Summary
                </label>
                <Textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Brief 1-2 sentence preview shown on blog cards..."
                  rows={2}
                  className="resize-none rounded-xl border-slate-200 text-sm focus:border-blue-500 focus:ring-blue-100"
                />
              </div>
            </CardContent>
          </Card>

          {/* Rich Content & Paste Editor Card */}
          <Card className="rounded-2xl border-slate-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-4 px-6 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <CardTitle className="text-base font-bold text-slate-800">
                  Article Body (Copy & Paste Supported)
                </CardTitle>
              </div>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                WYSIWYG & HTML
              </span>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-xs text-slate-500">
                  You can copy content from Google Docs, MS Word, or another website and paste it directly. Headings, bold, italics, tables, and images will be preserved and show on the website as-is.
                </p>
                <RichContentEditor
                  value={formData.content}
                  onChange={handleContentChange}
                  onImageUpload={handleImageUpload}
                  placeholder="Paste or write your article content here..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Author Information Card */}
          <Card className="rounded-2xl border-slate-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-4 px-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                <CardTitle className="text-base font-bold text-slate-800">Author Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Author Name</label>
                <Input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="e.g. Deepak Kumar"
                  className="rounded-xl border-slate-200"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Author Role / Bio</label>
                <Input
                  type="text"
                  name="author_bio"
                  value={formData.author_bio}
                  onChange={handleChange}
                  placeholder="e.g. Lead Digital Strategist at Sownmark"
                  className="rounded-xl border-slate-200"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (Publishing Options & Featured Image) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Publish Settings */}
          <Card className="rounded-2xl border-slate-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-4 px-6">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-blue-600" />
                <CardTitle className="text-base font-bold text-slate-800">Publishing Options</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Publish Status</label>
                <Select
                  value={formData.status}
                  onValueChange={(val) => setFormData((prev) => ({ ...prev, status: val }))}
                >
                  <SelectTrigger className="w-full rounded-xl border-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published (Live on Website)</SelectItem>
                    <SelectItem value="draft">Draft (Hidden)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Estimated Read Time (minutes)</label>
                <Input
                  type="number"
                  name="read_time"
                  value={formData.read_time}
                  onChange={handleChange}
                  min="1"
                  className="rounded-xl border-slate-200"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-3 p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 cursor-pointer hover:bg-blue-50 transition-colors">
                  <Checkbox
                    checked={formData.is_featured}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, is_featured: Boolean(checked) }))}
                  />
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    Feature on Homepage
                  </div>
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Featured Cover Image */}
          <Card className="rounded-2xl border-slate-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-4 px-6">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-blue-600" />
                <CardTitle className="text-base font-bold text-slate-800">Featured Image</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {imagePreview ? (
                <div className="relative group rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src={imagePreview}
                    alt="Cover preview"
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <label className="cursor-pointer bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow hover:bg-slate-100 transition">
                      Change Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        name="featured_image"
                        className="hidden"
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview("");
                        setFormData((p) => ({ ...p, featured_image: null, current_image: "" }));
                      }}
                      className="bg-red-600 text-white p-1.5 rounded-lg shadow hover:bg-red-700 transition"
                      title="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors p-4 text-center">
                  <Upload className="w-8 h-8 text-slate-400 mb-2" />
                  <span className="text-xs font-bold text-slate-700">Click to upload cover image</span>
                  <span className="text-[11px] text-slate-400 mt-1">PNG, JPG, or WEBP (up to 5MB)</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    name="featured_image"
                    className="hidden"
                  />
                </label>
              )}
            </CardContent>
          </Card>

          {/* Categorization & SEO */}
          <Card className="rounded-2xl border-slate-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-50/70 border-b border-slate-200 py-4 px-6">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-blue-600" />
                <CardTitle className="text-base font-bold text-slate-800">Categories & SEO</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Category (Comma separated)
                </label>
                <Input
                  name="categories"
                  value={formData.categories}
                  onChange={handleChange}
                  placeholder="e.g. Marketing Tips, SEO, Web Dev"
                  className="rounded-xl border-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Tags (Comma separated)
                </label>
                <Input
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="e.g. digital marketing, google ads, branding"
                  className="rounded-xl border-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  SEO Meta Description
                </label>
                <Textarea
                  name="meta_description"
                  value={formData.meta_description}
                  onChange={handleChange}
                  placeholder="Search engine summary (recommended under 160 chars)..."
                  rows={3}
                  maxLength={160}
                  className="resize-none rounded-xl border-slate-200 text-xs"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Google search snippet</span>
                  <span>{formData.meta_description?.length || 0}/160</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
