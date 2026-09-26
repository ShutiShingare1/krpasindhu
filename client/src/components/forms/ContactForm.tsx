import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { api } from '../../services/api';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const res = await api.submitFeedback(formData);
      setSuccessMsg(res.message || 'Thank you! Your feedback has been received.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      setErrorMsg(err.response?.data?.error || 'Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-navy-surface border border-gray-100 dark:border-navy-card rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h3>

      {successMsg && (
        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-xs font-semibold flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-brand-red/10 border border-red-200 dark:border-brand-red/20 text-brand-red dark:text-red-400 text-xs font-semibold flex items-start gap-2">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Rahul Sharma"
          className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="rahul@example.com"
          className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Message / Query *</label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we assist you with software development, advertising, or internships?"
          className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 rounded-xl font-bold text-xs text-white bg-brand-red hover:bg-brand-redHover shadow-md shadow-brand-red/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {loading ? 'Submitting...' : 'Submit Message'}
      </button>
    </form>
  );
};
