# Bharat Startup Incubation Council (BSIC India)

> **Official Web Platform & Institutional Portal**  
> Grassroots Campus Innovation & Incubation Initiative across Tier-2, Tier-3, and Regional Higher Education Campuses in Bharat.

[![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=flat-square)](https://github.com/bsicindia2026-hash/bsic-india-site)
[![Framework](https://img.shields.io/badge/Framework-React%2018%20%7C%20Vite%205-blue?style=flat-square)](https://vitejs.dev/)
[![Design Standard](https://img.shields.io/badge/Design-GIGW%20%2F%20AIM%20Compliant-orange?style=flat-square)](https://aim.gov.in/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel%20Edge-black?style=flat-square&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20Council%20Charter-navy?style=flat-square)](LICENSE)

---

## 🏛️ Executive Summary

The **Bharat Startup Incubation Council (BSIC India)** is an autonomous institutional body established to bridge the structural gap between higher education campuses and early-stage enterprise capital. 

Inspired by the **Atal Innovation Mission (AIM) / NITI Aayog** framework and **DPIIT Startup India** guidelines, BSIC deploys standardized, low-footprint **Campus Innovation Cells (Tier 1)** and regional **Incubation Centres (Tier 2)** into colleges that traditionally lack dedicated innovation departments — specifically focusing on:
- **State & Government Colleges** with strict non-commercial governance structures.
- **Arts, Commerce & Science Campuses** surfacing non-tech, regional, and vernacular ventures.
- **Tier-2 & Tier-3 District Campuses** bridging the geographic divide between non-metro students and metro investor syndicates.

---

## 🚀 Key Portal Features

### 1. Institutional Indian Government Design System (GIGW Compliant)
- **Official Color Palette**: Deep Navy (`#0B2545`, `#061528`), National Saffron (`#FF9933`), Ashoka Navy (`#000080`), and Institutional Gold/Brass (`#D97706`).
- **Bilingual Typographic Header**: Devnagari (*भारत स्टार्टअप इनक्यूबेशन काउंसिल*) with official Council seal emblem.
- **Accessibility Suite**:
  - Universal font scaling (`A-`, `A`, `A+`) driven by CSS root rem scaling.
  - High-Contrast Mode for visual accessibility.
  - Screen-reader skip link and full keyboard accessibility.

### 2. Verified On-Ground Track Record (119 Verified Campus Photos)
- **13+ Partnered Campuses**: IIT Roorkee, IIIT Dharwad, REVA University, SRM Delhi, BMSIT, BIT, DSATM, DSU, NMIT, Rathinam College Coimbatore, SMVEC Puducherry, UEM Kolkata, and TON Hacker House.
- **Interactive Filtering**: Filter by Premier Institutes (IIT/IIIT), Technical Universities, Tier-2 & Regional Campuses, and Builder Residencies.
- **Full-Screen Photo Lightbox**: High-resolution image viewer with captions, carousel navigation, and thumbnail strips.
- **National Metrics**: Documented proof of **75+ Hackathons**, **25,000+ Student Builders**, **1,800+ Prototypes Built**, and **12+ States/UTs Covered**.

### 3. Bilateral MoU Execution Framework
- Institutional interactive request modal for Principals, Chancellors, and Deans.
- Automated generation of prefilled official correspondence directly linked to `contact@bsicindia.com`.
- Strict non-commercial, zero-CapEx terms underwritten by CSR corporate sponsors.

### 4. Corporate CSR Sponsorship Pipeline
- Section 135 & Companies Act 2013 Schedule VII Item (ii) & (ix) eligible frameworks.
- Transparent impact audit dashboards and downloadable sponsorship briefs.

### 5. High-Performance Edge Architecture
- **Expanded Responsive Layout**: Full utilization of 1440px–1600px+ viewports with zero awkward white/navy gutters.
- **Sub-1s Production Builds**: Built with Vite 5 and esbuild.
- **60fps Fluid Scrolling**: GPU hardware acceleration (`translate3d`) and `content-visibility: auto` layout containment.
- **Vercel Zero-Config Deployment**: Bundled with production `vercel.json` SPA URL rewrites and 1-year immutable caching.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 18.3, JSX, Modern ESNext |
| **Tooling & Dev Server** | Vite 5.4, esbuild, PostCSS |
| **Design & UI System** | Custom Vanilla Institutional CSS (`src/styles/institutional.css`) |
| **Icons** | Lucide React (`lucide-react`) |
| **Performance Pipeline** | Python PIL (Lanczos Downscaling + EXIF Transpose Optimization) |
| **Deployment Platform** | Vercel Edge Network |

---

## 📂 Project Structure

```text
bsic-india-site/
├── index.html                   # GIGW-compliant HTML5 shell with OpenGraph & Schema.org JSON-LD
├── package.json                 # Project dependencies & run scripts
├── vite.config.js               # Vite build configuration with manual chunk splitting
├── vercel.json                  # Production Vercel deployment, SPA rewrites & security headers
├── .gitignore                   # Production git exclusion rules
│
├── public/
│   ├── _headers                 # Cloudflare & edge security headers
│   ├── robots.txt               # Search engine crawl directives
│   ├── sitemap.xml              # XML sitemap covering all council routes
│   └── collaborations/          # 119 optimized institutional hackathon photos (~120KB each)
│
├── scripts/
│   └── optimize_collaborations.py # PIL batch optimization & EXIF auto-rotation script
│
└── src/
    ├── main.jsx                 # React root DOM entry
    ├── App.jsx                  # Main application router with dual path/hash navigation
    │
    ├── assets/                  # Hero and promotional banner imagery
    │   ├── mou_signing_ceremony.jpg
    │   ├── student_innovators_award.jpg
    │   ├── campus_innovation_cell.jpg
    │   ├── college_incubation_lab.jpg
    │   ├── csr_sponsor_summit.jpg
    │   └── hackathon_pitch.jpg
    │
    ├── components/              # Modular UI components
    │   ├── Header.jsx           # Tricolor bar, accessibility bar, emblem, nav menu & ticker
    │   ├── Footer.jsx           # AIM-style institutional footer with disclaimers & council seal
    │   ├── CampusCollaborations.jsx # Interactive 13-campus showcase & full-screen lightbox
    │   ├── MOUModal.jsx         # Bilateral MOU requisition modal with automated mailto trigger
    │   └── CSRModal.jsx         # Corporate CSR sponsorship requisition modal
    │
    ├── data/                    # Structured static datasets
    │   ├── collaborations.js    # Verified data & photo mappings for all partner institutions
    │   ├── content.js           # Institutional circulars, announcements & council content
    │   └── resourcesData.js     # Downloads, circulars, and official framework documents
    │
    ├── pages/                   # Lazy-loaded page views
    │   ├── Home.jsx             # National Council landing page & model breakdown
    │   ├── About.jsx            # Council charter, leadership profile & governance
    │   ├── Programs.jsx         # Tier 1 vs Tier 2 comparative architecture & events engine
    │   ├── ForColleges.jsx      # Principal onboarding guide & bilateral agreement terms
    │   ├── ForSponsors.jsx      # CSR sponsor deck & Schedule VII compliance
    │   ├── Resources.jsx        # Circulars, templates, resolutions & downloads
    │   └── Contact.jsx          # Institutional communications & secretariat directory
    │
    └── styles/
        └── institutional.css    # Complete Indian Government institutional styling system
```

---

## ⚡ Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or pnpm / yarn)

### 1. Clone the Repository
```bash
git clone https://github.com/bsicindia2026-hash/bsic-india-site.git
cd bsic-india-site
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
Production assets will be generated in the `dist/` directory in under 1 second.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

The project includes an optimized [`vercel.json`](./vercel.json) configuration out of the box.

### One-Click Deploy via Vercel Dashboard
1. Visit [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and import **`bsic-india-site`**.
3. Vercel automatically detects the **Vite** preset and uses:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site will be live on an edge CDN URL within seconds.

### Deploy via Vercel CLI
```bash
npx vercel --prod
```

---

## 📜 Compliance & Accessibility Commitments

- **GIGW Alignment**: Structured in compliance with the *Guidelines for Indian Government Websites* (GIGW 3.0) for clear visual hierarchy, color contrast ratios (WCAG 2.1 AA), and explicit focus states.
- **Section 135 Compliance**: All collegiate incubation materials align with **Schedule VII, Item (ii) & Item (ix)** of the Indian Companies Act, 2013.
- **DPIIT Synergy**: Incubator workflows align with **National Incubator Capacity Building** standards set by Startup India.

---

## 🏛️ Council Secretariat & Contact

- **Contact Secretariat**: `contact@bsicindia.com`
- **Head Secretariat**: New Delhi, India
- **Official Portal**: [https://bsicindia.com](https://bsicindia.com)

---

*© 2026 Bharat Startup Incubation Council (BSIC India). All Rights Reserved.*
