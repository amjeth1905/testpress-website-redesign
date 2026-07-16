import React from 'react';
import './Workflow.css';

const Workflow = () => {
  const steps = [
    { title: "Student", desc: "Logs in from any device" },
    { title: "Learning Platform", desc: "Accesses personalized courses" },
    { title: "Online Assessment", desc: "Takes secure online tests" },
    { title: "AI Analysis", desc: "Receives instant feedback" },
    { title: "Video Learning", desc: "Reviews missed concepts" },
    { title: "Certificate", desc: "Achieves verified certification" }
  ];

  return (
    <section className="workflow-section">
      <div className="container">
        <h2 className="heading-lg text-center section-title">
          How It <span className="text-gradient">Works</span>
        </h2>
        
        <div className="workflow-container">
          {steps.map((step, index) => (
            <div key={index} className="workflow-step fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="step-content liquid-glass">
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="glowing-line"></div>
                  <div className="arrow-down">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
