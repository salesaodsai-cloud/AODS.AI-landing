/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight, Cpu, Sparkles, ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onRequestAnalysis: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onRequestAnalysis }) => {
  return (
    <section 
      id="final-cta" 
      className="relative py-28 sm:py-36 bg-[#030712] overflow-hidden"
    >
      {/* Background Deep Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-blue-700/15 via-blue-600/10 to-cyan-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative rounded-3xl glass-panel-glow border-2 border-blue-500/50 p-8 sm:p-14 text-center overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.25)]">
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-500/20 blur-2xl rounded-full pointer-events-none" />

          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-blue-700/60 text-cyan-300 text-xs font-mono mb-6 shadow-inner">
            <Cpu className="w-3.5 h-3.5" />
            <span>COMMERCIAL INTELLIGENCE IN ACTION</span>
          </div>

          {/* Headline */}
          <h2 
            id="final-cta-headline"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans max-w-3xl mx-auto"
          >
            Know What Deserves{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-400">
              Your Attention.
            </span>
          </h2>

          {/* Subheadline */}
          <p className="mt-5 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            See what AODS Intelligence can uncover across your market.
          </p>

          {/* Primary Action Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="final-cta-request-btn"
              onClick={onRequestAnalysis}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 border border-cyan-400/50 shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer"
            >
              <span>Request an Intelligence Analysis</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Secondary Text */}
          <div className="mt-6 text-xs sm:text-sm font-mono text-slate-400">
            Enterprise deployments available.
          </div>

        </div>

      </div>
    </section>
  );
};
