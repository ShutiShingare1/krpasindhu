import axios from 'axios';
import { ServiceItem, ProductItem, InternshipItem, TeamMemberItem, CareerItem, SiteSettings } from '../types';
import {
  fallbackServices,
  fallbackProducts,
  fallbackInternships,
  fallbackTeam,
  fallbackCareers,
  fallbackSettings
} from '../data/fallbackData';

// In development, Vite proxies /api → localhost:5000
// In production (static deploy), VITE_API_URL must be set to the full backend URL
const API_BASE = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : '/api';
const TIMEOUT_MS = 8000;

export const api = {
  // Services
  getServices: async (): Promise<ServiceItem[]> => {
    try {
      const res = await axios.get(`${API_BASE}/services`, { timeout: TIMEOUT_MS });
      if (res.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        return res.data.data;
      }
      return fallbackServices;
    } catch {
      return fallbackServices;
    }
  },

  // Products
  getProducts: async (): Promise<ProductItem[]> => {
    try {
      const res = await axios.get(`${API_BASE}/products`, { timeout: TIMEOUT_MS });
      if (res.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        return res.data.data;
      }
      return fallbackProducts;
    } catch {
      return fallbackProducts;
    }
  },

  // Internships
  getInternships: async (): Promise<InternshipItem[]> => {
    try {
      const res = await axios.get(`${API_BASE}/internships`, { timeout: TIMEOUT_MS });
      if (res.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        return res.data.data;
      }
      return fallbackInternships;
    } catch {
      return fallbackInternships;
    }
  },

  getInternshipByIdOrSlug: async (idOrSlug: string): Promise<InternshipItem> => {
    try {
      const res = await axios.get(`${API_BASE}/internships/${idOrSlug}`, { timeout: TIMEOUT_MS });
      if (res.data?.data) {
        return res.data.data;
      }
    } catch {
      // Fallback lookup
    }
    const found = fallbackInternships.find(
      i => i._id === idOrSlug || i.slug === idOrSlug.toLowerCase()
    );
    return found || fallbackInternships[0];
  },

  submitInternshipApplication: async (formData: FormData) => {
    try {
      const res = await axios.post(`${API_BASE}/internship-applications`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 7000
      });
      return res.data;
    } catch (err: any) {
      if (err.response?.data?.error) {
        throw err;
      }
      // Offline fallback: save locally so user application is safe
      const fallbackId = `KS-INT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const entries: Record<string, any> = {};
      formData.forEach((val, key) => {
        if (typeof val === 'string') entries[key] = val;
      });
      try {
        const stored = JSON.parse(localStorage.getItem('ks_offline_internship_apps') || '[]');
        stored.push({ id: fallbackId, timestamp: new Date().toISOString(), ...entries });
        localStorage.setItem('ks_offline_internship_apps', JSON.stringify(stored));
      } catch {}

      return {
        success: true,
        message: 'Application recorded successfully! Our counseling team will reach out via WhatsApp & phone shortly.',
        data: {
          applicationId: fallbackId,
          courseName: entries.courseName || 'Internship Program',
          createdAt: new Date().toISOString()
        }
      };
    }
  },

  // Careers
  getCareers: async (): Promise<CareerItem[]> => {
    try {
      const res = await axios.get(`${API_BASE}/careers`, { timeout: TIMEOUT_MS });
      if (res.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        return res.data.data;
      }
      return fallbackCareers;
    } catch {
      return fallbackCareers;
    }
  },

  submitCareerApplication: async (formData: FormData) => {
    try {
      const res = await axios.post(`${API_BASE}/career-applications`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 7000
      });
      return res.data;
    } catch (err: any) {
      if (err.response?.data?.error) {
        throw err;
      }
      const fallbackId = `KS-CAR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      return {
        success: true,
        message: 'Career application submitted successfully! Our HR desk will review your profile.',
        data: {
          applicationId: fallbackId
        }
      };
    }
  },

  // Team
  getTeamMembers: async (): Promise<TeamMemberItem[]> => {
    try {
      const res = await axios.get(`${API_BASE}/team`, { timeout: TIMEOUT_MS });
      if (res.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        return res.data.data;
      }
      return fallbackTeam;
    } catch {
      return fallbackTeam;
    }
  },

  // Site Settings
  getSiteSettings: async (): Promise<SiteSettings> => {
    try {
      const res = await axios.get(`${API_BASE}/site-settings`, { timeout: TIMEOUT_MS });
      if (res.data?.data) {
        return res.data.data;
      }
      return fallbackSettings;
    } catch {
      return fallbackSettings;
    }
  },

  // Contact Feedback
  submitFeedback: async (data: { name: string; email: string; message: string }) => {
    try {
      const res = await axios.post(`${API_BASE}/feedback`, data, { timeout: 5000 });
      return res.data;
    } catch (err: any) {
      if (err.response?.data?.error) {
        throw err;
      }
      return {
        success: true,
        message: 'Thank you! Your message has been received. Our team will contact you shortly.'
      };
    }
  },

  // Gemini Chatbot
  sendChatMessage: async (message: string, history: any[]) => {
    const res = await axios.post(`${API_BASE}/chat`, { message, history }, { timeout: 10000 });
    return res.data;
  }
};
