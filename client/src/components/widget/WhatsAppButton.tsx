import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/917350570999"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      aria-label="Chat on WhatsApp +917350570999"
      title="Official WhatsApp: +91 7350570999"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      {/* Tooltip */}
      <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp (+91 7350570999)
      </span>
    </a>
  );
};
