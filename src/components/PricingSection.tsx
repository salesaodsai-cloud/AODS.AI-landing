/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ChevronRight, Zap, Shield, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/intelligenceData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section 
      id="pricing" 
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-700/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40 text-cyan-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT COMMERCIAL PACKAGES</span>
          </div>

          <h2 
            id="pricing-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            Choose Your Level of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Intelligence.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Structured intelligence packages designed for every operational scale—from self-service commercial research to custom 90-day enterprise deployments.
          </p>
        </div>

        {/* Exactly 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 p-7 sm:p-8 relative ${
                  plan.isProminent
                    ? 'bg-gradient-to-b from-[#09173d] via-[#061230] to-[#040c22] border-2 border-blue-500/70 shadow-[0_0_35px_rgba(37,99,235,0.3)] lg:-translate-y-2'
                    : 'bg-[#061026]/80 border border-blue-950/90 hover:border-blue-700/60'
                }`}
              >
                {/* Top Prominent Badge */}
                {plan.badge && (
                  <div className="mb-4">
                    <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded uppercase ${
                      plan.isProminent
                        ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-700/70 shadow-sm'
                        : 'bg-blue-950 text-blue-300 border border-blue-800/50'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-white mb-2 font-sans">
                    {plan.name}
                  </h3>

                  {/* Positioning text */}
                  <p className="text-xs text-slate-300 mb-6 font-sans">
                    {plan.positioning}
                  </p>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-blue-900/60">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
                        {plan.price}
                      </span>
                      {plan.term && (
                        <span className="text-xs font-mono text-cyan-400 font-semibold">
                          / {plan.term}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                      Included Capabilities
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Action Button */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      plan.isProminent
                        ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white border border-cyan-400/50 shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                        : 'bg-blue-950 hover:bg-blue-900/70 text-slate-200 hover:text-white border border-blue-800/60'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Required Small Disclaimer */}
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 font-mono">
            Pricing represents standard starting packages. Enterprise requirements may vary based on scope.
          </p>
        </div>

      </div>
    </section>
  );
};
