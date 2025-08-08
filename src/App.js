/**
 * App Component - Main application container and layout orchestrator
 * 
 * Serves as the root component that structures the entire spa website layout.
 * Manages the component hierarchy, CSS import order, and semantic HTML structure
 * for optimal performance, accessibility, and maintainability.
 * 
 * @component
 * @returns {JSX.Element} Complete website layout with all sections
 */

// Component imports - all major page sections
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// CSS imports in strategic order: variables → utilities → responsive → main styles → component styles
import './styles/variables.css';
import './styles/utilities.css';
import './styles/responsive.css';
import './styles/styles.css';
import './App.css';

function App() {
  return (
    <div className="site-container">
      {/* Fixed navigation header */}
      <Navigation />
      
      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      
      {/* Site footer with branding */}
      <Footer />
      
      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
