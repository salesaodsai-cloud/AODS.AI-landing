/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Layers, 
  Target, 
  Sliders, 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Zap,
  Activity,
  FileCheck,
  ShieldCheck,
  Building
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/intelligenceData';

export const WhatAodsDoes: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = WORKFLOW_STEPS[activeStepIndex];

  const stepIcons = [Search, Layers, Sliders, Target, Send];

  return (
    <section 
      id="intelligence" 
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-700/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-cyan-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>COMMERCIAL INTELLIGENCE WORKFLOW</span>
          </div>

          <h2 
            id="what-aods-does-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            An Intelligence Layer Between Your Data and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Your Decisions.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            AODS transforms fragmented commercial information into structured intelligence designed to help teams research markets, understand organizations, identify opportunities, and prioritize where attention should go.
          </p>
        </div>

        {/* 5-Step Interactive 3D Workflow Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selector Tabs (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full p-4.5 rounded-xl text-left transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-950/90 to-[#0a183d] border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.25)] ring-1 ring-blue-500/50'
                      : 'bg-[#050e24]/70 border-blue-950/80 hover:bg-blue-950/40 hover:border-blue-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-600 text-white' : 'bg-blue-950 text-blue-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-xs font-mono font-bold tracking-wider ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                        {step.step} — {step.title}
                      </span>
                    </div>
                    {isActive && (
                      <span className="text-[10px] font-mono uppercase bg-blue-900/60 text-cyan-200 px-2 py-0.5 rounded border border-blue-700/40">
                        ACTIVE ENGINE
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-2 pl-11 font-sans ${isActive ? 'text-slate-200 font-medium' : 'text-slate-400'}`}>
                    {step.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Step Detailed Visual & Artifact Inspector (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-blue-500/40 relative">
              
              {/* Top Banner */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-blue-900/70">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-blue-950 border border-blue-800/60">
                    STAGE {activeStep.step} / 05
                  </span>
                  <span className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                    {activeStep.title} ENGINE
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  Deterministic Execution
                </div>
              </div>

              {/* Step Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2 font-sans">
                  {activeStep.tagline}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {activeStep.description}
                </p>
              </div>

              {/* Technical Implementation Details */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  ENGINEERING PROTOCOLS & DATA ARCHITECTURE
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.technicalDetails.map((detail, i) => (
                    <div 
                      key={i} 
                      className="p-3 rounded-lg bg-blue-950/50 border border-blue-900/50 flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output Artifact Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/80 via-[#0a183d] to-[#07132e] border border-blue-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                    OUTPUT ARTIFACT PRODUCED
                  </div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">
                    {activeStep.outputArtifact}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-900 text-blue-200 border border-blue-700/50">
                    VERIFIED ARTIFACT
                  </span>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="mt-6 pt-4 border-t border-blue-900/50 flex items-center justify-between text-xs font-mono">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded bg-blue-950/60 border border-blue-900 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-900/40 cursor-pointer"
                >
                  ← PREVIOUS STEP
                </button>
                <span className="text-slate-400">
                  {activeStepIndex + 1} of 5 WORKFLOW NODES
                </span>
                <button
                  disabled={activeStepIndex === WORKFLOW_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(WORKFLOW_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded bg-blue-900/60 border border-blue-700 text-cyan-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-800/60 cursor-pointer"
                >
                  NEXT STEP →
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
