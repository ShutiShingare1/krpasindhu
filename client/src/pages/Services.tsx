import React, { useEffect, useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/cards/ServiceCard';
import { api } from '../services/api';
import { ServiceItem } from '../types';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

export const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .getServices()
      .then(setServices)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = ['All', 'Software Development', 'Digital Advertising', 'IT Training & Internships', 'Business Solutions'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionHeading
        badge="Our Offerings"
        title="Software & Digital Advertising Services"
        subtitle="Process-driven custom application development, quality assurance, digital marketing campaigns, and technical coaching."
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-brand-red text-white shadow-md'
                : 'bg-white dark:bg-navy-surface text-gray-700 dark:text-navy-muted hover:bg-gray-100 dark:hover:bg-navy-card border border-gray-200 dark:border-navy-card'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <LoadingSpinner message="Loading services..." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};
