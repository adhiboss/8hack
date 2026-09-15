import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
            <div className="eyebrow">IDEAS • PEOPLE • POSSIBILITIES</div>
            <h1>BUILD WHAT’S <span className="highlight-text">NEXT.</span></h1>
            <p className="short-copy">
              Discover opportunities. Connect with builders. Turn ideas into impact.
            </p>
            <div className="cta-group">
              <Link to="/hackathons" className="cta-button primary shadow-accent">
                Find Hackathons <i className="ri-arrow-right-line"></i>
              </Link>
              <Link to="/community" className="cta-button outline">
                Join Community <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            
            <div className="avatar-group-container">
              <div className="avatars">
                <div className="avatar a1"></div>
                <div className="avatar a2"></div>
                <div className="avatar a3"></div>
                <div className="avatar a4"></div>
              </div>
              <p className="avatar-text">Builders. Innovators. Creators.</p>
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
              <div className="floating-badge b-corporate">
                <i className="ri-building-2-line"></i> Corporate Events
              </div>
              <div className="floating-badge b-communities">
                <i className="ri-team-line"></i> Communities
              </div>
              <div className="floating-badge b-innovation">
                <i className="ri-lightbulb-flash-line"></i> Innovation
              </div>

              {/* Handwritten Annotations */}
              <div className="annotation anno-left">
                Build<br/>Learn<br/>Connect<br/>Grow
              </div>
              <div className="annotation anno-right">
                Good Ideas<br/>Better People
              </div>
            </div>
          </div>
        </section>

        {/* 2. PURPOSE / MOTIVE STRIP */}
        <section className="purpose-strip" id="purpose">
          <div className="purpose-item">
            <div className="purpose-icon"><i className="ri-rocket-2-line"></i></div>
            <div className="purpose-text">
              <h3>BUILD CULTURE</h3>
              <p>People learn. Ideas grow.</p>
            </div>
          </div>
          <div className="purpose-divider"></div>
          <div className="purpose-item">
            <div className="purpose-icon"><i className="ri-lightbulb-flash-line"></i></div>
            <div className="purpose-text">
              <h3>DRIVE INNOVATION</h3>
              <p>Ideas become impact.</p>
            </div>
          </div>
          <div className="purpose-divider"></div>
          <div className="purpose-item">
            <div className="purpose-icon"><i className="ri-team-line"></i></div>
            <div className="purpose-text">
              <h3>GROW COMMUNITIES</h3>
              <p>Stronger together.</p>
            </div>
          </div>
        </section>

        {/* 3. THE 8HACK JOURNEY LOOP */}
        <section className="journey-section">
          <div className="journey-header">
            <div className="journey-eyebrow">THE 8HACK JOURNEY</div>
            <h2>How Ideas Become Impact</h2>
          </div>

          <div className="journey-loop">
            
            <div className="journey-step">
              <div className="step-icon"><i className="ri-search-eye-line"></i></div>
              <h3>DISCOVER</h3>
              <p>Find opportunities</p>
            </div>
            
            <div className="journey-connector"><i className="ri-arrow-right-line"></i></div>
            
            <div className="journey-step">
              <div className="step-icon"><i className="ri-group-line"></i></div>
              <h3>CONNECT</h3>
              <p>Meet builders</p>
            </div>
            
            <div className="journey-connector"><i className="ri-arrow-right-line"></i></div>
            
            <div className="journey-step">
              <div className="step-icon"><i className="ri-braces-line"></i></div>
              <h3>BUILD</h3>
              <p>Create projects</p>
            </div>
            
            <div className="journey-connector"><i className="ri-arrow-right-line"></i></div>
            
            <div className="journey-step">
              <div className="step-icon"><i className="ri-macbook-line"></i></div>
              <h3>SHOWCASE</h3>
              <p>Share your work</p>
            </div>

            <div className="journey-connector"><i className="ri-arrow-right-line"></i></div>
            
            <div className="journey-step">
              <div className="step-icon"><i className="ri-plant-line"></i></div>
              <h3>GROW</h3>
              <p>Build your network</p>
            </div>
          </div>
        </section>

        {/* 4. FOR ORGANIZERS (Devpost Style Split) */}
        <section className="organizer-section">
          <div className="organizer-content">
            <div className="eyebrow">FOR ORGANIZERS</div>
            <h2>Powering the world's best hackathons.</h2>
            <p>
              From registration to project submission and judging, 8Hack provides everything you need to host a successful hackathon and engage with top builders.
            </p>
            <ul className="organizer-benefits">
              <li><i className="ri-check-line"></i> Custom registration flows</li>
              <li><i className="ri-check-line"></i> Automated team formation</li>
              <li><i className="ri-check-line"></i> Seamless project submissions</li>
            </ul>
            <a href="mailto:hello@8hack.com" className="cta-button primary shadow-accent">
              Host your hackathon <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="organizer-visual">
            <div className="mock-dashboard">
              <div className="dash-header">
                <span className="dot bg-red"></span>
                <span className="dot bg-yellow"></span>
                <span className="dot bg-green"></span>
              </div>
              <div className="dash-body">
                <div className="dash-stat-row">
                  <div className="dash-stat">
                    <span className="stat-value">1,245</span>
                    <span className="stat-label">Registrations</span>
                  </div>
                  <div className="dash-stat">
                    <span className="stat-value">312</span>
                    <span className="stat-label">Projects</span>
                  </div>
                </div>
                <div className="dash-chart"></div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
};
