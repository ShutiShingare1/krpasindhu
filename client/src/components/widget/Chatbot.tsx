import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, RefreshCw, Sparkles, User, ShieldCheck } from 'lucide-react';
import { api } from '../../services/api';
import { ChatMessage } from '../../types';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hello! Welcome to Krupa Sindhu Advertising & Software Pvt. Ltd. (ISO 9001:2015 Certified). I am your AI assistant. How can I help you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const starterPrompts = [
    'What internships are available?',
    'What services do you offer?',
    'What are the internship domains?',
    'How can I enroll?',
    'Tell me about ISO Certification',
    'How can I contact the team?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      // Build brief context history
      const history = messages.slice(-6).map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const res = await api.sendChatMessage(query, history);

      const botReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: res.reply || 'Thank you for your inquiry. Please reach out to our team at admin@krupasindhu.org.in or WhatsApp +91 7350570999.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Sorry, I am having trouble connecting. You can contact us directly at admin@krupasindhu.org.in or WhatsApp +91 7350570999.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'bot',
        text: 'Conversation reset. How can I assist you with Krupa Sindhu services, products, or internships?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[520px] bg-white dark:bg-navy-surface border border-gray-200 dark:border-navy-card rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-brand-red to-rose-700 text-white p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold flex items-center gap-1">
              KrupaSindhu AI Assistant <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </h3>
            <span className="text-[10px] text-red-100 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-green-300" /> ISO 9001:2015 Verified Knowledge
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={handleClear}
            className="p-1.5 rounded hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            title="Reset Conversation"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-white/20 text-white transition-colors"
            aria-label="Close Chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50/50 dark:bg-navy-bg/50 text-xs">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-[10px] font-bold ${
                msg.sender === 'user' ? 'bg-brand-red' : 'bg-navy-card border border-gray-600'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5 text-brand-gold" />}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 shadow-sm leading-relaxed whitespace-pre-wrap ${
                msg.sender === 'user'
                  ? 'bg-brand-red text-white rounded-tr-none'
                  : 'bg-white dark:bg-navy-card text-gray-800 dark:text-navy-text border border-gray-200 dark:border-navy-border rounded-tl-none'
              }`}
            >
              {msg.text}
              <span className={`block text-[9px] mt-1 text-right ${msg.sender === 'user' ? 'text-red-100' : 'text-gray-400'}`}>
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-6 h-6 rounded-full bg-navy-card flex items-center justify-center">
              <Bot className="w-3.5 h-3.5 text-brand-gold" />
            </div>
            <div className="bg-white dark:bg-navy-card px-3 py-2 rounded-xl border border-gray-200 dark:border-navy-border flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Starter Suggestions */}
      {messages.length < 3 && (
        <div className="px-3 py-2 bg-white dark:bg-navy-surface border-t border-gray-100 dark:border-navy-card">
          <span className="text-[10px] font-bold text-gray-400 dark:text-navy-muted block mb-1">
            Suggested Prompts:
          </span>
          <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto">
            {starterPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="px-2 py-1 rounded-full text-[10px] bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-brand-red dark:bg-navy-card dark:hover:bg-brand-red/20 dark:text-navy-muted dark:hover:text-red-300 transition-colors border border-gray-200 dark:border-navy-border text-left"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white dark:bg-navy-surface border-t border-gray-200 dark:border-navy-card flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about services, domains, or courses..."
          className="flex-1 px-3 py-2 rounded-xl text-xs bg-gray-100 dark:bg-navy-card text-gray-900 dark:text-white border border-gray-200 dark:border-navy-border focus:outline-none focus:ring-2 focus:ring-brand-red"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="p-2 rounded-xl bg-brand-red text-white hover:bg-brand-redHover disabled:opacity-50 transition-colors"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
