import React from 'react';
import './TrustMarquee.css';

const TrustMarquee = () => {
  const logos = [
    "/institutes/institute1.webp",
    "/institutes/institute2.webp",
    "/institutes/institute3.webp",
    "/institutes/institute4.webp",
    "/institutes/institute5.webp",
    "/institutes/institute6.webp",
    "/institutes/institute7.webp",
    "/institutes/institute8.webp",
    "/institutes/institute9.webp",
    "/institutes/institute10.webp",
  ];

  return (
    <section className="trust-section">
      <div className="marquee-container liquid-glass">
        <div className="marquee-content">
          {[...logos, ...logos].map((logoPath, index) => (
            <div key={index} className="trust-logo">
              <img src={logoPath} alt="Trusted Partner Institute" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;
