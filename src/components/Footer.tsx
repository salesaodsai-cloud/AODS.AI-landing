/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onContact }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#02050e] border-t border-blue-950/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-blue-950/60">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="#" 
              onClick={handleLogoClick}
              className="inline-flex items-center gap-3 group focus:outline-none cursor-pointer"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-950 border border-blue-600/50 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white font-sans tracking-wide">
                AODS<span className="text-blue-400">.AI</span>
              </span>
            </a>

            <p className="text-sm font-mono text-cyan-400 font-semibold tracking-wider uppercase">
              Commercial Intelligence Infrastructure
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md font-sans">
              AODS Intelligence researches, analyzes, and prioritizes commercial opportunities so organizations operating where timing and information matter can make high-conviction decisions.
            </p>
          </div>

          {/* Quick Navigation Links (7 Cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {/* Column 1: Core Navigation */}
            <div>
              <div className="text-xs font-mono font-bold uppercase text-white tracking-wider mb-3">
                Infrastructure
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a 
                    href="#intelligence" 
                    onClick={(e) => handleScrollTo(e, 'intelligence')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    Intelligence
                  </a>
                </li>
                <li>
                  <a 
                    href="#solutions" 
                    onClick={(e) => handleScrollTo(e, 'solutions')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a 
                    href="#enterprise" 
                    onClick={(e) => handleScrollTo(e, 'enterprise')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    Enterprise
                  </a>
                </li>
                <li>
                  <a 
                    href="#platform" 
                    onClick={(e) => handleScrollTo(e, 'platform')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    Platform
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Commercial */}
            <div>
              <div className="text-xs font-mono font-bold uppercase text-white tracking-wider mb-3">
                Deployments
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a 
                    href="#pricing" 
                    onClick={(e) => handleScrollTo(e, 'pricing')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href="#how-it-works" 
                    onClick={(e) => handleScrollTo(e, 'how-it-works')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#security" 
                    onClick={(e) => handleScrollTo(e, 'security')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    Security Principles
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq" 
                    onClick={(e) => handleScrollTo(e, 'faq')}
                    className="hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Governance & Contact */}
            <div>
              <div className="text-xs font-mono font-bold uppercase text-white tracking-wider mb-3">
                Governance
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <button 
                    onClick={onContact} 
                    className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={onOpenPrivacy} 
                    className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                  >
                    Privacy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={onOpenTerms} 
                    className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                  >
                    Terms
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Legal Notice & Demonstration Disclosure */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} AODS.AI (AODS Intelligence). All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Demonstration data shown for interface illustration purposes.
          </div>
        </div>

      </div>
    </footer>
  );
};
