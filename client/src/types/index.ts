export interface ServiceItem {
  _id: string;
  name: string;
  category: string;
  iconName: string;
  summary: string;
  description: string;
  keyBenefits: string[];
  process: string[];
  displayOrder: number;
}

export interface ProductItem {
  _id: string;
  name: string;
  category: string;
  description: string;
  imageUrl?: string;
  features: string[];
  benefits: string[];
  price: string;
  brochureUrl?: string;
  displayOrder: number;
}

export interface InternshipItem {
  _id: string;
  courseName: string;
  slug: string;
  shortSummary: string;
  description: string;
  syllabus: { moduleTitle: string; topics: string[] }[];
  duration: string;
  fees: string;
  eligibility: string;
  mode: 'Offline' | 'Online' | 'Hybrid';
  skills: string[];
  certificate: string;
  enrollmentEnabled: boolean;
  imageUrl?: string;
  displayOrder: number;
}

export interface TeamMemberItem {
  _id: string;
  fullName: string;
  designation: string;
  department: string;
  photoUrl?: string;
  bio?: string;
  skills?: string[];
  experience?: string;
  linkedinUrl?: string;
  email?: string;
  displayOrder: number;
}

export interface CareerItem {
  _id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experienceRequired: string;
  description: string;
  requirements: string[];
  responsibilities?: string[];
  skills: string[];
}

export interface SiteSettings {
  companyName: string;
  establishedYear: number;
  directorName: string;
  certification: string;
  email: string;
  phone: string;
  whatsapp: string;
  heroHeadline: string;
  heroSubheadline: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
