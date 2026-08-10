/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Building2, 
  Briefcase, 
  Server, 
  ChevronRight, 
  Check, 
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles
} from 'lucide-react';
import { AUDIENCE_CARDS } from '../data/intelligenceData';

interface WhoAodsIsBuiltForProps {
  onSelectAudience: (category: string) => void;
}

export const WhoAodsIsBuiltFor: React.FC<WhoAodsIsBuiltForProps> = ({ onSelectAudience }) => {
  const iconMap: Record<string, any> = {
    cre: Building2,
    agencies: Briefcase,
    msps: Server,
  };

  return (
    <section 
      id="solutions" 
      className="relative py-24 sm:py-32 bg-[#040a1c] border-t border-b border-blue-950/70 overflow-hidden"
    >
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-cyan-300 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL TARGET SECTORS</span>
          </div>

          <h2 
            id="solutions-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            Built for Organizations Where Better Intelligence Has{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Economic Value.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            AODS is engineered specifically for commercial leaders, advisors, and specialized firms navigating competitive environments where timely, structured intelligence provides immediate economic leverage.
          </p>
        </div>

        {/* 3 Large Premium Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {AUDIENCE_CARDS.map((card) => {
            const Icon = iconMap[card.id] || Building2;
            return (
              <div
                key={card.id}
                className="group rounded-2xl glass-panel-glow p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_15px_35px_-10px_rgba(37,99,235,0.3)] relative overflow-hidden"
              >
                {/* Top Subtle Ambient Light */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/50">
                      {card.category}
                    </span>
                    <div className="p-2.5 rounded-xl bg-blue-900/40 border border-blue-700/50 text-cyan-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3 font-sans">
                    {card.title}
                  </h3>

                  {/* Headline & Description */}
                  <p className="text-sm text-blue-200 font-medium leading-relaxed mb-4">
                    "{card.headline}"
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                    {card.description}
                  </p>

                  {/* Examples List */}
                  <div className="mb-6 p-3.5 rounded-xl bg-[#030816]/80 border border-blue-950">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold mb-2">
                      Primary Institutional Profiles
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {card.examples.map((ex, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-950/80 text-blue-300 border border-blue-800/40"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold">
                      Intelligence Capabilities
                    </div>
                    {card.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Demonstration Telemetry Metric */}
                  <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/40 mb-6">
                    <div className="text-[9px] font-mono text-cyan-400 uppercase font-bold flex items-center justify-between">
                      <span>{card.sampleMetric.label}</span>
                      <span className="text-slate-400">DEMO</span>
                    </div>
                    <div className="text-sm font-mono font-bold text-white mt-0.5">
                      {card.sampleMetric.value}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {card.sampleMetric.context}
                    </div>
                  </div>

                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onSelectAudience(card.title)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-blue-900/60 hover:bg-blue-800 border border-blue-700/60 hover:border-cyan-400/60 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                >
                  <span>{card.ctaText}</span>
                  <ChevronRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-0.5 transition-transform" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
