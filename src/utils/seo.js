/**
 * BSIC India - Enterprise SEO & Dynamic Document Head Management
 * Ensures maximum visibility on Google Search, Bing, and Social Crawlers.
 */

export const pageSEOMetadata = {
  home: {
    title: "BSIC India | Startup Incubation Programs for Colleges & CSR Sponsors",
    description: "Bharat Startup Incubation Council (BSIC India) builds turn-key campus innovation cells and student incubation centres funded by corporate CSR under Companies Act Schedule VII.",
    keywords: "Bharat Startup Incubation Council, BSIC India, campus innovation cell, student startup incubator, CSR funding for colleges, Companies Act Schedule VII, collegiate hackathons, Atal Community Innovation Centre, Tier-2 Tier-3 colleges India, Saran IIM Bangalore",
    path: "/",
    ogImage: "/assets/campus_innovation_cell.jpg"
  },
  'for-colleges': {
    title: "College Incubation Setup & Bilateral MOU | Zero-CapEx | BSIC India",
    description: "Zero-CapEx campus innovation cell setup for government and private colleges across Tier-2 and Tier-3 India. Download official bilateral MOU and launch student incubators within 2 to 4 weeks.",
    keywords: "college incubation setup, startup cell for engineering college, incubation centre non-engineering college, university bilateral MOU, campus entrepreneurship cell India, collegiate incubator grant, student builder pipeline",
    path: "/for-colleges",
    ogImage: "/assets/college_incubation_lab.jpg"
  },
  'for-sponsors': {
    title: "Corporate CSR Sponsorship for Student Startups | Schedule VII | BSIC India",
    description: "Direct corporate CSR capital toward measurable campus venture creation under Companies Act Schedule VII. Transparent student startup milestones, quarterly output audits, and named incubator facilities.",
    keywords: "CSR sponsorship startup incubator, Companies Act Schedule VII Item ii ix, corporate CSR innovation fund, student startup CSR partner, collegiate entrepreneurship CSR, statutory CSR reporting India",
    path: "/for-sponsors",
    ogImage: "/assets/csr_sponsor_summit.jpg"
  },
  programs: {
    title: "Incubation Programs: Tier-1 Innovation Cell & Tier-2 Centre | BSIC India",
    description: "Explore BSIC's two-tier incubation model: Tier-1 Innovation Cell for broad grassroots reach and Tier-2 Incubation Centre with DPIIT recognition and AIM ACIC qualification roadmap.",
    keywords: "incubation programs India, Tier 1 Innovation Cell, Tier 2 Incubation Centre, DPIIT startup recognition roadmap, Atal Community Innovation Centre qualification, campus hackathon funnel",
    path: "/programs",
    ogImage: "/assets/hackathon_pitch.jpg"
  },
  about: {
    title: "About BSIC India | Director Saran | Mission for Bharat Campus Startups",
    description: "Learn about Bharat Startup Incubation Council's mission to bridge India's collegiate startup divide. Led by Director Saran, an IIM Bangalore alumnus with 75+ campus hackathons and 35+ university partnerships.",
    keywords: "About BSIC India, Bharat Startup Incubation Council leadership, Saran IIM Bangalore, student startup mobilization, grassroots campus innovation India, collegiate incubator directors",
    path: "/about",
    ogImage: "/assets/student_innovators_award.jpg"
  },
  resources: {
    title: "Incubation Playbooks, Policy & Compliance Dossiers | BSIC India",
    description: "Access official blueprints, AIM & ACIC alignment frameworks, Companies Act Schedule VII compliance dossiers, and campus mobilization playbooks.",
    keywords: "incubation playbooks, ACIC qualification guide, Companies Act Schedule VII legal brief, student incubator SOP, collegiate hackathon blueprint",
    path: "/resources",
    ogImage: "/assets/mou_signing_ceremony.jpg"
  },
  contact: {
    title: "Contact Secretariat | Lodhi Road, New Delhi Office | BSIC India",
    description: "Get in touch with Bharat Startup Incubation Council (BSIC India) Secretariat at Lodhi Road, New Delhi. Dedicated desks for college partnerships, CSR sponsors, and general inquiries.",
    keywords: "contact BSIC India, Bharat Startup Incubation Council address, BSIC New Delhi Lodhi Road, contact@bsicindia.com, collegiate incubator inquiry",
    path: "/contact",
    ogImage: "/assets/campus_innovation_cell.jpg"
  }
};

/**
 * Updates document head tags dynamically as users navigate
 */
export function updateDocumentSEO(pageId) {
  const meta = pageSEOMetadata[pageId] || pageSEOMetadata.home;
  const canonicalUrl = `https://www.bsicindia.com${meta.path === '/' ? '' : meta.path}`;

  // Update Title
  document.title = meta.title;

  // Helper for meta tags
  const setMeta = (name, attr, value) => {
    let el = document.querySelector(`meta[${name}="${attr}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(name, attr);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  };

  // Standard Meta
  setMeta('name', 'description', meta.description);
  setMeta('name', 'keywords', meta.keywords);

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', canonicalUrl);
  if (meta.ogImage) {
    setMeta('property', 'og:image', `https://www.bsicindia.com${meta.ogImage}`);
  }

  // Twitter Card
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);
  if (meta.ogImage) {
    setMeta('name', 'twitter:image', `https://www.bsicindia.com${meta.ogImage}`);
  }

  // Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);
}
