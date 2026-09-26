import React from 'react';

export const LoadingSpinner: React.FC<{ message?: string }> = ({ message = 'Loading content...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-10 h-10 border-4 border-brand-red/30 border-t-brand-red rounded-full animate-spin"></div>
      <p className="mt-3 text-xs font-semibold text-gray-500 dark:text-navy-muted">{message}</p>
    </div>
  );
};
