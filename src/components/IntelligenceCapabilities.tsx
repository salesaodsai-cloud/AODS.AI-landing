/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  Target, 
  Activity, 
  Users, 
  Sliders, 
  Check, 
  ArrowUpRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CAPABILITIES } from '../data/intelligenceData';

export const IntelligenceCapabilities: React.FC = () => {
  const iconMap: Record<string, any> = {
    Building2,
    TrendingUp,
    Target,
    Activity,
    Users,
    Sliders,
  };

  return (
    <section 
      id="capabilities" 
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-800/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-cyan-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>COMMERCIAL CAPABILITY SUITE</span>
          </div>

          <h2 
            id="capabilities-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            From Raw Information to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Commercial Intelligence.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Modular intelligence capabilities configured to transform disparate market signals, organizational filings, and procurement indicators into high-conviction commercial momentum.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CAPABILITIES.map((cap) => {
            const Icon = iconMap[cap.iconName] || Target;
            return (
              <div 
                key={cap.number}
                className="group relative rounded-2xl bg-[#061026]/85 border border-blue-950/90 hover:border-blue-500/50 p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.25)] flex flex-col justify-between"
              >
                {/* Top Subtle Gradient Line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent group-hover:via-cyan-400/60 transition-all" />

                <div>
                  {/* Card Header: Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800/50 group-hover:border-cyan-400/70 group-hover:bg-blue-900/40 transition-all text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-900/60">
                        {cap.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-blue-300 transition-colors">
                        {cap.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors font-sans">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    {cap.description}
                  </p>

                  {/* Specific Bullet Capabilities */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-blue-950/80">
                    {cap.capabilities.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Micro-Badge */}
                <div className="pt-4 border-t border-blue-950/70 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Structured Output</span>
                  <span className="text-blue-400 group-hover:text-cyan-300 transition-colors font-semibold flex items-center gap-1">
                    Continuous <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
