import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Compass, 
  FileText, 
  ShieldCheck,
  MapPin,
  TrendingUp,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { statistics } from '../data/content';
import campusInnovationCellImg from '../assets/campus_innovation_cell.jpg';
import studentInnovatorsImg from '../assets/student_innovators_award.jpg';
import csrSummitImg from '../assets/csr_sponsor_summit.jpg';
import CampusCollaborations from '../components/CampusCollaborations';

export default function Home({ navigateTo, openMOUModal, openCSRModal }) {
  return (
    <div id="main-content">
      {/* =====================================================================
          HERO SECTION (AIM / INSTITUTIONAL DIGNIFIED SPLIT BANNER)
          ===================================================================== */}
      <section className="bg-navy-institutional section-pad" style={{ padding: '64px 0 54px' }}>
        <div className="container">
          <div className="gov-split-col" style={{ alignItems: 'center', gap: '40px' }}>
            {/* Left Column: Heading, Value Proposition & Actions */}
            <div>
              <div className="gov-badge" style={{ background: '#1E3A5F', color: '#FDE68A', borderColor: '#B45309', marginBottom: '14px', display: 'inline-flex' }}>
                <ShieldCheck size={14} color="#F59E0B" />
                <span>National Collegiate Innovation Framework · Bharat</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)', fontWeight: 700, lineHeight: 1.2, margin: '12px 0 18px', color: '#FFFFFF' }}>
                Every startup begins somewhere. We build that somewhere on campus.
              </h1>

              <p style={{ fontSize: '1.18rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '28px' }}>
                BSIC partners with colleges across India to run a structured, two-tier innovation program through light-footprint cells that turn students into founders, and dedicated incubation centres that turn the best ideas into companies.
              </p>

              {/* Three Equal-Weight Primary CTAs */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <button 
                  className="btn-gov btn-gov-gold" 
                  style={{ padding: '13px 24px', fontSize: '0.96rem' }}
                  onClick={() => navigateTo('for-colleges')}
                >
                  <GraduationCap size={18} />
                  <span>Partner your college</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  className="btn-gov btn-gov-white" 
                  style={{ padding: '13px 24px', fontSize: '0.96rem' }}
                  onClick={() => navigateTo('for-sponsors')}
                >
                  <Award size={18} color="#0B2545" />
                  <span>Sponsor a campus</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  className="btn-gov btn-gov-outline" 
                  style={{ padding: '13px 22px', fontSize: '0.96rem', background: '#0F2F55', color: '#FFFFFF', borderColor: '#38BDF8' }}
                  onClick={() => navigateTo('programs')}
                >
                  <Layers size={18} />
                  <span>See how it works</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Key Policy Highlights Strip */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '18px', color: '#94A3B8', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>Zero CapEx burden (CSR funded)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>Non-engineering inclusive</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>Tier-2 & Tier-3 priority districts</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Government Banner */}
            <div style={{ position: 'relative' }}>
              <div style={{ 
                background: '#071A31', 
                padding: '8px', 
                border: '1px solid #334E68', 
                borderRadius: '4px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)'
              }}>
                <img 
                  src={studentInnovatorsImg} 
                  alt="Student Innovators at National Startup Council Innovation Awards" 
                  fetchPriority="high"
                  decoding="async"
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
                      National Higher Education Innovation Summit
                    </strong>
                    <span style={{ color: '#94A3B8', fontSize: '0.76rem' }}>
                      Recognizing Collegiate Founders & Campus Innovation Cells Across India
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
                    ANNUAL AWARDS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          VERIFIED PILOT & IMPACT OVERVIEW STRIP
          ===================================================================== */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-default)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {statistics.map((stat, idx) => (
              <div key={idx} style={{ borderLeft: '3px solid #0B2545', paddingLeft: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                  <span style={{ fontSize: '1.65rem', fontWeight: 700, color: '#0B2545' }}>{stat.value}</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, background: '#F1F5F9', color: '#0B2545', padding: '2px 6px', borderRadius: '2px' }}>
                    {stat.badge}
                  </span>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1E293B' }}>{stat.label}</div>
                <div style={{ fontSize: '0.78rem', color: '#64748B' }}>{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: THE PROBLEM, STATED PLAINLY
          ===================================================================== */}
      <section className="section-pad bg-light">
        <div className="container">
          <div className="gov-split-col" style={{ alignItems: 'center', marginBottom: '40px' }}>
            <div>
              <span className="gov-badge navy">Systemic Observation</span>
              <h2 className="section-title">The problem, stated plainly</h2>
              <p className="lead-text" style={{ marginBottom: '18px' }}>
                India has no shortage of ambitious students. What most campuses lack is not talent, but <strong>structure</strong>: a dedicated space, a named coordinator, a funding pathway, and a calendar of events that turns scattered interest into an actual pipeline of startups.
              </p>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
                A handful of states have built this at government scale. Most of India’s colleges have nothing comparable. The outcome? Thousands of high-potential students in tier-2 and tier-3 towns graduate without ever having their ideas stress-tested, mentored, or connected to capital.
              </p>
              
              <div className="gov-alert-box advisory" style={{ margin: 0 }}>
                <strong>The Core Gap:</strong> Most entrepreneurship resources are clustered within metro engineering hubs (IITs, IIMs, elite private colleges). BSIC bridges this divide with a decentralized, ready-to-run campus innovation architecture.
              </div>
            </div>

            {/* Campus Innovation Cell Authentic Photograph */}
            <div style={{ position: 'relative' }}>
              <div style={{ background: '#FFFFFF', padding: '8px', border: '1px solid #CBD5E1', borderRadius: '3px', boxShadow: '0 4px 12px rgba(11, 37, 69, 0.08)' }}>
                <img 
                  src={campusInnovationCellImg} 
                  alt="Students and faculty coordinator collaborating inside a campus innovation cell in India"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2px' }}
                />
                <div style={{ padding: '10px 12px 6px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', marginTop: '6px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#0B2545', fontWeight: 600, display: 'block' }}>
                    Standard On-Campus Innovation Cell (Tier 1 Architecture)
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#64748B' }}>
                    Dedicated collegiate room, co-appointed faculty mentor, and student venture teams.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Comparison Banner */}
          <div className="gov-card" style={{ width: '100%', margin: '0 auto' }}>
            <div style={{ borderBottom: '2px solid #0B2545', paddingBottom: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase' }}>Structural Reality</span>
              <h3 style={{ fontSize: '1.2rem', color: '#0B2545', margin: 0 }}>Where Campus Innovation Stands Today</h3>
            </div>

            <div className="gov-two-col">
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', padding: '14px', borderRadius: '3px' }}>
                <div style={{ fontWeight: 700, color: '#DC2626', fontSize: '0.85rem', marginBottom: '4px' }}>
                  ✕ The Conventional Status Quo
                </div>
                <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.86rem', color: '#7F1D1D' }}>
                  <li style={{ padding: '3px 0' }}>• One-off isolated hackathons that fizzle after 48 hours</li>
                  <li style={{ padding: '3px 0' }}>• No physical room or branded incubation address</li>
                  <li style={{ padding: '3px 0' }}>• Lack of trained student & faculty coordinators</li>
                  <li style={{ padding: '3px 0' }}>• Zero linkage to seed funding, DPIIT, or CSR capital</li>
                </ul>
              </div>

              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '14px', borderRadius: '3px' }}>
                <div style={{ fontWeight: 700, color: '#15803D', fontSize: '0.85rem', marginBottom: '4px' }}>
                  ✓ The BSIC Institutional Model
                </div>
                <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.86rem', color: '#166534' }}>
                  <li style={{ padding: '3px 0' }}>• Dedicated physical space & standard branding</li>
                  <li style={{ padding: '3px 0' }}>• Shared annual events pipeline across partner campuses</li>
                  <li style={{ padding: '3px 0' }}>• Centralized mentor bench & DPIIT recognition roadmap</li>
                  <li style={{ padding: '3px 0' }}>• Quarterly output audit (real startups formed, not just attendance)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: WHAT WE DO (THE TWO-TIER MODEL)
          ===================================================================== */}
      <section className="section-pad bg-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            <span className="gov-badge">Two-Tier Program Architecture</span>
            <h2 className="section-title center">What we do</h2>
            <p className="lead-text">
              BSIC brings a proven two-tier model to any college willing to commit space and a coordinator. We do not ask colleges to become full incubators on day one; instead, we run a progressive, merit-based funnel.
            </p>
          </div>

          <div className="tier-grid">
            {/* Tier 1 Card */}
            <div className="tier-card">
              <div className="tier-header tier-1">
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0B2545', background: '#E2E8F0', padding: '2px 8px', borderRadius: '2px', textTransform: 'uppercase' }}>
                  Foundational Campus Cell
                </span>
                <h3 className="tier-title" style={{ marginTop: '8px' }}>Tier 1: Innovation Cell</h3>
                <p className="tier-subtitle">Cheap to start, fast to launch. Live in weeks, not semesters.</p>
              </div>
              <div className="tier-body">
                <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6, marginBottom: '16px' }}>
                  A dedicated campus space, trained student and faculty coordinators, and a full calendar of hackathons, pitch days, and mentorship sessions. Its job is to surface ideas and build a founder culture on campus.
                </p>

                <strong style={{ fontSize: '0.85rem', color: '#0B2545', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  What It Delivers:
                </strong>
                <ul className="tier-list">
                  <li><strong>Dedicated Space Playbook:</strong> Standard physical room branding and equipment blueprint.</li>
                  <li><strong>Trained Coordinators:</strong> One faculty member and one student coordinator appointed jointly.</li>
                  <li><strong>Shared Events Engine:</strong> Central calendar of hackathons, ideation sprints, and pitch days.</li>
                  <li><strong>Central Mentor Network:</strong> Access to experienced founders and operators.</li>
                  <li><strong>Cross-Disciplinary Seed Aid:</strong> Support for tech, agri-business, retail, services, and social ventures.</li>
                </ul>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  <button 
                    className="btn-gov btn-gov-outline" 
                    style={{ width: '100%' }}
                    onClick={() => navigateTo('programs')}
                  >
                    <span>Explore Tier 1 Specifications →</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tier 2 Card */}
            <div className="tier-card">
              <div className="tier-header tier-2">
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#78350F', background: '#FEF3C7', padding: '2px 8px', borderRadius: '2px', textTransform: 'uppercase' }}>
                  Advanced Incubation Hub
                </span>
                <h3 className="tier-title" style={{ marginTop: '8px' }}>Tier 2: Incubation Centre</h3>
                <p className="tier-subtitle">For colleges whose Tier 1 cell proves it can produce real teams and traction.</p>
              </div>
              <div className="tier-body">
                <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6, marginBottom: '16px' }}>
                  Reserved for high-performing cells. Deeper mentorship, structured funding pathways, and an advisory roadmap toward formal government recognition (DPIIT, Startup India, Atal Incubation Centre status).
                </p>

                <strong style={{ fontSize: '0.85rem', color: '#0B2545', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  What It Delivers:
                </strong>
                <ul className="tier-list">
                  <li><strong>Deep Follow-on Mentorship:</strong> 1-on-1 venture coaching for post-ideation student teams.</li>
                  <li><strong>Structured Capital Pathways:</strong> Direct pipeline to angel syndicates, seed grants, and CSR pools.</li>
                  <li><strong>DPIIT & Startup India Advisory:</strong> Guided registration and tax exemption facilitation.</li>
                  <li><strong>AIC / ACIC Alignment:</strong> Readiness for NITI Aayog's Atal Community Innovation Centre scheme.</li>
                  <li><strong>Centralized Prototype Labs:</strong> Access to testing, legal compliance, and demo day showcases.</li>
                </ul>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  <button 
                    className="btn-gov btn-gov-primary" 
                    style={{ width: '100%' }}
                    onClick={() => navigateTo('programs')}
                  >
                    <span>See Full Program Breakdown →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: WHO WE'RE BUILT FOR
          ===================================================================== */}
      <section className="section-pad bg-light">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="gov-badge navy">Institutional Inclusivity</span>
            <h2 className="section-title center">Who we’re built for</h2>
            <p className="lead-text" style={{ marginBottom: '24px' }}>
              Most of India’s entrepreneurship infrastructure sits in a handful of metro cities and a handful of engineering institutes, such as IITs, IIMs, and the private colleges clustered around them.
            </p>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-default)', borderLeft: '5px solid #B45309', padding: '24px 30px', textAlign: 'left', borderRadius: '3px', margin: '24px 0 32px' }}>
              <p style={{ fontSize: '1.15rem', color: '#0B2545', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                “BSIC is built for everywhere else: government colleges, arts and commerce campuses, and colleges in tier 2 and tier 3 towns that have never had a structured innovation program of their own. Entrepreneurship is not an engineering-only concept; it belongs on every campus, whatever the discipline and whatever the city.”
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
            <div className="gov-card">
              <Building2 size={24} color="#0B2545" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Government Colleges</h3>
              <p style={{ fontSize: '0.88rem', color: '#475569' }}>
                State-run and grant-in-aid institutions seeking structured innovation cells without complex procurement or vendor retainers. Supported via standard MOUs and CSR underwriting.
              </p>
            </div>

            <div className="gov-card">
              <GraduationCap size={24} color="#B45309" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Arts, Commerce & Science</h3>
              <p style={{ fontSize: '0.88rem', color: '#475569' }}>
                Campuses traditionally ignored by tech incubators. Fostering ventures in retail, regional logistics, creative economies, agri-business, and community social enterprises.
              </p>
            </div>

            <div className="gov-card">
              <MapPin size={24} color="#138808" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Tier-2 & Tier-3 Towns</h3>
              <p style={{ fontSize: '0.88rem', color: '#475569' }}>
                District colleges outside the NCR, Bengaluru, Hyderabad, or Mumbai clusters. Unlocking ambitious regional talent that lacks local mentor ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: WHY THIS MODEL (PROVEN PRECEDENT)
          ===================================================================== */}
      <section className="section-pad bg-white">
        <div className="container">
          <div style={{ width: '100%', margin: '0 auto' }}>
            <span className="gov-badge">Evidence & Precedent</span>
            <h2 className="section-title">Why this model</h2>
            
            <p className="lead-text" style={{ marginBottom: '20px' }}>
              This is not an untested concept; it is a proven model. State-run programs in Kerala have shown that a broad, low-cost network of campus cells feeding a smaller number of deep incubators produces real startups at scale, without every college needing to build its own lab or write its own playbook.
            </p>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
              BSIC brings that same structure to colleges that do not have a state program behind them, offering a standardized, ready-to-run institutional alternative.
            </p>

            <div className="gov-alert-box" style={{ background: '#F8FAFC', borderColor: '#0B2545' }}>
              <h4 style={{ fontSize: '1rem', color: '#0B2545', marginBottom: '6px' }}>
                National Alignment with NITI Aayog's AIM Framework
              </h4>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#334155' }}>
                Under Atal Innovation Mission (AIM), initiatives like the <strong>Atal Community Innovation Centres (ACIC)</strong> specifically target unserved and underserved regions. BSIC acts as the decentralized grassroots feeder network that discovers, trains, and matures campus cohorts so they are primed for AIC, ACIC, and DPIIT recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: VERIFIED FIELD TRACK RECORD & CAMPUS COLLABORATIONS
          ===================================================================== */}
      <CampusCollaborations />

      {/* =====================================================================
          SECTION: WHO THIS IS FOR (THREE CLEAR TRACKS)
          ===================================================================== */}
      <section className="section-pad bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px' }}>
            <h2 className="section-title center">Stakeholder Pathways</h2>
            <p className="lead-text">Choose the pathway that matches your institution or corporate mandate.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Colleges Track */}
            <div className="gov-card gold-border">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <Building2 size={24} color="#0B2545" />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Colleges & Principals</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Specifically tailored for government and non-engineering campuses outside major metros seeking an entrepreneurship program without building one from scratch.
              </p>
              <button 
                className="btn-gov btn-gov-primary"
                style={{ width: '100%' }}
                onClick={() => navigateTo('for-colleges')}
              >
                <span>For Colleges Information →</span>
              </button>
            </div>

            {/* Sponsors Track */}
            <div className="gov-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <Award size={24} color="#B45309" />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Companies & CSR Heads</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Companies looking to direct CSR spend toward measurable, education-linked innovation impact under Companies Act Schedule VII.
              </p>
              <button 
                className="btn-gov btn-gov-gold"
                style={{ width: '100%' }}
                onClick={() => navigateTo('for-sponsors')}
              >
                <span>For CSR Sponsors →</span>
              </button>
            </div>

            {/* Students & Mentors Track */}
            <div className="gov-card green-border">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <GraduationCap size={24} color="#138808" />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Students & Mentors</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Aspiring campus founders, student coordinators, and experienced industry mentors who want to get involved directly in grassroots venture creation.
              </p>
              <button 
                className="btn-gov btn-gov-outline"
                style={{ width: '100%' }}
                onClick={() => navigateTo('contact')}
              >
                <span>Get Involved Directly →</span>
              </button>
            </div>
          </div>

          {/* CSR Corporate Sponsorship Feature Banner */}
          <div style={{ 
            marginTop: '40px', 
            background: '#FFFFFF', 
            border: '1px solid #CBD5E1', 
            borderRadius: '4px', 
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(11, 37, 69, 0.06)'
          }}>
            <div className="gov-split-col" style={{ alignItems: 'center' }}>
              <div style={{ padding: '36px 32px' }}>
                <span className="gov-badge navy">Companies Act Schedule VII Aligned</span>
                <h3 style={{ fontSize: '1.45rem', color: '#0B2545', margin: '8px 0 12px', fontWeight: 700 }}>
                  Measurable, Transparent CSR Capital Deployment
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.65, marginBottom: '20px' }}>
                  BSIC connects corporate CSR committees directly with vetted collegiate startup cells. Fund prototyping grants, maker spaces, and student hackathons in tier-2/3 districts with milestone-based auditing and Section 135 compliance reporting.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button 
                    className="btn-gov btn-gov-gold"
                    onClick={openCSRModal}
                    style={{ fontSize: '0.9rem', padding: '10px 20px' }}
                  >
                    <Award size={16} />
                    <span>Download CSR Sponsor Deck</span>
                  </button>
                  <button 
                    className="btn-gov btn-gov-outline"
                    onClick={() => navigateTo('for-sponsors')}
                    style={{ fontSize: '0.9rem', padding: '10px 20px' }}
                  >
                    <span>Explore Sponsor Tier Options →</span>
                  </button>
                </div>
              </div>

              <div style={{ position: 'relative', minHeight: '320px' }}>
                <img 
                  src={csrSummitImg} 
                  alt="Corporate-Academic Summit and Green-Tech Startup Expo" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  background: 'linear-gradient(to top, rgba(11, 37, 69, 0.95), transparent)', 
                  padding: '24px 20px 14px',
                  color: '#FFFFFF' 
                }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FDE68A' }}>
                    Corporate-Academic Innovation Summit
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#CBD5E1', display: 'block', marginTop: '2px' }}>
                    Industry leaders reviewing student prototypes and agri-tech innovations.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION: CLOSING CALL TO ACTION
          ===================================================================== */}
      <section className="bg-navy-institutional section-pad" style={{ textAlign: 'center', padding: '50px 0' }}>
        <div className="container" style={{ maxWidth: '1050px' }}>
          <h2 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '14px' }}>
            Ready to bring a startup pipeline to your campus?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#CBD5E1', marginBottom: '28px' }}>
            Join the pilot cohort for 2026-27. We establish the physical cell, appoint coordinators, and deploy the events calendar within weeks.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              className="btn-gov btn-gov-gold"
              style={{ fontSize: '1rem', padding: '12px 28px' }}
              onClick={() => navigateTo('contact')}
            >
              <span>Talk to us →</span>
            </button>
            <button 
              className="btn-gov btn-gov-white"
              style={{ fontSize: '1rem', padding: '12px 28px' }}
              onClick={openMOUModal}
            >
              <FileText size={16} />
              <span>Request Bilateral MOU Pack</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
