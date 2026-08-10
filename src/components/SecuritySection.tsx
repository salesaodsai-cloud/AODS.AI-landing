/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  Database, 
  FileSearch, 
  Lock, 
  Server, 
  Scale, 
  Check, 
  Key, 
  Cpu, 
  AlertCircle
} from 'lucide-react';
import { SECURITY_PRINCIPLES } from '../data/intelligenceData';

export const SecuritySection: React.FC = () => {
  const iconMap: Record<string, any> = {
    ShieldCheck,
    Database,
    FileSearch,
    Lock,
    Server,
    Scale,
  };

  return (
    <section 
      id="security" 
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[450px] bg-blue-900/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-cyan-300 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECURITY & ARCHITECTURAL PRINCIPLES</span>
          </div>

          <h2 
            id="security-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Serious Business.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Institutional commercial intelligence demands rigorous architectural discipline. AODS is built on foundational principles of isolation, data minimization, and accountable provenance.
          </p>
        </div>

        {/* 6 Security & Trust Principle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {SECURITY_PRINCIPLES.map((principle) => {
            const Icon = iconMap[principle.iconName] || ShieldCheck;
            return (
              <div
                key={principle.title}
                className="group rounded-2xl bg-[#061026]/90 border border-blue-950/90 hover:border-blue-500/50 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-blue-950/90 border border-blue-800/60 text-cyan-400 w-fit mb-5 group-hover:border-cyan-400/70 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors font-sans">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-sans">
                    {principle.description}
                  </p>
                </div>

                {/* Technical Note */}
                <div className="pt-3 border-t border-blue-950/80">
                  <div className="text-[10px] font-mono text-slate-400 flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold">Protocol:</span>
                    <span>{principle.technicalNote}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Subtle Dark-Blue Security Architecture Visualization */}
        <div className="rounded-2xl glass-panel-glow border border-blue-500/40 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="max-w-xl">
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
                ENTERPRISE DATA GOVERNANCE
              </div>
              <h3 className="text-xl font-bold text-white font-sans">
                Tenant Isolation & Purpose-Bound Intelligence Pipelines
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-sans">
                Every enterprise deployment operates within dedicated configuration partitions. Scoring weights, target lists, and synthesized opportunity queues remain strictly confidential to your organization.
              </p>
            </div>

            {/* Visual Security Architecture Badges */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800/50 text-center">
                <div className="text-xs font-mono font-bold text-cyan-300">Isolated Tenants</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Partitioned Schemas</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800/50 text-center">
                <div className="text-xs font-mono font-bold text-cyan-300">Zero Leakage</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Confidential Criteria</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800/50 text-center">
                <div className="text-xs font-mono font-bold text-cyan-300">Auditable Trails</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Transparent Sources</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800/50 text-center">
                <div className="text-xs font-mono font-bold text-cyan-300">Role Governed</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Access Controls</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
