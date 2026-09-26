import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Database, RefreshCw, Server, Layers, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

export const Admin: React.FC = () => {
  const [dbData, setDbData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>('teamMembers');
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [seedStatus, setSeedStatus] = useState<string>('');

  const fetchDbOverview = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/admin/collections');
      setDbData(res.data.data);
    } catch (err) {
      console.error('Failed to fetch DB stats', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDbOverview();
  }, []);

  const handleSeed = async () => {
    setSeeding(true);
    setSeedStatus('');
    try {
      const res = await axios.post('/api/admin/seed');
      setSeedStatus(res.data.message || 'Seeded successfully!');
      fetchDbOverview();
    } catch (err: any) {
      setSeedStatus(err.response?.data?.error || 'Failed to seed database. Is MongoDB service active?');
    } finally {
      setSeeding(false);
    }
  };

  const collectionKeys = [
    { key: 'teamMembers', label: 'Team Members' },
    { key: 'internships', label: 'Internships Catalog' },
    { key: 'internshipApplications', label: 'Internship Applicants' },
    { key: 'services', label: 'Services' },
    { key: 'products', label: 'Products' },
    { key: 'careers', label: 'Job Careers' },
    { key: 'careerApplications', label: 'Job Applicants' },
    { key: 'feedbacks', label: 'Feedback Messages' },
    { key: 'siteSettings', label: 'Site Settings' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <SectionHeading
        badge="System Administration"
        title="MongoDB Database Inspector"
        subtitle="Inspect, query, and verify all 9 separate business collections in the Krupa Sindhu system."
      />

      {/* Connection & Actions Header */}
      <div className="bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500 dark:text-navy-muted">Status:</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border border-green-200 dark:border-green-800">
                <Server className="w-3.5 h-3.5" /> {dbData?.connection || 'Checking MongoDB...'}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-navy-muted mt-1">
              Database Name: <strong className="text-gray-900 dark:text-white">{dbData?.dbName || 'krupasindhu'}</strong> | 9 Collections Registered
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={fetchDbOverview}
            disabled={loading}
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gray-100 dark:bg-navy-card hover:bg-gray-200 text-gray-700 dark:text-navy-muted transition-colors flex items-center gap-1.5"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh Stats
          </button>

          <button
            onClick={handleSeed}
            disabled={seeding}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-red hover:bg-brand-redHover shadow transition-colors flex items-center gap-1.5 disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4 text-amber-300" /> {seeding ? 'Seeding DB...' : 'Re-Seed Database'}
          </button>
        </div>
      </div>

      {seedStatus && (
        <div className="p-4 rounded-xl bg-blue-50 dark:bg-navy-card border border-blue-200 dark:border-navy-border text-blue-700 dark:text-blue-300 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{seedStatus}</span>
        </div>
      )}

      {/* Collection Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 dark:border-navy-card pb-3">
        {collectionKeys.map((c) => {
          const colData = dbData?.collections?.[c.key];
          const count = colData?.count ?? 0;
          return (
            <button
              key={c.key}
              onClick={() => setActiveTab(c.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === c.key
                  ? 'bg-brand-red text-white shadow-md'
                  : 'bg-white dark:bg-navy-surface text-gray-700 dark:text-navy-muted hover:bg-gray-100 border border-gray-200 dark:border-navy-card'
              }`}
            >
              <span>{c.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${activeTab === c.key ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-navy-card text-gray-800 dark:text-navy-text'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Collection Data Viewer */}
      {loading ? (
        <LoadingSpinner message="Querying MongoDB collections..." />
      ) : (
        <div className="bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-navy-card">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                Collection: <span className="text-brand-red">{activeTab}</span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-navy-muted">
                Showing sample documents stored in MongoDB schema
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-navy-card text-gray-700 dark:text-navy-muted">
              Total Records: {dbData?.collections?.[activeTab]?.count || 0}
            </span>
          </div>

          {/* Documents JSON / Card List */}
          {dbData?.collections?.[activeTab]?.sample?.length === 0 ? (
            <div className="py-12 text-center text-xs text-gray-400">
              No documents found in collection "{activeTab}". Submit a form or click "Re-Seed Database" above to populate records!
            </div>
          ) : (
            <div className="space-y-4">
              {dbData?.collections?.[activeTab]?.sample?.map((doc: any, i: number) => (
                <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-navy-card border border-gray-200 dark:border-navy-border space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-red border-b border-gray-200 dark:border-navy-border pb-1">
                    <span>Document #{i + 1} {doc.fullName || doc.name || doc.courseName || doc.title || doc.companyName || ''}</span>
                    <span className="text-[10px] text-gray-400 font-normal">ID: {doc._id}</span>
                  </div>
                  <pre className="text-[11px] font-mono text-gray-800 dark:text-gray-200 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                    {JSON.stringify(doc, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
