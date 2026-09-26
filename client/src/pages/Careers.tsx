import React, { useEffect, useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CareerApplyForm } from '../components/forms/CareerApplyForm';
import { api } from '../services/api';
import { CareerItem } from '../types';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { Briefcase, MapPin, Clock, Award, CheckCircle2 } from 'lucide-react';

export const Careers: React.FC = () => {
  const [careers, setCareers] = useState<CareerItem[]>([]);
  const [selectedJob, setSelectedJob] = useState<CareerItem | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .getCareers()
      .then((data) => {
        setCareers(data);
        if (data.length > 0) setSelectedJob(data[0]);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionHeading
        badge="Join Our Team"
        title="Careers & Engineering Opportunities"
        subtitle="Build your career at an ISO 9001:2015 Certified technology firm. Work on real software products, digital campaigns, and candidate mentorship."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Jobs List */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Open Positions</h3>

          {loading ? (
            <LoadingSpinner message="Loading job openings..." />
          ) : (
            careers.map((job) => (
              <div
                key={job._id}
                onClick={() => setSelectedJob(job)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  selectedJob?._id === job._id
                    ? 'bg-red-50/50 dark:bg-brand-red/10 border-brand-red shadow-md'
                    : 'bg-white dark:bg-navy-surface border-gray-200 dark:border-navy-card hover:border-brand-red/50'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-gray-100 text-gray-700 dark:bg-navy-card dark:text-navy-muted">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-brand-red">{job.employmentType}</span>
                </div>

                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{job.title}</h4>
                <p className="text-xs text-gray-600 dark:text-navy-muted mt-1 leading-relaxed line-clamp-2">
                  {job.description}
                </p>

                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-navy-card flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-navy-muted">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-brand-red" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-gold" /> {job.experienceRequired}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Application Form */}
        <div className="lg:col-span-6">
          <CareerApplyForm selectedJob={selectedJob} />
        </div>
      </div>
    </div>
  );
};
