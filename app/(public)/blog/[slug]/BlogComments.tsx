"use client";

import React, { useState, useEffect } from "react";
import { User, Send } from "lucide-react";

const API_BASE_URL = `${
  process.env.NEXT_PUBLIC_API_URL || "https://sownmark.com"
}/api`;

interface Comment {
  id: number;
  blog_id: number;
  user_name: string;
  user_email?: string;
  content: string;
  created_at: string;
}

const BlogComments: React.FC<{ blogId: number }> = ({ blogId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/blogs/${blogId}/comments`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setComments(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Comments error:", err));
  }, [blogId]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!commentForm.content) {
      setFormError("Comment content is required");
      return;
    }

    if (
      commentForm.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(commentForm.email)
    ) {
      setFormError("Invalid email format");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/blogs/${blogId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: commentForm.name || "Anonymous",
          user_email: commentForm.email || null,
          content: commentForm.content,
        }),
      });
      if (!res.ok) throw new Error(`Comment request failed: ${res.status}`);
      const data = await res.json();
      setComments([...comments, data.comment]);
      setCommentForm({ name: "", email: "", content: "" });
    } catch {
      setFormError("Failed to submit comment. Please try again.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      id="comment-section"
      className="bg-white border border-gray-100 rounded-lg p-4 sm:p-6 shadow-sm lg:sticky lg:top-6"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Leave a Comment
      </h2>
      <form className="space-y-4 mb-6" onSubmit={handleCommentSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={commentForm.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full h-10 px-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            aria-label="Your Name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={commentForm.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full h-10 px-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            aria-label="Your Email"
          />
        </div>
        <div>
          <textarea
            name="content"
            value={commentForm.content}
            onChange={handleInputChange}
            placeholder="Your Comment"
            className="w-full h-24 px-3 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            aria-label="Your Comment"
          />
        </div>
        {formError && <p className="text-sm text-red-600">{formError}</p>}
        <button
          type="submit"
          className="bg-[#1a2957] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition cursor-pointer"
        >
          Submit <Send className="h-4 w-4" />
        </button>
      </form>
      <p className="text-xs text-gray-500 mb-6">
        Comments are moderated and will appear after approval.
      </p>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Comments ({comments.length})
      </h2>
      {comments.length > 0 ? (
        <div className="space-y-4 max-h-60 sm:max-h-80 overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="border-t border-gray-200 pt-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {comment.user_name || "Anonymous"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(comment.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-600">No comments yet. Be the first!</p>
      )}
    </div>
  );
};

export default BlogComments;
