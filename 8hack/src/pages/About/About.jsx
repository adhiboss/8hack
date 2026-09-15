import React from "react";
import "./About.css";
import "../Home/Home.css"; // Reuse purpose strip styles
import { Helmet } from "react-helmet-async";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About | 8Hack</title>
        <meta
          name="description"
          content="8Hack is an ecosystem designed to connect builders, foster innovation, and turn ideas into real-world impact."
        />
      </Helmet>

      <div className="about-page" style={{ padding: '120px 5% 80px', minHeight: '80vh' }}>
        <div className="page-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontFamily: 'Oswald', fontSize: '4rem', marginBottom: '20px' }}>WE BUILD WHAT'S NEXT.</h1>
          <p style={{ fontSize: '1.2rem', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
            8Hack is an ecosystem designed to connect builders, foster innovation, and turn ideas into real-world impact.
          </p>
        </div>

        <section className="purpose-strip" style={{ margin: '0 auto 80px' }}>
          <div className="purpose-item">
            <div className="purpose-icon"><i className="ri-rocket-2-line"></i></div>
            <div className="purpose-text">
              <h3>BUILD CULTURE</h3>
              <p>Create spaces where people learn by building.</p>
            </div>
          </div>
          <div className="purpose-divider"></div>
          <div className="purpose-item">
            <div className="purpose-icon"><i className="ri-lightbulb-flash-line"></i></div>
            <div className="purpose-text">
              <h3>DRIVE INNOVATION</h3>
              <p>Turn ideas into real-world impact.</p>
            </div>
          </div>
          <div className="purpose-divider"></div>
          <div className="purpose-item">
            <div className="purpose-icon"><i className="ri-team-line"></i></div>
            <div className="purpose-text">
              <h3>GROW COMMUNITIES</h3>
              <p>Connect people who build together.</p>
            </div>
          </div>
        </section>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', lineHeight: '1.8', color: '#475569', fontSize: '1.1rem' }}>
          <p>We believe that the best way to learn is to build, and the best way to build is together. Whether you are a developer, designer, founder, or creator, 8Hack provides the platform and community for you to find your next big challenge.</p>
        </div>
      </div>
    </>
  );
};
