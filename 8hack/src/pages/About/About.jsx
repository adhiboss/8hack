import React from "react";
import "./About.css";
import { Helmet } from "react-helmet-async";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About | 8Hack</title>
        <meta
          name="description"
          content="8Hack is a technology and innovation company."
        />
      </Helmet>

      <div className="about-container" style={{ padding: '120px 20px', textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="page-title" style={{ color: 'var(--primary-color)', fontSize: '3rem', marginBottom: '30px' }}>About 8Hack</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)' }}>
          8Hack connects people, technology, and organizations through experiences that make people build. 
          The 8 represents infinity — continuous innovation, continuous learning, continuous building.
        </p>
      </div>
    </>
  );
};
