import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Showcase.css';

const Showcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section className="showcase-section section-padding" ref={containerRef}>
      <div className="container">
        <motion.div 
          className="showcase-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Platform Experience.</h2>
          <p className="subtitle mx-auto">Intuitive design meets powerful functionality.</p>
        </motion.div>

        <motion.div 
          className="showcase-container"
          style={{ rotateX, scale, transformPerspective: 2000 }}
        >
          <div className="showcase-mockup glass-panel">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="mockup-content">
              {/* Fallback geometric design since dashboard_showcase.png might not look right in dark mode */}
              <div className="mockup-placeholder">
                <div className="mockup-sidebar"></div>
                <div className="mockup-main">
                  <div className="mockup-nav"></div>
                  <div className="mockup-grid">
                    <div className="mockup-card"></div>
                    <div className="mockup-card"></div>
                    <div className="mockup-card large"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="floating-metric metric-1 glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span>Completion</span>
            <strong>92%</strong>
          </motion.div>
          <motion.div 
            className="floating-metric metric-2 glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span>Revenue</span>
            <strong>$12.4k</strong>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
