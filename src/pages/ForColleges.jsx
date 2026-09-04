import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Calendar, 
  BookOpen, 
  Award,
  HelpCircle,
  Check
} from 'lucide-react';
import mouSigningImg from '../assets/mou_signing_ceremony.jpg';
import collegeLabImg from '../assets/college_incubation_lab.jpg';
import CampusCollaborations from '../components/CampusCollaborations';

export default function ForColleges({ navigateTo, openMOUModal }) {
  return (
    <div id="main-content">
      {/* Page Header Banner (Institutional Two-Column Split with Official Image) */}
      <section className="bg-navy-institutional" style={{ padding: '56px 0 48px', borderBottom: '1px solid #1E3A5F' }}>
        <div className="container">
          <div className="gov-split-col" style={{ alignItems: 'center', gap: '40px' }}>
            {/* Left Content Column */}
            <div>
              <span className="gov-badge" style={{ background: '#1E3A5F', color: '#FDE68A', borderColor: '#B45309', marginBottom: '14px', display: 'inline-flex' }}>
                Institutional Partnership Framework · For Principals & Management
              </span>
              <h1 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', fontWeight: 700, margin: '12px 0 16px', color: '#FFFFFF', lineHeight: 1.2 }}>
                An entrepreneurship program you don’t have to build yourself.
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '24px' }}>
                Your students already have the ideas — whatever your discipline, whatever your city. BSIC brings the structure — space setup, trained coordinators, a full events calendar, and a funding pathway — so your college doesn’t have to staff or design it from scratch.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <button 
                  className="btn-gov btn-gov-gold"
                  style={{ padding: '12px 24px', fontSize: '0.95rem' }}
                  onClick={openMOUModal}
                >
                  <FileText size={16} />
                  <span>Request Bilateral MOU Pack</span>
                </button>
                <button 
                  className="btn-gov btn-gov-outline"
                  style={{ padding: '12px 24px', fontSize: '0.95rem', background: '#0F2F55', color: '#FFFFFF', borderColor: '#38BDF8' }}
                  onClick={() => {
                    const el = document.getElementById('how-it-starts');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>4-Step Onboarding Roadmap ↓</span>
                </button>
              </div>

              {/* Institutional Assurance Strip */}
              <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '16px', fontSize: '0.85rem', color: '#94A3B8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>Zero CapEx Burden (CSR Underwritten)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>Governing Body & Resolution Compliant</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>Standard Non-Commercial Bilateral MoU</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Government/Institutional Photo Banner */}
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
                  alt="Official Bilateral MOU Execution between Principal and Bharat Startup Incubation Council" 
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
                      Official Bilateral MoU Execution Framework
                    </strong>
                    <span style={{ color: '#94A3B8', fontSize: '0.76rem' }}>
                      Institutional Council Delegation & Principal Signatory Protocol
                    </span>
                  </div>
                  <span style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    color: '#FDE68A', 
                    background: '#1E3A5F', 
                    padding: '3px 8px', 
                    borderRadius: '2px',
                    letterSpacing: '0.04em'
                  }}>
                    REF: BSIC-MOU-2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built Especially For Section — Expanded Full Width Layout */}
      <section className="section-pad bg-white">
        <div className="container">
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <div>
                <span className="gov-badge navy">Institutional Inclusivity Focus</span>
                <h2 className="section-title" style={{ margin: '4px 0 0 0' }}>Built Especially For</h2>
              </div>
              <span style={{ fontSize: '0.92rem', color: '#475569', fontWeight: 600 }}>
                Tailored for campuses outside the Tier-1 metro engineering clusters
              </span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
              {/* Government Colleges Card */}
              <div className="gov-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '52px', height: '52px', background: '#F1F5F9', border: '1px solid #CBD5E1', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Building2 size={26} color="#0B2545" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Track 01</span>
                    <h3 style={{ fontSize: '1.3rem', color: '#0B2545', margin: 0 }}>
                      Government Colleges
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, marginBottom: '18px' }}>
                  Institutions running their first structured innovation program. Specially calibrated to operate within government governance procedures, committee approvals, and standard non-commercial MOUs.
                </p>

                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '14px 16px', borderRadius: '3px', marginTop: 'auto' }}>
                  <strong style={{ fontSize: '0.82rem', color: '#0B2545', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Key Institutional Features:
                  </strong>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, fontSize: '0.86rem', color: '#334155' }}>
                    <li style={{ padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="#15803D" />
                      <span>Zero strain on state budget (CSR underwritten setup)</span>
                    </li>
                    <li style={{ padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="#15803D" />
                      <span>Governing Body & Principal approval resolution template</span>
                    </li>
                    <li style={{ padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="#15803D" />
                      <span>Formal term output reporting for collegiate directorates</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Arts, Commerce & Science Card */}
              <div className="gov-card gold-border" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '52px', height: '52px', background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GraduationCap size={26} color="#B45309" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#B45309', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Track 02</span>
                    <h3 style={{ fontSize: '1.3rem', color: '#0B2545', margin: 0 }}>
                      Arts, Commerce & Science
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, marginBottom: '18px' }}>
                  Entrepreneurship is fundamentally not an engineering-only discipline. BSIC surfaces non-tech ventures in trade, regional logistics, vernacular services, retail solutions, and creative economies.
                </p>

                <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', padding: '14px 16px', borderRadius: '3px', marginTop: 'auto' }}>
                  <strong style={{ fontSize: '0.82rem', color: '#92400E', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Key Institutional Features:
                  </strong>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, fontSize: '0.86rem', color: '#78350F' }}>
                    <li style={{ padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="#B45309" />
                      <span>Dedicated tracks for retail, agri, logistics & social ventures</span>
                    </li>
                    <li style={{ padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="#B45309" />
                      <span>Cross-disciplinary student teams (arts + commerce + science)</span>
                    </li>
                    <li style={{ padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="#B45309" />
                      <span>Early seed-stage micro grants across all domain categories</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tier-2 & Tier-3 Towns Card */}
              <div className="gov-card green-border" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '52px', height: '52px', background: '#DCFCE7', border: '1px solid #BBF7D0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={26} color="#15803D" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#15803D', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Track 03</span>
                    <h3 style={{ fontSize: '1.3rem', color: '#0B2545', margin: 0 }}>
                      Tier-2 & Tier-3 Towns
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, marginBottom: '18px' }}>
                  District colleges located far from metro startup hubs. BSIC bridges geographic isolation by plugging your campus directly into a national mentor network and multi-city hackathon engine.
                </p>

                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '14px 16px', borderRadius: '3px', marginTop: 'auto' }}>
                  <strong style={{ fontSize: '0.82rem', color: '#166534', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Key Institutional Features:
                  </strong>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, fontSize: '0.86rem', color: '#166534' }}>
                    <li style={{ padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="#15803D" />
                      <span>Direct video clinics with top industry operators & founders</span>
                    </li>
                    <li style={{ padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="#15803D" />
                      <span>Pan-India exposure for grassroots innovations & regional startups</span>
                    </li>
                    <li style={{ padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="#15803D" />
                      <span>Atal Community Innovation Centre (ACIC) accreditation roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Turnkey Campus Infrastructure Showcase Banner */}
            <div style={{ 
              marginTop: '44px', 
              background: '#F8FAFC', 
              border: '1px solid #CBD5E1', 
              borderRadius: '4px', 
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(11, 37, 69, 0.06)'
            }}>
              <div className="gov-split-col" style={{ alignItems: 'stretch' }}>
                <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span className="gov-badge navy" style={{ margin: 0 }}>On-Campus Physical Infrastructure</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#15803D', background: '#DCFCE7', padding: '3px 8px', borderRadius: '2px' }}>
                      Zero Capital Outlay
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: '#0B2545', margin: '4px 0 12px', fontWeight: 700 }}>
                    Standardized Campus Prototyping & Incubation Cell
                  </h3>
                  <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.65, marginBottom: '22px' }}>
                    BSIC brings end-to-end turnkey infrastructure to your campus. From student prototyping workbenches and testing kits to certified coordinator training and scheduled national hackathons — everything is structured to operate within existing college premises with zero design burden on college administration.
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '22px' }}>
                    <div style={{ background: '#FFFFFF', padding: '14px 16px', border: '1px solid #E2E8F0', borderRadius: '4px' }}>
                      <strong style={{ display: 'block', color: '#0B2545', fontSize: '0.88rem', marginBottom: '4px' }}>
                        1. Prototyping & Hardware
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4, display: 'block' }}>
                        Microcontrollers, 3D printing tools, electronics workbench & testing suites.
                      </span>
                    </div>

                    <div style={{ background: '#FFFFFF', padding: '14px 16px', border: '1px solid #E2E8F0', borderRadius: '4px' }}>
                      <strong style={{ display: 'block', color: '#0B2545', fontSize: '0.88rem', marginBottom: '4px' }}>
                        2. Faculty Coordinator Training
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4, display: 'block' }}>
                        Council-certified faculty training, semester pedagogy, and syllabus integration.
                      </span>
                    </div>

                    <div style={{ background: '#FFFFFF', padding: '14px 16px', border: '1px solid #E2E8F0', borderRadius: '4px' }}>
                      <strong style={{ display: 'block', color: '#0B2545', fontSize: '0.88rem', marginBottom: '4px' }}>
                        3. Annual Hackathon Calendar
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4, display: 'block' }}>
                        Ready-to-run 12-month calendar of workshops, bootcamps, and inter-collegiate demo days.
                      </span>
                    </div>

                    <div style={{ background: '#FFFFFF', padding: '14px 16px', border: '1px solid #E2E8F0', borderRadius: '4px' }}>
                      <strong style={{ display: 'block', color: '#0B2545', fontSize: '0.88rem', marginBottom: '4px' }}>
                        4. Seed Grants & CSR Linkage
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4, display: 'block' }}>
                        Direct institutional pipeline to corporate CSR innovation funding and angel syndicates.
                      </span>
                    </div>
                  </div>

                  <div>
                    <button 
                      className="btn-gov btn-gov-gold"
                      onClick={openMOUModal}
                      style={{ fontSize: '0.9rem', padding: '10px 20px' }}
                    >
                      <FileText size={15} />
                      <span>Download Infrastructure & MoU Kit</span>
                    </button>
                  </div>
                </div>

                <div style={{ position: 'relative', minHeight: '360px' }}>
                  <img 
                    src={collegeLabImg} 
                    alt="Active Bharat Startup Incubation Lab with Students and Faculty Coordinator" 
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FDE68A' }}>
                        Campus Innovation Model Hub
                      </span>
                      <span style={{ fontSize: '0.74rem', background: '#B45309', padding: '2px 8px', borderRadius: '2px', color: '#FFFFFF', fontWeight: 700 }}>
                        AIM Benchmarked
                      </span>
                    </div>
                    <span style={{ fontSize: '0.78rem', color: '#CBD5E1', display: 'block', marginTop: '2px' }}>
                      Standardized multidisciplinary workspace deployed at partner colleges.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your College Gets vs What We Ask */}
      <section className="section-pad bg-light">
        <div className="container">
          <div className="gov-split-col">
            {/* What College Gets */}
            <div>
              <span className="gov-badge">Institutional Value Proposition</span>
              <h2 className="section-title">What your college gets</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                <div className="gov-card" style={{ padding: '18px 20px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0B2545', marginBottom: '4px' }}>
                    1. A ready-made playbook, not a blank page
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0 }}>
                    Coordinator role definitions, physical space blueprints, and an annual program calendar you don’t have to design or staff from scratch.
                  </p>
                </div>

                <div className="gov-card" style={{ padding: '18px 20px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0B2545', marginBottom: '4px' }}>
                    2. A shared events pipeline
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0 }}>
                    Your students plug into a calendar of hackathons and pitch days run across all BSIC partner campuses — more energy, more visibility, more competition than a standalone college event can generate alone.
                  </p>
                </div>

                <div className="gov-card" style={{ padding: '18px 20px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0B2545', marginBottom: '4px' }}>
                    3. A curated mentor network
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0 }}>
                    An established network of industry operators, venture advisors, and functional experts your college doesn’t have to recruit or manage independently.
                  </p>
                </div>

                <div className="gov-card" style={{ padding: '18px 20px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0B2545', marginBottom: '4px' }}>
                    4. A structured growth path to Tier 2
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0 }}>
                    Cells that perform can be moved toward a deeper Incubation Centre tier, with structured funding pathways and DPIIT/ACIC formal recognition support.
                  </p>
                </div>

                <div className="gov-card" style={{ padding: '18px 20px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0B2545', marginBottom: '4px' }}>
                    5. Accountability on both sides
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0 }}>
                    BSIC reports on activity and output every term, so your administration always knows exactly what the program is producing in tangible student ventures.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Ask & Government College Specifics */}
            <div>
              <span className="gov-badge navy">Institutional Commitment</span>
              <h2 className="section-title">What we ask from your college</h2>

              <div className="gov-card" style={{ marginBottom: '24px' }}>
                <ul className="tier-list" style={{ margin: 0 }}>
                  <li>
                    <strong>Dedicated Space:</strong> A physical room on campus for the cell, properly signed, branded, and accessible to students.
                  </li>
                  <li>
                    <strong>Two Named Coordinators:</strong> One faculty coordinator and one student coordinator, adhering to a gender-diverse coordinator structure.
                  </li>
                  <li>
                    <strong>Calendar Participation:</strong> Active participation in the centrally scheduled hackathons, pitch sprints, and mentor clinics.
                  </li>
                  <li>
                    <strong>Funding Mechanism:</strong> A modest setup and retainer arrangement — or, for eligible government colleges, a <strong>CSR-sponsored setup at no direct cost to the college</strong>.
                  </li>
                </ul>
              </div>

              {/* Special Box for Government Colleges */}
              <div className="gov-alert-box advisory" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#78350F', marginBottom: '8px' }}>
                  For Government Colleges Specifically
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#451A03', lineHeight: 1.65, margin: 0 }}>
                  We know government colleges don’t operate like private engineering colleges — approvals run through a Principal and governing body, budgets are earmarked, and paying a private vendor a retainer isn’t always straightforward. 
                </p>
                <div style={{ marginTop: '12px', background: '#FFFFFF', padding: '12px', borderRadius: '2px', border: '1px solid #FCD34D' }}>
                  <strong style={{ fontSize: '0.84rem', color: '#0B2545' }}>The Bilateral MOU Pathway:</strong>
                  <p style={{ fontSize: '0.82rem', color: '#334155', margin: '4px 0 0 0' }}>
                    BSIC’s model is built to work within that: most government-college partnerships run as a <strong>standard non-commercial MOU</strong>, with the cell’s setup and running costs covered by a CSR sponsor rather than billed to the college.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Starts: 4-Step Onboarding Process */}
      <section className="section-pad bg-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <span className="gov-badge">Implementation Protocol</span>
            <h2 className="section-title center">How it starts</h2>
            <p className="lead-text">
              A disciplined, four-stage onboarding sequence to activate your campus innovation cell.
            </p>
          </div>

          <div className="steps-row">
            <div className="step-box">
              <div className="step-num">1</div>
              <h3 className="step-title">Conversation</h3>
              <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                We understand your campus profile, student body, existing entrepreneurship activity (if any), and what space and faculty staff you can commit.
              </p>
            </div>

            <div className="step-box">
              <div className="step-num">2</div>
              <h3 className="step-title">Setup</h3>
              <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                We help stand up the physical space with official BSIC branding, appoint and train coordinators, and place your first events on the shared calendar.
              </p>
            </div>

            <div className="step-box">
              <div className="step-num">3</div>
              <h3 className="step-title">Run</h3>
              <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Your cell goes live. Students participate in pan-network hackathons, ideation sprints, and mentor clinics — all coordinated directly with BSIC support.
              </p>
            </div>

            <div className="step-box">
              <div className="step-num">4</div>
              <h3 className="step-title">Review</h3>
              <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Each term, we review what the cell has produced together (ideas, formed teams, pitches) and plan the next step — including a path to Tier 2 if the cell is performing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Field Track Record & Precedent Campuses */}
      <CampusCollaborations initialFilter="Regional" />

      {/* Closing CTA Box */}
      <section className="bg-white" style={{ padding: '0 0 60px' }}>
        <div className="container">
          <div style={{ background: '#0B2545', color: '#FFFFFF', padding: '36px', borderRadius: '3px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', margin: '0 0 6px' }}>
                Want to bring this to your campus?
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#CBD5E1', margin: 0 }}>
                Join the 2026-27 Pilot Cohort. Connect with the Council Secretariat to initiate an institutional discussion.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                className="btn-gov btn-gov-gold"
                style={{ fontSize: '0.92rem', padding: '12px 24px' }}
                onClick={() => navigateTo('contact')}
              >
                <span>Start a conversation →</span>
              </button>
              <button 
                className="btn-gov btn-gov-white"
                style={{ fontSize: '0.92rem', padding: '12px 24px' }}
                onClick={openMOUModal}
              >
                <FileText size={16} />
                <span>Download MOU Pack</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
