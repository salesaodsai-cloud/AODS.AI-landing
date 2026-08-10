/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Building, 
  Sliders, 
  Cpu, 
  Activity, 
  Target, 
  CheckCircle2, 
  ArrowDown, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Briefcase
} from 'lucide-react';

interface EnterpriseDeploymentProps {
  onRequestDeployment: () => void;
}

export const EnterpriseDeployment: React.FC<EnterpriseDeploymentProps> = ({ onRequestDeployment }) => {
  const configurationVectors = [
    { label: 'Target Markets', desc: 'Sector boundaries, sub-industry taxonomies, and entity scale tiers.' },
    { label: 'Ideal Customer Profiles', desc: 'Multi-factor commercial alignment thresholds and operational traits.' },
    { label: 'Geographic Priorities', desc: 'Metro bounding boxes, regional expansion corridors, and municipal registries.' },
    { label: 'Industry Requirements', desc: 'Specialized compliance disclosures, lease lifecycle windows, and CapEx markers.' },
    { label: 'Opportunity Criteria', desc: 'Custom minimum scoring thresholds and urgency classification rules.' },
    { label: 'Research Workflows', desc: 'Automated synthesis depth, contact verification standards, and output formats.' },
    { label: 'Reporting Requirements', desc: 'Cadence of executive alerts, weekly opportunity queues, and board briefings.' },
    { label: 'Existing Business Processes', desc: 'Alignment with internal pipeline stages, deal committees, and advisory motions.' },
  ];

  const deploymentArchitecture = [
    { stage: 'ORGANIZATION', role: 'Your Core Commercial Objectives & Parameters', icon: Building },
    { stage: 'AODS CONFIGURATION', role: 'Bespoke Weighting, Geographic & ICP Rules', icon: Sliders },
    { stage: 'INTELLIGENCE ENGINE', role: 'Multi-Vector Signal Processing & Graph Mapping', icon: Cpu },
    { stage: 'CONTINUOUS ANALYSIS', role: '24/7 Market Scanning, Catalyst & Anomaly Tracking', icon: Activity },
    { stage: 'PRIORITIZED INTELLIGENCE', role: 'Ranked Commercial Accounts & Confidence Scores', icon: Target },
    { stage: 'DECISION SUPPORT', role: 'Executive Briefs, Verified Contacts & Tactical Action Steps', icon: CheckCircle2 },
  ];

  return (
    <section 
      id="enterprise" 
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-700/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-cyan-300 text-xs font-mono mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>

          <h2 
            id="enterprise-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            Deploy Intelligence Around{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Your Organization.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            AODS enterprise deployments are calibrated around your specific operating parameters, geographical focus, and commercial workflows—creating a dedicated continuous intelligence operation.
          </p>
        </div>

        {/* 90-Day Deployment Prominent Callout Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/90 via-[#0a1b42] to-[#061026] border border-blue-500/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-900/80 text-cyan-300 border border-blue-700/60 mb-2">
              <Zap className="w-3 h-3" />
              STRUCTURED ENGAGEMENT
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
              90-Day Enterprise Intelligence Deployment
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-sans">
              A comprehensive 90-day engagement delivering dedicated workspace configuration, custom criteria weighting, continuous commercial research, and structured opportunity queueing.
            </p>
          </div>

          <button
            onClick={onRequestDeployment}
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/50 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] shrink-0 cursor-pointer"
          >
            <span>Request Enterprise Deployment</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Two-Column Architecture: 3D Flow Diagram (Left) & Configuration Vectors (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 6-Stage 3D Flow Diagram */}
          <div className="lg:col-span-6 glass-panel-glow rounded-2xl p-6 sm:p-8 border border-blue-500/40">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-blue-900/60 text-xs font-mono">
              <span className="text-slate-300 font-bold uppercase tracking-wider">
                Enterprise Deployment Topology
              </span>
              <span className="text-cyan-400">Deterministic Flow</span>
            </div>

            <div className="space-y-2 relative">
              {deploymentArchitecture.map((stage, idx) => {
                const Icon = stage.icon;
                const isLast = idx === deploymentArchitecture.length - 1;
                return (
                  <div key={stage.stage} className="relative">
                    <div className="p-3.5 rounded-xl bg-blue-950/70 border border-blue-800/50 hover:border-cyan-400/60 transition-all flex items-center gap-3.5">
                      <div className="p-2 rounded-lg bg-blue-900/50 text-cyan-300 border border-blue-700/50 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs font-mono font-bold text-white tracking-wider truncate">
                            0{idx + 1} — {stage.stage}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 truncate font-sans">
                          {stage.role}
                        </p>
                      </div>
                    </div>

                    {!isLast && (
                      <div className="flex justify-center my-1 text-blue-500/70">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-3 border-t border-blue-900/50 text-[11px] font-mono text-slate-400 text-center">
              Continuous feedback calibration throughout the 90-day deployment
            </div>
          </div>

          {/* Right Column: 8 Configuration Vectors */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                Configured Around Your Specific Organization
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed font-sans">
                AODS is not a one-size-fits-all database. We establish dedicated configuration parameters reflecting your precise market dynamics:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {configurationVectors.map((vec, i) => (
                <div 
                  key={i}
                  className="p-3.5 rounded-xl bg-[#061026]/90 border border-blue-950/90 hover:border-blue-700/60 transition-all"
                >
                  <div className="text-xs font-mono font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {vec.label}
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                    {vec.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/40 text-[11px] font-mono text-slate-400">
              Note: AODS delivers research, prioritization, and decision-support infrastructure. Business outcomes depend on organizational execution.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
