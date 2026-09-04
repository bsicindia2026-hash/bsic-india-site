import React from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  FileText, 
  ArrowUpRight 
} from 'lucide-react';
import { councilInfo } from '../data/content';

export default function Footer({ setCurrentPage, openMOUModal }) {
  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Council Profile */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              {/* Official Council Emblem (matching navbar) */}
              <div style={{ width: '56px', height: '56px', flexShrink: 0 }} aria-hidden="true">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <circle cx="50" cy="50" r="48" fill="#0B2545" stroke="#B45309" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="43" fill="none" stroke="#FF9933" strokeWidth="1" strokeDasharray="2,2" />
                  <circle cx="50" cy="50" r="38" fill="#061528" stroke="#FFFFFF" strokeWidth="1" />
                  {/* 24-spoke stylized chakra / gear */}
                  <circle cx="50" cy="50" r="22" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                  {[...Array(24)].map((_, i) => (
                    <line 
                      key={i}
                      x1="50" 
                      y1="50" 
                      x2={50 + 22 * Math.cos((i * 15 * Math.PI) / 180)} 
                      y2={50 + 22 * Math.sin((i * 15 * Math.PI) / 180)} 
                      stroke="#38BDF8" 
                      strokeWidth="0.8" 
                    />
                  ))}
                  <circle cx="50" cy="50" r="6" fill="#D97706" />
                  {/* Text Ring */}
                  <path id="curveTopFooter" d="M 18,50 A 32,32 0 0,1 82,50" fill="none" />
                  <path id="curveBottomFooter" d="M 82,50 A 32,32 0 0,1 18,50" fill="none" />
                  <text fontSize="7" fontWeight="bold" fill="#F1F5F9" letterSpacing="0.8">
                    <textPath href="#curveTopFooter" startOffset="50%" textAnchor="middle">
                      BHARAT STARTUP
                    </textPath>
                  </text>
                  <text fontSize="6.5" fontWeight="bold" fill="#FDE68A" letterSpacing="0.8">
                    <textPath href="#curveBottomFooter" startOffset="50%" textAnchor="middle">
                      INCUBATION COUNCIL
                    </textPath>
                  </text>
                </svg>
              </div>
              <div>
                <span style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'block', fontWeight: 600, fontFamily: 'Noto Serif Devanagari, serif' }}>
                  {councilInfo.nameHindi}
                </span>
                <h2 style={{ color: '#FFFFFF', fontSize: '1.32rem', margin: '2px 0 3px', fontWeight: 800, letterSpacing: '-0.01em' }}>
                  {councilInfo.nameEnglish}
                </h2>
                <span style={{ fontSize: '0.78rem', color: '#FCD34D', display: 'block', fontWeight: 600 }}>
                  {councilInfo.tagline}
                </span>
              </div>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.84rem', lineHeight: 1.6, marginBottom: '16px' }}>
              BSIC partners with Indian colleges — especially government, arts, and commerce institutions in tier-2 and tier-3 towns — to build structured campus innovation cells and incubation centres, giving CSR sponsors a measurable way to fund student startups.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} color="#F59E0B" />
                <span>{councilInfo.contact.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="#F59E0B" />
                <span>{councilInfo.contact.generalEmail}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="#F59E0B" />
                <span>{councilInfo.contact.helpline} ({councilInfo.contact.hours})</span>
              </div>
            </div>
          </div>

          {/* Council Programs & Pathways */}
          <div>
            <h3 className="footer-heading">Programs & Tiers</h3>
            <ul className="footer-links">
              <li>
                <a href="#programs" onClick={(e) => { e.preventDefault(); navigateTo('programs'); }}>
                  Tier 1: Innovation Cell
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => { e.preventDefault(); navigateTo('programs'); }}>
                  Tier 2: Incubation Centre
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => { e.preventDefault(); navigateTo('programs'); }}>
                  Flagship Events Engine
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => { e.preventDefault(); navigateTo('programs'); }}>
                  DPIIT Recognition Pathway
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => { e.preventDefault(); navigateTo('programs'); }}>
                  ACIC & AIC Regional Alignment
                </a>
              </li>
              <li>
                <a href="#resources" onClick={(e) => { e.preventDefault(); navigateTo('resources'); }}>
                  Knowledge Bank & Policy Briefs
                </a>
              </li>
              <li>
                <a href="#mou" onClick={(e) => { e.preventDefault(); openMOUModal(); }}>
                  Download Standard MOU Draft
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Stakeholders */}
          <div>
            <h3 className="footer-heading">Stakeholder Portals</h3>
            <ul className="footer-links">
              <li>
                <a href="#for-colleges" onClick={(e) => { e.preventDefault(); navigateTo('for-colleges'); }}>
                  For Government Colleges
                </a>
              </li>
              <li>
                <a href="#for-colleges" onClick={(e) => { e.preventDefault(); navigateTo('for-colleges'); }}>
                  Arts, Commerce & Science
                </a>
              </li>
              <li>
                <a href="#for-sponsors" onClick={(e) => { e.preventDefault(); navigateTo('for-sponsors'); }}>
                  CSR Sponsorship Framework
                </a>
              </li>
              <li>
                <a href="#for-sponsors" onClick={(e) => { e.preventDefault(); navigateTo('for-sponsors'); }}>
                  Companies Act Schedule VII
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>
                  About BSIC & Pilot Focus
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>
                  Contact Secretariat
                </a>
              </li>
            </ul>
          </div>

          {/* Reference & Related Initiatives */}
          <div>
            <h3 className="footer-heading">Related National Frameworks</h3>
            <ul className="footer-links" style={{ fontSize: '0.82rem' }}>
              <li>
                <a href="https://aim.gov.in" target="_blank" rel="noopener noreferrer">
                  <span>Atal Innovation Mission (AIM)</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="https://startupindia.gov.in" target="_blank" rel="noopener noreferrer">
                  <span>Startup India / DPIIT</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="https://niti.gov.in" target="_blank" rel="noopener noreferrer">
                  <span>NITI Aayog, Govt. of India</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="https://mca.gov.in" target="_blank" rel="noopener noreferrer">
                  <span>MCA — CSR Schedule VII</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>

            <div style={{ marginTop: '16px', background: '#051325', padding: '10px', border: '1px solid #1A2E47', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.72rem', color: '#F59E0B', fontWeight: 600, display: 'block', textTransform: 'uppercase' }}>
                Pilot Cohort 2026-27
              </span>
              <p style={{ fontSize: '0.75rem', color: '#94A3B8', margin: '4px 0 0 0' }}>
                Prioritizing 3–5 pilot institutions outside Tier-1 metro clusters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Legal & Technical Disclaimer Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div>
            © 2026 <strong>Bharat Startup Incubation Council (BSIC India)</strong> · bsicindia.com · All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ color: '#64748B' }}>Website Policy</span>
            <span style={{ color: '#64748B' }}>•</span>
            <span style={{ color: '#64748B' }}>Hyperlink Policy</span>
            <span style={{ color: '#64748B' }}>•</span>
            <span style={{ color: '#64748B' }}>Accessibility Statement</span>
            <span style={{ color: '#64748B' }}>•</span>
            <span style={{ color: '#64748B' }}>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
