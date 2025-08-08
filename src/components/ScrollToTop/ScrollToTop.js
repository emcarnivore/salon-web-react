/**
 * ScrollToTop Component
 * 
 * A floating button that appears when user scrolls down and smoothly 
 * scrolls back to the top of the page when clicked.
 * 
 * @returns {JSX.Element} ScrollToTop button component
 */

import { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      {/* Up arrow icon */}
      <svg 
        className="scroll-to-top__icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        <polyline points="18,15 12,9 6,15"></polyline>
      </svg>
    </button>
  );
};

export default ScrollToTop;
