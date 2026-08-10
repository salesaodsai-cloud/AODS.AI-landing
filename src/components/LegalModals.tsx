/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Shield, FileText, Mail, Building, Cpu, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#020614]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-2xl glass-panel-glow border border-blue-500/50 shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-blue-950 text-slate-400 hover:text-white hover:bg-blue-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
              <Shield className="w-4 h-4" />
              <span>DATA GOVERNANCE & PRIVACY</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-sans">
              Privacy & Intelligence Governance
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <p>
                AODS Intelligence operates on strict principles of institutional data minimization, tenant isolation, and responsible public commercial record synthesis.
              </p>
              <h4 className="text-white font-bold text-sm">1. Commercial Information Collection</h4>
              <p>
                AODS aggregates and normalizes structured corporate filings, regulatory disclosures, commercial property registries, and public commercial announcements. We do not sell or monetize personal private data.
              </p>
              <h4 className="text-white font-bold text-sm">2. Tenant Isolation & Confidential Criteria</h4>
              <p>
                All customer-configured parameters—including Ideal Customer Profile weighting matrices, custom exclusion lists, and saved opportunity queues—are strictly partitioned in dedicated tenant workspaces.
              </p>
              <h4 className="text-white font-bold text-sm">3. Transparent Data Sourcing</h4>
              <p>
                Where applicable, commercial signals provide transparent attribution to the underlying public registry or disclosure filing to support rigorous due diligence.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
              <FileText className="w-4 h-4" />
              <span>TERMS OF ENGAGEMENT</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-sans">
              Terms of Service & Deployment
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <p>
                Welcome to AODS.AI. These terms govern the use of our commercial intelligence platform and deployment packages.
              </p>
              <h4 className="text-white font-bold text-sm">1. Nature of Service</h4>
              <p>
                AODS provides research, market analysis, opportunity prioritization, and decision-support infrastructure. AODS does not guarantee specific commercial revenues, contract awards, or closed transactions. Outcomes depend entirely on customer organizational execution.
              </p>
              <h4 className="text-white font-bold text-sm">2. 90-Day Deployment Packages</h4>
              <p>
                Deployment packages represent structured starting scopes. Detailed operational milestones and custom integration deliverables are configured at the initiation of the 90-day engagement.
              </p>
              <h4 className="text-white font-bold text-sm">3. Demonstration Disclaimer</h4>
              <p>
                Interface mockups and sample dossiers marked as "DEMO" represent simulated test datasets designed for functional illustration.
              </p>
            </div>
          </div>
        )}

        {type === 'contact' && (
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
              <Mail className="w-4 h-4" />
              <span>INSTITUTIONAL CONTACT</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-sans">
              Connect With AODS Intelligence
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <p>
                For enterprise deployment inquiries, institutional demonstrations, or specialized market configurations:
              </p>
              <div className="p-4 rounded-xl bg-blue-950/70 border border-blue-800/60 space-y-2 font-mono text-xs">
                <div>Deployment Advisory: <span className="text-cyan-300">deployments@aods.ai</span></div>
                <div>Enterprise Operations: <span className="text-cyan-300">intelligence@aods.ai</span></div>
                <div>Global Inquiries: <span className="text-cyan-300">inquiry@aods.ai</span></div>
              </div>
              <p className="text-xs text-slate-400">
                Our intelligence operations team typically responds within 1 business day.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-blue-900/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-900/80 hover:bg-blue-800 text-white text-xs font-mono cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
