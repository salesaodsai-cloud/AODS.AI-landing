/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Building2, 
  Target, 
  Radio, 
  FileText, 
  Sliders, 
  CheckCircle2, 
  ChevronRight, 
  SlidersHorizontal,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { DEMO_OPPORTUNITIES } from '../data/intelligenceData';
import { DemoOpportunity } from '../types';

interface PlatformShowcaseProps {
  onRequestDemo: () => void;
}

export const PlatformShowcase: React.FC<PlatformShowcaseProps> = ({ onRequestDemo }) => {
  const [activeModule, setActiveModule] = useState<'search' | 'profiles' | 'ranking' | 'signals' | 'reports' | 'workspace'>('ranking');
  const [selectedOpportunityId, setSelectedOpportunityId] = useState<string>(DEMO_OPPORTUNITIES[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const selectedOpportunity: DemoOpportunity = 
    DEMO_OPPORTUNITIES.find((o) => o.id === selectedOpportunityId) || DEMO_OPPORTUNITIES[0];

  const modules = [
    { id: 'search', label: 'Intelligence Search', icon: Search },
    { id: 'profiles', label: 'Company Profiles', icon: Building2 },
    { id: 'ranking', label: 'Opportunity Ranking', icon: Target },
    { id: 'signals', label: 'Signal Monitoring', icon: Radio },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'workspace', label: 'Intelligence Workspace', icon: Sliders },
  ];

  return (
    <section 
      id="platform" 
      className="relative py-24 sm:py-32 bg-[#040a1c] border-t border-b border-blue-950/70 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-blue-700/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-cyan-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>COMMAND CENTER INTERFACE</span>
          </div>

          <h2 
            id="platform-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            One Intelligence Platform.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Multiple Ways to Deploy It.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Whether deployed as a self-service intelligence app or a comprehensive enterprise operation, AODS provides an intuitive command center for commercial research, opportunity prioritization, and decision support.
          </p>
        </div>

        {/* Enterprise Command Center Mockup Container */}
        <div className="rounded-2xl glass-panel-glow border border-blue-500/40 shadow-2xl overflow-hidden">
          
          {/* Mockup Top Window Bar with DEMO Labeling */}
          <div className="bg-[#030816]/95 px-4 sm:px-6 py-3.5 border-b border-blue-900/60 flex flex-wrap items-center justify-between gap-3">
            
            {/* Window Controls & Workspace Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="h-4 w-[1px] bg-blue-900/80 mx-1" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-white tracking-wider">
                  AODS COMMAND WORKSPACE
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-800/60">
                  DEMONSTRATION DATA
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar in Header */}
            <div className="hidden md:flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Signal Pipeline: Normal
              </span>
              <span>•</span>
              <span className="text-slate-300">Tenant: Enterprise Global</span>
            </div>

          </div>

          {/* Module Navigation Tabs */}
          <div className="bg-[#060f26]/90 px-4 sm:px-6 py-2.5 border-b border-blue-900/50 overflow-x-auto flex items-center gap-2">
            {modules.map((m) => {
              const Icon = m.icon;
              const isActive = activeModule === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m.id as any)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-900/80 text-cyan-300 border border-blue-600/70 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-blue-950/40 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Module Content View */}
          <div className="p-5 sm:p-7 bg-[#050c20]/95">
            
            {/* View 1: Opportunity Ranking / Main Command Hub */}
            {(activeModule === 'ranking' || activeModule === 'profiles' || activeModule === 'search') && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column: Ranked List (5 Cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-1">
                    <span>Ranked Opportunities (DEMO)</span>
                    <span className="text-cyan-400 font-bold">4 Active Accounts</span>
                  </div>

                  {DEMO_OPPORTUNITIES.map((opp) => {
                    const isSelected = selectedOpportunityId === opp.id;
                    return (
                      <button
                        key={opp.id}
                        onClick={() => setSelectedOpportunityId(opp.id)}
                        className={`w-full p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-blue-900/70 border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                            : 'bg-blue-950/40 border-blue-900/50 hover:bg-blue-900/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                            opp.priority === 'HIGH' 
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
                              : 'bg-blue-950 text-blue-300 border border-blue-800'
                          }`}>
                            Priority: {opp.priority}
                          </span>
                          <span className="text-xs font-mono font-extrabold text-white">
                            Score {opp.score} / 100
                          </span>
                        </div>

                        <div className="text-sm font-bold text-white font-sans truncate mb-0.5">
                          {opp.companyName}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate mb-2">
                          {opp.industry} • {opp.marketSegment}
                        </div>

                        <div className="text-[11px] text-blue-200 bg-blue-950/80 p-2 rounded border border-blue-900/60 line-clamp-2">
                          {opp.primarySignal}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Detailed Intelligence Dossier Inspector (7 Cols) */}
                <div className="lg:col-span-7">
                  <div className="rounded-xl bg-[#071536]/90 border border-blue-500/40 p-5 sm:p-6 shadow-xl">
                    
                    {/* Header with Specified Required Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-blue-900/60">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                            {selectedOpportunity.companyName}
                          </h3>
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-blue-950 text-cyan-300 border border-blue-800">
                            DEMO
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">
                          {selectedOpportunity.id} • {selectedOpportunity.industry}
                        </div>
                      </div>

                      {/* Required Key Metrics Showcase */}
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1.5 rounded-lg bg-blue-950/90 border border-blue-700/60 text-right">
                          <div className="text-[9px] font-mono text-slate-400 uppercase">Opportunity Score</div>
                          <div className="text-sm font-mono font-bold text-cyan-300">
                            {selectedOpportunity.score} / 100
                          </div>
                        </div>
                        <div className="px-3 py-1.5 rounded-lg bg-emerald-950/90 border border-emerald-700/60 text-right">
                          <div className="text-[9px] font-mono text-emerald-400 uppercase">Priority</div>
                          <div className="text-sm font-mono font-bold text-emerald-300">
                            {selectedOpportunity.priority}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status Highlights Grid: Company Intelligence Available, Market Signal Detected */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-mono text-slate-200">Company Intelligence</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-cyan-300 bg-blue-900/60 px-2 py-0.5 rounded border border-blue-700">
                          Available
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                          <span className="text-xs font-mono text-slate-200">Market Signal</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                          Detected
                        </span>
                      </div>
                    </div>

                    {/* Commercial Signal Analysis */}
                    <div className="p-3.5 rounded-lg bg-[#040d24] border border-blue-900/60 mb-4">
                      <div className="text-[11px] font-mono uppercase text-blue-300 font-semibold mb-1 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                        Commercial Context & Signal
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-sans">
                        {selectedOpportunity.context}
                      </p>
                    </div>

                    {/* Recommended Action Required Callout */}
                    <div className="p-3.5 rounded-lg bg-gradient-to-r from-cyan-950/50 to-blue-950/70 border border-cyan-700/60 mb-4">
                      <div className="text-[11px] font-mono uppercase text-cyan-300 font-bold mb-1 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-cyan-400" />
                        Recommended Action
                      </div>
                      <p className="text-xs text-slate-100 font-medium leading-relaxed font-sans">
                        {selectedOpportunity.recommendedAction}
                      </p>
                    </div>

                    {/* Telemetry Numbers Matrix */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-blue-900/60">
                      <div className="p-2 rounded bg-blue-950/40 text-center">
                        <div className="text-[9px] font-mono text-slate-400">Confidence</div>
                        <div className="text-xs font-mono font-bold text-cyan-300">{selectedOpportunity.signalConfidence}%</div>
                      </div>
                      <div className="p-2 rounded bg-blue-950/40 text-center">
                        <div className="text-[9px] font-mono text-slate-400">Growth Velocity</div>
                        <div className="text-xs font-mono font-bold text-white">{selectedOpportunity.metrics.growthVelocity}</div>
                      </div>
                      <div className="p-2 rounded bg-blue-950/40 text-center">
                        <div className="text-[9px] font-mono text-slate-400">Procurement</div>
                        <div className="text-xs font-mono font-bold text-emerald-400">{selectedOpportunity.metrics.procurementIntent}</div>
                      </div>
                      <div className="p-2 rounded bg-blue-950/40 text-center">
                        <div className="text-[9px] font-mono text-slate-400">Decision Contacts</div>
                        <div className="text-xs font-mono font-bold text-blue-300">{selectedOpportunity.decisionMakersIdentified} Verified</div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* View 2: Signal Monitoring */}
            {activeModule === 'signals' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2">
                  <span>Live Commercial Signal Stream (DEMO)</span>
                  <span className="text-cyan-400">Continuous Processing</span>
                </div>
                {DEMO_OPPORTUNITIES.map((opp) => (
                  <div key={opp.id} className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span className="text-sm font-bold text-white">{opp.companyName}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900 text-blue-200">
                          {opp.marketSegment}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">{opp.primarySignal}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right font-mono">
                        <div className="text-xs font-bold text-cyan-300">Confidence: {opp.signalConfidence}%</div>
                        <div className="text-[10px] text-slate-500">{opp.lastUpdated}</div>
                      </div>
                      <span className="px-2 py-1 rounded text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                        {opp.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View 3: Reports & Exports */}
            {activeModule === 'reports' && (
              <div className="p-6 rounded-xl bg-blue-950/30 border border-blue-900/50 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white font-sans">Executive Intelligence Briefings (DEMO)</h4>
                  <span className="text-xs font-mono text-cyan-300">Automated Weekly Synthesis</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-blue-950/60 border border-blue-800/50">
                    <div className="text-xs font-mono text-cyan-400 mb-1">DOSSIER #2026-Q3-01</div>
                    <div className="text-sm font-bold text-white">Commercial Logistics Corridor Expansion Report</div>
                    <p className="text-xs text-slate-300 mt-1">Structured analysis of 14 logistics operators entering North Texas expansion cycles.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-950/60 border border-blue-800/50">
                    <div className="text-xs font-mono text-cyan-400 mb-1">DOSSIER #2026-Q3-02</div>
                    <div className="text-sm font-bold text-white">Life Sciences Laboratory Infrastructure Shift</div>
                    <p className="text-xs text-slate-300 mt-1">Capital allocation signals across 8 regional healthcare and bio-research systems.</p>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Intelligence Workspace Configuration */}
            {activeModule === 'workspace' && (
              <div className="p-6 rounded-xl bg-blue-950/30 border border-blue-900/50 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white font-sans">Workspace Parameter Matrix (DEMO)</h4>
                  <span className="text-xs font-mono text-cyan-300">Configured Rules</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-900">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Min Scoring Threshold</div>
                    <div className="text-base font-mono font-bold text-white mt-1">75 / 100</div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-900">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Geographic Bounding</div>
                    <div className="text-base font-mono font-bold text-cyan-300 mt-1">National Tier-1</div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-900">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Signal Decay Window</div>
                    <div className="text-base font-mono font-bold text-white mt-1">45 Days</div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Call to Action inside Platform */}
          <div className="bg-[#030816]/95 px-6 py-4 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Demonstration interface displays simulated enterprise workflow data.</span>
            </div>

            <button
              onClick={onRequestDemo}
              className="px-5 py-2.5 rounded-lg text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/50 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(37,99,235,0.3)] cursor-pointer"
            >
              <span>REQUEST ENTERPRISE WORKSPACE DEMO</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
