import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-brand-red dark:bg-brand-red/10 dark:text-red-400 border border-red-100 dark:border-brand-red/20 mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-navy-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
