/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Target, 
  Cpu, 
  RefreshCw,
  Zap,
  SlidersHorizontal
} from 'lucide-react';
import { HOW_IT_WORKS_TIMELINE } from '../data/intelligenceData';

export const HowItWorks: React.FC = () => {
  return (
    <section 
      id="how-it-works" 
      className="relative py-24 sm:py-32 bg-[#040a1c] border-t border-b border-blue-950/70 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-700/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-cyan-300 text-xs font-mono mb-4">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>OPERATIONAL TIMELINE</span>
          </div>

          <h2 
            id="how-it-works-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            From First Analysis to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Continuous Intelligence.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            A structured, repeatable methodology engineered to establish your intelligence foundation and deliver continuous high-conviction opportunities over time.
          </p>
        </div>

        {/* 6-Step Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {HOW_IT_WORKS_TIMELINE.map((item, idx) => (
            <div
              key={item.step}
              className="group rounded-2xl bg-[#061026]/90 border border-blue-950/90 hover:border-blue-500/50 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Marker */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-800/60 flex items-center justify-center text-xs font-mono font-bold text-cyan-300 group-hover:border-cyan-400/80 transition-colors shadow-inner">
                    {item.step}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                    PHASE {item.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-200 transition-colors font-sans">
                  {item.title}
                </h3>

                {/* Step Summary */}
                <p className="text-xs font-medium text-blue-300 mb-3 font-sans">
                  {item.summary}
                </p>

                {/* Step Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-blue-950/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Verified Execution</span>
                <span className="text-blue-400 group-hover:text-cyan-300">Phase 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
