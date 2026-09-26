import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { InternshipItem } from '../types';
import { InternshipApplyForm } from '../components/forms/InternshipApplyForm';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ArrowLeft, Clock, GraduationCap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const InternshipApply: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<InternshipItem | null>(null);
  const [allCourses, setAllCourses] = useState<InternshipItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getInternships().then((data) => {
      setAllCourses(data);
      if (courseId) {
        const found = data.find(c => c._id === courseId || c.slug === courseId.toLowerCase());
        setCourse(found || data[0]);
      } else {
        setCourse(data[0]);
      }
    }).catch(() => {}).finally(() => setLoading(false));
  }, [courseId]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <div>
        <Link
          to="/internship"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-navy-muted hover:text-brand-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Internship Catalog
        </Link>
      </div>

      {loading ? (
        <LoadingSpinner message="Loading course details..." />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Course Summary */}
          <div className="lg:col-span-5 space-y-6">
            {course && (
              <div className="bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 sticky top-24">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-brand-green dark:bg-green-950 dark:text-green-400 border border-green-200 dark:border-green-800">
                  <ShieldCheck className="w-4 h-4" /> ISO 9001:2015 Verified Course
                </span>

                <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  {course.courseName}
                </h1>

                <p className="text-xs text-gray-600 dark:text-navy-muted leading-relaxed">
                  {course.description}
                </p>

                <div className="pt-2 border-t border-gray-100 dark:border-navy-card space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-navy-muted">
                    <Clock className="w-4 h-4 text-brand-red shrink-0" />
                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>

                  <div className="flex items-start gap-2 text-gray-700 dark:text-navy-muted">
                    <GraduationCap className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Eligibility:</strong> {course.eligibility}</span>
                  </div>
                </div>

                {/* Syllabus Modules */}
                {course.syllabus && course.syllabus.length > 0 && (
                  <div className="pt-4 border-t border-gray-100 dark:border-navy-card space-y-3">
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                      Syllabus Overview
                    </h3>
                    <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                      {course.syllabus.map((mod, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-gray-50 dark:bg-navy-card text-xs">
                          <span className="font-bold text-brand-red block mb-1">{mod.moduleTitle}</span>
                          <div className="flex flex-wrap gap-1 text-[10px] text-gray-600 dark:text-navy-muted">
                            {mod.topics.map((t, i) => (
                              <span key={i} className="flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-brand-green" /> {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Application Form */}
          <div className="lg:col-span-7">
            <InternshipApplyForm selectedCourse={course || undefined} coursesList={allCourses} />
          </div>
        </div>
      )}
    </div>
  );
};
