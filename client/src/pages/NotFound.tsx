import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 my-12">
      <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <span className="text-sm font-extrabold text-brand-red uppercase tracking-widest">404 Error</span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2">Page Not Found</h1>
      <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-navy-muted max-w-md">
        The route or page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-brand-red hover:bg-brand-redHover shadow-md transition-colors"
      >
        <Home className="w-4 h-4" /> Return to Home Page
      </Link>
    </div>
  );
};
