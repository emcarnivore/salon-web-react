/**
 * Hero Component
 * Full-screen landing section with background image and call-to-action
 */

import './Hero.css';

const Hero = () => {
  // Handle smooth scroll to contact section
  const handleBookingClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Set dynamic background image using CSS custom property
  const heroStyle = {
    '--hero-bg-image': `url('${process.env.PUBLIC_URL}/images/hero-background.png')`
  };

  return (
    <section id="home" className="hero" data-background="default" style={heroStyle}>
      <div className="hero__content">
        <h1 className="hero__title">Letting Your True Beauty Shine</h1>
        <p className="hero__subtitle">Experience World-Class Hair And Beauty Services</p>
        <a href="#contact" className="hero__cta-button" onClick={handleBookingClick}>
          Book An Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;
