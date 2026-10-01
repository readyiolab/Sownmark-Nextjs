'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { getBlogById, incrementLikes, incrementShares, createComment, deleteComment, getCommentsByBlogId } from '@/services/api';
import { editorJSToHtml } from '@/components/admin/editorUtils';
import { motion } from 'framer-motion';
import { Edit, ArrowLeft, Heart, Share2, Trash2, Calendar, User, Clock, Tag } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AdminBlogDetailPage() {
  const [blog, setBlog] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');

    const fetchBlogAndComments = async () => {
      try {
        const [blogResponse, commentsResponse] = await Promise.all([
          getBlogById(id),
          getCommentsByBlogId(id),
        ]);
        setBlog(blogResponse.data);
        setComments(commentsResponse.data);
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch blog or comments');
      }
    };
    if (id) {
      fetchBlogAndComments();
    }
  }, [id, router]);

  const handleLike = async () => {
    try {
      await incrementLikes(id);
      setBlog((prev: any) => ({ ...prev, likes: (prev.likes || 0) + 1 }));
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to like blog');
    }
  };

  const handleShare = async () => {
    try {
      await incrementShares(id);
      setBlog((prev: any) => ({ ...prev, shares: (prev.shares || 0) + 1 }));
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to share blog');
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) {
      setError('Comment cannot be empty');
      return;
    }
    try {
      const token = localStorage.getItem('adminToken') || undefined;
      const userId = localStorage.getItem('userId') || 'admin';
      await createComment(id, { user_id: userId, content: newComment }, token);
      const commentsResponse = await getCommentsByBlogId(id);
      setComments(commentsResponse.data);
      setBlog((prev: any) => ({ ...prev, comments: (prev.comments || 0) + 1 }));
      setNewComment('');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to post comment');
    }
  };

  const handleCommentDelete = async (commentId: string | number) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      try {
        const token = localStorage.getItem('adminToken') || undefined;
        await deleteComment(id, commentId, token);
        setComments(comments.filter((comment) => comment.id !== commentId));
        setBlog((prev: any) => ({ ...prev, comments: Math.max((prev.comments || 1) - 1, 0) }));
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to delete comment');
      }
    }
  };

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 text-gray-900 text-center">
        {error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          'Loading...'
        )}
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild className="rounded-xl">
            <Link href="/admin/blogs">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
          </Button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{blog.title}</h1>
            <p className="text-xs text-slate-500">By {blog.author || 'Sownmark Team'} · {blog.read_time || 5} min read</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="rounded-xl bg-[#1a2957] hover:bg-blue-900 text-white text-xs font-semibold gap-1.5">
            <Link href={`/admin/blog/edit/${blog.id}`}>
              <Edit className="w-3.5 h-3.5" /> Edit Article
            </Link>
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="rounded-2xl border-red-200 bg-red-50 text-red-900">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertTitle className="font-bold">Error</AlertTitle>
          <AlertDescription className="text-xs">{error}</AlertDescription>
        </Alert>
      )}

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-96 object-cover rounded-xl shadow-sm"
          />
        )}
        {blog.excerpt && (
          <p className="text-sm sm:text-base text-slate-600 italic bg-slate-50 p-4 rounded-xl border border-slate-100">
            {blog.excerpt}
          </p>
        )}
        <div
          className="prose prose-slate max-w-none text-slate-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: editorJSToHtml(blog.content) }}
        />
        <div className="mt-6 space-y-2 text-sm sm:text-base">
          <p className="text-gray-900">
            <strong>Author:</strong> {blog.author}
          </p>
          {blog.author_bio && (
            <p className="text-gray-900">
              <strong>Author Bio:</strong> {blog.author_bio}
            </p>
          )}
          <p className="text-gray-900">
            <strong>Status:</strong> {blog.status}
          </p>
          <p className="text-gray-900">
            <strong>Categories:</strong> {Array.isArray(blog.category) ? blog.category.join(', ') : blog.category}
          </p>
          <p className="text-gray-900">
            <strong>Tags:</strong> {Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags}
          </p>
          <p className="text-gray-900">
            <strong>Read Time:</strong> {blog.read_time} minutes
          </p>
          <p className="text-gray-900">
            <strong>Featured:</strong> {blog.is_featured ? 'Yes' : 'No'}
          </p>
          <p className="text-gray-900">
            <strong>Likes:</strong> {blog.likes || 0}
          </p>
          <p className="text-gray-900">
            <strong>Shares:</strong> {blog.shares || 0}
          </p>
          <p className="text-gray-900">
            <strong>Comments:</strong> {blog.comments || 0}
          </p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          {isAdmin && (
            <Link
              href={`/admin/blog/edit/${blog.id}`}
              className="inline-flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              <Edit className="w-5 h-5 mr-2" />
              Edit
            </Link>
          )}
          <button
            onClick={handleLike}
            className="inline-flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
          >
            <Heart className="w-5 h-5 mr-2" />
            Like
          </button>
          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share
          </button>
          <button
            onClick={() => router.push('/admin/blogs')}
            className="inline-flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blogs
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comments</h2>
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
              rows={4}
              placeholder="Add a comment..."
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Post Comment
            </button>
          </form>
          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-4">
                  <p className="text-gray-800 text-sm">{comment.content}</p>
                  <p className="text-gray-600 text-xs">
                    By User #{comment.user_id} on {new Date(comment.created_at).toLocaleString()}
                  </p>
                  {isAdmin && (
                    <button
                      onClick={() => handleCommentDelete(comment.id)}
                      className="text-red-600 hover:text-red-800 text-xs font-medium flex items-center mt-2"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-sm">No comments yet.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
