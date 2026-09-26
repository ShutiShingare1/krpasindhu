import React from 'react';
import { Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { ProductItem } from '../../types';
import { Link } from 'react-router-dom';

export const ProductCard: React.FC<{ product: ProductItem }> = ({ product }) => {
  return (
    <div className="bg-white dark:bg-navy-surface border border-gray-100 dark:border-navy-card rounded-2xl p-6 shadow-sm hover:shadow-xl dark:hover:shadow-navy-accent/10 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
            <Layers className="w-3 h-3" /> {product.category}
          </span>
          <span className="text-xs font-semibold text-gray-500 dark:text-navy-muted">
            {product.price}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-xs text-gray-600 dark:text-navy-muted leading-relaxed">
          {product.description}
        </p>

        {product.features && product.features.length > 0 && (
          <div className="mt-4 space-y-1.5">
            <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300">Key Features:</h4>
            {product.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-500 dark:text-navy-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-card flex items-center justify-between">
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-bold text-white bg-brand-red hover:bg-brand-redHover shadow transition-all duration-200"
        >
          Request Product Demo <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
