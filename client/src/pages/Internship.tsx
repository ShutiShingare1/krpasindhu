import React, { useEffect, useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { InternshipCard } from '../components/cards/InternshipCard';
import { api } from '../services/api';
import { InternshipItem } from '../types';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { Award, GraduationCap, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Internship: React.FC = () => {
  const [internships, setInternships] = useState<InternshipItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .getInternships()
      .then(setInternships)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionHeading
        badge="Career Development"
        title="Industry IT Internship Programs"
        subtitle="Practical live client project execution, senior developer mentorship, and ISO 9001:2015 verified completion credentials."
      />

      {/* Trust banner */}
      <div className="bg-gradient-to-r from-red-50 via-green-50 to-amber-50 dark:from-navy-surface dark:via-navy-card dark:to-navy-surface border border-gray-200 dark:border-navy-card rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-800 dark:text-white">
          <ShieldCheck className="w-5 h-5 text-brand-green" /> ISO 9001:2015 Verified Credentials
        </div>
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-800 dark:text-white">
          <GraduationCap className="w-5 h-5 text-brand-red" /> 100% Live Client Projects
        </div>
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-800 dark:text-white">
          <Award className="w-5 h-5 text-brand-gold" /> Dedicated Resume & Career Guidance
        </div>
      </div>

      {loading ? (
        <LoadingSpinner message="Loading internship catalog..." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship) => (
            <InternshipCard key={internship._id} internship={internship} />
          ))}
        </div>
      )}
    </div>
  );
};
