import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Code-split pages for high-concurrency (1000+ simultaneous users) edge performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const ForColleges = lazy(() => import('./pages/ForColleges'));
const ForSponsors = lazy(() => import('./pages/ForSponsors'));
const Resources = lazy(() => import('./pages/Resources'));
const Contact = lazy(() => import('./pages/Contact'));
const MOUModal = lazy(() => import('./components/MOUModal'));
const CSRModal = lazy(() => import('./components/CSRModal'));

// Institutional loading spinner for seamless fallback
function PageFallback() {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', background: '#F8FAFC' }}>
      <div style={{ display: 'inline-block', width: '36px', height: '36px', border: '3px solid #CBD5E1', borderTopColor: '#0B2545', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
      <p style={{ marginTop: '16px', color: '#64748B', fontSize: '0.88rem' }}>Loading Council Portal Data...</p>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [fontSize, setFontSize] = useState('font-md');
  const [highContrast, setHighContrast] = useState(false);
  const [lang, setLang] = useState('en');
  const [isMOUOpen, setIsMOUOpen] = useState(false);
  const [isCSROpen, setIsCSROpen] = useState(false);

  // Sync font size with documentElement (HTML root) for universal rem scaling
  useEffect(() => {
    document.documentElement.classList.remove('font-sm', 'font-md', 'font-lg');
    document.documentElement.classList.add(fontSize);
    document.body.classList.remove('font-sm', 'font-md', 'font-lg');
    document.body.classList.add(fontSize);
  }, [fontSize]);

  // Sync high contrast mode
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('contrast-high');
      document.body.classList.add('contrast-high');
    } else {
      document.documentElement.classList.remove('contrast-high');
      document.body.classList.remove('contrast-high');
    }
  }, [highContrast]);

  // Handle path or hash navigation for clean browser and Vercel routing
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'programs', 'for-colleges', 'for-sponsors', 'resources', 'contact'];
      
      if (validPages.includes(path)) {
        setCurrentPage(path);
      } else if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleNavigation();
    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <About 
            navigateTo={navigateTo} 
            openMOUModal={() => setIsMOUOpen(true)} 
          />
        );
      case 'programs':
        return (
          <Programs 
            navigateTo={navigateTo} 
            openMOUModal={() => setIsMOUOpen(true)} 
          />
        );
      case 'for-colleges':
        return (
          <ForColleges 
            navigateTo={navigateTo} 
            openMOUModal={() => setIsMOUOpen(true)} 
          />
        );
      case 'for-sponsors':
        return (
          <ForSponsors 
            navigateTo={navigateTo} 
            openCSRModal={() => setIsCSROpen(true)} 
          />
        );
      case 'resources':
        return (
          <Resources 
            navigateTo={navigateTo} 
            openMOUModal={() => setIsMOUOpen(true)} 
          />
        );
      case 'contact':
        return (
          <Contact 
            openMOUModal={() => setIsMOUOpen(true)} 
            openCSRModal={() => setIsCSROpen(true)} 
          />
        );
      case 'home':
      default:
        return (
          <Home 
            navigateTo={navigateTo} 
            openMOUModal={() => setIsMOUOpen(true)} 
            openCSRModal={() => setIsCSROpen(true)} 
          />
        );
    }
  };

  return (
    <div className="bsic-app">
      <Header 
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        lang={lang}
        setLang={setLang}
        openMOUModal={() => setIsMOUOpen(true)}
      />

      <main role="main">
        <Suspense fallback={<PageFallback />}>
          {renderCurrentPage()}
        </Suspense>
      </main>

      <Footer 
        setCurrentPage={navigateTo}
        openMOUModal={() => setIsMOUOpen(true)}
      />

      <Suspense fallback={null}>
        <MOUModal 
          isOpen={isMOUOpen} 
          onClose={() => setIsMOUOpen(false)} 
        />

        <CSRModal 
          isOpen={isCSROpen} 
          onClose={() => setIsCSROpen(false)} 
        />
      </Suspense>
    </div>
  );
}
