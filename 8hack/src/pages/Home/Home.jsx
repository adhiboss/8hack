import React, { useEffect } from "react";
import "./Home.css";

export const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="home-container">
      <main>
        {/* 1. HERO SECTION */}
        <section className="hero-section" id="hero">
          <div className="hero-left">
            <div className="tagline">BUILD · CONNECT · INNOVATE</div>
            <h1>Where Builders Come Together<span className="dot">.</span></h1>
            <p>
              8Hack brings developers, students, startups and companies together through hackathons, workshops, and technology communities to turn ideas into impact.
            </p>
            <div className="cta-group">
              <a href="#services" className="cta-button primary shadow-accent">
                Explore 8Hack <i className="ri-arrow-right-line"></i>
              </a>
              <a href="#contact" className="cta-button outline">
                Work With Us
              </a>
            </div>
            
            <div className="avatar-group-container">
              <div className="avatars">
                <div className="avatar a1"></div>
                <div className="avatar a2"></div>
                <div className="avatar a3"></div>
                <div className="avatar a4"></div>
              </div>
              <p className="avatar-text">A growing community of <br/>builders, innovators and creators.</p>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-illustration-wrapper">
              <img src="/hero_illustration.jpg" alt="8Hack Community Collaborating" className="main-illustration" />
              
              {/* Floating Badges */}
              <div className="floating-badge b-hackathons">
                <i className="ri-box-3-line"></i> Hackathons
              </div>
              <div className="floating-badge b-workshops">
                <i className="ri-group-line"></i> Workshops
              </div>
              <div className="floating-badge b-communities">
                <i className="ri-team-line"></i> Communities
              </div>
              <div className="floating-badge b-corporate">
                <i className="ri-building-2-line"></i> Corporate Events
              </div>
              <div className="floating-badge b-innovation">
                <i className="ri-lightbulb-flash-line"></i> Innovation
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT WE DO */}
        <section className="services-section" id="services">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>Programs that bring people, technology and ideas together.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="icon-wrapper yellow">
                <i className="ri-trophy-line"></i>
              </div>
              <h3>Hackathons</h3>
              <p>Build ideas.</p>
              <i className="ri-arrow-right-line card-arrow"></i>
            </div>
            <div className="service-card">
              <div className="icon-wrapper blue">
                <i className="ri-building-4-line"></i>
              </div>
              <h3>Corporate Events</h3>
              <p>Create experiences.</p>
              <i className="ri-arrow-right-line card-arrow"></i>
            </div>
            <div className="service-card">
              <div className="icon-wrapper green">
                <i className="ri-terminal-window-line"></i>
              </div>
              <h3>Tech Workshops</h3>
              <p>Learn by building.</p>
              <i className="ri-arrow-right-line card-arrow"></i>
            </div>
            <div className="service-card">
              <div className="icon-wrapper purple">
                <i className="ri-group-line"></i>
              </div>
              <h3>Community Building</h3>
              <p>Grow together.</p>
              <i className="ri-arrow-right-line card-arrow"></i>
            </div>
            <div className="service-card">
              <div className="icon-wrapper red">
                <i className="ri-lightbulb-flash-line"></i>
              </div>
              <h3>Innovation Programs</h3>
              <p>Solve real problems.</p>
              <i className="ri-arrow-right-line card-arrow"></i>
            </div>
            <div className="service-card">
              <div className="icon-wrapper orange">
                <i className="ri-graduation-cap-line"></i>
              </div>
              <h3>Developer Programs</h3>
              <p>Discover talent.</p>
              <i className="ri-arrow-right-line card-arrow"></i>
            </div>
          </div>
        </section>

        {/* 3. FOR COMPANIES */}
        <section className="split-section" id="companies">
          <div className="split-content">
            <h2>For Companies</h2>
            <p>Build teams. Solve challenges. Discover talent.</p>
            <a href="#contact" className="cta-button dark">
              Partner With Us <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="split-visual">
            <img src="/for_companies.jpg" alt="Corporate team collaborating with developers" className="rounded-visual" />
          </div>
        </section>

        {/* 4. FOR BUILDERS */}
        <section className="split-section reverse" id="builders">
          <div className="split-content">
            <h2>For Builders</h2>
            <p>Learn. Build. Connect. Showcase.</p>
            <a href="#community" className="cta-button dark">
              Join the Community <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="split-visual">
            <div className="placeholder-visual builder-visual">
               <i className="ri-macbook-line text-blue"></i>
               <i className="ri-braces-line text-purple"></i>
               <i className="ri-rocket-2-line text-yellow"></i>
            </div>
          </div>
        </section>

        {/* 5. BUILD CULTURE */}
        <section className="culture-section" id="culture">
          <div className="culture-content">
            <h2>Build Culture</h2>
            <p>A culture where people learn, build and create together.</p>
            <div className="culture-badges">
              <span><i className="ri-terminal-box-line"></i> Hackathons</span>
              <span><i className="ri-slideshow-line"></i> Workshops</span>
              <span><i className="ri-team-line"></i> Communities</span>
              <span><i className="ri-lightbulb-flash-line"></i> Innovation</span>
            </div>
          </div>
          <div className="culture-visual-large">
             <img src="/hero_illustration.jpg" alt="Developers building culture" className="rounded-visual large-banner" />
          </div>
        </section>

        {/* 6. FEATURED EVENTS */}
        <section className="events-section" id="events">
          <div className="section-header flex-header">
            <div>
              <h2>Featured Events</h2>
              <p>Upcoming experiences for builders, teams and organizations.</p>
            </div>
            <a href="#events" className="cta-button outline small">View All <i className="ri-arrow-right-line"></i></a>
          </div>
          
          <div className="events-grid">
            <div className="event-card">
              <div className="event-image img-1"></div>
              <div className="event-details">
                <h3>CodeSphere 2026 Hackathon</h3>
                <p><i className="ri-calendar-line"></i> 25 Jul 2026</p>
                <p><i className="ri-map-pin-line"></i> Online</p>
                <span className="status open">Registration Open <i className="ri-arrow-right-line"></i></span>
              </div>
            </div>
            <div className="event-card">
              <div className="event-image img-2"></div>
              <div className="event-details">
                <h3>Build for Bharat Challenge</h3>
                <p><i className="ri-calendar-line"></i> 12 Aug 2026</p>
                <p><i className="ri-map-pin-line"></i> Bengaluru</p>
                <span className="status closed">Coming Soon <i className="ri-arrow-right-line"></i></span>
              </div>
            </div>
            <div className="event-card">
              <div className="event-image img-3"></div>
              <div className="event-details">
                <h3>AI Builders Workshop</h3>
                <p><i className="ri-calendar-line"></i> 30 Aug 2026</p>
                <p><i className="ri-map-pin-line"></i> Online</p>
                <span className="status open">Registration Open <i className="ri-arrow-right-line"></i></span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="final-cta-section" id="contact">
          <div className="cta-content">
            <h2>Build What's Next.</h2>
            <p>Ideas become impact when people build together.</p>
            <div className="cta-group">
              <a href="mailto:hello@8hack.com" className="cta-button primary shadow-accent">
                Work With Us <i className="ri-arrow-right-line"></i>
              </a>
              <a href="#community" className="cta-button secondary">
                Join the Community <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          <div className="cta-visual">
            <i className="ri-rocket-2-fill"></i>
          </div>
        </section>
        
      </main>
    </div>
  );
};
