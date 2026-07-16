import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import ProductEcosystem from './components/ProductEcosystem';
import Workflow from './components/Workflow';
import BentoGrid from './components/BentoGrid';
import Showcase from './components/Showcase';
import WhyTestpress from './components/WhyTestpress';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';

function App() {
  return (
    <>
      <SplashCursor />
      <Navbar />
      
      <main>
        <Hero />
        <TrustMarquee />
        <ProductEcosystem />
        <Workflow />
        <BentoGrid />
        <Showcase />
        <WhyTestpress />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}

export default App;

