
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BenefitsSection from './components/BenefitsSection';
import PlatformAccess from './components/PlatformAccess';
import Methodology from './components/Methodology';
import VideoSection from './components/VideoSection';
import DoctorsSection from './components/DoctorsSection';
import PricingSection from './components/PricingSection';
import PrivacySection from './components/PrivacySection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary-950 text-slate-200 selection:bg-primary-700 selection:text-white scroll-smooth">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <div className="relative z-10 space-y-24 md:space-y-32 pb-24">
          <DoctorsSection />
          <BenefitsSection />
          <VideoSection />
          <PlatformAccess />
          <Methodology />
          <PricingSection />
          <PrivacySection />
          <FAQSection />
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
