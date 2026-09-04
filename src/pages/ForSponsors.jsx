import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Building2, 
  TrendingUp, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  BarChart3, 
  PieChart,
  Layers,
  Sparkles,
  Calendar
} from 'lucide-react';
import csrSummitImg from '../assets/csr_sponsor_summit.jpg';

export default function ForSponsors({ navigateTo, openCSRModal }) {
  return (
    <div id="main-content">
      {/* Page Header Banner (Institutional Two-Column Split) */}
      <section className="bg-navy-institutional" style={{ padding: '54px 0 46px', borderBottom: '1px solid #1E3A5F' }}>
        <div className="container">
          <div className="gov-split-col" style={{ alignItems: 'center', gap: '40px' }}>
            {/* Left Content */}
            <div>
              <span className="gov-badge" style={{ background: '#1E3A5F', color: '#FDE68A', borderColor: '#B45309', marginBottom: '14px', display: 'inline-flex' }}>
                Corporate Social Responsibility (CSR) Framework · Section 135 Compliant
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, margin: '10px 0 16px', color: '#FFFFFF', lineHeight: 1.25 }}>
                Direct your CSR spend to a pipeline you can actually measure.
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '24px' }}>
                BSIC gives companies a structured, campus-level way to invest in innovation and education under Companies Act Schedule VII — with visibility into real venture output, not just activity reports.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <button 
                  className="btn-gov btn-gov-gold"
                  onClick={openCSRModal}
                  style={{ padding: '12px 24px', fontSize: '0.95rem' }}
                >
                  <Award size={16} />
                  <span>Download CSR Sponsor Deck</span>
                </button>
                <button 
                  className="btn-gov btn-gov-outline"
                  onClick={() => navigateTo('contact')}
                  style={{ padding: '12px 24px', fontSize: '0.95rem', background: '#0F2F55', color: '#FFFFFF', borderColor: '#38BDF8' }}
                >
                  <span>Schedule Briefing with Council →</span>
                </button>
              </div>

              {/* Compliance Badges */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '16px', color: '#94A3B8', fontSize: '0.84rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} color="#34D399" />
                  <span>Schedule VII Item (ii) & (ix) Eligible</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} color="#34D399" />
                  <span>Targeted Tier-2 & Tier-3 Geographies</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} color="#34D399" />
                  <span>Milestone-Based Impact Audits</span>
                </div>
              </div>
            </div>

            {/* Right Photo Banner */}
            <div style={{ position: 'relative' }}>
              <div style={{ 
                background: '#071A31', 
                padding: '8px', 
                border: '1px solid #334E68', 
                borderRadius: '4px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)'
              }}>
                <img 
                  src={csrSummitImg} 
                  alt="Corporate CSR Leaders and Academic Mentors at Collegiate Green-Tech Innovation Summit" 
                  style={{ width: '100%', height: 'auto', maxHeight: '440px', objectFit: 'cover', borderRadius: '2px', display: 'block' }}
                />
                <div style={{ 
                  background: '#0B2545', 
                  padding: '12px 16px', 
                  borderTop: '2px solid #B45309',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <div>
                    <strong style={{ color: '#FFFFFF', fontSize: '0.88rem', display: 'block' }}>
                      Corporate-Academic Innovation Expo
                    </strong>
                    <span style={{ color: '#94A3B8', fontSize: '0.76rem' }}>
                      Industry Leaders Reviewing Student Agri-Tech & Prototyping Projects
                    </span>
                  </div>
                  <span style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    color: '#FDE68A', 
                    background: '#1E3A5F', 
                    padding: '3px 8px', 
                    borderRadius: '2px'
                  }}>
                    CSR SUMMIT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Fits CSR Section (Full Width Responsive Split Layout) */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="gov-split-col" style={{ alignItems: 'flex-start', gap: '48px' }}>
            {/* Left Column: Strategic Rationale */}
            <div>
              <span className="gov-badge navy">Statutory & Strategic Alignment</span>
              <h2 className="section-title">Why this fits CSR</h2>
              
              <p className="lead-text" style={{ marginBottom: '20px' }}>
                Corporate social responsibility budgets are increasingly directed toward education, skill development, and innovation-linked causes under the Companies Act’s CSR framework — categories that cover exactly the kind of on-campus programming BSIC runs.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '24px' }}>
                <div className="gov-card">
                  <Target size={22} color="#0B2545" style={{ marginBottom: '10px' }} />
                  <h3 style={{ fontSize: '1.15rem', color: '#0B2545', marginBottom: '8px' }}>
                    The Marginal Impact Advantage
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                    Metro engineering colleges already have IIT- and IIM-affiliated incubators and years of corporate attention — one more sponsor there is marginal. Government and non-engineering colleges in tier 2 and tier 3 towns get almost none of that, which makes the <strong>same rupee substantially more visible and more differentiated</strong>.
                  </p>
                </div>

                <div className="gov-card gold-border">
                  <Building2 size={22} color="#B45309" style={{ marginBottom: '10px' }} />
                  <h3 style={{ fontSize: '1.15rem', color: '#0B2545', marginBottom: '8px' }}>
                    Companies Act "Local Area" Priority
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                    Companies Act CSR guidance directs firms to give preference to their own <strong>local area of operation</strong>. For a company with factories, operational facilities, or distribution hubs outside the top metros, sponsoring a nearby government college’s cell is a natural, direct fit.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Precedent & Underwritten Deliverables */}
            <div>
              {/* AIM Precedent Box */}
              <div className="gov-alert-box advisory" style={{ margin: '0 0 24px 0', borderLeft: '4px solid #B45309' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#78350F', marginBottom: '8px' }}>
                  Endorsed by National Best Practices (AIM CSR Precedent)
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#451A03', lineHeight: 1.65, margin: 0 }}>
                  This isn’t a novel funding pattern — <strong>Atal Innovation Mission (AIM, NITI Aayog)</strong> runs its own dedicated CSR Round Table specifically to connect corporate and PSU CSR heads with underserved-region innovation programs. Private CSR funding of innovation infrastructure outside the metros is a recognized, government-endorsed model, not something BSIC is asking sponsors to pioneer.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#0B2545', marginBottom: '14px', fontWeight: 700 }}>
                  Sponsoring a BSIC cell means your CSR spend directly underwrites:
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '18px 20px', borderRadius: '3px' }}>
                    <strong style={{ fontSize: '0.95rem', color: '#0B2545', display: 'block', marginBottom: '4px' }}>
                      1. Permanent Named Campus Presence
                    </strong>
                    <span style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, display: 'block' }}>
                      Exclusive branded facility and institutional recognition at real college premises in target operational districts.
                    </span>
                  </div>

                  <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '18px 20px', borderRadius: '3px' }}>
                    <strong style={{ fontSize: '0.95rem', color: '#0B2545', display: 'block', marginBottom: '4px' }}>
                      2. Defined Student Venture Output Bar
                    </strong>
                    <span style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, display: 'block' }}>
                      Real venture formation metrics — ideas pitched, prototypes tested, and student founder teams formed, not just attendance headcounts.
                    </span>
                  </div>

                  <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '18px 20px', borderRadius: '3px' }}>
                    <strong style={{ fontSize: '0.95rem', color: '#0B2545', display: 'block', marginBottom: '4px' }}>
                      3. Auditable Reporting Cadence for CSR Boards
                    </strong>
                    <span style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, display: 'block' }}>
                      Term-by-term impact documentation, fund utilization certificates, and governance logs suitable for CSR committee reviews.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Sponsor Section */}
      <section className="section-pad bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <span className="gov-badge">Sponsorship Models</span>
            <h2 className="section-title center">Ways to sponsor</h2>
            <p className="lead-text">
              Tailored sponsorship tracks designed to match corporate CSR allocations and strategic focus areas.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div className="gov-card gold-border">
              <div style={{ background: '#FEF3C7', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Building2 size={20} color="#B45309" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0B2545', marginBottom: '8px' }}>
                1. Sponsor a Campus Cell
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
                Fund a Tier 1 Innovation Cell at a specific government or non-engineering college, with exclusive physical naming rights, branding, and term-by-term audit reporting.
              </p>
              <div style={{ fontSize: '0.82rem', color: '#0B2545', fontWeight: 600 }}>
                Ideal for: Local area corporate responsibility near plant sites or headquarters.
              </div>
            </div>

            <div className="gov-card">
              <div style={{ background: '#EBF2FA', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Sparkles size={20} color="#0B2545" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0B2545', marginBottom: '8px' }}>
                2. Sponsor a Flagship Event
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
                Back a multi-campus hackathon, regional ideation sprint, or the marquee annual pitch day across the entire partner network for broad national visibility in a single campaign.
              </p>
              <div style={{ fontSize: '0.82rem', color: '#0B2545', fontWeight: 600 }}>
                Ideal for: High-visibility brand positioning, employer branding, and innovation leadership.
              </div>
            </div>

            <div className="gov-card green-border">
              <div style={{ background: '#DCFCE7', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <TrendingUp size={20} color="#15803D" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0B2545', marginBottom: '8px' }}>
                3. Fund a Seed / Scholarship Pool
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
                Direct capital straight to the student founders and ventures a cell produces, financing early prototypes, proof-of-concepts, and incorporation micro-grants.
              </p>
              <div style={{ fontSize: '0.82rem', color: '#0B2545', fontWeight: 600 }}>
                Ideal for: Direct student financial empowerment, grassroots inclusion, and social impact.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-pad bg-white">
        <div className="container">
          <div style={{ width: '100%', margin: '0 auto' }}>
            <span className="gov-badge navy">Corporate Benefits</span>
            <h2 className="section-title">What you get as a CSR partner</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
              <div className="gov-card">
                <CheckCircle2 size={24} color="#138808" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', margin: '0 0 6px' }}>High-Impact Brand Visibility</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748B', margin: 0 }}>
                  Brand recognition across a growing network of campus cells, physical boards, hackathon banners, and university press releases.
                </p>
              </div>

              <div className="gov-card">
                <BarChart3 size={24} color="#0B2545" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', margin: '0 0 6px' }}>Regular Structured Reporting</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748B', margin: 0 }}>
                  Detailed milestone dossiers, utilization statements, and student venture metrics for statutory CSR committee reviews — not a one-time thank-you deck.
                </p>
              </div>

              <div className="gov-card">
                <PieChart size={24} color="#B45309" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', margin: '0 0 6px' }}>First Look at Startups</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748B', margin: 0 }}>
                  Exclusive first look and pilot opportunities with the student-led startups and technologies your funding helps nurture.
                </p>
              </div>
            </div>

            <div style={{ background: '#0B2545', color: '#FFFFFF', padding: '36px', borderRadius: '3px', marginTop: '40px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', margin: '0 0 10px' }}>
                Want to talk about a CSR partnership?
              </h3>
              <p style={{ fontSize: '1rem', color: '#CBD5E1', maxWidth: '600px', margin: '0 auto 24px' }}>
                Connect directly with the BSIC CSR Secretariat to explore local area campus matching and Schedule VII compliance documentation.
              </p>
              <button 
                className="btn-gov btn-gov-gold"
                style={{ fontSize: '1rem', padding: '12px 28px' }}
                onClick={openCSRModal}
              >
                <span>Get in touch regarding CSR →</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
