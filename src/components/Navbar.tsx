/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Cpu } from 'lucide-react';

interface NavbarProps {
  onRequestAnalysis: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestAnalysis }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Intelligence', href: '#intelligence', sectionId: 'intelligence' },
    { label: 'Solutions', href: '#solutions', sectionId: 'solutions' },
    { label: 'Enterprise', href: '#enterprise', sectionId: 'enterprise' },
    { label: 'Platform', href: '#platform', sectionId: 'platform' },
    { label: 'Pricing', href: '#pricing', sectionId: 'pricing' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Navbar height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-blue-950/70 shadow-2xl shadow-blue-950/40 py-3.5'
          : 'bg-gradient-to-b from-[#030712]/95 via-[#030712]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo & Wordmark */}
        <a
          href="#"
          onClick={handleLogoClick}
          id="nav-brand-logo"
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 cursor-pointer"
        >
          {/* Logo Mark: Hexagonal Institutional Node */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-900/80 via-slate-900 to-black border border-blue-500/40 group-hover:border-blue-400/80 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.25)]">
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg group-hover:bg-blue-600/20 transition-all duration-300" />
            <Cpu className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 transition-colors" />
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-[#030712]" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold tracking-wider text-lg sm:text-xl text-white font-sans">
                AODS<span className="text-blue-400">.AI</span>
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/40 hidden sm:inline-block tracking-widest">
                COMMERCIAL INTELLIGENCE
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider hidden sm:block">
              AODS Intelligence Infrastructure
            </span>
          </div>
        </a>

        {/* Center / Right Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.sectionId)}
              id={`nav-link-${link.label.toLowerCase()}`}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 rounded-md hover:bg-blue-950/40 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-request-intelligence-btn"
            onClick={onRequestAnalysis}
            className="relative group overflow-hidden px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 border border-blue-400/30 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request Intelligence
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-blue-950/60 border border-blue-900/40 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-[#050c1f]/95 border-b border-blue-950/80 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="block px-3 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:bg-blue-950/60 rounded-md cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-blue-950/70">
            <button
              id="mobile-request-intel-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestAnalysis();
              }}
              className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/40 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
            >
              Request Intelligence
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
