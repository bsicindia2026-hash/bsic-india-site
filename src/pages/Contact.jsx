import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Building2, 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Clock,
  User,
  Briefcase,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { councilInfo } from '../data/content';

export default function Contact({ openMOUModal, openCSRModal }) {
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    orgType: 'college',
    interest: 'Partnering my college',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Silent rejection of automated bot spam
    if (honeypot) {
      console.warn('Spam bot detected via honeypot');
      setSubmitted(true);
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem('bsic_contact_submissions') || '[]');
      existing.push({ 
        name: formData.name.trim(),
        organization: formData.organization.trim(),
        orgType: formData.orgType,
        interest: formData.interest,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        submittedAt: new Date().toISOString() 
      });
      localStorage.setItem('bsic_contact_submissions', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage unavailable', err);
    }
    setSubmitted(true);
  };

  return (
    <div id="main-content">
      {/* Page Header Banner */}
      <section className="bg-navy-institutional" style={{ padding: '48px 0 40px', borderBottom: '1px solid #1E3A5F' }}>
        <div className="container">
          <span className="gov-badge" style={{ background: '#1E3A5F', color: '#FDE68A', borderColor: '#B45309' }}>
            Secretariat & Regional Desks
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, margin: '10px 0', color: '#FFFFFF' }}>
            Let’s build the pipeline together.
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', lineHeight: 1.6 }}>
            Whether you’re a college exploring a partnership, a company exploring CSR sponsorship, or a student eager to get involved, we welcome your inquiry.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="gov-split-col">
            {/* Contact Form */}
            <div>
              <span className="gov-badge navy">Official Inquiry Form</span>
              <h2 className="section-title">Send a Communication</h2>

              {submitted ? (
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '32px', borderRadius: '3px', textAlign: 'center' }}>
                  <CheckCircle2 size={48} color="#15803D" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '1.3rem', color: '#0B2545', marginBottom: '8px' }}>
                    Inquiry Successfully Dispatched
                  </h3>
                  <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    Thank you, <strong>{formData.name}</strong>. Your communication regarding <em>"{formData.interest}"</em> has been routed to the relevant desk at the Secretariat. A response will be issued to <strong>{formData.email}</strong> within 1–2 business days.
                  </p>
                  <button 
                    className="btn-gov btn-gov-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        orgType: 'college',
                        interest: 'Partnering my college',
                        email: '',
                        phone: '',
                        message: ''
                      });
                    }}
                  >
                    Send Another Communication
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="gov-card" style={{ padding: '28px' }}>
                  {/* Anti-spam honeypot field (hidden from legitimate human users) */}
                  <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                    <input 
                      type="text" 
                      name="website_url_trap" 
                      tabIndex={-1} 
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <User size={15} className="form-label-icon" />
                      <span>Your Full Name</span>
                      <span className="req">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Dr. Rajesh Sharma / Priya Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">
                        <Building2 size={15} className="form-label-icon" />
                        <span>Organization / College</span>
                        <span className="req">*</span>
                      </label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Institution or Company Name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Briefcase size={15} className="form-label-icon" />
                        <span>Organization Category</span>
                        <span className="req">*</span>
                      </label>
                      <select 
                        className="form-select"
                        value={formData.orgType}
                        onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                      >
                        <option value="college">Government / Affiliated College</option>
                        <option value="company">Corporate / CSR Foundation</option>
                        <option value="student">Student / Campus Team</option>
                        <option value="mentor">Industry Mentor / Expert</option>
                        <option value="other">Other / Government Agency</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <HelpCircle size={15} className="form-label-icon" />
                      <span>I’m interested in:</span>
                      <span className="req">*</span>
                    </label>
                    <select 
                      className="form-select"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="Partnering my college">Partnering my college (Innovation Cell setup / MOU)</option>
                      <option value="Sponsoring a campus">Sponsoring a campus (CSR partnership under Schedule VII)</option>
                      <option value="Sponsoring a flagship event">Sponsoring a flagship hackathon or pitch day</option>
                      <option value="Joining as a Mentor">Joining as an Industry Mentor</option>
                      <option value="General inquiry">General inquiry</option>
                    </select>
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
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <MessageSquare size={15} className="form-label-icon" />
                      <span>Your Message or Query</span>
                      <span className="req">*</span>
                    </label>
                    <textarea 
                      rows={4} 
                      required 
                      className="form-textarea" 
                      placeholder="Share details on your college campus, student count, or specific corporate CSR focus..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-form-submit"
                    style={{ width: '100%', minHeight: '46px', fontSize: '0.95rem', justifyContent: 'center' }}
                  >
                    <Send size={16} />
                    <span>Submit Official Communication</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Channels & Directories */}
            <div>
              <span className="gov-badge">Council Desks</span>
              <h2 className="section-title">Directory & Channels</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                <div className="gov-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Building2 size={20} color="#0B2545" />
                    <h4 style={{ fontSize: '1rem', margin: 0, color: '#0B2545' }}>For College Partnerships</h4>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#64748B', margin: '0 0 8px 0' }}>
                    Direct desk for Principals, Vice-Chancellors, and Faculty Coordinators.
                  </p>
                  <strong style={{ color: '#0B2545', fontSize: '0.92rem' }}>
                    {councilInfo.contact.collegeEmail}
                  </strong>
                </div>

                <div className="gov-card gold-border">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Award size={20} color="#B45309" />
                    <h4 style={{ fontSize: '1rem', margin: 0, color: '#0B2545' }}>For CSR Sponsors</h4>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#64748B', margin: '0 0 8px 0' }}>
                    Schedule VII compliance, corporate partnerships, and impact audit coordination.
                  </p>
                  <strong style={{ color: '#0B2545', fontSize: '0.92rem' }}>
                    {councilInfo.contact.csrEmail}
                  </strong>
                </div>

                <div className="gov-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Mail size={20} color="#138808" />
                    <h4 style={{ fontSize: '1rem', margin: 0, color: '#0B2545' }}>General Inquiries</h4>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#64748B', margin: '0 0 8px 0' }}>
                    Students, mentors, press inquiries, and public circular requests.
                  </p>
                  <strong style={{ color: '#0B2545', fontSize: '0.92rem' }}>
                    {councilInfo.contact.generalEmail}
                  </strong>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '16px', borderRadius: '3px', fontSize: '0.84rem', color: '#334155' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Clock size={16} color="#0B2545" />
                    <strong>Working Hours:</strong>
                  </div>
                  <p style={{ margin: 0, color: '#475569' }}>
                    {councilInfo.contact.hours} (Indian Standard Time)
                  </p>
                </div>

                <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', padding: '16px', borderRadius: '3px', fontSize: '0.84rem' }}>
                  <strong style={{ color: '#92400E', display: 'block', marginBottom: '4px' }}>Official Handles</strong>
                  <span style={{ color: '#78350F' }}>
                    Connect with BSIC across verified social handles: <strong>@bsicindia</strong> (LinkedIn, X, Instagram)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Line */}
          <div style={{ textAlign: 'center', marginTop: '48px', padding: '24px', background: '#F1F5F9', borderRadius: '3px' }}>
            <p style={{ fontSize: '1.15rem', color: '#0B2545', fontStyle: 'italic', margin: 0 }}>
              “We’re building this one campus at a time. Reach out and let’s talk about yours.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
