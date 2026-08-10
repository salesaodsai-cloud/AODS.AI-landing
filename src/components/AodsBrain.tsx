/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Radio, 
  Building2, 
  Users, 
  Clock, 
  Sliders, 
  Target, 
  Sparkles, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Info
} from 'lucide-react';
import { BRAIN_NODES } from '../data/intelligenceData';
import { BrainNode } from '../types';

export const AodsBrain: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-company');
  const selectedNode = BRAIN_NODES.find((n) => n.id === selectedNodeId) || BRAIN_NODES[0];

  const nodeIconMap: Record<string, any> = {
    'node-company': Building2,
    'node-market': Radio,
    'node-opportunity': Target,
    'node-decision': Users,
    'node-context': Layers,
    'node-historical': Clock,
    'node-criteria': Sliders,
  };

  return (
    <section 
      id="enterprise-brain" 
      className="relative py-24 sm:py-32 bg-[#040a1c] border-t border-b border-blue-950/70 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern-dense opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/40 text-cyan-300 text-xs font-mono mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENTERPRISE INTELLIGENCE CORE</span>
          </div>

          <h2 
            id="aods-brain-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400">
              AODS Intelligence Engine.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            A proprietary commercial intelligence infrastructure designed to synthesize multi-vector enterprise signals, company telemetry, and custom organizational criteria into decisive opportunities.
          </p>
        </div>

        {/* Large Interactive Engine Architecture Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Architecture Representation (Left 8 Cols) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/30 relative">
            
            {/* Top Indicator */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-blue-900/60 text-xs font-mono">
              <span className="text-slate-300 uppercase tracking-wider font-semibold">
                Multi-Vector Signal Correlation Topology
              </span>
              <span className="text-cyan-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800/50">
                PROPRIETARY ARCHITECTURE
              </span>
            </div>

            {/* Visual Node Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Input Nodes Column (7 Connected Feeds) */}
              <div className="md:col-span-4 space-y-2">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">
                  Connected Signal Nodes (7)
                </div>
                {BRAIN_NODES.map((node) => {
                  const Icon = nodeIconMap[node.id] || Cpu;
                  const isSelected = selectedNodeId === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`w-full p-2.5 rounded-lg text-left transition-all duration-200 border flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-blue-900/70 border-cyan-400/80 shadow-[0_0_12px_rgba(6,182,212,0.3)] text-white'
                          : 'bg-blue-950/40 border-blue-900/40 hover:bg-blue-900/30 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-cyan-300' : 'text-blue-400'}`} />
                        <span className="text-[11px] font-mono font-bold truncate">
                          {node.name}
                        </span>
                      </div>
                      <span className={`text-[9px] font-mono ${isSelected ? 'text-cyan-200' : 'text-slate-500'}`}>
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Central Core: AODS BRAIN */}
              <div className="md:col-span-4 flex flex-col items-center justify-center my-4 md:my-0">
                <div className="relative flex flex-col items-center justify-center w-40 h-40 rounded-full bg-gradient-to-b from-blue-950 via-[#0a183d] to-[#040a1c] border-2 border-blue-500/60 shadow-[0_0_35px_rgba(37,99,235,0.4)] p-4 text-center group">
                  {/* Rotating / Pulsing Ambient Rings */}
                  <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping opacity-20 pointer-events-none" />
                  <div className="absolute -inset-2 rounded-full border border-blue-500/20 pointer-events-none" />
                  
                  <div className="p-2 rounded-full bg-blue-600/30 text-cyan-300 mb-1">
                    <Cpu className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="text-xs font-mono font-extrabold text-white tracking-widest">
                    AODS BRAIN
                  </div>
                  <div className="text-[9px] font-mono text-cyan-300 uppercase mt-0.5">
                    Synthesis Core
                  </div>
                </div>

                {/* Sub-label under brain */}
                <div className="mt-3 text-[10px] font-mono text-slate-400 text-center">
                  Multi-Factor Weighting & Synthesis
                </div>
              </div>

              {/* Output Stages: INTELLIGENCE → PRIORITIZED OPPORTUNITIES */}
              <div className="md:col-span-4 space-y-3">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">
                  Convergence Outputs
                </div>

                {/* Intelligence Flow Box */}
                <div className="p-3.5 rounded-xl bg-blue-950/70 border border-blue-600/50 shadow-md">
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-bold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    INTELLIGENCE
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Synthesized market context, validated signals, and enriched corporate relationships.
                  </p>
                </div>

                {/* Downstream Flow Arrow */}
                <div className="text-center font-mono text-cyan-400 text-xs py-0.5">
                  ↓
                </div>

                {/* Prioritized Opportunities Box */}
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-900/80 to-[#07173e] border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-1">
                    <Target className="w-3.5 h-3.5" />
                    PRIORITIZED OPPORTUNITIES
                  </div>
                  <p className="text-[11px] text-slate-200 leading-snug">
                    Ranked commercial accounts with confidence scores and tactical decision support.
                  </p>
                </div>

              </div>

            </div>

            {/* Bottom Disclaimer on Architecture */}
            <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <Info className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                Engineered for deterministic multi-signal correlation and verifiable decision support across institutional environments.
              </span>
            </div>

          </div>

          {/* Node Inspector Details (Right 4 Cols) */}
          <div className="lg:col-span-4">
            <div className="glass-panel-glow rounded-2xl p-6 border border-blue-500/40">
              
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-2">
                ACTIVE NODE TELEMETRY
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-sans">
                {selectedNode.name}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                {selectedNode.description}
              </p>

              {/* Sample Signal Streams */}
              <div className="space-y-2 mb-4">
                <div className="text-[10px] font-mono text-slate-400 uppercase">
                  Active Signal Vectors
                </div>
                {selectedNode.sampleSignals.map((signal, idx) => (
                  <div 
                    key={idx}
                    className="p-2 rounded bg-blue-950/60 border border-blue-900/60 text-xs text-slate-200 font-mono flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="truncate">{signal}</span>
                  </div>
                ))}
              </div>

              {/* Node Capacity / Status Metric */}
              <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-800/40 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Node Capacity</span>
                <span className="text-cyan-300 font-bold">{selectedNode.activeStats}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
