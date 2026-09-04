import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  Search, 
  Globe, 
  Eye, 
  FileText, 
  Menu, 
  X,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { councilInfo, gazetteAnnouncements, translations } from '../data/content';

export default function Header({ 
  currentPage, 
  setCurrentPage, 
  fontSize, 
  setFontSize, 
  highContrast, 
  setHighContrast,
  lang,
  setLang,
  openMOUModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[lang] || translations.en;

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'programs', label: t.nav.programs },
    { id: 'for-colleges', label: t.nav.colleges },
    { id: 'for-sponsors', label: t.nav.sponsors },
    { id: 'resources', label: t.nav.resources },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header role="banner">
      <a href="#main-content" className="skip-link">
        {t.topBar.skipToMain}
      </a>

      {/* Official Tricolor Ribbon */}
      <div className="tricolor-ribbon" aria-hidden="true">
        <div className="stripe-saffron"></div>
        <div className="stripe-white"></div>
        <div className="stripe-green"></div>
      </div>

      {/* Government / Institutional Accessibility Utility Bar */}
      <div className="utility-bar">
        <div className="utility-container">
          <div className="utility-left">
            <span className="gov-flag-badge">
              <ShieldCheck size={14} color="#FF9933" />
              <span>{t.topBar.govFlag}</span>
            </span>
            <span style={{ color: '#486581' }}>|</span>
            <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
              Portal: <strong>bsicindia.com</strong>
            </span>
          </div>

          <div className="utility-right">
            {/* Font Sizing Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{t.topBar.textSize}:</span>
              <button 
                className={`util-btn ${fontSize === 'font-sm' ? 'active' : ''}`}
                onClick={() => setFontSize('font-sm')}
                title="Decrease font size"
                aria-label="Decrease text size"
              >
                A-
              </button>
              <button 
                className={`util-btn ${fontSize === 'font-md' ? 'active' : ''}`}
                onClick={() => setFontSize('font-md')}
                title="Default font size"
                aria-label="Reset text size"
              >
                A
              </button>
              <button 
                className={`util-btn ${fontSize === 'font-lg' ? 'active' : ''}`}
                onClick={() => setFontSize('font-lg')}
                title="Increase font size"
                aria-label="Increase text size"
              >
                A+
              </button>
            </div>

            <span style={{ color: '#486581' }}>|</span>

            {/* Contrast Mode Toggle */}
            <button 
              className={`util-btn ${highContrast ? 'active' : ''}`}
              onClick={() => setHighContrast(!highContrast)}
              title="Toggle high contrast mode"
              aria-label="Toggle High Contrast"
            >
              <Eye size={12} />
              <span>{t.topBar.contrast}</span>
            </button>

            <span style={{ color: '#486581' }}>|</span>

            {/* Language Switcher */}
            <button 
              className="util-btn"
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              title="Change Language"
              aria-label="Switch Language"
            >
              <Globe size={12} />
              <span>{t.topBar.language}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Council Banner Header */}
      <div className="main-header">
        <div className="header-container">
          <a 
            href="#home" 
            className="brand-wrapper" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            aria-label="BSIC India Homepage"
          >
            {/* Institutional Seal / Council Emblem */}
            <div className="council-emblem" aria-hidden="true">
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <circle cx="50" cy="50" r="48" fill="#0B2545" stroke="#B45309" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="43" fill="none" stroke="#FF9933" strokeWidth="1" strokeDasharray="2,2" />
                <circle cx="50" cy="50" r="38" fill="#061528" stroke="#FFFFFF" strokeWidth="1" />
                {/* 24-spoke stylized chakra / gear representing innovation & momentum */}
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
                <path id="curveTop" d="M 18,50 A 32,32 0 0,1 82,50" fill="none" />
                <path id="curveBottom" d="M 82,50 A 32,32 0 0,1 18,50" fill="none" />
                <text fontSize="7" fontWeight="bold" fill="#F1F5F9" letterSpacing="0.8">
                  <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
                    BHARAT STARTUP
                  </textPath>
                </text>
                <text fontSize="6.5" fontWeight="bold" fill="#FDE68A" letterSpacing="0.8">
                  <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
                    INCUBATION COUNCIL
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="brand-text">
              <span className="brand-hindi">{councilInfo.nameHindi}</span>
              <h1 className="brand-english">{councilInfo.nameEnglish}</h1>
              <span className="brand-subtitle">{councilInfo.tagline}</span>
            </div>
          </a>

          {/* Quick Contact & Pilot Info */}
          <div className="header-meta">
            <div className="header-contact-pill">
              <Mail size={16} color="#0B2545" />
              <div>
                <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>College Partnerships</span>
                <strong>{councilInfo.contact.collegeEmail}</strong>
              </div>
            </div>

            <button 
              className="btn-gov btn-gov-gold"
              onClick={openMOUModal}
              style={{ fontSize: '0.82rem', padding: '8px 16px' }}
            >
              <FileText size={15} />
              <span>Download MOU Draft</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (AIM Institutional Style) */}
      <nav className="nav-bar" aria-label="Primary Navigation">
        <div className="nav-container">
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <button
                  className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              className="nav-cta-btn"
              onClick={() => handleNavClick('for-colleges')}
            >
              <span>{t.nav.partnerCTA}</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Official Gazette / Circular Ticker (Auto-Scrolling Right-to-Left Marquee) */}
      <div className="ticker-bar" role="region" aria-label="Official Announcements and Circulars">
        <div className="ticker-container">
          <span className="ticker-badge">LATEST CIRCULARS</span>
          
          <div className="ticker-marquee-wrapper" title="Pause on hover to read or click">
            <div className="ticker-track">
              {/* Primary list */}
              {gazetteAnnouncements.map((item) => (
                <div key={`track-1-${item.id}`} className="ticker-item">
                  <strong style={{ color: '#B45309', marginRight: '6px' }}>[{item.tag}]</strong>
                  <span>{item.text}</span>
                  <button 
                    onClick={() => handleNavClick(item.linkTarget)}
                    aria-label={`View details for ${item.tag}`}
                  >
                    View Details →
                  </button>
                  <span style={{ marginLeft: '24px', color: '#CBD5E1' }}>•</span>
                </div>
              ))}

              {/* Duplicate list for seamless infinite loop */}
              {gazetteAnnouncements.map((item) => (
                <div key={`track-2-${item.id}`} className="ticker-item">
                  <strong style={{ color: '#B45309', marginRight: '6px' }}>[{item.tag}]</strong>
                  <span>{item.text}</span>
                  <button 
                    onClick={() => handleNavClick(item.linkTarget)}
                    aria-label={`View details for ${item.tag}`}
                  >
                    View Details →
                  </button>
                  <span style={{ marginLeft: '24px', color: '#CBD5E1' }}>•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
