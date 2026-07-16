import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart2, Smartphone, Shield, Eye, Link } from 'lucide-react';
import './BentoGrid.css';

const BentoGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="bento-section section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bento-header"
        >
          <h2 className="heading-lg">Powerful Features.</h2>
          <p className="subtitle">Everything you need, beautifully designed.</p>
        </motion.div>
        
        <motion.div 
          className="bento-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          <motion.div variants={item} className="bento-card bento-large glass-panel">
            <div className="bento-content">
              <div className="btn-icon bento-icon">
                <Sparkles size={20} />
              </div>
              <h3 className="heading-md">AI Assistant</h3>
              <p className="text-muted">Personalized learning paths generated on the fly.</p>
            </div>
            <div className="bento-visual">
              {/* Minimalist visualization */}
              <div className="minimal-wave"></div>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="bento-card glass-panel">
            <div className="bento-content">
              <div className="btn-icon bento-icon">
                <BarChart2 size={20} />
              </div>
              <h3>Analytics</h3>
              <p className="text-muted">Deep insights into performance.</p>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="bento-card glass-panel">
            <div className="bento-content">
              <div className="btn-icon bento-icon">
                <Smartphone size={20} />
              </div>
              <h3>White Label Apps</h3>
              <p className="text-muted">Your brand, everywhere.</p>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="bento-card bento-wide glass-panel">
            <div className="bento-content">
              <div className="btn-icon bento-icon">
                <Shield size={20} />
              </div>
              <h3 className="heading-md">DRM Security</h3>
              <p className="text-muted">Military-grade encryption for your content.</p>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="bento-card glass-panel">
            <div className="bento-content">
              <div className="btn-icon bento-icon">
                <Eye size={20} />
              </div>
              <h3>AI Proctoring</h3>
              <p className="text-muted">Automated exam integrity.</p>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="bento-card glass-panel">
            <div className="bento-content">
              <div className="btn-icon bento-icon">
                <Link size={20} />
              </div>
              <h3>API Integrations</h3>
              <p className="text-muted">Connect with any tool.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
