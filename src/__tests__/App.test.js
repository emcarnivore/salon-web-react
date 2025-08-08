/**
 * App Component Tests - Main application component test suite
 * 
 * Contains unit tests for the main App component, verifying that
 * core functionality and UI elements render correctly. These tests
 * ensure the application structure and navigation work as expected.
 * 
 * @file Test suite for main App component
 */

import { render, screen } from '@testing-library/react';
import App from '../App';

// Test main heading renders correctly
test('renders salon website', () => {
  render(<App />);
  const headingElement = screen.getByText(/Letting Your True Beauty Shine/i);
  expect(headingElement).toBeInTheDocument();
});

// Test navigation menu renders
test('renders navigation menu', () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  const servicesLink = screen.getByText(/Services/i);
  const galleryLink = screen.getByText(/Gallery/i);
  const aboutLink = screen.getByText(/About/i);
  const contactLink = screen.getByText(/Contact/i);
  
  expect(homeLink).toBeInTheDocument();
  expect(servicesLink).toBeInTheDocument();
  expect(galleryLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

// Test main call-to-action button
test('renders booking button', () => {
  render(<App />);
  const bookingButton = screen.getByText(/Book An Appointment/i);
  expect(bookingButton).toBeInTheDocument();
});
