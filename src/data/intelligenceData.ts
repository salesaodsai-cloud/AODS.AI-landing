/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  DemoOpportunity,
  WorkflowStep,
  Capability,
  AudienceCard,
  PricingPlan,
  FaqItem,
  SecurityPrinciple,
  BrainNode
} from '../types';

export const DEMO_OPPORTUNITIES: DemoOpportunity[] = [
  {
    id: 'DEMO-OPT-8941',
    companyName: 'Apex Industrial Logistics Corp',
    industry: 'Commercial Real Estate / Supply Chain',
    marketSegment: 'Tier-1 Inland Port Hubs',
    score: 87,
    priority: 'HIGH',
    signalConfidence: 94,
    primarySignal: 'Multi-Market Expansion & Capital Allocation ($120M Facility Program)',
    context: 'Recent commercial filing indicates 450,000 sq ft logistics consolidation in North Texas corridor with active RFP phase commencing Q4.',
    recommendedAction: 'Initiate targeted executive outreach to VP Real Estate & Regional Asset Manager before public bid tender.',
    decisionMakersIdentified: 4,
    lastUpdated: '14 mins ago',
    metrics: {
      growthVelocity: '+38% YoY',
      procurementIntent: '94% High',
      orgFitIndex: '91/100',
      headcountDelta: '+125 FTE',
    }
  },
  {
    id: 'DEMO-OPT-7720',
    companyName: 'Vanguard Health Systems & BioPark',
    industry: 'Healthcare Infrastructure & Life Sciences',
    marketSegment: 'Mid-Atlantic Bio Corridor',
    score: 89,
    priority: 'HIGH',
    signalConfidence: 92,
    primarySignal: 'Laboratory Infrastructure Modernization & Digital Compliance Shift',
    context: 'Capital budget approval for specialized laboratory facility upgrades across 3 research campuses. New leadership appointed in facilities & tech integration.',
    recommendedAction: 'Engage procurement committee with specialized infrastructure compliance brief.',
    decisionMakersIdentified: 6,
    lastUpdated: '32 mins ago',
    metrics: {
      growthVelocity: '+24% YoY',
      procurementIntent: '89% High',
      orgFitIndex: '88/100',
      headcountDelta: '+80 FTE',
    }
  },
  {
    id: 'DEMO-OPT-6432',
    companyName: 'Meridian Capital Partners / CRE Trust',
    industry: 'Institutional Asset Management',
    marketSegment: 'Sunbelt Multi-Family & Mixed Use',
    score: 82,
    priority: 'ELEVATED',
    signalConfidence: 88,
    primarySignal: 'Distressed Asset Acquisition & Refurbishment Mandate',
    context: 'Acquired 1,200 residential units across Southeast markets; seeking technology partner for operational stabilization and energy intelligence.',
    recommendedAction: 'Present commercial efficiency benchmark deck to Managing Director of Portfolio Ops.',
    decisionMakersIdentified: 3,
    lastUpdated: '1 hour ago',
    metrics: {
      growthVelocity: '+19% YoY',
      procurementIntent: '82% Elevated',
      orgFitIndex: '85/100',
      headcountDelta: '+45 FTE',
    }
  },
  {
    id: 'DEMO-OPT-5109',
    companyName: 'Stratton Cloud Network Services',
    industry: 'B2B IT & Managed Infrastructure',
    marketSegment: 'National Enterprise MSP',
    score: 79,
    priority: 'ELEVATED',
    signalConfidence: 86,
    primarySignal: 'Cyber Resilience & Cloud Migration Mandate',
    context: 'Executive mandate triggered by regulatory change in financial services client base; actively vetting zero-trust orchestration vendors.',
    recommendedAction: 'Schedule technical discovery session with Chief Information Security Officer.',
    decisionMakersIdentified: 5,
    lastUpdated: '3 hours ago',
    metrics: {
      growthVelocity: '+15% YoY',
      procurementIntent: '80% Elevated',
      orgFitIndex: '82/100',
      headcountDelta: '+30 FTE',
    }
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'RESEARCH',
    tagline: 'Collect and organize relevant information.',
    description: 'Systematically ingest, normalize, and index high-signal commercial indicators from market filings, organizational movements, digital footprint shifts, and public commercial disclosures.',
    technicalDetails: [
      'Multi-source ingestion & entity resolution',
      'Automated deduplication across registries',
      'Unstructured document structuring & entity mapping'
    ],
    outputArtifact: 'Normalized Commercial Knowledge Graph'
  },
  {
    step: '02',
    title: 'ANALYZE',
    tagline: 'Identify patterns, signals, and commercial context.',
    description: 'Correlate disparate data points across timeline events to uncover underlying intent, organizational capacity, hiring spikes, and strategic inflection moments.',
    technicalDetails: [
      'Multi-vector pattern correlation engine',
      'Temporal signal velocity tracking',
      'Commercial context disambiguation'
    ],
    outputArtifact: 'Validated Commercial Signals'
  },
  {
    step: '03',
    title: 'SCORE',
    tagline: 'Evaluate opportunities according to configurable criteria.',
    description: 'Apply deterministic and organizational-specific weighting models to rank every emerging account against your specific commercial threshold and ICP fit.',
    technicalDetails: [
      'Configurable multi-factor weighting algorithm',
      'Signal confidence calculation & decay modeling',
      'Objective criteria matching matrix'
    ],
    outputArtifact: 'Opportunity Confidence Score (0-100)'
  },
  {
    step: '04',
    title: 'PRIORITIZE',
    tagline: 'Surface the opportunities most relevant to the organization.',
    description: 'Filter through market noise to present only the highest-conviction accounts that represent immediate commercial readiness, saving hundreds of manual research hours.',
    technicalDetails: [
      'Dynamic tier classification (High / Elevated / Normal)',
      'Signal-to-noise ratio optimization',
      'Urgency and commercial timing index'
    ],
    outputArtifact: 'Ranked Commercial Opportunity Queue'
  },
  {
    step: '05',
    title: 'ACT',
    tagline: 'Provide intelligence and recommended next actions.',
    description: 'Deliver structured intelligence briefs with key decision-makers, actionable trigger points, and tactical next steps tailored to your sales and advisory workflows.',
    technicalDetails: [
      'Executive-ready synthesis brief generation',
      'Verified organizational contact mapping',
      'Contextual engagement recommendation triggers'
    ],
    outputArtifact: 'Intelligence Action Dossier'
  }
];

export const BRAIN_NODES: BrainNode[] = [
  {
    id: 'node-company',
    name: 'COMPANY INTELLIGENCE',
    category: 'input',
    description: 'Deep organizational profiling: corporate lineage, revenue velocity, headcount trajectories, footprint expansions, and operational structures.',
    sampleSignals: ['Legal structure mapping', 'Subsidiary tracking', 'Executive changes', 'Operational footprint'],
    activeStats: '2.4M Entities Indexed'
  },
  {
    id: 'node-market',
    name: 'MARKET SIGNALS',
    category: 'input',
    description: 'Continuous scanning of sector dynamics, regional regulatory changes, zoning approvals, and capital market trends.',
    sampleSignals: ['Zoning filings', 'Sector growth indexes', 'Sub-market vacancy rates', 'Procurement cycles'],
    activeStats: '14,800 Active Feeds'
  },
  {
    id: 'node-opportunity',
    name: 'OPPORTUNITY DATA',
    category: 'input',
    description: 'Tracking commercial catalysts such as commercial RFP releases, real estate lease expirations, capital raises, and consolidation triggers.',
    sampleSignals: ['Lease expiration windows', 'CapEx allocations', 'RFP disclosures', 'M&A consolidations'],
    activeStats: '98,000 Tracked Catalysts'
  },
  {
    id: 'node-decision',
    name: 'DECISION-MAKER INTELLIGENCE',
    category: 'input',
    description: 'Mapping organizational influence chains, committee structures, and verified departmental leadership where public data is reliable.',
    sampleSignals: ['Role hierarchy trees', 'Departmental tenure', 'Key stakeholder reporting lines'],
    activeStats: 'Structured Role Trees'
  },
  {
    id: 'node-context',
    name: 'BUSINESS CONTEXT',
    category: 'input',
    description: 'Synthesizing historical operational behavior, prior partner selections, and regional operating constraints.',
    sampleSignals: ['Historical vendor shifts', 'Budget cycle seasonality', 'Regional operating policies'],
    activeStats: 'Context Disambiguation Engine'
  },
  {
    id: 'node-historical',
    name: 'HISTORICAL SIGNALS',
    category: 'input',
    description: 'Longitudinal analysis of past commercial transitions to calibrate predictive signal reliability and event timelines.',
    sampleSignals: ['10-year transition logs', 'Procurement cycle durations', 'Signal lead-time variance'],
    activeStats: 'Calibrated Signal Decay'
  },
  {
    id: 'node-criteria',
    name: 'CUSTOM CRITERIA',
    category: 'input',
    description: 'Organization-specific scoring rules, geographical filters, negative exclusions, and custom ICP parameters.',
    sampleSignals: ['Geographic bounding boxes', 'Exclusion taxonomies', 'Custom score weighting curves'],
    activeStats: 'Fully Configurable Rules'
  }
];

export const CAPABILITIES: Capability[] = [
  {
    number: '01',
    title: 'Company Intelligence',
    description: 'Research organizations and structure relevant information.',
    capabilities: [
      'Comprehensive organizational profiling',
      'Entity hierarchy & subsidiary mapping',
      'Historical growth & headcount trajectory analysis',
      'Structured operational footprint tracking'
    ],
    iconName: 'Building2',
    tag: 'ORGANIZATIONAL RESEARCH'
  },
  {
    number: '02',
    title: 'Market Intelligence',
    description: 'Understand markets, segments, and commercial environments.',
    capabilities: [
      'Regional & sub-market trend analysis',
      'Macroeconomic commercial indicator synthesis',
      'Sector-specific competitive landscapes',
      'Regulatory & commercial policy tracking'
    ],
    iconName: 'TrendingUp',
    tag: 'MARKET DYNAMICS'
  },
  {
    number: '03',
    title: 'Opportunity Intelligence',
    description: 'Identify and prioritize potentially valuable opportunities.',
    capabilities: [
      'Commercial catalyst & trigger detection',
      'Deterministic opportunity scoring (0-100)',
      'High-conviction account queueing',
      'Commercial readiness & timing estimation'
    ],
    iconName: 'Target',
    tag: 'OPPORTUNITY SCORING'
  },
  {
    number: '04',
    title: 'Signal Detection',
    description: 'Surface relevant business signals and changes.',
    capabilities: [
      'Real-time anomaly & transition alerts',
      'CapEx expenditure & hiring surges',
      'Lease expirations & footprint changes',
      'Executive transition & organizational restructuring'
    ],
    iconName: 'Activity',
    tag: 'SIGNAL MONITORING'
  },
  {
    number: '05',
    title: 'Decision-Maker Intelligence',
    description: 'Identify relevant roles and organizational contacts where reliable data is available.',
    capabilities: [
      'Reporting hierarchy & committee mapping',
      'Role-based stakeholder attribution',
      'Verified organizational routing paths',
      'Ethical & compliant contact structuring'
    ],
    iconName: 'Users',
    tag: 'STAKEHOLDER MAPPING'
  },
  {
    number: '06',
    title: 'Custom Intelligence',
    description: 'Configure analysis around the organization\'s specific requirements.',
    capabilities: [
      'Custom ICP weighting matrices',
      'Bespoke geographic & industry bounding',
      'Dedicated research workflow integration',
      'Tailored export formats & reporting cadence'
    ],
    iconName: 'Sliders',
    tag: 'TAILORED CONFIGURATION'
  }
];

export const AUDIENCE_CARDS: AudienceCard[] = [
  {
    id: 'cre',
    category: 'INDUSTRY VERTICAL',
    title: 'COMMERCIAL REAL ESTATE',
    headline: 'Research markets, organizations, opportunities, and signals across complex commercial environments.',
    description: 'Designed for institutional CRE professionals navigating complex multi-property landscapes, tenant expansion cycles, and capital deployment windows.',
    examples: [
      'Investment firms',
      'Developers',
      'Brokerages',
      'Property organizations',
      'Asset managers'
    ],
    features: [
      'Tenant lease expiration tracking & expansion trigger detection',
      'Sub-market vacancy velocity & absorption modeling',
      'Asset acquisition & distress indicators across key metros',
      'Institutional ownership graph mapping'
    ],
    sampleMetric: {
      label: 'DEMO SIGNAL DETECTED',
      value: '450K sq ft Expansion Program',
      context: 'Tier-1 Industrial Logistics Hub • High Readiness'
    },
    ctaText: 'Explore CRE Intelligence'
  },
  {
    id: 'agencies',
    category: 'COMMERCIAL ADVISORY',
    title: 'AGENCIES',
    headline: 'Identify organizations that match your ideal client profile and prioritize opportunities more intelligently.',
    description: 'Equip business development and strategy teams with continuous signals on brand repositioning, technology stack migrations, and leadership changes.',
    examples: [
      'Marketing agencies',
      'Technology agencies',
      'Consulting firms',
      'Specialized B2B agencies'
    ],
    features: [
      'CMO / CTO leadership transitions & mandate shifts',
      'Brand refresh & product expansion signals',
      'RFP timing indicators & RFP schedule estimation',
      'Budget re-allocation & funding milestone alerts'
    ],
    sampleMetric: {
      label: 'DEMO MATCH CONFIDENCE',
      value: '96% ICP Alignment',
      context: 'FinTech Growth Segment • Rebranding Initiative'
    },
    ctaText: 'Explore Agency Intelligence'
  },
  {
    id: 'msps',
    category: 'GROWTH INFRASTRUCTURE',
    title: 'MSPs & SMBs',
    headline: 'Access AODS intelligence through a self-service platform designed for faster commercial research and prioritization.',
    description: 'Empower lean commercial teams with immediate access to structured company research, opportunity ranking, and actionable commercial triggers.',
    examples: [
      'Managed Service Providers (MSPs)',
      'B2B Technology Resellers',
      'Specialized Regional Consultancies',
      'Mid-Market Service Firms'
    ],
    features: [
      'Immediate self-service company lookup & score evaluation',
      'IT infrastructure refresh & cybersecurity triggers',
      'Automated weekly opportunity queue reports',
      'Intuitive filter-driven market discovery'
    ],
    sampleMetric: {
      label: 'DEMO RESEARCH SPEED',
      value: '8.4 hrs Saved / Week',
      context: 'Self-Service Research & Automated Prioritization'
    },
    ctaText: 'Explore AODS Intelligence'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-app',
    name: 'AODS INTELLIGENCE APP',
    price: '$500',
    term: 'per month',
    positioning: 'Self-service intelligence platform.',
    badge: 'SELF-SERVICE PLATFORM',
    isProminent: false,
    features: [
      'Intelligence workspace access',
      'Company research & profiling',
      'Opportunity analysis & discovery',
      'Basic deterministic scoring',
      'Standard summary reports & exports',
      'Self-service web platform access',
      'Standard knowledge base & updates'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'plan-deployment',
    name: 'AODS INTELLIGENCE DEPLOYMENT',
    price: '$3,000',
    term: '90-day deployment',
    positioning: 'Configured intelligence workflow for growing commercial teams.',
    badge: 'RECOMMENDED FOR ORGANIZATIONS',
    isProminent: true,
    features: [
      'Configured intelligence workspace',
      'Target-market & geographical configuration',
      'Opportunity research & deep-dive queues',
      'Standard scoring algorithm calibration',
      'Decision-maker research where available',
      'Periodic intelligence reports & alerts',
      'Standard deployment support & onboarding',
      'Team workspace seats (up to 10 users)'
    ],
    ctaText: 'Request Deployment'
  },
  {
    id: 'plan-enterprise',
    name: 'AODS INTELLIGENCE ENTERPRISE',
    price: '$10,000',
    term: '90-day enterprise deployment',
    positioning: 'Comprehensive intelligence deployment for demanding institutions.',
    badge: 'FULL INSTITUTIONAL DEPLOYMENT',
    isProminent: false,
    features: [
      'Custom intelligence configuration & data integration',
      'Organization-specific multi-factor criteria',
      'Advanced opportunity analysis & deep dossier generation',
      'Custom executive reporting & alert webhooks',
      'Higher-touch deployment with dedicated intelligence lead',
      'Workflow configuration tailored to internal CRM/ERP',
      'Enterprise-grade support & priority request queues',
      'Continuous intelligence operation throughout the deployment'
    ],
    ctaText: 'Request Enterprise Intelligence'
  }
];

export const HOW_IT_WORKS_TIMELINE = [
  {
    step: '01',
    title: 'Define the objective',
    summary: 'Establish target commercial goals, priority sectors, and qualification criteria.',
    description: 'We collaborate with your leadership to map the exact commercial outcomes you need to achieve—whether that is uncovering tenant lease cycles, identifying high-growth enterprise buyers, or tracking CapEx signals.'
  },
  {
    step: '02',
    title: 'Configure intelligence criteria',
    summary: 'Calibrate scoring parameters, geographic boundaries, and signal thresholds.',
    description: 'The platform is tuned to your organization\'s unique ICP. We establish deterministic weighting rules, exclusions, and priority thresholds to ensure high signal fidelity.'
  },
  {
    step: '03',
    title: 'Analyze relevant information',
    summary: 'Continuous ingestion and correlation across fragmented commercial data feeds.',
    description: 'The AODS Intelligence Engine ingests and processes multi-source organizational and market data, resolving entities, tracking changes, and removing noise.'
  },
  {
    step: '04',
    title: 'Identify and prioritize opportunities',
    summary: 'Score emerging catalysts and rank accounts by commercial readiness.',
    description: 'Raw indicators are scored and ranked into an actionable queue. Accounts exhibiting high signal confidence and timing alignment are surfaced to the top.'
  },
  {
    step: '05',
    title: 'Deliver intelligence',
    summary: 'Provide actionable dossiers, decision-maker maps, and recommended actions.',
    description: 'Your team receives structured, executive-ready intelligence briefs with clear context, verified contacts where available, and tactical engagement recommendations.'
  },
  {
    step: '06',
    title: 'Refine based on organizational needs',
    summary: 'Continuously calibrate criteria based on real-world team feedback and changing market dynamics.',
    description: 'Intelligence is never static. We review scoring performance, adapt to new market conditions, and refine criteria parameters over the lifecycle of your deployment.'
  }
];

export const SECURITY_PRINCIPLES: SecurityPrinciple[] = [
  {
    title: 'Controlled Access',
    description: 'Role-based access governance, strict session management, and granular permission controls at every tier.',
    technicalNote: 'Multi-factor authentication, enterprise SSO integration, and role segregation.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Data Minimization',
    description: 'We collect and process strictly the commercial intelligence required for your configured objectives, with zero unnecessary data harvesting.',
    technicalNote: 'Purpose-bound data pipelines with automated data retention policies.',
    iconName: 'Database'
  },
  {
    title: 'Transparent Intelligence Sources',
    description: 'Clear provenance on commercial signals and disclosures where applicable, allowing your team to verify the underlying rationale.',
    technicalNote: 'Auditable citation trails for all structured commercial filings and public records.',
    iconName: 'FileSearch'
  },
  {
    title: 'Configurable Workflows',
    description: 'Tenant isolation and dedicated configuration boundaries ensure your proprietary scoring criteria remain strictly confidential.',
    technicalNote: 'Isolated schema environments and client-specific rule partition.',
    iconName: 'Lock'
  },
  {
    title: 'Enterprise-Oriented Architecture',
    description: 'Engineered for resilience, deterministic execution, high uptime, and enterprise reliability without external dependencies.',
    technicalNote: 'Zero-downtime infrastructure architecture with redundant processing nodes.',
    iconName: 'Server'
  },
  {
    title: 'Responsible Handling of Information',
    description: 'Rigorous ethical and legal compliance standards governing commercial research, public record indexing, and contact structuring.',
    technicalNote: 'Strict adherence to public registry standards and commercial data guidelines.',
    iconName: 'Scale'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is AODS Intelligence?',
    answer: 'AODS Intelligence is an enterprise-grade commercial intelligence platform. It systematically researches markets, analyzes fragmented organizational data, identifies commercial catalysts, and prioritizes actionable opportunities so commercial and advisory teams know what matters, why it matters, and where to act next.'
  },
  {
    id: 'faq-2',
    question: 'Who is AODS built for?',
    answer: 'AODS is built for organizations where better commercial intelligence has direct economic value. Primary users include Commercial Real Estate firms (developers, brokerages, investment managers), B2B & specialized agencies, Managed Service Providers (MSPs), SMBs, and enterprise business development teams.'
  },
  {
    id: 'faq-3',
    question: 'What is included in the 90-day deployment?',
    answer: 'The standard 90-day deployment ($3,000) includes a fully configured intelligence workspace, target-market and geographical parameter setup, calibrated opportunity scoring, decision-maker research where reliable data exists, periodic intelligence reports, and dedicated onboarding support for up to 10 team seats.'
  },
  {
    id: 'faq-4',
    question: 'How is the Enterprise package different?',
    answer: 'The Enterprise package ($10,000 / 90-day deployment) provides a comprehensive, high-touch deployment. It includes custom multi-factor scoring matrices, custom data integrations, bespoke executive reporting formats, dedicated workflow alignment with your internal systems, continuous operational calibration, and dedicated intelligence leadership throughout the 90-day engagement.'
  },
  {
    id: 'faq-5',
    question: 'Does AODS guarantee revenue or leads?',
    answer: 'No. AODS provides intelligence, research, analysis, prioritization, and decision-support capabilities. Business outcomes depend on how customers use that intelligence.'
  },
  {
    id: 'faq-6',
    question: 'Can AODS be configured around our organization?',
    answer: 'Enterprise deployments can be configured around defined markets, criteria, workflows, and intelligence requirements.'
  },
  {
    id: 'faq-7',
    question: 'Can we start with a smaller deployment?',
    answer: 'Yes. AODS offers a self-service option and a standard deployment before moving to Enterprise.'
  }
];
