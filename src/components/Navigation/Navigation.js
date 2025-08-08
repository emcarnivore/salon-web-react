/**
 * Navigation Component
 * 
 * Renders the main navigation bar with logo fallback functionality.
 * If the logo image fails to load, it will be hidden and only the text will show.
 * 
 * @returns {JSX.Element} Navigation component
 */

import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  
  // Logo source state - currently unused but ready for dynamic logo switching
  // Future uses: setLogoSrc('/images/holiday-logo.png'), setLogoSrc('/images/dark-mode-logo.png')
  // The useEffect below will automatically reset logoError when this changes
  const [logoSrc, setLogoSrc] = useState(`${process.env.PUBLIC_URL}/images/logo.png`);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle logo image error - hide logo and show text only
  const handleLogoError = () => {
    setLogoError(true);
  };

  // Handle logo image load success - reset error state
  const handleLogoLoad = () => {
    setLogoError(false);
  };

  // Reset logo error when component mounts or logo source changes
  useEffect(() => {
    setLogoError(false);
  }, [logoSrc]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.querySelector('.nav-menu');
      const toggleButton = document.querySelector('.mobile-menu-toggle');
      
      if (navMenu && toggleButton && 
          !navMenu.contains(event.target) && 
          !toggleButton.contains(event.target) && 
          isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Handle smooth scroll to sections and close mobile menu
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu(); // Close mobile menu after clicking link
  };

  return (
    <header className="navigation">
      <nav>
        <div className="navigation__content">
          {/* Logo with fallback */}
          <div className="navigation__logo">
            {!logoError && (
              <img 
                src={logoSrc} 
                alt="Tress Theory" 
                className="navigation__logo-image"
                onError={handleLogoError}
                onLoad={handleLogoLoad}
              />
            )}
            <h2 className={logoError ? 'navigation__logo-text--fallback' : 'navigation__logo-text'}>
              Tress Theory
            </h2>
          </div>
          
          {/* Mobile menu toggle */}
          <button 
            className={`navigation__mobile-toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation menu" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Navigation Menu */}
          <ul className={`navigation__menu ${isMenuOpen ? 'show' : ''}`}>
            <li><a href="#about" className="navigation__menu-link" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
            <li><a href="#services" className="navigation__menu-link" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></li>
            <li><a href="#gallery" className="navigation__menu-link" onClick={(e) => handleSmoothScroll(e, '#gallery')}>Gallery</a></li>
            <li><a href="#contact" className="navigation__menu-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
