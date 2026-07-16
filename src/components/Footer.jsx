import React from 'react';
import { Globe, Mail, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <a href="/" className="nav-logo">
              <div className="logo-mark"></div>
              Testpress
            </a>
            <p className="footer-desc text-muted">
              The premium platform for modern digital learning experiences.
            </p>
            <div className="social-icons">
              <a href="#" className="btn-icon" aria-label="Website">
                <Globe size={18} />
              </a>
              <a href="#" className="btn-icon" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="#" className="btn-icon" aria-label="Contact">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Products</h4>
            <ul>
              <li><a href="#">Learning Management</a></li>
              <li><a href="#">Online Exams</a></li>
              <li><a href="#">Video Streaming</a></li>
              <li><a href="#">AI Proctoring</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">For Enterprises</a></li>
              <li><a href="#">For Universities</a></li>
              <li><a href="#">For Coaching</a></li>
              <li><a href="#">For Creators</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p className="text-muted">&copy; {new Date().getFullYear()} Testpress. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
