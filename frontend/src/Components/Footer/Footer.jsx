import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>Learn more about our hotel booking platform and the services we offer to ensure your stay is unforgettable.</p>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: support@heavenhorizons.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Hotel Avenue, Coimbatore</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/rooms">Rooms</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/offers">Special Offers</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Subscribe to Our Newsletter</h4>
        <p>Get the latest updates and offers directly in your inbox:</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2024 HeavenHorizons. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
