import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-container liquid-glass fade-up">
          <div className="cta-glow"></div>
          
          <h2 className="heading-lg text-center">
            Ready to Build the Future of<br/>
            <span className="text-gradient">Digital Learning?</span>
          </h2>
          
          <p className="cta-subtitle text-center">
            See why thousands of institutions trust Testpress to scale their education platforms.
          </p>
          
          <div className="cta-actions">
            <button className="btn btn-primary">Book Demo</button>
            <button className="btn btn-secondary">Talk to Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
