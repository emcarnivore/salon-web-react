/**
 * Contact Component - Customer contact information and booking interface
 * 
 * Provides essential business information including hours of operation,
 * appointment policies, and direct booking functionality. This component
 * serves as the primary conversion point for potential customers.
 * 
 * @component
 * @returns {JSX.Element} Contact section with business info and booking button
 */

import './Contact.css';

const Contact = () => {
  // Handle booking button click interaction
  const handleBookingClick = () => {
    // Add booking functionality here later
    console.log('Booking button clicked');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        {/* Section heading */}
        <h2 className="contact__title">Contact Us</h2>
        
        {/* Contact information container */}
        <div className="contact__info">
          {/* Business hours section */}
          <div className="contact__section">
            <h3 className="contact__section-title">Salon Hours</h3>
            <p>
              <strong>Tues-Sat:</strong> 10AM-6PM<br />
              <strong>Sun-Mon:</strong> CLOSED
            </p>
          </div>
          
          {/* Booking information and call-to-action */}
          <div className="contact__section">
            <p>By appointment only.<br />Contact us today!</p>
            <button className="contact__booking-button" onClick={handleBookingClick}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
