import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { collaborations, collaborationStats } from '../data/collaborations';

export default function CampusCollaborations({ initialFilter = 'All' }) {
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
  const [activeCollab, setActiveCollab] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filterCategories = [
    { label: 'All Campuses', value: 'All' },
    { label: 'Premier Institutes (IIT / IIIT)', value: 'Premier' },
    { label: 'Tier-2 & Regional Campuses', value: 'Regional' },
    { label: 'Technical Universities', value: 'Technical' },
    { label: 'Builder Residencies', value: 'Residency' }
  ];

  const filteredItems = collaborations.filter((item) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Premier') return item.tier.includes('Premier') || item.tier.includes('National');
    if (selectedFilter === 'Regional') return item.tier.includes('Tier-2') || item.tier.includes('Regional') || item.location.includes('Coimbatore') || item.location.includes('Puducherry') || item.location.includes('Kolkata');
    if (selectedFilter === 'Technical') return item.tier.includes('Technical') || item.tier.includes('University') || item.tier.includes('Autonomous');
    if (selectedFilter === 'Residency') return item.tier.includes('Residency') || item.tier.includes('Incubation');
    return true;
  });

  const openLightbox = (collab, imgIdx = 0) => {
    setActiveCollab(collab);
    setActiveImageIndex(imgIdx);
  };

  const closeLightbox = () => {
    setActiveCollab(null);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    if (!activeCollab) return;
    setActiveImageIndex((prev) => (prev + 1) % activeCollab.images.length);
  };

  const prevImage = () => {
    if (!activeCollab) return;
    setActiveImageIndex((prev) => (prev - 1 + activeCollab.images.length) % activeCollab.images.length);
  };

  return (
    <section id="track-record" className="section-pad bg-light" style={{ borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '1020px', margin: '0 auto 36px' }}>
          <span className="gov-badge gold" style={{ marginBottom: '10px' }}>
            <Award size={14} style={{ marginRight: '6px' }} />
            VERIFIED ON-GROUND TRACK RECORD
          </span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#0B2545', margin: '8px 0 14px' }}>
            Campuses We’ve Mobilized Across Bharat
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
            Over <strong>75+ collegiate hackathons</strong>, technical ideation sprints, and prototyping bootcamps mobilized across premier institutes, state universities, and tier-2/3 non-metro colleges nationwide.
          </p>
        </div>

        {/* High-Level Impact Metric Ribbon */}
        <div style={{ 
          background: '#0B2545', 
          borderRadius: '6px', 
          padding: '24px 20px', 
          color: '#FFFFFF', 
          marginBottom: '36px',
          boxShadow: '0 8px 24px rgba(11, 37, 69, 0.15)',
          borderTop: '3px solid #D97706'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', 
            gap: '20px', 
            textAlign: 'center' 
          }}>
            <div>
              <span style={{ display: 'block', fontSize: '2.1rem', fontWeight: 800, color: '#FDE68A', lineHeight: 1 }}>
                {collaborationStats.totalHackathons}
              </span>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#CBD5E1', display: 'block', marginTop: '6px' }}>
                Collegiate Hackathons
              </span>
            </div>

            <div>
              <span style={{ display: 'block', fontSize: '2.1rem', fontWeight: 800, color: '#FDE68A', lineHeight: 1 }}>
                {collaborationStats.studentsMobilized}
              </span>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#CBD5E1', display: 'block', marginTop: '6px' }}>
                Student Builders Mobilized
              </span>
            </div>

            <div>
              <span style={{ display: 'block', fontSize: '2.1rem', fontWeight: 800, color: '#FDE68A', lineHeight: 1 }}>
                {collaborationStats.totalInstitutions}
              </span>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#CBD5E1', display: 'block', marginTop: '6px' }}>
                Partnered Campuses
              </span>
            </div>

            <div>
              <span style={{ display: 'block', fontSize: '2.1rem', fontWeight: 800, color: '#FDE68A', lineHeight: 1 }}>
                {collaborationStats.prototypesBuilt}
              </span>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#CBD5E1', display: 'block', marginTop: '6px' }}>
                Working Prototypes
              </span>
            </div>

            <div>
              <span style={{ display: 'block', fontSize: '2.1rem', fontWeight: 800, color: '#FDE68A', lineHeight: 1 }}>
                {collaborationStats.statesReached}
              </span>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#CBD5E1', display: 'block', marginTop: '6px' }}>
                Pan-India Footprint
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              style={{
                padding: '8px 18px',
                fontSize: '0.86rem',
                fontWeight: selectedFilter === cat.value ? 700 : 500,
                borderRadius: '4px',
                border: selectedFilter === cat.value ? '1.5px solid #0B2545' : '1.5px solid #CBD5E1',
                background: selectedFilter === cat.value ? '#0B2545' : '#FFFFFF',
                color: selectedFilter === cat.value ? '#FFFFFF' : '#334155',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Campus Precedents */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {filteredItems.map((collab) => (
            <div 
              key={collab.id} 
              className="gov-card" 
              style={{ 
                padding: 0, 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              {/* Photo Preview with Overlay Badges */}
              <div 
                style={{ position: 'relative', height: '210px', background: '#0B2545', cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => openLightbox(collab, 0)}
              >
                <img 
                  src={collab.coverImage} 
                  alt={`${collab.name} hackathon`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                {/* Region Tag */}
                <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
                  <span style={{ 
                    background: 'rgba(6, 21, 40, 0.85)', 
                    color: '#FFFFFF', 
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    padding: '3px 8px', 
                    borderRadius: '3px',
                    backdropFilter: 'blur(2px)'
                  }}>
                    {collab.region}
                  </span>
                </div>

                {/* Photo Count Tag */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '12px', 
                  right: '12px', 
                  background: 'rgba(11, 37, 69, 0.88)', 
                  color: '#FDE68A', 
                  fontSize: '0.74rem', 
                  fontWeight: 700, 
                  padding: '4px 9px', 
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Maximize2 size={12} />
                  <span>{collab.images.length} Real Photos</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#64748B', marginBottom: '6px' }}>
                  <MapPin size={14} color="#B45309" />
                  <span>{collab.location}</span>
                </div>

                <h3 style={{ fontSize: '1.2rem', color: '#0B2545', margin: '0 0 6px', fontWeight: 700, lineHeight: 1.35 }}>
                  {collab.shortName}
                </h3>

                <span style={{ fontSize: '0.8rem', color: '#B45309', fontWeight: 600, display: 'block', marginBottom: '10px' }}>
                  {collab.subdivision}
                </span>

                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: '0 0 16px', flex: '1 1 auto' }}>
                  {collab.summary}
                </p>

                {/* Impact Metrics Pill Box */}
                <div style={{ 
                  background: '#F8FAFC', 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '4px', 
                  padding: '10px 12px', 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '8px', 
                  fontSize: '0.78rem',
                  marginBottom: '16px' 
                }}>
                  <div>
                    <span style={{ color: '#64748B', display: 'block' }}>Mobilization</span>
                    <strong style={{ color: '#0B2545' }}>{collab.stats.students}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'block' }}>Sprint Output</span>
                    <strong style={{ color: '#0B2545' }}>{collab.stats.prototypes}</strong>
                  </div>
                </div>

                {/* Thumbnail Strip (Quick preview of other photos) */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
                  {collab.images.slice(0, 4).map((img, i) => (
                    <img 
                      key={i} 
                      src={img.src} 
                      alt="thumbnail" 
                      loading="lazy"
                      decoding="async"
                      onClick={() => openLightbox(collab, i)}
                      style={{ 
                        width: '44px', 
                        height: '34px', 
                        objectFit: 'cover', 
                        borderRadius: '2px', 
                        cursor: 'pointer',
                        border: '1px solid #CBD5E1',
                        opacity: 0.85
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                      onMouseOut={(e) => (e.currentTarget.style.opacity = '0.85')}
                    />
                  ))}
                  {collab.images.length > 4 && (
                    <div 
                      onClick={() => openLightbox(collab, 4)}
                      style={{ 
                        width: '44px', 
                        height: '34px', 
                        borderRadius: '2px', 
                        background: '#EFF6FF', 
                        border: '1px solid #BFDBFE', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: '0.72rem', 
                        color: '#1D4E89', 
                        fontWeight: 700, 
                        cursor: 'pointer' 
                      }}
                    >
                      +{collab.images.length - 4}
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => openLightbox(collab, 0)}
                  className="btn-gov btn-gov-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.86rem', padding: '9px 14px' }}
                >
                  <Maximize2 size={14} />
                  <span>View Campus Photos & Brief</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Campus Photo Showcase */}
      {activeCollab && (
        <div 
          className="modal-overlay" 
          onClick={closeLightbox}
          style={{ zIndex: 12000, background: 'rgba(6, 21, 40, 0.88)' }}
        >
          <div 
            className="modal-content" 
            style={{ maxWidth: '1100px', width: '95vw', maxHeight: '92vh', display: 'flex', flexDirection: 'column' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="modal-header" style={{ padding: '16px 20px' }}>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#B45309' }}>
                  {activeCollab.location} · {activeCollab.tier}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#0B2545', margin: '2px 0 0', fontWeight: 700 }}>
                  {activeCollab.name}
                </h3>
              </div>
              <button 
                onClick={closeLightbox} 
                className="modal-close-btn"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Lightbox Body with Main Photo & Navigation */}
            <div className="modal-body" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Main Photo Frame */}
              <div style={{ position: 'relative', width: '100%', height: '420px', background: '#061528', borderRadius: '4px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={activeCollab.images[activeImageIndex].src} 
                  alt={activeCollab.images[activeImageIndex].caption}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />

                {/* Left / Right Nav Arrows */}
                <button 
                  onClick={prevImage}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(11, 37, 69, 0.75)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={22} />
                </button>

                <button 
                  onClick={nextImage}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(11, 37, 69, 0.75)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  aria-label="Next photo"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Photo Counter */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: '#FFFFFF',
                  padding: '3px 10px',
                  borderRadius: '3px',
                  fontSize: '0.76rem',
                  fontWeight: 600
                }}>
                  {activeImageIndex + 1} / {activeCollab.images.length}
                </div>
              </div>

              {/* Photo Caption */}
              <div style={{ background: '#F8FAFC', padding: '10px 14px', borderRadius: '4px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '0.88rem', color: '#0B2545', fontWeight: 600 }}>
                  {activeCollab.images[activeImageIndex].caption}
                </span>
              </div>

              {/* Thumbnails Row */}
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                {activeCollab.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt="thumbnail"
                    onClick={() => setActiveImageIndex(i)}
                    style={{
                      width: '72px',
                      height: '50px',
                      objectFit: 'cover',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      border: activeImageIndex === i ? '2.5px solid #D97706' : '1px solid #CBD5E1',
                      opacity: activeImageIndex === i ? 1 : 0.65,
                      transition: 'all 0.15s ease',
                      flexShrink: 0
                    }}
                  />
                ))}
              </div>

              {/* Event Brief & Impact Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginTop: '4px' }}>
                <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', padding: '12px', borderRadius: '4px' }}>
                  <span style={{ fontSize: '0.74rem', color: '#64748B', display: 'block' }}>Event Format</span>
                  <strong style={{ fontSize: '0.86rem', color: '#0B2545' }}>{activeCollab.eventTitle}</strong>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', padding: '12px', borderRadius: '4px' }}>
                  <span style={{ fontSize: '0.74rem', color: '#64748B', display: 'block' }}>Student Mobilization</span>
                  <strong style={{ fontSize: '0.86rem', color: '#0B2545' }}>{activeCollab.stats.students} ({activeCollab.stats.duration})</strong>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', padding: '12px', borderRadius: '4px' }}>
                  <span style={{ fontSize: '0.74rem', color: '#64748B', display: 'block' }}>Prototyping Output</span>
                  <strong style={{ fontSize: '0.86rem', color: '#0B2545' }}>{activeCollab.stats.prototypes}</strong>
                </div>
              </div>
            </div>

            {/* Lightbox Footer */}
            <div className="modal-footer" style={{ padding: '14px 20px', justifyContent: 'flex-end' }}>
              <button 
                type="button" 
                className="btn-form-cancel" 
                onClick={closeLightbox}
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
