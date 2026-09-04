import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  ArrowRight, 
  Download, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink 
} from 'lucide-react';
import { resourcesArticles } from '../data/resourcesData';

export default function Resources({ navigateTo, openMOUModal }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Policy Advisory', 'CSR Governance', 'Ecosystem Study', 'National Schemes'];

  const filteredArticles = filterCategory === 'All' 
    ? resourcesArticles 
    : resourcesArticles.filter(a => a.category === filterCategory);

  return (
    <div id="main-content">
      {/* Page Header Banner */}
      <section className="bg-navy-institutional" style={{ padding: '48px 0 40px', borderBottom: '1px solid #1E3A5F' }}>
        <div className="container">
          <span className="gov-badge" style={{ background: '#1E3A5F', color: '#FDE68A', borderColor: '#B45309' }}>
            Knowledge Bank & Circulars
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, margin: '10px 0', color: '#FFFFFF' }}>
            Policy Briefs, Guidelines & Research Notes
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '820px', lineHeight: 1.6 }}>
            Authoritative documentation for College Administrators, CSR Committees, and Policy Coordinators on building sustainable campus incubation infrastructure across Bharat.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-default)', padding: '16px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748B', marginRight: '8px' }}>
              Filter By Topic:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`util-btn ${filterCategory === cat ? 'active' : ''}`}
                style={{
                  fontSize: '0.82rem',
                  padding: '6px 14px',
                  borderRadius: '2px',
                  color: filterCategory === cat ? '#FFFFFF' : '#0B2545',
                  borderColor: filterCategory === cat ? '#B45309' : '#CBD5E1',
                  background: filterCategory === cat ? '#0B2545' : '#F8FAFC',
                  fontWeight: 600
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-pad bg-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {filteredArticles.map((article) => (
              <article key={article.id} className="gov-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="gov-badge navy" style={{ margin: 0, fontSize: '0.7rem' }}>
                    {article.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#64748B' }}>
                    <Calendar size={12} />
                    <span>{article.date}</span>
                    <span>•</span>
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 style={{ fontSize: '1.25rem', color: '#0B2545', marginBottom: '12px', lineHeight: 1.4 }}>
                  {article.title}
                </h2>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, marginBottom: '16px' }}>
                  {article.summary}
                </p>

                <div style={{ background: '#F8FAFC', borderLeft: '3px solid #B45309', padding: '10px 12px', borderRadius: '2px', marginBottom: '20px', fontSize: '0.82rem', color: '#334155' }}>
                  <strong>Key Takeaway:</strong> {article.keyTakeaway}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    className="btn-gov btn-gov-primary"
                    style={{ fontSize: '0.84rem', padding: '8px 16px' }}
                    onClick={() => setSelectedArticle(article)}
                  >
                    <span>Read Full Policy Brief</span>
                    <ChevronRight size={14} />
                  </button>

                  <button
                    className="btn-gov btn-gov-outline"
                    style={{ fontSize: '0.82rem', padding: '8px 12px' }}
                    onClick={openMOUModal}
                    title="Download Related Administrative Templates"
                  >
                    <Download size={14} />
                    <span>Templates</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-content" style={{ maxWidth: '780px' }}>
            <div className="modal-header">
              <div>
                <span className="gov-badge navy" style={{ margin: 0, marginBottom: '6px' }}>
                  {selectedArticle.category} · {selectedArticle.tag}
                </span>
                <h3 style={{ fontSize: '1.3rem', color: '#0B2545', margin: 0 }}>
                  {selectedArticle.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#64748B' }}
              >
                ✕
              </button>
            </div>

            <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: '#64748B', marginBottom: '16px' }}>
                <span>Published by BSIC Policy Desk</span>
                <span>•</span>
                <span>Date: {selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="gov-alert-box advisory" style={{ marginTop: 0 }}>
                <strong>Executive Summary:</strong> {selectedArticle.keyTakeaway}
              </div>

              {selectedArticle.sections.map((sec, idx) => (
                <div key={idx} style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#0B2545', marginBottom: '8px', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px' }}>
                    {sec.heading}
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.7 }}>
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button 
                className="btn-gov btn-gov-outline"
                onClick={() => setSelectedArticle(null)}
              >
                Close Article
              </button>
              <button 
                className="btn-gov btn-gov-primary"
                onClick={() => {
                  setSelectedArticle(null);
                  openMOUModal();
                }}
              >
                <span>Request Campus MOU Pack</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
