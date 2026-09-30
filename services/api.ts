import axios from 'axios';

const getBaseUrl = () => {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) {
    return `${process.env.NEXT_PUBLIC_API_URL}/api`;
  }
  return 'https://sownmark.com/api';
};

const api = axios.create({
  baseURL: getBaseUrl(),
});

// Interceptor to automatically add Authorization header with token from localStorage
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('adminToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// --- Admin Authentication ---
export const loginAdmin = async (username: string, password: string) => {
  return api.post('/admin/auth/login', { username, password });
};

// --- Blog Routes ---
// Public routes
export const getAllBlogs = async () => {
  return api.get('/blogs');
};

export const getBlogById = async (id: string | number) => {
  return api.get(`/blogs/${id}`);
};

export const getBlogBySlug = async (slug: string) => {
  return api.get(`/blogs/slug/${slug}`);
};

export const getCommentsByBlogId = async (id: string | number) => {
  return api.get(`/blogs/${id}/comments`);
};

export const incrementLikes = async (id: string | number) => {
  return api.post(`/blogs/${id}/likes`);
};

export const incrementShares = async (id: string | number) => {
  return api.post(`/blogs/${id}/shares`);
};

// Authenticated routes
export const createComment = async (id: string | number, data: any, _token?: string) => {
  return api.post(`/blogs/${id}/comments`, {
    user_name: data.name || 'Anonymous', // Map frontend 'name' to backend 'user_name'
    user_email: data.email || null, // Map frontend 'email' to backend 'user_email'
    content: data.content,
    user_id: data.user_id || undefined, // Include only for authenticated users
  });
};

// Admin routes
export const createBlog = async (data: any) => {
  return api.post('/blogs', data);
};

export const updateBlog = async (id: string | number, data: any) => {
  return api.put(`/blogs/${id}`, data);
};

export const deleteBlog = async (id: string | number, _token?: string) => {
  return api.delete(`/blogs/${id}`);
};

export const deleteComment = async (id: string | number, commentId: string | number, _token?: string) => {
  return api.delete(`/blogs/${id}/comments/${commentId}`);
};

// --- Job Routes ---
// Public routes
export const getJobs = async () => {
  return api.get('/jobs');
};

export const getJobById = async (id: string | number) => {
  return api.get(`/jobs/${id}`);
};

export const submitApplication = async (data: any) => {
  return api.post('/jobs/apply', data);
};

// Admin routes
export const createJob = async (data: any) => {
  return api.post('/jobs', data);
};

export const updateJob = async (id: string | number, data: any) => {
  return api.put(`/jobs/${id}`, data);
};

export const deleteJob = async (id: string | number) => {
  return api.delete(`/jobs/${id}`);
};

export const getApplications = async (job_id: string | number) => {
  return api.get(`/jobs/${job_id}/applications`);
};

export const updateApplicationStatus = async (id: string | number, status: string) => {
  return api.put(`/jobs/applications/${id}/status`, { status });
};

// --- Digital Marketing Routes ---
export const applyForDigitalMarketing = async (data: any) => {
  return api.post('/marketing/apply', data);
};

// --- Combined Applications Route ---
export const getAllApplications = async (filters: any = {}) => {
  const query = new URLSearchParams(filters).toString();
  return api.get(`/admin/applications?${query}`);
};

// --- Specific Application Fetchers ---
export const getAllJobApplications = async (filters: any = {}) => {
  return api.get(`/admin/applications?type=job&${new URLSearchParams(filters).toString()}`);
};

export const getAllDigitalMarketingApplications = async (filters: any = {}) => {
  return api.get(`/admin/applications?type=digital-marketing&${new URLSearchParams(filters).toString()}`);
};

// --- Contact Message Routes ---
export const getAllContactMessages = async (filters: any = {}) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== undefined && v !== null)
  );
  const query = new URLSearchParams(cleanFilters as Record<string, string>).toString();
  return api.get(`/admin/contact-messages?${query}`);
};

export const updateContactMessageStatus = async (id: string | number, status: string) => {
  return api.put(`/admin/contact-messages/${id}/status`, { status });
};

export default api;
