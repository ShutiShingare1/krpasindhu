import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  message = 'Something went wrong while loading data. Please try again.',
  onRetry
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-red-50 dark:bg-navy-surface border border-red-200 dark:border-navy-card rounded-xl text-center my-6">
      <AlertCircle className="w-10 h-10 text-brand-red mb-3" />
      <h4 className="text-base font-bold text-gray-900 dark:text-white">Unable to load information</h4>
      <p className="mt-1 text-xs text-gray-600 dark:text-navy-muted max-w-md">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-brand-red hover:bg-brand-redHover shadow transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Retry Now
        </button>
      )}
    </div>
  );
};
