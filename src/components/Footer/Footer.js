/**
 * Footer Component - Site-wide footer with branding and legal information
 * 
 * Provides consistent footer branding and copyright information across all pages.
 * This component includes the company logo/name and legal disclaimers,
 * serving as the final brand touchpoint for website visitors.
 * 
 * @component
 * @returns {JSX.Element} Footer section with logo and copyright
 */

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Footer branding section */}
        <div className="footer__logo">
          {/* Future: Replace with actual logo image */}
          {/* <img src="/assets/img/Artboard 19.png" alt="Tress Theory Footer Logo" /> */}
          <h3>Tress Theory</h3>
        </div>
        
        {/* Copyright and legal information */}
        <div className="footer__copyright">
          <p>&copy; 2025 Tress Theory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
