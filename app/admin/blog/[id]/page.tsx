'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { getBlogById, incrementLikes, incrementShares, createComment, deleteComment, getCommentsByBlogId } from '@/services/api';
import { motion } from 'framer-motion';
import { Edit, ArrowLeft, Heart, Share2, Trash2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-4 sm:p-6"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">{blog.title}</h1>
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
          />
        )}
        <p className="text-gray-600 mb-4 text-sm sm:text-base">{blog.excerpt}</p>
        <div
          className="prose prose-sm sm:prose max-w-none text-gray-800 mb-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
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
