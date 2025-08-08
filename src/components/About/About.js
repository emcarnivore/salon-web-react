/**
 * About Component - Company information and brand story section
 * 
 * Presents the spa's core identity, mission, and specialized services.
 * This component establishes brand credibility and connects with potential
 * customers through the company's unique value proposition.
 * 
 * @component
 * @returns {JSX.Element} About section with company information
 */

import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        {/* Section heading */}
        <h2 className="about__title">About Us</h2>
        
        {/* Main statement */}
        <h3 className="about__statement">We Take Care Of Our Clients And Our People.</h3>
        
        {/* Detailed description */}
        <p className="about__description">
          Share your company's mission, vision, or background with your potential clients. Set yourself apart from the competition with a strong brand persona that puts your clients first.
        </p>
      </div>
    </section>
  );
};

export default About;
