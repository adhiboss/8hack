import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="footer-cta-banner">
        <h2>LET'S BUILD SOMETHING TOGETHER.</h2>
        <div className="footer-cta-text">
          <p>Organize an event.</p>
          <p>Partner with builders.</p>
          <p>Create an innovation program.</p>
        </div>
        <a href="mailto:hello@8hack.com" className="cta-button primary shadow-accent">
          Work With 8Hack <i className="ri-arrow-right-line"></i>
        </a>
      </div>

      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-title">
            <img src="/8hack.png" alt="8Hack Logo" style={{ height: '32px', objectFit: 'contain' }} />
            <span className="nav-tagline">Build. Connect. Innovate.</span>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h4>Hackathons</h4>
            <Link to="/hackathons">Discover</Link>
            <Link to="/hackathons">Upcoming</Link>
          </div>
          <div className="link-column">
            <h4>Community</h4>
            <Link to="/community">Builders</Link>
            <Link to="/events">Events</Link>
            <Link to="/projects">Projects</Link>
          </div>
          <div className="link-column">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <a href="mailto:hello@8hack.com">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 8Hack</p>
      </div>
    </footer>
  );
};
