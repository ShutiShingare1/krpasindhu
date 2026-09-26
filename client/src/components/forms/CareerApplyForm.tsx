import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Upload, Briefcase } from 'lucide-react';
import { api } from '../../services/api';
import { CareerItem } from '../../types';

interface CareerApplyFormProps {
  selectedJob?: CareerItem;
}

export const CareerApplyForm: React.FC<CareerApplyFormProps> = ({ selectedJob }) => {
  const [formData, setFormData] = useState({
    positionAppliedFor: selectedJob?.title || 'Senior Full Stack Developer',
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    qualification: 'BE / B.Tech in CS/IT',
    graduationYear: '2023',
    experience: '2 Years',
    skills: '',
    portfolioUrl: '',
    linkedinUrl: '',
    githubUrl: '',
    coverLetter: '',
    availability: 'Immediate',
    consent: false
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{ applicationId: string; message: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.mobile || !formData.skills || !formData.city) {
      setErrorMsg('Please fill in all mandatory fields.');
      return;
    }
    if (!formData.consent) {
      setErrorMsg('Please agree to the candidate consent declaration.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        data.append(key, val.toString());
      });
      if (selectedJob?._id) {
        data.append('jobId', selectedJob._id);
      }
      if (resumeFile) {
        data.append('resume', resumeFile);
      }

      const res = await api.submitCareerApplication(data);
      setSuccessResult({
        applicationId: res.data?.applicationId || 'KS-JOB-SUBMITTED',
        message: res.message || 'Job application submitted successfully!'
      });
    } catch (err: any) {
      setErrorMsg(err.response?.data?.error || 'Failed to submit job application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (successResult) {
    return (
      <div className="bg-white dark:bg-navy-surface border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center shadow-lg animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 mb-2">
          Application ID: {successResult.applicationId}
        </span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Application Received!</h3>
        <p className="mt-2 text-xs text-gray-600 dark:text-navy-muted max-w-md mx-auto leading-relaxed">
          {successResult.message} Our HR department will evaluate your profile and contact qualified candidates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-navy-surface border border-gray-100 dark:border-navy-card rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
      <div className="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-navy-card">
        <Briefcase className="w-5 h-5 text-brand-red" />
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Job Application Form</h3>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-brand-red/10 border border-red-200 dark:border-brand-red/20 text-brand-red dark:text-red-400 text-xs font-semibold flex items-start gap-2">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Position Applied For *</label>
        <input
          type="text"
          required
          value={formData.positionAppliedFor}
          onChange={(e) => setFormData({ ...formData, positionAppliedFor: e.target.value })}
          placeholder="e.g. Senior Full Stack Developer / QA Trainer"
          className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red font-semibold"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Priya Kulkarni"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="priya@example.com"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Mobile Number *</label>
          <input
            type="tel"
            required
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            placeholder="7350570999"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Current City *</label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Nanded / Pune"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Qualification *</label>
          <input
            type="text"
            required
            value={formData.qualification}
            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
            placeholder="BE/MCA/BSc"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Total Experience *</label>
          <input
            type="text"
            required
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            placeholder="e.g. Fresher / 2 Years"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Availability</label>
          <input
            type="text"
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            placeholder="Immediate / 15 Days"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Technical Skills & Expertise *</label>
        <input
          type="text"
          required
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          placeholder="e.g. React.js, Node.js, Express, MongoDB, Manual Testing, Selenium"
          className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">LinkedIn Profile</label>
          <input
            type="url"
            value={formData.linkedinUrl}
            onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
            placeholder="https://linkedin.com/in/username"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">GitHub / Portfolio URL</label>
          <input
            type="url"
            value={formData.githubUrl}
            onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
            placeholder="https://github.com/username"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Upload Resume (PDF / DOCX)</label>
        <div className="flex items-center gap-2">
          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-navy-card hover:bg-gray-200 text-gray-700 dark:text-navy-muted border border-gray-200 dark:border-navy-border">
            <Upload className="w-4 h-4" /> {resumeFile ? resumeFile.name : 'Attach Resume'}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => e.target.files?.[0] && setResumeFile(e.target.files[0])}
              className="hidden"
            />
          </label>
          {resumeFile && <span className="text-xs text-green-600 font-semibold">File Selected</span>}
        </div>
      </div>

      <div className="flex items-start gap-2 pt-2">
        <input
          type="checkbox"
          id="careerConsent"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 rounded text-brand-red focus:ring-brand-red"
        />
        <label htmlFor="careerConsent" className="text-[11px] text-gray-600 dark:text-navy-muted">
          I confirm that all details are accurate and grant permission to Krupa Sindhu Advertising & Software Pvt. Ltd. to process my career application.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 rounded-xl font-bold text-xs text-white bg-brand-red hover:bg-brand-redHover shadow-md shadow-brand-red/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {loading ? 'Submitting Application...' : 'Submit Job Application'}
      </button>
    </form>
  );
};
