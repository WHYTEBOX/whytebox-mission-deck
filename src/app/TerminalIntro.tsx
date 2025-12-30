'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function TerminalIntro() {
  const [step, setStep] = useState(0);

  // Sequence Logic
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),  // Initializing...
      setTimeout(() => setStep(2), 2000), // Activating Triangle...
      setTimeout(() => setStep(3), 3500), // Governor Active.
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 font-mono text-sm md:text-base">
      
      {/* Line 1: Initialization */}
      <div className="flex items-center text-emerald-500 mb-2">
        <span className="mr-2">{'>'}</span>
        <span className="typing-effect">INITIALIZING WAIN1+ NODE...</span>
      </div>

      {/* Line 2: Activation */}
      {step >= 1 && (
        <div className="flex items-center text-blue-400 mb-2">
          <span className="mr-2">{'>'}</span>
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
          >
            ACTIVATING WHYTEtriangle PROTOCOLS...
          </motion.span>
        </div>
      )}

      {/* Line 3: Status */}
      {step >= 2 && (
        <div className="flex items-center text-brand-primary mb-6">
          <span className="mr-2">{'>'}</span>
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
          >
            STATUS: GOVERNOR ACTIVE.
          </motion.span>
        </div>
      )}

      {/* The Diagnostic Card (CTA) */}
      {step >= 3 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 border border-slate-800 bg-slate-900/50 p-6 rounded-lg backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-brand-primary shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-2 tracking-tight">
                GOVERNANCE OVER GADGETS.
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Most organisations suffer from "Shadow AI" and "Creative Displacement". 
                The Mission Deck is now open for governed auditing.
              </p>
              A
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-red-600 text-white px-6 py-3 rounded-md font-bold transition-all group">
                  ACTIVATE MISSION DECK
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-md transition-all">
                  RUN GCM DIAGNOSTIC
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}