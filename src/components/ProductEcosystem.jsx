import React from 'react';
import './ProductEcosystem.css';

const ProductEcosystem = () => {
  const products = [
    {
      title: "Learning Management",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      features: ["Course Management", "Assignments", "AI Learning", "White Label Apps"]
    },
    {
      title: "Online Exams",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      features: ["Question Banks", "Automated Evaluation", "Advanced Reports", "Certification"]
    },
    {
      title: "Secure Video Streaming",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 7a2 2 0 0 0-2.45-1.45L16 7V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l4.55 1.45A2 2 0 0 0 23 17V7z"></path>
        </svg>
      ),
      features: ["DRM Security", "Live Streaming", "VOD", "CDN", "API"]
    },
    {
      title: "AI Proctoring",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      features: ["Face Detection", "Eye Tracking", "Device Detection", "Identity Verification"]
    }
  ];

  return (
    <section className="product-ecosystem">
      <div className="container">
        <h2 className="heading-lg text-center section-title">
          Everything Learning Needs.<br/>
          <span className="text-gradient">One Platform.</span>
        </h2>
        
        <div className="ecosystem-grid">
          {products.map((product, index) => (
            <div key={index} className="liquid-glass-card ecosystem-card fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="card-icon">{product.icon}</div>
              <h3 className="card-title">{product.title}</h3>
              <ul className="card-features">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystem;
