import axios from 'axios';

const getBaseUrl = () => {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) {
    return `${process.env.NEXT_PUBLIC_API_URL}/api`;
  }
  return 'https://sownmark.com/api';
};

const API_BASE_URL = getBaseUrl();

export const fetchJobs = async (params: any = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs`, { params });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Failed to fetch jobs');
  }
};

export const fetchJobById = async (id: string | number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Failed to fetch job');
  }
};

export const submitApplication = async (applicationData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/jobs/apply`, applicationData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Failed to submit application');
  }
};
