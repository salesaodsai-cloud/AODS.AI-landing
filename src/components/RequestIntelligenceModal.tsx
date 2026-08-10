/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ChevronRight, 
  Cpu, 
  Building2, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles,
  ArrowRight,
  Globe,
  Mail,
  User,
  Briefcase
} from 'lucide-react';
import { IntelligenceRequestForm, PricingPlan, CompanyTypeOption } from '../types';

interface RequestIntelligenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: PricingPlan | null;
  initialCategory?: string | null;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  workEmail?: string;
  company?: string;
  companyWebsite?: string;
  companyType?: string;
  objective?: string;
}

export const RequestIntelligenceModal: React.FC<RequestIntelligenceModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
  initialCategory,
}) => {
  const [step, setStep] = useState<'form' | 'submitted'>('form');
  
  const [formData, setFormData] = useState<IntelligenceRequestForm>({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    jobTitle: '',
    companyWebsite: '',
    companyType: '',
    objective: '',
    selectedPackage: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Populate initial category or plan when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setErrors({});
      setTouched({});

      let detectedCompanyType: CompanyTypeOption | '' = '';
      if (initialCategory) {
        if (initialCategory.toUpperCase().includes('REAL ESTATE') || initialCategory.toUpperCase().includes('CRE')) {
          detectedCompanyType = 'Commercial Real Estate';
        } else if (initialCategory.toUpperCase().includes('AGENC')) {
          detectedCompanyType = 'Agency';
        } else if (initialCategory.toUpperCase().includes('MSP') || initialCategory.toUpperCase().includes('SMB')) {
          detectedCompanyType = 'MSP';
        }
      }

      setFormData((prev) => ({
        ...prev,
        companyType: detectedCompanyType || prev.companyType,
        selectedPackage: initialPlan ? initialPlan.name : prev.selectedPackage || 'General Intelligence Analysis',
      }));
    }
  }, [isOpen, initialPlan, initialCategory]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateField = (field: keyof IntelligenceRequestForm, value: string): string | undefined => {
    switch (field) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        return undefined;
      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        return undefined;
      case 'workEmail':
        if (!value.trim()) return 'Work email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid work email address';
        return undefined;
      case 'company':
        if (!value.trim()) return 'Company name is required';
        return undefined;
      case 'companyWebsite':
        if (!value.trim()) return 'Company website is required';
        // Check for domain-like structure
        const websiteVal = value.trim().replace(/^https?:\/\//, '');
        if (!websiteVal.includes('.') || websiteVal.length < 4) {
          return 'Please enter a valid company website (e.g. company.com)';
        }
        return undefined;
      case 'companyType':
        if (!value) return 'Please select a company type';
        return undefined;
      case 'objective':
        if (!value.trim()) return 'Please describe what you would like AODS to help with';
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};

    const fnErr = validateField('firstName', formData.firstName);
    if (fnErr) newErrors.firstName = fnErr;

    const lnErr = validateField('lastName', formData.lastName);
    if (lnErr) newErrors.lastName = lnErr;

    const emailErr = validateField('workEmail', formData.workEmail);
    if (emailErr) newErrors.workEmail = emailErr;

    const compErr = validateField('company', formData.company);
    if (compErr) newErrors.company = compErr;

    const webErr = validateField('companyWebsite', formData.companyWebsite);
    if (webErr) newErrors.companyWebsite = webErr;

    const typeErr = validateField('companyType', formData.companyType);
    if (typeErr) newErrors.companyType = typeErr;

    const objErr = validateField('objective', formData.objective);
    if (objErr) newErrors.objective = objErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof IntelligenceRequestForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleBlur = (field: keyof IntelligenceRequestForm) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, (formData[field] as string) || '');
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      workEmail: true,
      company: true,
      jobTitle: true,
      companyWebsite: true,
      companyType: true,
      objective: true,
    });

    if (validateAll()) {
      setStep('submitted');
    }
  };

  const handleCloseAndReset = () => {
    setStep('form');
    setFormData({
      firstName: '',
      lastName: '',
      workEmail: '',
      company: '',
      jobTitle: '',
      companyWebsite: '',
      companyType: '',
      objective: '',
      selectedPackage: '',
    });
    setErrors({});
    setTouched({});
    onClose();
  };

  return (
    <div 
      id="aods-inquiry-modal" 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      {/* Backdrop with Blur */}
      <div 
        className="fixed inset-0 bg-[#020510]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={handleCloseAndReset}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-2xl glass-panel-glow border-2 border-blue-500/50 shadow-[0_0_50px_rgba(37,99,235,0.3)] p-5 sm:p-8 z-10 my-6 max-h-[92vh] overflow-y-auto">
        
        {/* Top-Right Close Button */}
        <button
          id="modal-close-btn"
          onClick={handleCloseAndReset}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-blue-950/80 text-slate-400 hover:text-white hover:bg-blue-900/80 border border-blue-800/40 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Modal Classification Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/90 border border-blue-800/60 text-cyan-300 text-xs font-mono shadow-inner">
                <Cpu className="w-3.5 h-3.5" />
                <span>COMMERCIAL INTELLIGENCE INQUIRY</span>
              </div>
              {initialPlan && (
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono bg-blue-900/60 text-blue-200 border border-blue-700/50">
                  <span>Selected: {initialPlan.name}</span>
                </div>
              )}
            </div>

            {/* Modal Heading */}
            <h3 
              id="modal-headline"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans"
            >
              Request an Intelligence Analysis
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 mb-6 font-sans leading-relaxed">
              Complete the parameters below to connect with our intelligence operations team and configure your market analysis.
            </p>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="field-firstName" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    First Name <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="field-firstName"
                      type="text"
                      required
                      placeholder="e.g. Sarah"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      onBlur={() => handleBlur('firstName')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#061026]/90 border text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none ${
                        errors.firstName && touched.firstName
                          ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-blue-900/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50'
                      }`}
                    />
                  </div>
                  {errors.firstName && touched.firstName && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.firstName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="field-lastName" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Last Name <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="field-lastName"
                      type="text"
                      required
                      placeholder="e.g. Jenkins"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      onBlur={() => handleBlur('lastName')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#061026]/90 border text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none ${
                        errors.lastName && touched.lastName
                          ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-blue-900/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50'
                      }`}
                    />
                  </div>
                  {errors.lastName && touched.lastName && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.lastName}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Work Email & Job Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="field-workEmail" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Work Email <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="field-workEmail"
                      type="email"
                      required
                      placeholder="e.g. sjenkins@organization.com"
                      value={formData.workEmail}
                      onChange={(e) => handleChange('workEmail', e.target.value)}
                      onBlur={() => handleBlur('workEmail')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#061026]/90 border text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none ${
                        errors.workEmail && touched.workEmail
                          ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-blue-900/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50'
                      }`}
                    />
                  </div>
                  {errors.workEmail && touched.workEmail && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.workEmail}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="field-jobTitle" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Job Title
                  </label>
                  <div className="relative">
                    <input
                      id="field-jobTitle"
                      type="text"
                      placeholder="e.g. VP Commercial Strategy"
                      value={formData.jobTitle}
                      onChange={(e) => handleChange('jobTitle', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#061026]/90 border border-blue-900/80 text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Company & Company Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="field-company" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Company <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="field-company"
                      type="text"
                      required
                      placeholder="e.g. Apex Industrial Partners"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      onBlur={() => handleBlur('company')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#061026]/90 border text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none ${
                        errors.company && touched.company
                          ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-blue-900/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50'
                      }`}
                    />
                  </div>
                  {errors.company && touched.company && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.company}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="field-companyWebsite" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Company Website <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="field-companyWebsite"
                      type="text"
                      required
                      placeholder="e.g. apexindustrial.com"
                      value={formData.companyWebsite}
                      onChange={(e) => handleChange('companyWebsite', e.target.value)}
                      onBlur={() => handleBlur('companyWebsite')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#061026]/90 border text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none ${
                        errors.companyWebsite && touched.companyWebsite
                          ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-blue-900/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50'
                      }`}
                    />
                  </div>
                  {errors.companyWebsite && touched.companyWebsite && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.companyWebsite}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Company Type */}
              <div>
                <label htmlFor="field-companyType" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Company Type <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="field-companyType"
                    required
                    value={formData.companyType}
                    onChange={(e) => handleChange('companyType', e.target.value)}
                    onBlur={() => handleBlur('companyType')}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#061026] border text-white text-xs sm:text-sm transition-all focus:outline-none cursor-pointer ${
                      errors.companyType && touched.companyType
                        ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                        : 'border-blue-900/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50'
                    }`}
                  >
                    <option value="" disabled className="text-slate-500 bg-[#061026]">
                      Select your organization type...
                    </option>
                    <option value="Commercial Real Estate" className="bg-[#061026] text-white">
                      Commercial Real Estate
                    </option>
                    <option value="Agency" className="bg-[#061026] text-white">
                      Agency
                    </option>
                    <option value="MSP" className="bg-[#061026] text-white">
                      MSP
                    </option>
                    <option value="Other" className="bg-[#061026] text-white">
                      Other
                    </option>
                  </select>
                </div>
                {errors.companyType && touched.companyType && (
                  <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.companyType}</span>
                  </p>
                )}
              </div>

              {/* Row 5: What would you like AODS to help your organization with? */}
              <div>
                <label htmlFor="field-objective" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  What would you like AODS to help your organization with? <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="field-objective"
                    required
                    rows={3}
                    placeholder="e.g. We need to detect upcoming tenant lease expirations and prioritize expanding corporate facilities across Tier-1 logistics hubs."
                    value={formData.objective}
                    onChange={(e) => handleChange('objective', e.target.value)}
                    onBlur={() => handleBlur('objective')}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#061026]/90 border text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:outline-none leading-relaxed ${
                      errors.objective && touched.objective
                        ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                        : 'border-blue-900/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50'
                    }`}
                  />
                </div>
                {errors.objective && touched.objective && (
                  <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.objective}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA Button */}
              <div className="pt-3">
                <button
                  id="inquiry-submit-btn"
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 border border-cyan-400/50 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 cursor-pointer text-sm sm:text-base"
                >
                  <span>Submit Intelligence Request</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Data Privacy Note */}
              <div className="text-center pt-1">
                <p className="text-[11px] font-mono text-slate-500">
                  Data submitted is handled with institutional confidentiality. Zero spam.
                </p>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div id="modal-confirmation-state" className="text-center py-8 sm:py-10 px-2 sm:px-6">
            
            {/* Green Shield / Check Icon */}
            <div className="w-16 h-16 rounded-full bg-emerald-950/90 border-2 border-emerald-500/80 flex items-center justify-center text-emerald-400 mx-auto mb-5 shadow-[0_0_35px_rgba(16,185,129,0.35)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            {/* Required Headline */}
            <h3 
              id="confirmation-headline"
              className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-sans tracking-tight"
            >
              Request Received
            </h3>

            {/* Required Confirmation Body */}
            <p 
              id="confirmation-message"
              className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed font-sans"
            >
              Thank you. Your AODS Intelligence request has been received. We'll review your information and follow up with next steps.
            </p>

            {/* Submission Summary Badge */}
            <div className="p-4 rounded-xl bg-blue-950/70 border border-blue-800/60 max-w-md mx-auto text-left mb-8 space-y-1.5 text-xs font-mono">
              <div className="text-cyan-400 uppercase font-bold tracking-wider mb-2">Request Details</div>
              <div className="text-slate-300">Contact: <span className="text-white font-sans font-semibold">{formData.firstName} {formData.lastName}</span></div>
              <div className="text-slate-300">Company: <span className="text-white font-sans font-semibold">{formData.company}</span></div>
              <div className="text-slate-300">Sector: <span className="text-cyan-300">{formData.companyType}</span></div>
              <div className="text-slate-300">Email: <span className="text-slate-200">{formData.workEmail}</span></div>
            </div>

            {/* Required Close Button */}
            <button
              id="confirmation-close-btn"
              onClick={handleCloseAndReset}
              className="px-8 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/50 transition-all duration-200 cursor-pointer text-sm sm:text-base shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Close
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
