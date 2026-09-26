import axios from 'axios';
import { ServiceItem, ProductItem, InternshipItem, TeamMemberItem, CareerItem, SiteSettings } from '../types';

const API_BASE = '/api';

export const api = {
  // Services
  getServices: async (): Promise<ServiceItem[]> => {
    const res = await axios.get(`${API_BASE}/services`);
    return res.data.data;
  },

  // Products
  getProducts: async (): Promise<ProductItem[]> => {
    const res = await axios.get(`${API_BASE}/products`);
    return res.data.data;
  },

  // Internships
  getInternships: async (): Promise<InternshipItem[]> => {
    const res = await axios.get(`${API_BASE}/internships`);
    return res.data.data;
  },

  getInternshipByIdOrSlug: async (idOrSlug: string): Promise<InternshipItem> => {
    const res = await axios.get(`${API_BASE}/internships/${idOrSlug}`);
    return res.data.data;
  },

  submitInternshipApplication: async (formData: FormData) => {
    const res = await axios.post(`${API_BASE}/internship-applications`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return res.data;
  },

  // Careers
  getCareers: async (): Promise<CareerItem[]> => {
    const res = await axios.get(`${API_BASE}/careers`);
    return res.data.data;
  },

  submitCareerApplication: async (formData: FormData) => {
    const res = await axios.post(`${API_BASE}/career-applications`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return res.data;
  },

  // Team
  getTeamMembers: async (): Promise<TeamMemberItem[]> => {
    const res = await axios.get(`${API_BASE}/team`);
    return res.data.data;
  },

  // Site Settings
  getSiteSettings: async (): Promise<SiteSettings> => {
    const res = await axios.get(`${API_BASE}/site-settings`);
    return res.data.data;
  },

  // Contact Feedback
  submitFeedback: async (data: { name: string; email: string; message: string }) => {
    const res = await axios.post(`${API_BASE}/feedback`, data);
    return res.data;
  },

  // Gemini Chatbot
  sendChatMessage: async (message: string, history: any[]) => {
    const res = await axios.post(`${API_BASE}/chat`, { message, history });
    return res.data;
  }
};
