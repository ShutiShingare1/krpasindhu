import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Upload, Award } from 'lucide-react';
import { api } from '../../services/api';
import { InternshipItem } from '../../types';

interface InternshipApplyFormProps {
  selectedCourse?: InternshipItem;
  coursesList: InternshipItem[];
}

export const InternshipApplyForm: React.FC<InternshipApplyFormProps> = ({
  selectedCourse,
  coursesList
}) => {
  const [formData, setFormData] = useState({
    courseId: selectedCourse?._id || (coursesList[0]?._id || ''),
    fullName: '',
    email: '',
    mobile: '',
    alternateNumber: '',
    city: '',
    state: 'Maharashtra',
    qualification: 'BE / B.Tech',
    college: '',
    passingYear: '2026',
    branch: 'Computer Science & Engineering',
    technicalSkills: '',
    preferredMode: 'Hybrid',
    motivation: '',
    howHeard: 'Website / Search',
    consent: false
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{ applicationId: string; message: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.mobile || !formData.college || !formData.city) {
      setErrorMsg('Please fill in all mandatory fields.');
      return;
    }
    if (!formData.consent) {
      setErrorMsg('Please check the consent box to proceed with your application.');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessResult(null);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        data.append(key, val.toString());
      });
      if (selectedCourse) {
        data.append('courseName', selectedCourse.courseName);
      }
      if (resumeFile) {
        data.append('resume', resumeFile);
      }

      const res = await api.submitInternshipApplication(data);
      setSuccessResult({
        applicationId: res.data?.applicationId || 'KS-INT-2026-SUBMITTED',
        message: res.message || 'Application submitted successfully!'
      });
    } catch (err: any) {
      setErrorMsg(err.response?.data?.error || 'Failed to submit application. Please try again.');
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
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enrollment Application Submitted!</h3>
        <p className="mt-2 text-xs text-gray-600 dark:text-navy-muted max-w-md mx-auto leading-relaxed">
          {successResult.message}
        </p>
        <div className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-navy-card text-xs text-gray-500 dark:text-navy-muted text-left border border-gray-100 dark:border-navy-border space-y-1">
          <p><strong>Next Steps:</strong></p>
          <p>1. Our admissions counseling team will verify your details.</p>
          <p>2. You will receive an official response via WhatsApp (+91 7350570999) or Email.</p>
          <p>3. ISO 9001:2015 batch confirmation & schedule will be sent shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-navy-surface border border-gray-100 dark:border-navy-card rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-navy-card">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Internship Enrollment Form</h3>
          <p className="text-xs text-gray-500 dark:text-navy-muted">Krupa Sindhu Academic & Industry Internship Portal</p>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-50 text-brand-green dark:bg-green-950 dark:text-green-400">
          <Award className="w-3 h-3" /> ISO Certified
        </span>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-brand-red/10 border border-red-200 dark:border-brand-red/20 text-brand-red dark:text-red-400 text-xs font-semibold flex items-start gap-2">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Select Course */}
      <div>
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Select Internship Program *</label>
        <select
          value={formData.courseId}
          onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red font-semibold"
        >
          {coursesList.map((c) => (
            <option key={c._id} value={c._id}>
              {c.courseName} ({c.duration})
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Aniket Patil"
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
            placeholder="aniket@example.com"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Mobile Number (WhatsApp) *</label>
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
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Alternate Contact No.</label>
          <input
            type="tel"
            value={formData.alternateNumber}
            onChange={(e) => setFormData({ ...formData, alternateNumber: e.target.value })}
            placeholder="Optional"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">City / Location *</label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Nanded / Pune / Nashik"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">College / Institute *</label>
          <input
            type="text"
            required
            value={formData.college}
            onChange={(e) => setFormData({ ...formData, college: e.target.value })}
            placeholder="e.g. SGGS / MGM / Government Polytechnic"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Qualification *</label>
          <select
            value={formData.qualification}
            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          >
            <option value="BE / B.Tech">BE / B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BSc CS/IT">BSc CS/IT</option>
            <option value="Diploma in CS/IT">Diploma in CS/IT</option>
            <option value="Other Graduate">Other Graduate</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Passing Year *</label>
          <input
            type="text"
            required
            value={formData.passingYear}
            onChange={(e) => setFormData({ ...formData, passingYear: e.target.value })}
            placeholder="e.g. 2025 / 2026"
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Preferred Mode</label>
          <select
            value={formData.preferredMode}
            onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
            className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
          >
            <option value="Hybrid">Hybrid</option>
            <option value="Offline">Offline Campus</option>
            <option value="Online">Online Interactive</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Technical Skills Known</label>
        <input
          type="text"
          value={formData.technicalSkills}
          onChange={(e) => setFormData({ ...formData, technicalSkills: e.target.value })}
          placeholder="e.g. HTML, CSS, JavaScript, C++, Python, Manual Testing"
          className="w-full px-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Upload Resume / CV (PDF or DOCX)</label>
        <div className="flex items-center gap-2">
          <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-navy-card hover:bg-gray-200 text-gray-700 dark:text-navy-muted border border-gray-200 dark:border-navy-border">
            <Upload className="w-4 h-4" /> {resumeFile ? resumeFile.name : 'Choose Resume File'}
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => e.target.files?.[0] && setResumeFile(e.target.files[0])}
              className="hidden"
            />
          </label>
          {resumeFile && <span className="text-xs text-green-600 font-semibold">Attached</span>}
        </div>
      </div>

      <div className="flex items-start gap-2 pt-2">
        <input
          type="checkbox"
          id="consentCheck"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 rounded text-brand-red focus:ring-brand-red"
        />
        <label htmlFor="consentCheck" className="text-[11px] text-gray-600 dark:text-navy-muted">
          I declare that the information provided above is true to the best of my knowledge and agree to be contacted by Krupa Sindhu Advertising & Software Pvt. Ltd. regarding course enrollment.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 rounded-xl font-bold text-xs text-white bg-brand-red hover:bg-brand-redHover shadow-md shadow-brand-red/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {loading ? 'Submitting Application...' : 'Submit Internship Application'}
      </button>
    </form>
  );
};
