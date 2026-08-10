/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  AlertCircle, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  Layers, 
  Target, 
  HelpCircle, 
  CheckCircle2, 
  Radio,
  TrendingUp,
  SlidersHorizontal,
  FileSpreadsheet
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2); // default Intelligence

  const strugglePoints = [
    { text: 'Which companies deserve attention', detail: 'Sifting through hundreds of corporate records with no indicator of active intent or commercial timing.' },
    { text: 'Which opportunities are emerging', detail: 'Missing early expansion triggers, zoning changes, or executive mandates before they become public RFPs.' },
    { text: 'Which signals actually matter', detail: 'Distinguishing high-conviction commercial momentum from routine marketing noise and social press releases.' },
    { text: 'Which accounts should be prioritized', detail: 'Wasting senior commercial bandwidth on cold accounts rather than accounts in active procurement windows.' },
    { text: 'What information should influence the next decision', detail: 'Synthesizing verified commercial context so outreach and advisory conversations start with authority.' },
  ];

  const transformationChain = [
    { title: 'Signal', desc: 'Raw event or data change detected across public commercial records', tag: 'INPUT' },
    { title: 'Context', desc: 'Normalized historical and organizational relationship mapping', tag: 'CORRELATION' },
    { title: 'Intelligence', desc: 'Synthesized commercial meaning and catalyst identification', tag: 'SYNTHESIS' },
    { title: 'Priority', desc: 'Deterministic multi-factor scoring against organizational criteria', tag: 'RANKING' },
    { title: 'Action', desc: 'Specific engagement strategy and verified stakeholder mapping', tag: 'EXECUTION' },
  ];

  return (
    <section 
      id="problem-section" 
      className="relative py-24 sm:py-32 bg-[#040a1c] border-t border-b border-blue-950/60 overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-blue-300 text-xs font-mono mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE COMMERCIAL INFORMATION ASYMMETRY</span>
          </div>

          <h2 
            id="problem-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            Information Is Everywhere.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Intelligence Isn't.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Modern organizations have access to enormous amounts of information—unending feeds, registries, disclosures, and alerts. Yet commercial teams still struggle to answer fundamental operational questions:
          </p>
        </div>

        {/* Two-Column Problem & Data Transformation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Five Core Friction Questions */}
          <div className="lg:col-span-5 space-y-3.5">
            {strugglePoints.map((point, index) => (
              <div 
                key={index}
                className="group p-4 rounded-xl bg-[#061026]/90 border border-blue-900/40 hover:border-blue-700/70 transition-all duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-blue-950 border border-blue-800/60 flex items-center justify-center text-[11px] font-mono font-bold text-blue-300 shrink-0 mt-0.5 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-200 transition-colors font-sans">
                      {point.text}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: 3D Visualization of Data Concentration & Organizing */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-blue-500/30 relative">
              
              {/* Header inside visual card */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-blue-900/60">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 block">
                    Data Convergence & Priority Condensation
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Scattered market noise → Verified decision priority
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950 text-cyan-300 border border-blue-700/50">
                  AODS TRANSFORMATION
                </span>
              </div>

              {/* Graphic Stage Display: Noise vs Structured Intelligence */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                {/* Unstructured Noise Container */}
                <div className="p-4 rounded-xl bg-[#030816]/90 border border-blue-950/80">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-red-400/80" />
                      10,000+ Scattered Data Points
                    </span>
                    <span className="text-[10px] text-red-400">HIGH NOISE</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="p-2 rounded bg-blue-950/30 border border-blue-950 text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="truncate">Public real estate filing...</span>
                      <span className="text-[9px] font-mono text-slate-500">Unfiltered</span>
                    </div>
                    <div className="p-2 rounded bg-blue-950/30 border border-blue-950 text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="truncate">Executive title modification...</span>
                      <span className="text-[9px] font-mono text-slate-500">Unfiltered</span>
                    </div>
                    <div className="p-2 rounded bg-blue-950/30 border border-blue-950 text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="truncate">Regional zoning hearing note...</span>
                      <span className="text-[9px] font-mono text-slate-500">Unfiltered</span>
                    </div>
                    <div className="p-2 rounded bg-blue-950/30 border border-blue-950 text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="truncate">CapEx budget conference deck...</span>
                      <span className="text-[9px] font-mono text-slate-500">Unfiltered</span>
                    </div>
                  </div>
                </div>

                {/* Structured High-Conviction Opportunities */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-950/70 to-[#07132e] border border-blue-500/40 shadow-inner">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                      <Target className="w-3.5 h-3.5 text-cyan-400" />
                      Prioritized Opportunities
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-800/50">
                      HIGH CONVICTION
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg bg-blue-900/50 border border-blue-600/40 text-xs">
                      <div className="flex items-center justify-between font-bold text-white mb-0.5">
                        <span className="truncate">Apex Logistics Corp</span>
                        <span className="text-cyan-300 font-mono">Score 87</span>
                      </div>
                      <div className="text-[10px] text-blue-200 truncate">
                        $120M Facility Program • Immediate window
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-xs">
                      <div className="flex items-center justify-between font-bold text-white mb-0.5">
                        <span className="truncate">Vanguard Health Systems</span>
                        <span className="text-cyan-300 font-mono">Score 89</span>
                      </div>
                      <div className="text-[10px] text-blue-200 truncate">
                        Life Sciences Lab Retrofit • Q4 RFP cycle
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Transformation Chain: Signal → Context → Intelligence → Priority → Action */}
              <div className="pt-4 border-t border-blue-900/60">
                <div className="text-xs font-mono uppercase text-slate-300 font-semibold mb-3 flex items-center justify-between">
                  <span>Transformation Chain</span>
                  <span className="text-cyan-400 text-[10px]">Deterministic Pipeline</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {transformationChain.map((item, i) => (
                    <div 
                      key={item.title}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        activeStep === i 
                          ? 'bg-blue-900/70 border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.3)]' 
                          : 'bg-blue-950/40 border-blue-900/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-mono text-cyan-400 font-bold">
                          {item.tag}
                        </span>
                        {i < 4 && <ArrowRight className="w-3 h-3 text-slate-500 hidden sm:block" />}
                      </div>
                      <div className="text-xs font-bold text-white mb-1">
                        {item.title}
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
