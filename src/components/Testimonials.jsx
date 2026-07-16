import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Kitabee Prep",
      role: "Education Partner",
      text: "The best part for a test platform is its UI. User Experience at Testpress is amazing for both aspirants as well as for administrator. They have a very clean environment and various template for different exams. Plus they provide good features like bookmarks and subtopic reports of test which ease out the tedious process of after test analysis.",
      rating: "★★★★★"
    },
    {
      name: "CivilsDaily",
      role: "Online IAS Prep Academy",
      text: "A sincere recommendation for anyone who wish to explore the online testprep space and values consistency as one of the key stone of their partnership.",
      rating: "★★★★★"
    },
    {
      name: "MTG Learning",
      role: "Content & Exam Preparation",
      text: "I used Testpress Testing engine for the Students Practice assessment exercises. I found the software very good. The team is very dedicated and always ready for help 24X7.",
      rating: "★★★★★"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="heading-lg text-center section-title">
          Trusted by <span className="text-gradient">Innovators</span>
        </h2>
        
        <div className="testimonials-carousel">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card liquid-glass-card fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="test-rating">{review.rating}</div>
              <p className="test-text">"{review.text}"</p>
              <div className="test-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
