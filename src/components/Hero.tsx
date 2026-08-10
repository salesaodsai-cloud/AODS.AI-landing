/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  Database, 
  Radio, 
  Search, 
  CheckCircle2, 
  BarChart3, 
  ShieldAlert,
  ArrowUpRight,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onRequestAnalysis: () => void;
  onExplorePlatform: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAnalysis, onExplorePlatform }) => {
  const [activeStage, setActiveStage] = useState<number>(4); // Default on Opportunity Intelligence

  const pipelineStages = [
    { id: 0, label: 'Data Sources', icon: Database, count: '14.8K feeds' },
    { id: 1, label: 'Research', icon: Search, count: 'Normalized' },
    { id: 2, label: 'Signals', icon: Radio, count: 'Multi-Vector' },
    { id: 3, label: 'Analysis', icon: Layers, count: 'Correlation' },
    { id: 4, label: 'Opportunity Intelligence', icon: BarChart3, count: 'Score: 87/100' },
    { id: 5, label: 'Prioritized Actions', icon: CheckCircle2, count: 'Immediate Action' },
  ];

  return (
    <section 
      id="hero-section" 
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-[#030712]"
    >
      {/* Background Ambience & Engineering Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-blue-900/20 via-blue-700/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action Area */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Institutional Tag / Classification */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-mono tracking-wider shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>AODS INTELLIGENCE ARCHITECTURE</span>
            </div>

            {/* Main Headline */}
            <h1 
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans"
            >
              Turn Complex Market Data Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-400">
                Intelligent Action.
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              id="hero-subheadline"
              className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              AODS Intelligence researches, analyzes, and prioritizes commercial opportunities so your team knows what matters, why it matters, and where to act next.
            </p>

            {/* Action CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-primary-cta-btn"
                onClick={onRequestAnalysis}
                className="group px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-cyan-600 border border-blue-400/40 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer text-sm sm:text-base"
              >
                <span>Request an Intelligence Analysis</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta-btn"
                onClick={onExplorePlatform}
                className="px-6 py-3.5 rounded-xl font-medium text-slate-200 hover:text-white bg-blue-950/40 hover:bg-blue-900/40 border border-blue-800/50 hover:border-blue-700/80 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>
            </div>

            {/* Credibility-Style Line */}
            <div className="pt-3 flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-mono">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Built for organizations operating where information, timing, and decisions matter.</span>
            </div>

          </div>

          {/* Right Column: Abstract 3D Enterprise Intelligence Visualization */}
          <div className="lg:col-span-6 relative">
            
            {/* Ambient Background Glow behind visual */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

            {/* Main Command Visualization Card */}
            <div className="relative glass-panel rounded-2xl p-5 sm:p-7 border border-blue-500/30 shadow-2xl overflow-hidden">
              
              {/* Card Header with DEMO Watermark */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-blue-900/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-blue-500/80 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                    AODS Commercial Intelligence Engine
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-950 text-cyan-300 border border-blue-700/60">
                    DEMO SIMULATION
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Pipeline Flow Stepper: Data Sources → Research → Signals → Analysis → Opportunity Intelligence → Prioritized Actions */}
              <div className="mb-6">
                <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2.5 flex items-center justify-between">
                  <span>Continuous Processing Pipeline</span>
                  <span className="text-blue-400 text-[10px]">Click stage to inspect</span>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                  {pipelineStages.map((stage) => {
                    const Icon = stage.icon;
                    const isActive = activeStage === stage.id;
                    return (
                      <button
                        key={stage.id}
                        onClick={() => setActiveStage(stage.id)}
                        className={`p-2 rounded-lg text-left transition-all duration-200 border cursor-pointer ${
                          isActive
                            ? 'bg-blue-900/60 border-blue-400/80 shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                            : 'bg-blue-950/30 border-blue-900/40 hover:bg-blue-900/30 hover:border-blue-800/60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
                          <span className={`text-[9px] font-mono ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                            0{stage.id + 1}
                          </span>
                        </div>
                        <div className={`text-[10px] font-semibold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {stage.label.split(' ')[0]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Demonstration Opportunity Card */}
              <div className="relative rounded-xl bg-[#07132e]/90 border border-blue-500/40 p-4 sm:p-5 shadow-xl">
                
                {/* Floating Top Status Indicators */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-blue-900/50">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      Opportunity Intelligence
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-blue-950 text-blue-300 border border-blue-800/40">
                      DEMO
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Priority: HIGH
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-950/80 text-cyan-300 border border-blue-700/60">
                      Signal Confidence: 94%
                    </span>
                  </div>
                </div>

                {/* Simulated Target Entity Info */}
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Analyzed Commercial Entity</div>
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center justify-between">
                      <span>Apex Industrial Logistics Corp</span>
                      <span className="text-xs font-mono text-blue-300 font-normal">Score: 87 / 100</span>
                    </div>
                  </div>

                  {/* Primary Signal Box */}
                  <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/50">
                    <div className="text-[11px] font-mono uppercase text-blue-300 font-semibold mb-1 flex items-center gap-1.5">
                      <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                      Detected Commercial Signal
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans">
                      Multi-Market Expansion Filing: $120M Facility Program in North Texas Corridor with commercial RFP cycle initiating.
                    </p>
                  </div>

                  {/* Recommended Action Box */}
                  <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40">
                    <div className="text-[11px] font-mono uppercase text-cyan-300 font-semibold mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      Recommended Action
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans">
                      Initiate targeted executive outreach to VP Real Estate & Regional Asset Manager before public bid tender.
                    </p>
                  </div>

                  {/* Quantitative Telemetry Matrix */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="p-2 rounded bg-blue-950/40 border border-blue-900/40 text-center">
                      <div className="text-[9px] font-mono text-slate-400 uppercase">Growth Velocity</div>
                      <div className="text-xs font-mono font-bold text-white">+38% YoY</div>
                    </div>
                    <div className="p-2 rounded bg-blue-950/40 border border-blue-900/40 text-center">
                      <div className="text-[9px] font-mono text-slate-400 uppercase">Decision Roles</div>
                      <div className="text-xs font-mono font-bold text-cyan-300">4 Mapped</div>
                    </div>
                    <div className="p-2 rounded bg-blue-950/40 border border-blue-900/40 text-center">
                      <div className="text-[9px] font-mono text-slate-400 uppercase">Timing Window</div>
                      <div className="text-xs font-mono font-bold text-emerald-400">Immediate</div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Micro Telemetry Bar */}
              <div className="mt-4 pt-3 border-t border-blue-900/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  Deterministic scoring active
                </span>
                <span className="text-blue-300">
                  Updated 14 mins ago
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
