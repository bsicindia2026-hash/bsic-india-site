import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  CheckCircle2, 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Building2, 
  Phone, 
  User,
  MapPin,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { councilInfo } from '../data/content';

export default function MOUModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: '',
    principalOrDean: '',
    designation: 'Principal',
    districtState: '',
    institutionType: 'Government College',
    email: '',
    phone: '',
    estimatedStudents: '1000 - 3000',
    additionalNotes: 'Committed dedicated room on campus for the Innovation Cell with basic power & internet connectivity.'
  });

  // Generate official, formatted email body
  const generateEmailSubject = () => {
    const inst = formData.collegeName || '[Institution Name]';
    const loc = formData.districtState || '[District, State]';
    return `[MOU Request 2026-27] BSIC Campus Innovation Cell Setup: ${inst} (${loc})`;
  };

  const generateEmailBody = () => {
    return `To:
The Secretariat Desk / Member Secretary
Bharat Startup Incubation Council (BSIC India)
Institutional Area, Lodhi Road, New Delhi 110003
Email: ${councilInfo.contact.collegeEmail}

SUBJECT: FORMAL REQUEST FOR BSIC CAMPUS INNOVATION CELL (TIER-1) BILATERAL MOU DRAFT & CSR SETUP PACK

Respected Secretariat,

We hereby formally place an institutional request for the bilateral Memorandum of Understanding (MOU) draft, Standard Operating Procedure (SOP), and CSR-sponsored setup guidelines to establish an on-campus BSIC Innovation Cell for the Academic Session 2026–27.

1. INSTITUTIONAL PARTICULARS:
--------------------------------------------------
• Name of College / Institution: ${formData.collegeName || 'N/A'}
• Institution Category: ${formData.institutionType || 'Government College'}
• District & State: ${formData.districtState || 'N/A'}
• Estimated Student Enrollment: ${formData.estimatedStudents || '1000 - 3000'}

2. AUTHORISED SIGNATORY / CONTACT DETAILS:
--------------------------------------------------
• Name: ${formData.principalOrDean || 'N/A'}
• Designation: ${formData.designation || 'Principal'}
• Official Institutional Email: ${formData.email || 'N/A'}
• Official Mobile / Phone: ${formData.phone || 'N/A'}

3. CAMPUS COMMITMENTS:
--------------------------------------------------
• Physical Space Commitment: ${formData.additionalNotes || 'Dedicated physical room on campus committed.'}
• Coordinators: Our institution agrees to appoint one Faculty Coordinator and one Student Coordinator under the BSIC gender-diverse framework.
• Events Calendar: Our campus will participate in the centrally scheduled pan-network hackathons, ideation sprints, and pitch days.
• Funding Framework: Standard bilateral non-commercial MOU utilizing CSR-underwritten setup and running costs (at zero direct expense to the college).

Kindly dispatch the bilateral MOU pack in PDF and editable DOC format to the registered official email address (${formData.email || 'this email'}) so that it may be placed before our Governing Body / College Council for approval and signing.

Yours sincerely,

${formData.principalOrDean || '[Name of Signatory]'}
${formData.designation || 'Principal'}
${formData.collegeName || '[Institution Name]'}
District & State: ${formData.districtState || '[District, State]'}
Contact: ${formData.phone || '[Phone]'}
Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`;
  };

  const handleCopyEmail = () => {
    const text = generateEmailBody();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendMail = (e) => {
    if (e) e.preventDefault();

    // Persist to localStorage for audit backup
    try {
      const existing = JSON.parse(localStorage.getItem('bsic_mou_submissions') || '[]');
      existing.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('bsic_mou_submissions', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage unavailable', err);
    }

    const subject = encodeURIComponent(generateEmailSubject());
    const body = encodeURIComponent(generateEmailBody());
    const mailtoUrl = `mailto:${councilInfo.contact.collegeEmail}?cc=${encodeURIComponent(formData.email || '')}&subject=${subject}&body=${body}`;

    // Open user's default email client with all details autofilled
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMail();
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="mou-modal-title">
      <div className="modal-content" style={{ maxWidth: '720px' }}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '8px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={22} color="#0B2545" />
            </div>
            <div>
              <h3 id="mou-modal-title" style={{ fontSize: '1.15rem', color: '#0B2545', margin: 0, fontWeight: 700 }}>
                Standard MOU Pack & Official Email Dispatch
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                For Government & Non-Engineering Campuses · Bharat Startup Incubation Council
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
              Official MOU Request Dispatched
            </h4>
            <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '580px', margin: '0 auto 20px' }}>
              Your formal request on behalf of <strong>{formData.collegeName || 'your institution'}</strong> has been generated and dispatched via email to <strong>{councilInfo.contact.collegeEmail}</strong> with CC to <strong>{formData.email}</strong>.
            </p>

            {/* Formatted Text Box with Copy Action */}
            <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', padding: '16px', borderRadius: '6px', textAlign: 'left', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0B2545', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Autofilled Official Letter Text
                </span>
                <button 
                  onClick={handleCopyEmail}
                  className="btn-form-copy"
                  style={{ padding: '6px 12px', minHeight: '34px', fontSize: '0.8rem' }}
                >
                  {copied ? <Check size={14} color="#15803D" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Letter Text'}</span>
                </button>
              </div>
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                fontFamily: 'monospace', 
                fontSize: '0.78rem', 
                color: '#334155', 
                maxHeight: '220px', 
                overflowY: 'auto',
                lineHeight: 1.55,
                background: '#FFFFFF',
                padding: '14px',
                border: '1px solid #E2E8F0',
                borderRadius: '4px'
              }}>
                {generateEmailBody()}
              </pre>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                className="btn-form-submit"
                onClick={handleSendMail}
              >
                <Send size={15} />
                <span>Re-open in Mail Client</span>
              </button>
              <button 
                className="btn-form-cancel"
                onClick={onClose}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto', overflow: 'hidden' }}>
            <div className="modal-body">
              {/* Notice Banner */}
              <div className="gov-alert-box advisory" style={{ marginTop: 0, marginBottom: '20px', padding: '14px 16px', fontSize: '0.86rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Mail size={20} color="#B45309" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#0B2545', display: 'block', marginBottom: '3px', fontSize: '0.88rem' }}>
                    Autofilled Official Email Dispatch
                  </strong>
                  <span style={{ color: '#475569', lineHeight: 1.5 }}>
                    Enter your college particulars below. Clicking <strong>"Send Formatted MOU Request Email"</strong> automatically composes a formal institutional letter with all details pre-filled, ready to send directly to the Council Secretariat.
                  </span>
                </div>
              </div>

              {/* Section 1: Institution Details */}
              <div className="form-section-header">
                <Building2 size={15} />
                <span>1. Institutional Particulars</span>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Building2 size={15} className="form-label-icon" />
                  <span>Name of Institution / College</span>
                  <span className="req">*</span>
                </label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  placeholder="e.g. Government Degree College, Bilaspur"
                  value={formData.collegeName}
                  onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">
                    <GraduationCap size={15} className="form-label-icon" />
                    <span>Institution Category</span>
                    <span className="req">*</span>
                  </label>
                  <select 
                    className="form-select"
                    value={formData.institutionType}
                    onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  >
                    <option value="Government College">Government College</option>
                    <option value="Government-Aided College">Government-Aided College</option>
                    <option value="Autonomous Arts & Science College">Autonomous Arts & Science College</option>
                    <option value="Commerce / Polytechnic Institute">Commerce / Polytechnic Institute</option>
                    <option value="Private College (Tier 2/3)">Private College (Tier 2/3)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <MapPin size={15} className="form-label-icon" />
                    <span>District & State</span>
                    <span className="req">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    placeholder="e.g. Alwar, Rajasthan"
                    value={formData.districtState}
                    onChange={(e) => setFormData({ ...formData, districtState: e.target.value })}
                  />
                </div>
              </div>

              {/* Section 2: Signatory Details */}
              <div className="form-section-header">
                <User size={15} />
                <span>2. Authorised Signatory & Official Contact</span>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">
                    <User size={15} className="form-label-icon" />
                    <span>Authorised Signatory / Contact Name</span>
                    <span className="req">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    placeholder="Dr. / Prof. Full Name"
                    value={formData.principalOrDean}
                    onChange={(e) => setFormData({ ...formData, principalOrDean: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Briefcase size={15} className="form-label-icon" />
                    <span>Designation</span>
                    <span className="req">*</span>
                  </label>
                  <select 
                    className="form-select"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  >
                    <option value="Principal">Principal</option>
                    <option value="Dean / Vice-Principal">Dean / Vice-Principal</option>
                    <option value="Faculty Coordinator / HOD">Faculty Coordinator / HOD</option>
                    <option value="Governing Body / Trustee">Governing Body / Trustee</option>
                  </select>
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">
                    <Mail size={15} className="form-label-icon" />
                    <span>Official Email Address</span>
                    <span className="req">*</span>
                  </label>
                  <input 
                    type="email" 
                    required 
                    className="form-input" 
                    placeholder="principal@college.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Phone size={15} className="form-label-icon" />
                    <span>Official Mobile / Landline</span>
                    <span className="req">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required 
                    className="form-input" 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Section 3: Campus Preparedness */}
              <div className="form-section-header">
                <CheckCircle2 size={15} />
                <span>3. Campus Space & Preparedness</span>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <CheckCircle2 size={15} className="form-label-icon" />
                  <span>Campus Space Commitment / Notes</span>
                </label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Dedicated 400 sq.ft room committed for Innovation Cell"
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                />
              </div>

              {/* Live Subject Line Preview */}
              {formData.collegeName && (
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '12px 14px', borderRadius: '4px', marginTop: '14px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '3px' }}>
                    Preview: Official Email Subject Line
                  </span>
                  <span style={{ fontSize: '0.84rem', color: '#0B2545', fontWeight: 600 }}>
                    {generateEmailSubject()}
                  </span>
                </div>
              )}
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
                  type="button" 
                  className="btn-form-copy"
                  onClick={handleCopyEmail}
                  title="Copy official letter draft directly to clipboard"
                >
                  {copied ? <Check size={16} color="#15803D" /> : <Copy size={16} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Letter Draft'}</span>
                </button>
                <button 
                  type="submit" 
                  className="btn-form-submit"
                >
                  <Send size={16} />
                  <span>Send Formatted MOU Request Email</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

