import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [isLightMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container flex-between">
        <a href="/" className="nav-logo">
          <img src="/logo.png" alt="Testpress" className="nav-logo-img" />
          <span>Testpress</span>
        </a>
        
        <div className="nav-links desktop-only">
          <a href="#products">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </div>

        <div className="nav-actions desktop-only">
          <button 
            className="theme-toggle-btn" 
            onClick={() => setIsLightMode(!isLightMode)}
            aria-label="Toggle theme"
          >
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="#login" className="nav-link-subtle">Log in</a>
          <a href="#demo" className="btn btn-primary btn-sm">Get Started</a>
        </div>

        <div className="mobile-actions mobile-only">
          <button 
            className="theme-toggle-btn" 
            onClick={() => setIsLightMode(!isLightMode)}
            aria-label="Toggle theme"
          >
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#resources" onClick={() => setMobileMenuOpen(false)}>Resources</a>
          <hr className="mobile-divider" />
          <a href="#login" onClick={() => setMobileMenuOpen(false)}>Log in</a>
          <a href="#demo" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
