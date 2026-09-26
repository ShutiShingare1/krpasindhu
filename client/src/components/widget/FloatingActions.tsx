import React, { useState } from 'react';
import { Bot, Sparkles } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { Chatbot } from './Chatbot';

export const FloatingActions: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* AI Chatbot Floating Trigger */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-brand-red hover:bg-brand-redHover text-white shadow-xl hover:shadow-brand-red/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-red"
        aria-label="Open AI Chatbot"
        title="Ask KrupaSindhu AI Assistant"
      >
        <Bot className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400"></span>
        </span>
        {/* Tooltip */}
        <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1">
          AI Assistant <Sparkles className="w-3 h-3 text-amber-300" />
        </span>
      </button>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Slide-out / Floating Chat Panel */}
      <Chatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};
