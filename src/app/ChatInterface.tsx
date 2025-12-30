'use client';

import { useChat } from 'ai/react';
import { useEffect, useRef } from 'react';
import { Send, Shield, Terminal, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatInterface({ onClose }: { onClose: () => void }) {
  // Hook into the Vercel AI SDK (connects to /api/chat automatically)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  
  // Auto-scroll logic
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
    >
      <div className="w-full max-w-4xl h-[80vh] bg-slate-900 border border-slate-700 rounded-lg shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* Header: The Governor's Status Bar */}
        <div className="bg-slate-950 border-b border-slate-800 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-primary/10 rounded-md">
              <Shield className="w-5 h-5 text-brand-primary" />
            </div>
            <div>
              <h3 className="text-white font-mono font-bold text-sm tracking-wider">
                WAIN1+ GOVERNOR NODE
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-slate-400 font-mono">
                  GEMINI 3 PRO-PREVIEW // ONLINE
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* The Feed: Streaming Output */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 font-mono text-sm">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 opacity-50">
              <Cpu className="w-16 h-16 mb-4" />
              <p>AWAITING SIGNAL...</p>
            </div>
          )}

          {messages.map((m) => (
            <div 
              key={m.id} 
              className={`flex gap-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <Terminal className="w-4 h-4 text-brand-accent" />
                </div>
              )}
              
              <div 
                className={`max-w-[80%] p-4 rounded-lg whitespace-pre-wrap leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-slate-950 border border-slate-800 text-slate-300'
                }`}
              >
                {/* Visual Label for the Governor */}
                {m.role === 'assistant' && (
                  <span className="block text-[10px] text-brand-accent mb-2 uppercase tracking-widest font-bold">
                    &gt; WAIN-G_RESPONSE:
                  </span>
                )}
                {m.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* The Input: Command Line */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 shrink-0">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              className="flex-1 bg-slate-900 border border-slate-700 rounded-md p-3 text-white font-mono focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-slate-600"
              value={input}
              placeholder="ENTER COMMAND OR QUERY..."
              onChange={handleInputChange}
            />
            <button 
              type="submit"
              disabled={isLoading || !input}
              className="bg-brand-primary hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 rounded-md font-bold transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              SEND
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}