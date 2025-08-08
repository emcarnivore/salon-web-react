/**
 * Application Constants - Centralized data configuration
 * 
 * Contains all static data, business information, and configuration constants
 * used throughout the hair boutique application. This centralized approach ensures
 * data consistency and makes updates easier to manage across components.
 * 
 * @file Static data and configuration constants
 */

// Salon business information and contact details
export const SALON_INFO = {
  name: 'Tress Theory',
  description: 'A boutique hair salon with a warm and relaxing atmosphere',
  hours: {
    'Tuesday - Saturday': '10AM - 6PM',
    'Sunday - Monday': 'CLOSED'
  },
  contact: {
    phone: '(555) 123-4567',
    email: 'info@tresstheory.com',
    address: '123 Main Street, City, State 12345'
  }
};

// Service offerings with descriptions and pricing
export const SERVICES = [
  {
    id: 1,
    name: 'Hair Cuts',
    description: 'On-trend cuts for all hair types',
    price: 'Starting at $45'
  },
  {
    id: 2,
    name: 'Hair Coloring',
    description: 'Edgy color and professional highlights',
    price: 'Starting at $85'
  },
  {
    id: 3,
    name: 'Styling',
    description: 'Professional styling for any occasion',
    price: 'Starting at $35'
  }
];

// Navigation menu configuration
export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];
