/**
 * Application Entry Point - React DOM rendering and initialization
 * 
 * Bootstraps the React application by creating the root DOM element
 * and rendering the main App component. Utilizes React 18's concurrent
 * features through createRoot API and StrictMode for development checks.
 * 
 * @file Main entry point for the spa application
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create React 18 root for concurrent features
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render application with strict mode for development warnings
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
