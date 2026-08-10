/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface DemoOpportunity {
  id: string;
  companyName: string;
  industry: string;
  marketSegment: string;
  score: number; // e.g. 87
  priority: 'HIGH' | 'MEDIUM' | 'ELEVATED';
  signalConfidence: number; // e.g. 94%
  primarySignal: string;
  context: string;
  recommendedAction: string;
  decisionMakersIdentified: number;
  lastUpdated: string;
  metrics: {
    growthVelocity: string;
    procurementIntent: string;
    orgFitIndex: string;
    headcountDelta: string;
  };
}

export interface WorkflowStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  technicalDetails: string[];
  outputArtifact: string;
}

export interface Capability {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  iconName: string;
  tag: string;
}

export interface AudienceCard {
  id: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  examples: string[];
  features: string[];
  sampleMetric: {
    label: string;
    value: string;
    context: string;
  };
  ctaText: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  term?: string;
  positioning: string;
  badge?: string;
  isProminent?: boolean;
  features: string[];
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface SecurityPrinciple {
  title: string;
  description: string;
  technicalNote: string;
  iconName: string;
}

export interface BrainNode {
  id: string;
  name: string;
  category: 'input' | 'core' | 'output';
  description: string;
  sampleSignals: string[];
  activeStats: string;
}

export type CompanyTypeOption = 'Commercial Real Estate' | 'Agency' | 'MSP' | 'Other';

export interface IntelligenceRequestForm {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  companyWebsite: string;
  companyType: CompanyTypeOption | '';
  objective: string;
  selectedPackage?: string;
}
