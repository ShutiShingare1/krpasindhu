import React from 'react';
import { Clock, GraduationCap, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { InternshipItem } from '../../types';
import { Link } from 'react-router-dom';

export const InternshipCard: React.FC<{ internship: InternshipItem }> = ({ internship }) => {
  return (
    <div className="bg-white dark:bg-navy-surface border border-gray-100 dark:border-navy-card rounded-2xl p-6 shadow-sm hover:shadow-xl dark:hover:shadow-navy-accent/10 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-brand-green dark:bg-green-950/50 dark:text-green-400 border border-green-200 dark:border-green-800">
            <Award className="w-3.5 h-3.5" /> ISO 9001:2015 Verified
          </span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-gray-100 text-gray-700 dark:bg-navy-card dark:text-navy-muted">
            {internship.mode} Mode
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
          {internship.courseName}
        </h3>

        {/* Summary */}
        <p className="mt-2.5 text-xs text-gray-600 dark:text-navy-muted leading-relaxed">
          {internship.shortSummary}
        </p>

        {/* Metadata grid */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs py-3 border-y border-gray-100 dark:border-navy-card text-gray-600 dark:text-navy-muted">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-red shrink-0" />
            <span><strong className="text-gray-900 dark:text-white">Duration:</strong> {internship.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
            <span><strong className="text-gray-900 dark:text-white">Mode:</strong> {internship.mode}</span>
          </div>
          <div className="col-span-2 flex items-start gap-1.5 mt-1">
            <GraduationCap className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <span><strong className="text-gray-900 dark:text-white">Eligibility:</strong> {internship.eligibility}</span>
          </div>
        </div>

        {/* Skills tags */}
        {internship.skills && internship.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {internship.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-700 dark:bg-navy-card dark:text-navy-muted border border-gray-200 dark:border-navy-border"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-card flex items-center gap-3">
        <Link
          to={`/internship/apply/${internship.slug || internship._id}`}
          className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-brand-red hover:bg-brand-redHover shadow-md shadow-brand-red/20 hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-1.5"
        >
          Enroll Now <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
