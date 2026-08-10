/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { WhatAodsDoes } from './components/WhatAodsDoes';
import { AodsBrain } from './components/AodsBrain';
import { IntelligenceCapabilities } from './components/IntelligenceCapabilities';
import { WhoAodsIsBuiltFor } from './components/WhoAodsIsBuiltFor';
import { EnterpriseDeployment } from './components/EnterpriseDeployment';
import { PlatformShowcase } from './components/PlatformShowcase';
import { PricingSection } from './components/PricingSection';
import { HowItWorks } from './components/HowItWorks';
import { SecuritySection } from './components/SecuritySection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { RequestIntelligenceModal } from './components/RequestIntelligenceModal';
import { LegalModals } from './components/LegalModals';
import { PricingPlan } from './types';

export default function App() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<PricingPlan | null>(null);
  const [selectedCategoryForModal, setSelectedCategoryForModal] = useState<string | null>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  const handleOpenRequestModal = (plan?: PricingPlan, category?: string) => {
    setSelectedPlanForModal(plan || null);
    setSelectedCategoryForModal(category || null);
    setIsRequestModalOpen(true);
  };

  const handleCloseRequestModal = () => {
    setIsRequestModalOpen(false);
    setSelectedPlanForModal(null);
    setSelectedCategoryForModal(null);
  };

  const handleExplorePlatform = () => {
    const platformEl = document.getElementById('platform');
    if (platformEl) {
      platformEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="aods-app-root" className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-blue-600/40 selection:text-blue-200">
      
      {/* Top Fixed Institutional Navbar */}
      <Navbar 
        onRequestAnalysis={() => handleOpenRequestModal()} 
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero 
          onRequestAnalysis={() => handleOpenRequestModal()} 
          onExplorePlatform={handleExplorePlatform}
        />

        {/* 2. The Problem Section */}
        <ProblemSection />

        {/* 3. What AODS Does Section */}
        <WhatAodsDoes />

        {/* 4. The AODS Brain Section */}
        <AodsBrain />

        {/* 5. Intelligence Capabilities Suite */}
        <IntelligenceCapabilities />

        {/* 6. Who AODS Is Built For Section */}
        <WhoAodsIsBuiltFor 
          onSelectAudience={(cat) => handleOpenRequestModal(undefined, cat)}
        />

        {/* 7. Enterprise Deployment Section */}
        <EnterpriseDeployment 
          onRequestDeployment={() => handleOpenRequestModal()}
        />

        {/* 8. Platform Command Center Showcase */}
        <PlatformShowcase 
          onRequestDemo={() => handleOpenRequestModal()}
        />

        {/* 9. Pricing Packages Section */}
        <PricingSection 
          onSelectPlan={(plan) => handleOpenRequestModal(plan)}
        />

        {/* 10. How It Works Operational Timeline */}
        <HowItWorks />

        {/* 11. Security & Trust Principles */}
        <SecuritySection />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Final Call to Action */}
        <FinalCta 
          onRequestAnalysis={() => handleOpenRequestModal()}
        />
      </main>

      {/* Institutional Footer */}
      <Footer 
        onOpenPrivacy={() => setActiveLegalModal('privacy')}
        onOpenTerms={() => setActiveLegalModal('terms')}
        onContact={() => setActiveLegalModal('contact')}
      />

      {/* Interactive Request Intelligence & Deployment Modal */}
      <RequestIntelligenceModal 
        isOpen={isRequestModalOpen}
        onClose={handleCloseRequestModal}
        initialPlan={selectedPlanForModal}
        initialCategory={selectedCategoryForModal}
      />

      {/* Legal & Governance Modals (Privacy, Terms, Contact) */}
      <LegalModals 
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

    </div>
  );
}
