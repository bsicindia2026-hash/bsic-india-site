import React from 'react';
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Zap, 
  Scale, 
  Share2, 
  Users, 
  Calendar, 
  ArrowRight, 
  FileCheck,
  Award
} from 'lucide-react';
import mouSigningImg from '../assets/mou_signing_ceremony.jpg';

import campusInnovationCellImg from '../assets/campus_innovation_cell.jpg';
import CampusCollaborations from '../components/CampusCollaborations';

export default function About({ navigateTo, openMOUModal }) {
  return (
    <div id="main-content">
      {/* Page Header Banner (Institutional Two-Column Split) */}
      <section className="bg-navy-institutional" style={{ padding: '54px 0 46px', borderBottom: '1px solid #1E3A5F' }}>
        <div className="container">
          <div className="gov-split-col" style={{ alignItems: 'center', gap: '40px' }}>
            {/* Left Content */}
            <div>
              <span className="gov-badge" style={{ background: '#1E3A5F', color: '#FDE68A', borderColor: '#B45309', marginBottom: '14px', display: 'inline-flex' }}>
                Institutional Charter & Council Profile · Bharat
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, margin: '10px 0 16px', color: '#FFFFFF', lineHeight: 1.25 }}>
                Built to be the missing layer between campuses and companies.
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '24px' }}>
                Bharat Startup Incubation Council (BSIC) is an autonomous institutional body establishing standardized, low-footprint campus innovation cells and deep incubators across India's underserved collegiate institutions.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  className="btn-gov btn-gov-gold"
                  onClick={() => navigateTo('for-colleges')}
                  style={{ padding: '12px 24px', fontSize: '0.95rem' }}
                >
                  <Building2 size={16} />
                  <span>Explore College Partnerships</span>
                </button>
                <button 
                  className="btn-gov btn-gov-outline"
                  onClick={openMOUModal}
                  style={{ padding: '12px 24px', fontSize: '0.95rem', background: '#0F2F55', color: '#FFFFFF', borderColor: '#38BDF8' }}
                >
                  <FileCheck size={16} />
                  <span>Download Council Charter & MoU</span>
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
                  src={mouSigningImg} 
                  alt="Bharat Startup Incubation Council Charter Signing Ceremony" 
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
                      Institutional Council Governance
                    </strong>
                    <span style={{ color: '#94A3B8', fontSize: '0.76rem' }}>
                      Standardized Bilateral Agreements for Collegiate Higher Education
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
                    COUNCIL CHARTER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section (Full-Width Responsive Split Layout) */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="gov-split-col" style={{ alignItems: 'flex-start', gap: '48px' }}>
            {/* Left Narrative Column */}
            <div>
              <span className="gov-badge navy">Origin & Context</span>
              <h2 className="section-title">The Story</h2>
              
              <p className="lead-text" style={{ marginBottom: '18px' }}>
                BSIC — the <strong>Bharat Startup Incubation Council</strong> — started from a simple observation: India’s most effective startup ecosystems aren’t built city by city, they’re built <strong>campus by campus</strong>.
              </p>

              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '18px' }}>
                States that have invested in structured, college-level innovation cells have produced disproportionate numbers of real startups, real founders, and real jobs — not because their students are different, but because they gave those students a system: <strong>a space, a coordinator, a calendar, and a funding path</strong>.
              </p>

              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '22px' }}>
                Look at where that kind of system actually exists today, and it clusters hard: a handful of metro cities, a handful of engineering institutes and IIT/IIM-affiliated incubators. Government colleges, arts and commerce campuses, and colleges outside the major metros are mostly left out — not because their students want it less, but because nobody has built the system for them.
              </p>

              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '22px' }}>
                That system is a full-time job most colleges can’t staff on their own — the playbook, the mentor network, the events engine, the reporting structure. 
              </p>

              <div style={{ background: '#0B2545', color: '#FFFFFF', padding: '20px 24px', borderRadius: '4px', borderLeft: '5px solid #F59E0B' }}>
                <p style={{ margin: 0, fontSize: '1.08rem', fontWeight: 600, lineHeight: 1.6 }}>
                  BSIC exists to be that full-time job, so colleges don’t have to build it themselves.
                </p>
              </div>
            </div>

            {/* Right Column: Comparative Analysis & Model Center Visual */}
            <div>
              <div className="gov-alert-box advisory" style={{ margin: '0 0 24px 0', borderLeft: '4px solid #B45309' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <ShieldCheck size={20} color="#B45309" />
                  <h3 style={{ fontSize: '1.05rem', color: '#78350F', margin: 0 }}>
                    The Institutional Gap in Grassroots Incubation
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#451A03', lineHeight: 1.65 }}>
                  Even the central government’s own program for underserved regions — AIM’s Atal Community Innovation Centre (ACIC) track — is a narrow, deep-tier layer: a few dozen centres nationally, not a broad campus-level network. Nobody has built the broad, low-cost feeder layer for these colleges. <strong>That’s the gap BSIC fills.</strong>
                </p>
              </div>

              {/* Photo Card: Active District-Level Model Center */}
              <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 14px rgba(11, 37, 69, 0.08)' }}>
                <img 
                  src={campusInnovationCellImg} 
                  alt="Model Campus Innovation Cell Deployed in Tier-2/3 District" 
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ color: '#0B2545', fontSize: '0.92rem' }}>
                      Grassroots Collegiate Feeder Model
                    </strong>
                    <span style={{ fontSize: '0.72rem', background: '#DCFCE7', color: '#166534', fontWeight: 700, padding: '2px 8px', borderRadius: '2px' }}>
                      READY-TO-RUN
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.55, margin: 0 }}>
                    Standardized room blueprint, certified faculty mentor, and pre-scheduled national hackathons deployed directly on campus premises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe (Core Institutional Principles) */}
      <section className="section-pad bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <span className="gov-badge">Foundational Tenets</span>
            <h2 className="section-title center">What we believe</h2>
            <p className="lead-text">
              Four non-negotiable principles that guide our program design, institutional partnerships, and campus governance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {/* Principle 1 */}
            <div className="gov-card">
              <div className="step-num" style={{ background: '#0B2545' }}>1</div>
              <h3 style={{ fontSize: '1.15rem', color: '#0B2545', marginBottom: '10px' }}>Structure beats inspiration</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65 }}>
                A single hackathon doesn’t build a startup culture. A dedicated space, a named coordinator, and a recurring calendar does. Long-term systemic consistency outperforms isolated episodic enthusiasm.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="gov-card gold-border">
              <div className="step-num" style={{ background: '#B45309' }}>2</div>
              <h3 style={{ fontSize: '1.15rem', color: '#0B2545', marginBottom: '10px' }}>Every cell should earn its keep</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65 }}>
                We hold every partner campus to the same bar: real output, not just activity. If a cell isn’t producing ideas, formed teams, and viable venture pitches, we fix it or we don’t renew it.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="gov-card">
              <div className="step-num" style={{ background: '#0B2545' }}>3</div>
              <h3 style={{ fontSize: '1.15rem', color: '#0B2545', marginBottom: '10px' }}>Capital isn’t the hard part — the system is</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65 }}>
                Plenty of capital is looking for good student startups. What’s missing is the pipeline that gets ideas to a fundable stage. That structured, de-risked feeder pipeline is what we build.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="gov-card green-border">
              <div className="step-num" style={{ background: '#138808' }}>4</div>
              <h3 style={{ fontSize: '1.15rem', color: '#0B2545', marginBottom: '10px' }}>Shared infrastructure, not duplicated cost</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65 }}>
                No college needs its own fabrication lab, legal compliance department, or mentor bench. We centralize the expensive parts and let every partner campus plug in seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & The Events Engine (Full Width 2-Column Responsive Grid) */}
      <section className="section-pad bg-white">
        <div className="container">
          <div style={{ marginBottom: '28px' }}>
            <span className="gov-badge navy">Council Operational Leadership</span>
            <h2 className="section-title" style={{ margin: '4px 0 0 0' }}>Who’s behind it</h2>
          </div>

          <div className="gov-split-col" style={{ alignItems: 'stretch', gap: '32px' }}>
            {/* Primary Leadership Card */}
            <div className="gov-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderTop: '4px solid #0B2545' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '18px' }}>
                <div style={{ position: 'relative', width: '96px', height: '96px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #D97706', flexShrink: 0, boxShadow: '0 4px 12px rgba(11, 37, 69, 0.25)' }}>
                  <img 
                    src="/collaborations/saran_1.jpg" 
                    alt="Saran - Founder & Director, Bharat Startup Incubation Council" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.76rem', color: '#B45309', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Founder & Director
                    </span>
                    <span style={{ fontSize: '0.72rem', background: '#FEF3C7', color: '#92400E', padding: '2px 8px', borderRadius: '3px', fontWeight: 700, border: '1px solid #FDE68A' }}>
                      75+ Campus Hackathons
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: '#0B2545', margin: '0 0 4px', fontWeight: 700 }}>
                    Saran
                  </h3>
                  <span style={{ fontSize: '0.84rem', color: '#64748B' }}>Grassroots Student Mobilization & Incubator Operations</span>
                </div>
              </div>

              <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.7, margin: 0 }}>
                BSIC is led by <strong>Saran</strong>, who has run <strong>75+ hackathons and campus innovation events across India</strong> — the exact events-as-pipeline engine this program is built around. Having organized grassroots sprints across diverse technical and non-technical institutes, the leadership brings first-hand operational playbooks for student mobilization, mentor bench coordination, and founder incubation.
              </p>
            </div>

            {/* Execution Capabilities Matrix */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '18px', borderRadius: '3px' }}>
                <strong style={{ display: 'block', color: '#0B2545', fontSize: '0.92rem', marginBottom: '4px' }}>
                  1. Hackathon Pipeline
                </strong>
                <span style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5, display: 'block' }}>
                  Standardized 36-hour sprint format with problem statements from regional industry.
                </span>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '18px', borderRadius: '3px' }}>
                <strong style={{ display: 'block', color: '#0B2545', fontSize: '0.92rem', marginBottom: '4px' }}>
                  2. Bilateral MoU Liaison
                </strong>
                <span style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5, display: 'block' }}>
                  Standardized government-compliant agreement templates for Principals and Governing Bodies.
                </span>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '18px', borderRadius: '3px' }}>
                <strong style={{ display: 'block', color: '#0B2545', fontSize: '0.92rem', marginBottom: '4px' }}>
                  3. Industry Mentor Bench
                </strong>
                <span style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5, display: 'block' }}>
                  Over 100+ vetted founders, CTOs, and investors available for scheduled campus review sessions.
                </span>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '18px', borderRadius: '3px' }}>
                <strong style={{ display: 'block', color: '#0B2545', fontSize: '0.92rem', marginBottom: '4px' }}>
                  4. CSR Fund Integration
                </strong>
                <span style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5, display: 'block' }}>
                  Direct institutional conduit to corporate CSR under Schedule VII Item (ii) & (ix).
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified On-Ground Campus Collaborations & Hackathon Track Record */}
      <CampusCollaborations />

      {/* Where We're Headed (Strategic Pilot Roadmap - Full Width Split) */}
      <section className="section-pad bg-light">
        <div className="container">
          <div className="gov-split-col" style={{ alignItems: 'center', gap: '40px' }}>
            {/* Left Column: Narrative & Action */}
            <div>
              <span className="gov-badge">Strategic Pilot Roadmap</span>
              <h2 className="section-title">Where we’re headed</h2>

              <p className="lead-text" style={{ marginBottom: '18px' }}>
                BSIC is deliberately starting outside the metro, engineering-college mainstream.
              </p>

              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '24px' }}>
                The first cohort of partner colleges prioritizes government and non-engineering campuses in tier-2 and tier-3 towns — places with real student ambition and no existing structure to channel it. 
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  className="btn-gov btn-gov-primary"
                  onClick={() => navigateTo('for-colleges')}
                  style={{ padding: '12px 24px' }}
                >
                  <span>Partner with us →</span>
                </button>
                <button 
                  className="btn-gov btn-gov-gold"
                  onClick={openMOUModal}
                  style={{ padding: '12px 24px' }}
                >
                  <span>Download Bilateral MOU Draft</span>
                </button>
              </div>
            </div>

            {/* Right Column: Proof of Model Card & 4-Phase Rollout */}
            <div>
              <div className="gov-card" style={{ background: '#FFFFFF', borderLeft: '5px solid #138808', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <FileCheck size={22} color="#138808" />
                  <h3 style={{ fontSize: '1.18rem', color: '#0B2545', margin: 0 }}>
                    Proof of Model: The 3 to 5 Campus Pilot Cohort
                  </h3>
                </div>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, marginBottom: '20px' }}>
                  The near-term goal isn’t scale for its own sake — it’s proving the model works end to end at <strong>three to five pilot campuses</strong> before expanding across regional clusters. This disciplined approach guarantees individual faculty mentorship, tight milestone monitoring, and validated venture formation.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                  <div style={{ background: '#F8FAFC', padding: '10px 12px', borderRadius: '3px' }}>
                    <span style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 700, display: 'block' }}>PHASE 01</span>
                    <strong style={{ fontSize: '0.84rem', color: '#0B2545' }}>MOU & Space Setup</strong>
                  </div>
                  <div style={{ background: '#F8FAFC', padding: '10px 12px', borderRadius: '3px' }}>
                    <span style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 700, display: 'block' }}>PHASE 02</span>
                    <strong style={{ fontSize: '0.84rem', color: '#0B2545' }}>Coordinator Training</strong>
                  </div>
                  <div style={{ background: '#F8FAFC', padding: '10px 12px', borderRadius: '3px' }}>
                    <span style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 700, display: 'block' }}>PHASE 03</span>
                    <strong style={{ fontSize: '0.84rem', color: '#0B2545' }}>Campus Hackathons</strong>
                  </div>
                  <div style={{ background: '#F8FAFC', padding: '10px 12px', borderRadius: '3px' }}>
                    <span style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 700, display: 'block' }}>PHASE 04</span>
                    <strong style={{ fontSize: '0.84rem', color: '#0B2545' }}>Tier-2 Incubation</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
