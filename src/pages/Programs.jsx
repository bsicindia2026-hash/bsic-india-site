import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  Calendar, 
  Award, 
  TrendingUp, 
  Sparkles, 
  FileText, 
  ArrowRight, 
  ShieldAlert, 
  GraduationCap 
} from 'lucide-react';
import hackathonPitchImg from '../assets/hackathon_pitch.jpg';
import collegeLabImg from '../assets/college_incubation_lab.jpg';

export default function Programs({ navigateTo, openMOUModal }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div id="main-content">
      {/* Page Header Banner (Institutional Two-Column Split) */}
      <section className="bg-navy-institutional" style={{ padding: '54px 0 46px', borderBottom: '1px solid #1E3A5F' }}>
        <div className="container">
          <div className="gov-split-col" style={{ alignItems: 'center', gap: '40px' }}>
            {/* Left Content */}
            <div>
              <span className="gov-badge" style={{ background: '#1E3A5F', color: '#FDE68A', borderColor: '#B45309', marginBottom: '14px', display: 'inline-flex' }}>
                Two-Tier Program Architecture · Bharat Startup Incubation Council
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, margin: '10px 0 16px', color: '#FFFFFF', lineHeight: 1.25 }}>
                One model, two tiers, built to grow with your campus.
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '24px' }}>
                BSIC doesn’t ask every college to become a full incubator on day one. We run a structured funnel: a broad, low-cost cell that any committed college can start immediately, and a deeper incubation tier reserved for cells that prove real venture traction.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  className="btn-gov btn-gov-gold"
                  onClick={openMOUModal}
                  style={{ padding: '12px 24px', fontSize: '0.95rem' }}
                >
                  <FileText size={16} />
                  <span>Download Bilateral MoU Pack</span>
                </button>
                <button 
                  className="btn-gov btn-gov-outline"
                  onClick={() => navigateTo('for-colleges')}
                  style={{ padding: '12px 24px', fontSize: '0.95rem', background: '#0F2F55', color: '#FFFFFF', borderColor: '#38BDF8' }}
                >
                  <span>College Partnership Guide →</span>
                </button>
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
                  src={collegeLabImg} 
                  alt="Students building prototypes inside Bharat Startup Incubation Cell" 
                  style={{ width: '100%', height: 'auto', maxHeight: '360px', objectFit: 'cover', borderRadius: '2px', display: 'block' }}
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
                      Campus Prototyping Facility
                    </strong>
                    <span style={{ color: '#94A3B8', fontSize: '0.76rem' }}>
                      Tier-1 & Tier-2 Innovation Hubs Deployed in Indian Higher Education
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
                    DEPLOYED MODEL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive on Tier 1 & Tier 2 */}
      <section className="section-pad bg-white">
        <div className="container">
          {/* Tier 1 Detailed Block */}
          <div className="gov-card" style={{ borderTop: '5px solid #0B2545', marginBottom: '40px', padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid var(--border-default)', paddingBottom: '16px', marginBottom: '20px' }}>
              <div>
                <span className="gov-badge navy">Foundational Level · Broad Reach</span>
                <h2 style={{ fontSize: '1.8rem', color: '#0B2545', margin: '4px 0' }}>
                  Tier 1 — Innovation Cell
                </h2>
                <p style={{ fontSize: '1rem', color: '#B45309', fontWeight: 600, margin: 0 }}>
                  For any partner college. Live within weeks, not semesters.
                </p>
              </div>
              <div style={{ background: '#F1F5F9', padding: '8px 16px', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B', display: 'block' }}>Setup Timeline</span>
                <strong style={{ color: '#0B2545' }}>2 to 4 Weeks from MOU</strong>
              </div>
            </div>

            <div className="gov-split-col">
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#0B2545', marginBottom: '12px' }}>
                  What It Includes (BSIC Deliverables):
                </h3>
                <ul className="tier-list">
                  <li>
                    <strong>Dedicated On-Campus Space:</strong> BSIC provides complete room setup blueprints, branding signage standards, and layout guidelines for student interaction.
                  </li>
                  <li>
                    <strong>Trained Student & Faculty Coordinators:</strong> Jointly appointed with the college administration, trained directly on BSIC's event and student mobilization playbooks.
                  </li>
                  <li>
                    <strong>Shared Central Events Calendar:</strong> Pan-network hackathons, ideation sprints, and campus pitch days run centrally across all partner campuses.
                  </li>
                  <li>
                    <strong>Central Mentor Bench:</strong> Regular virtual clinics and AMA sessions with experienced operators and domain experts.
                  </li>
                  <li>
                    <strong>Cross-Disciplinary Light Seed Support:</strong> Micro-grants and resources to launch prototypes. Open to tech, agri-business, retail, vernacular services, and rural social ventures.
                  </li>
                </ul>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid var(--border-default)', padding: '20px', borderRadius: '3px' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#0B2545', marginBottom: '12px' }}>
                  What We Ask of the College:
                </h3>
                <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.9rem', color: '#334155' }}>
                  <li style={{ padding: '6px 0', borderBottom: '1px solid #E2E8F0' }}>
                    <strong>1. Committed Room/Space:</strong> A dedicated physical room (minimum 300–500 sq.ft) with power and internet connectivity.
                  </li>
                  <li style={{ padding: '6px 0', borderBottom: '1px solid #E2E8F0' }}>
                    <strong>2. Two Named Coordinators:</strong> One designated faculty member and one student coordinator (gender-diverse appointment).
                  </li>
                  <li style={{ padding: '6px 0', borderBottom: '1px solid #E2E8F0' }}>
                    <strong>3. Shared Calendar Participation:</strong> Facilitating student participation in network sprints and pitch days.
                  </li>
                  <li style={{ padding: '6px 0' }}>
                    <strong>4. Term Output Reporting:</strong> Basic reporting on teams formed and ideas pitched each academic term.
                  </li>
                </ul>

                <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', padding: '12px', borderRadius: '2px', marginTop: '16px' }}>
                  <strong style={{ fontSize: '0.82rem', color: '#92400E', display: 'block', textTransform: 'uppercase' }}>
                    The Operational Bar:
                  </strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.84rem', color: '#78350F' }}>
                    Every Innovation Cell is expected to produce real, pitched ideas and formed teams each year — not just passive attendance at seminars.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 2 Detailed Block */}
          <div className="gov-card" style={{ borderTop: '5px solid #B45309', padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid var(--border-default)', paddingBottom: '16px', marginBottom: '20px' }}>
              <div>
                <span className="gov-badge">Advanced Incubation · Deep Traction</span>
                <h2 style={{ fontSize: '1.8rem', color: '#0B2545', margin: '4px 0' }}>
                  Tier 2 — Incubation Centre
                </h2>
                <p style={{ fontSize: '1rem', color: '#B45309', fontWeight: 600, margin: 0 }}>
                  For Innovation Cells that prove they can produce real traction.
                </p>
              </div>
              <div style={{ background: '#FFFBEB', padding: '8px 16px', borderRadius: '3px', border: '1px solid #FDE68A' }}>
                <span style={{ fontSize: '0.78rem', color: '#92400E', display: 'block' }}>Selection Mechanism</span>
                <strong style={{ color: '#78350F' }}>Earned by Merit & Traction</strong>
              </div>
            </div>

            <div className="gov-split-col">
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#0B2545', marginBottom: '12px' }}>
                  What It Includes (Advanced Capabilities):
                </h3>
                <ul className="tier-list">
                  <li>
                    <strong>Deeper Ongoing Mentorship:</strong> Direct 1-on-1 operational coaching for venture teams that are past initial validation.
                  </li>
                  <li>
                    <strong>Structured External Funding Pathways:</strong> Introductions to early-stage angel syndicates, micro-VCs, and corporate CSR venture funds.
                  </li>
                  <li>
                    <strong>DPIIT Startup India Advisory:</strong> Guided registration support for formal incorporation, DPIIT recognition certificates, and Section 80-IAC tax exemption filings.
                  </li>
                  <li>
                    <strong>Atal Incubation / ACIC Strategic Alignment:</strong> Mentorship toward Atal Community Innovation Centre (ACIC) and Atal Incubation Centre (AIC) accreditation under NITI Aayog's Atal Innovation Mission.
                  </li>
                  <li>
                    <strong>Priority Access to Centralized Resources:</strong> Access to regional prototype labs, specialized legal advisory, and council Demo Day production.
                  </li>
                </ul>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid var(--border-default)', padding: '20px', borderRadius: '3px' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#0B2545', marginBottom: '8px' }}>
                  How a College Gets Here:
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6, marginBottom: '14px' }}>
                  <strong>Tier 2 isn’t sold — it’s earned.</strong> Cells that consistently produce pitched startups and formed teams at Tier 1 are the ones BSIC moves toward Tier 2 status, with a shared roadmap for what that upgrade requires from the college.
                </p>

                <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '12px', borderRadius: '2px' }}>
                  <strong style={{ fontSize: '0.82rem', color: '#1E40AF', display: 'block' }}>
                    Why ACIC Matters for BSIC Campuses:
                  </strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: '#1E3A8A' }}>
                    ACIC is AIM’s dedicated track specifically designed for underserved and unserved regions — a closer match for most BSIC partner colleges than the capital-intensive metro AIC route.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Events Engine Section */}
      <section className="section-pad bg-light">
        <div className="container">
          <div style={{ width: '100%', margin: '0 auto' }}>
            <span className="gov-badge navy">Funnel Mechanics</span>
            <h2 className="section-title">The Events Engine</h2>
            
            <p className="lead-text" style={{ marginBottom: '20px' }}>
              Across every partner campus, BSIC runs a shared calendar of flagship events — hackathons, ideation sprints, mentor days, and a marquee annual pitch event.
            </p>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
              These aren’t one-offs: they’re the <strong>continuous funnel</strong> that feeds ideas into the tier system, term after term. Because events are run centrally, small-town colleges gain the energy, competitive fire, and corporate visibility of a nationwide competition.
            </p>

            {/* Authentic Hackathon & Pitch Auditorium Image */}
            <div style={{ marginBottom: '32px', background: '#FFFFFF', padding: '8px', border: '1px solid #CBD5E1', borderRadius: '3px', boxShadow: '0 4px 12px rgba(11, 37, 69, 0.06)' }}>
              <img 
                src={hackathonPitchImg} 
                alt="Collegiate hackathon pitch presentation with student founder and academic jury panel in India"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2px' }}
              />
              <div style={{ padding: '10px 14px 6px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', marginTop: '6px' }}>
                <span style={{ fontSize: '0.82rem', color: '#0B2545', fontWeight: 600, display: 'block' }}>
                  BSIC Inter-Collegiate Campus Pitch Sessions & Jury Evaluation
                </span>
                <span style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  Students presenting rural and community enterprise prototypes directly to corporate mentors and incubation committees.
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
              <div className="gov-card">
                <Calendar size={22} color="#0B2545" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '1.05rem', margin: '0 0 6px' }}>Ideation Sprints</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0 }}>
                  Fast-paced 24-hour campus sprints to turn classroom observations and local community problems into structured business concepts.
                </p>
              </div>

              <div className="gov-card">
                <Sparkles size={22} color="#B45309" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '1.05rem', margin: '0 0 6px' }}>Network Hackathons</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0 }}>
                  Multi-campus hackathons uniting technical and non-technical disciplines around real problem statements from industry and public sectors.
                </p>
              </div>

              <div className="gov-card">
                <TrendingUp size={22} color="#138808" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '1.05rem', margin: '0 0 6px' }}>Marquee Annual Pitch Day</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0 }}>
                  The annual showcase connecting the best teams from Tier 1 cells with angel syndicates, CSR sponsors, and national incubation mentors.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <button 
                className="btn-gov btn-gov-primary" 
                style={{ fontSize: '0.95rem', padding: '12px 24px' }}
                onClick={() => navigateTo('for-colleges')}
              >
                <span>See what it takes to bring this to your campus →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Comparison Table */}
      <section className="section-pad bg-white">
        <div className="container">
          <div style={{ width: '100%', margin: '0 auto' }}>
            <span className="gov-badge">Program Specifications</span>
            <h2 className="section-title">Comparative Architecture: Tier 1 vs Tier 2</h2>
            
            <div className="gov-table-wrapper">
              <table className="gov-table">
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>Parameter</th>
                    <th style={{ width: '37.5%' }}>Tier 1: Innovation Cell</th>
                    <th style={{ width: '37.5%' }}>Tier 2: Incubation Centre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Eligibility</strong></td>
                    <td>Any committed college with space & 2 coordinators</td>
                    <td>Cells demonstrating validated venture formation & teams</td>
                  </tr>
                  <tr>
                    <td><strong>Setup Timeline</strong></td>
                    <td>2 – 4 Weeks from MOU execution</td>
                    <td>Upgrade upon 2 terms of verified traction</td>
                  </tr>
                  <tr>
                    <td><strong>Physical Space</strong></td>
                    <td>Designated room (300–500 sq.ft) with basic internet</td>
                    <td>Dedicated innovation space, meeting desk & lab access</td>
                  </tr>
                  <tr>
                    <td><strong>Event Programming</strong></td>
                    <td>Shared calendar of hackathons & ideation sprints</td>
                    <td>Venture acceleration cohorts, investor demo days</td>
                  </tr>
                  <tr>
                    <td><strong>Funding Support</strong></td>
                    <td>Early prototype micro-aid (tech & non-tech)</td>
                    <td>Follow-on capital pipeline, angel pools & CSR seed grants</td>
                  </tr>
                  <tr>
                    <td><strong>Accreditation Goal</strong></td>
                    <td>Foundation for student founder culture</td>
                    <td>DPIIT Startup India, Atal Community Innovation Centre (ACIC)</td>
                  </tr>
                  <tr>
                    <td><strong>Cost to Govt College</strong></td>
                    <td>Underwritten via CSR sponsorship / non-commercial MOU</td>
                    <td>Joint institutional development plan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
