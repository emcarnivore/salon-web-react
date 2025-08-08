/**
 * Utility Functions - Common helper functions and utilities
 * 
 * Contains reusable utility functions for common operations like
 * smooth scrolling, data formatting, and validation. These functions
 * promote code reusability and maintain consistency across components.
 * 
 * @file Utility and helper function library
 */

/**
 * Smoothly scroll to a specific section by ID
 * @param {string} sectionId - The ID of the target section
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Format phone number for consistent display
 * @param {string} phone - Raw phone number string
 * @returns {string} Formatted phone number (XXX) XXX-XXXX
 */
export const formatPhoneNumber = (phone) => {
  // Format phone number for display
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

/**
 * Validate email address format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email format is valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
