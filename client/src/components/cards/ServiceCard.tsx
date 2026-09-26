import React from 'react';
import { Code, Globe, Megaphone, CheckCircle, GraduationCap, Briefcase, ArrowRight, Shield } from 'lucide-react';
import { ServiceItem } from '../../types';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Code,
  Globe,
  Megaphone,
  CheckCircle,
  GraduationCap,
  Briefcase
};

export const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Code;

  return (
    <div className="bg-white dark:bg-navy-surface border border-gray-100 dark:border-navy-card rounded-2xl p-6 shadow-sm hover:shadow-xl dark:hover:shadow-navy-accent/10 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-brand-red/10 border border-red-100 dark:border-brand-red/20 flex items-center justify-center text-brand-red dark:text-red-400 mb-5 group-hover:scale-110 transition-transform">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-navy-muted">
          {service.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-brand-red transition-colors">
          {service.name}
        </h3>
        <p className="mt-2.5 text-xs text-gray-600 dark:text-navy-muted leading-relaxed">
          {service.summary}
        </p>

        {service.keyBenefits && service.keyBenefits.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-navy-card">
            <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-brand-green" /> Key Highlights
            </h4>
            <ul className="space-y-1 text-xs text-gray-500 dark:text-navy-muted">
              {service.keyBenefits.slice(0, 3).map((benefit, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-card flex items-center justify-between">
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-red hover:text-brand-redHover transition-colors"
        >
          Inquire Service <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
