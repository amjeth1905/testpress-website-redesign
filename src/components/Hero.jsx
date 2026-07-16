import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import BlurText from './BlurText';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container text-center">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="hero-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '9999px',
              background: 'var(--glass)',
              border: '1px solid var(--border-color)',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '32px',
              color: 'var(--text-secondary)'
            }}
          >
            Introducing Testpress LMS
          </motion.div>

          <h1 className="hero-title-new">
            <BlurText
              as="span"
              text="The platform behind"
              delay={50}
              animateBy="words"
              direction="top"
              className="inline-flex justify-center"
              style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center' }}
            />
            <br />
            <span className="hero-title-italic">
              <BlurText
                as="span"
                text="modern learning."
                delay={50}
                animateBy="words"
                direction="top"
                className="inline-flex justify-center"
                style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center' }}
              />
            </span>
          </h1>

          <p className="hero-subtitle-new">
            Everything you need to teach, assess, stream, and protect digital learning experiences—from one intelligent platform.
          </p>

          <div className="hero-action-row">
            <a href="#demo" className="btn btn-primary btn-pill-icon">
              Book a Demo <span className="btn-icon-circle"><ArrowUpRight size={16} strokeWidth={2.5} /></span>
            </a>

            <a href="#explore" className="btn btn-secondary" style={{ borderRadius: 'var(--border-radius-pill)', padding: '12px 24px' }}>
              Explore Platform
            </a>
          </div>

          <div className="hero-social-proof">
            <div className="avatar-group">
              <div className="avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=11)' }}></div>
              <div className="avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=32)' }}></div>
              <div className="avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=33)' }}></div>
              <div className="avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=44)' }}></div>
            </div>
            <div className="rating-info">
              <div className="stars">
                <Star size={14} fill="#FFB800" color="#FFB800" />
                <Star size={14} fill="#FFB800" color="#FFB800" />
                <Star size={14} fill="#FFB800" color="#FFB800" />
                <Star size={14} fill="#FFB800" color="#FFB800" />
                <Star size={14} color="#FFB800" />
              </div>
              <span className="rating-text">Trusted by 1000+ clients</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <motion.div
          className="hero-divider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="divider-line"></span>
          <span className="divider-text">Loved by 1000+ big and small brands around the worlds</span>
          <span className="divider-line"></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
