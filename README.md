# Tress Theory - Hair Salon Website

A modern, responsive React website for Tress Theory hair salon.

## Features
- Responsive design (mobile-first)
- Component-scoped CSS architecture with BEM naming
- Professional CSS system with variables and utilities
- Accessible navigation with mobile menu
- Smooth scrolling and interactive elements
- Enterprise-level code organization
- Future-ready for booking system integration

## Technology Stack
- **React 18.2.0** - Modern component-based UI library
- **HTML5** - Semantic markup within JSX
- **CSS3** - Mobile-first responsive design with CSS variables
- **JavaScript ES6+** - Modern JavaScript with React hooks

## Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd salon-web-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Start the Development Server
```bash
npm start
```
- Opens the app in your default browser at `http://localhost:3000`
- Hot reload enabled - changes automatically refresh the browser
- Development server runs in the background

#### Stop the Development Server
- **In Terminal**: Press `Ctrl + C` (Windows/Linux) or `Cmd + C` (Mac)
- **Close Terminal**: Simply close the terminal window

#### Other Available Scripts
```bash
npm run build    # Create production build
npm test         # Run tests
npm run eject    # Eject from Create React App (advanced)
```

## Development

### **Getting Started**
1. Start the development server with `npm start`
2. Edit React components in `src/components/`
3. Modify component styles in respective `.css` files
4. Update global styles in `src/styles/`
5. Changes automatically reload in the browser

### **Adding New Components**
Follow the component-scoped architecture:
```javascript
// 1. Create component file: src/components/NewComponent.js
import React from 'react';
import './NewComponent.css';

// 2. Create styles file: src/components/NewComponent.css
// Use BEM naming: .new-component, .new-component__element
```

### **Style Guidelines**
- Use **BEM naming** for component styles
- Leverage **CSS variables** from `variables.css`
- Follow **mobile-first** responsive design
- Keep styles **component-scoped** when possible

## Future Features
- [ ] Online booking system integration
- [ ] Interactive image gallery with lightbox
- [ ] Contact form with validation
- [ ] Customer testimonials carousel
- [ ] Service catalog with detailed pricing
- [ ] Staff member profiles
- [ ] Social media integration

### **Technical Roadmap**
- [ ] Complete component CSS migration (Services, About, Gallery, Contact, Footer)
- [ ] Implement CSS Modules or Styled Components
- [ ] Add TypeScript for better development experience
- [ ] Unit testing with Jest and React Testing Library

## CSS Architecture
This project uses a **component-scoped CSS architecture** following industry best practices:

### **File Organization**
- **`variables.css`** - CSS custom properties for consistent design tokens
- **`utilities.css`** - Reusable utility classes for common patterns
- **`responsive.css`** - Global breakpoints and mobile-first design
- **`styles.css`** - Shared component patterns and reusable styles
- **`Component.css`** - Component-specific styles using BEM naming

### **BEM Naming Convention**
Components use Block-Element-Modifier methodology for clear, maintainable CSS:
```css
.navigation { }                    /* Block */
.navigation__content { }           /* Element */
.navigation__menu--mobile { }      /* Modifier */
```

### **Benefits**
- **Scoped styles** - No CSS conflicts between components
- **Easy maintenance** - Styles live next to their components
- **Team collaboration** - Clear ownership and naming conventions
- **Scalable architecture** - Easy to add new components

> 📖 **For detailed architecture information**, see [ARCHITECTURE.md](ARCHITECTURE.md)

## Asset Organization
The project uses a dual approach for images:
- **`public/images/`** - Large static assets (gallery photos, backgrounds) served directly
- **`src/assets/images/`** - Small imported assets (icons, logos) processed by webpack
- See individual README files in each directory for detailed usage guidelines

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
© 2025 Tress Theory. All rights reserved.
