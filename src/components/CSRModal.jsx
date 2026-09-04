import React, { useState } from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  Building2, 
  Send, 
  Shield, 
  User, 
  Briefcase, 
  Mail, 
  Phone,
  FileText
} from 'lucide-react';
import { councilInfo } from '../data/content';

export default function CSRModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    designation: 'Head of CSR',
    workEmail: '',
    phone: '',
    interestTrack: 'Sponsor a Campus Cell (Tier 1)',
    preferredState: 'Tier-2/Tier-3 Focus District',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('bsic_csr_submissions') || '[]');
      existing.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('bsic_csr_submissions', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage unavailable', err);
    }
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="csr-modal-title">
      <div className="modal-content" style={{ maxWidth: '720px' }}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: '#FEF3C7', border: '1px solid #FDE68A', padding: '8px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={22} color="#B45309" />
            </div>
            <div>
              <h3 id="csr-modal-title" style={{ fontSize: '1.15rem', color: '#0B2545', margin: 0, fontWeight: 700 }}>
                CSR Partnership & Schedule VII Consultation
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                Measurable On-Campus Student Startup Incubation · Bharat Startup Incubation Council
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="modal-body" style={{ textAlign: 'center', padding: '24px 20px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <CheckCircle2 size={32} color="#15803D" />
            </div>
            <h4 style={{ fontSize: '1.3rem', color: '#0B2545', marginBottom: '8px', fontWeight: 700 }}>
              CSR Partnership Inquiry Registered
            </h4>
            <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '580px', margin: '0 auto 20px' }}>
              Thank you, <strong>{formData.contactPerson}</strong> ({formData.companyName}). Our CSR Secretariat lead will reach out at <strong>{formData.workEmail}</strong> with the Schedule VII compliance dossier and regional campus options.
            </p>
            <button 
              className="btn-form-cancel"
              onClick={onClose}
              style={{ minWidth: '160px' }}
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto', overflow: 'hidden' }}>
            <div className="modal-body">
              {/* Compliance Advisory */}
              <div className="gov-alert-box success" style={{ marginTop: 0, marginBottom: '20px', padding: '14px 16px', fontSize: '0.86rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Shield size={20} color="#15803D" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#0B2545', display: 'block', marginBottom: '3px', fontSize: '0.88rem' }}>
                    Companies Act 2013 · Schedule VII Compliance
                  </strong>
                  <span style={{ color: '#475569', lineHeight: 1.5 }}>
                    All corporate sponsorships are structured under Schedule VII incubator and skill development provisions, eligible for full CSR deduction with quarterly third-party milestone audits.
                  </span>
                </div>
              </div>

              {/* Section 1: Corporate Information */}
              <div className="form-section-header">
                <Building2 size={15} />
                <span>1. Corporate Foundation Particulars</span>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Building2 size={15} className="form-label-icon" />
                  <span>Company / Corporate Foundation Name</span>
                  <span className="req">*</span>
                </label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  placeholder="e.g. Bharat Infrastructure & Logistics Ltd."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Award size={15} className="form-label-icon" />
                  <span>Preferred Sponsorship Track</span>
                  <span className="req">*</span>
                </label>
                <select 
                  className="form-select"
                  value={formData.interestTrack}
                  onChange={(e) => setFormData({ ...formData, interestTrack: e.target.value })}
                >
                  <option value="Sponsor a Campus Cell (Tier 1)">Sponsor a Campus Cell (Tier 1 Innovation Cell with naming rights)</option>
                  <option value="Sponsor a Flagship Event">Sponsor a Flagship Event (Pan-network Hackathon / Pitch Day)</option>
                  <option value="Fund a Scholarship or Seed Pool">Direct Student Seed Pool / Innovation Grants</option>
                  <option value="Multi-Campus District Cluster">Multi-Campus Cluster (Local Area of Operation)</option>
                </select>
              </div>

              {/* Section 2: Contact Person */}
              <div className="form-section-header">
                <User size={15} />
                <span>2. CSR Lead & Contact Details</span>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">
                    <User size={15} className="form-label-icon" />
                    <span>Contact Person Name</span>
                    <span className="req">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    placeholder="Full Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Briefcase size={15} className="form-label-icon" />
                    <span>Designation</span>
                    <span className="req">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    placeholder="e.g. CSR Lead / VP Sustainability"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">
                    <Mail size={15} className="form-label-icon" />
                    <span>Official Corporate Email</span>
                    <span className="req">*</span>
                  </label>
                  <input 
                    type="email" 
                    required 
                    className="form-input" 
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Phone size={15} className="form-label-icon" />
                    <span>Contact Number</span>
                    <span className="req">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required 
                    className="form-input" 
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Section 3: Notes & Regional Preference */}
              <div className="form-section-header">
                <FileText size={15} />
                <span>3. Regional Focus & Objectives</span>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FileText size={15} className="form-label-icon" />
                  <span>Brief Note or Regional Preference</span>
                </label>
                <textarea 
                  rows={3} 
                  className="form-textarea" 
                  placeholder="Mention specific states/districts near manufacturing facilities or targeted student impact goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
            </div>

            {/* Anchored Responsive Footer */}
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn-form-cancel" 
                onClick={onClose}
              >
                Cancel
              </button>
              <div className="modal-footer-actions">
                <button 
                  type="submit" 
                  className="btn-form-submit"
                >
                  <Send size={16} />
                  <span>Submit CSR Partnership Inquiry</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

