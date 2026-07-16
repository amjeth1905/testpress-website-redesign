import React from 'react';
import './WhyTestpress.css';

const WhyTestpress = () => {
  const reasons = [
    {
      title: "Enterprise Security",
      desc: "Bank-grade encryption, SOC2 ready, and fully hosted in India to comply with local data regulations.",
      tags: ["SOC2", "Encryption", "India Hosted"]
    },
    {
      title: "Scalable Infrastructure",
      desc: "Built to handle millions of concurrent learners globally with a 99.9% uptime guarantee.",
      tags: ["Millions of learners", "Global CDN", "99.9% Uptime"]
    },
    {
      title: "AI Powered",
      desc: "Automate tedious workflows with our intelligent analytics and content generation engines.",
      tags: ["Automated workflows", "Intelligent analytics", "Generative AI"]
    }
  ];

  return (
    <section className="why-section">
      <div className="container">
        <h2 className="heading-lg text-center section-title">
          Why <span className="text-gradient">Testpress?</span>
        </h2>
        
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card liquid-glass-card fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-desc">{reason.desc}</p>
              <div className="why-tags">
                {reason.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="why-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTestpress;
