import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If not a hash link, scroll to top
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: "Home", path: "/", icon: "ri-home-5-line" },
    { name: "Hackathons", path: "/hackathons", icon: "ri-calendar-event-line" },
    { name: "Community", path: "/community", icon: "ri-group-line" },
    { name: "Projects", path: "/projects", icon: "ri-macbook-line" },
    { name: "About", path: "/about", icon: "ri-information-line" },
    { name: "Blog", path: "/blog", icon: "ri-article-line" }
  ];

  const renderNavLinks = (isMobile) => {
    return navLinks.map((link) => {
      const isActive = location.pathname === link.path;
      if (link.isExternal) {
        return (
          <a href={link.path} key={link.name} className="nav-item">
            <i className={link.icon}></i>
            <span>{link.name}</span>
          </a>
        );
      }
      return (
        <a href={link.path} key={link.name} className={`nav-item ${isActive ? "active" : ""}`} onClick={(e) => { e.preventDefault(); navigate(link.path); }}>
          <i className={link.icon}></i>
          <span>{link.name}</span>
        </a>
      );
    });
  };

  return (
    <>
      {/* Desktop Top Navbar */}
      <div className="top-navbar-wrapper">
        <nav className="top-navbar">
          <div className="logo-title" onClick={() => navigate("/")} style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
            <img src="/8hack.png" alt="8Hack Logo" style={{ height: '32px', objectFit: 'contain' }} />
            <span className="nav-tagline">Build. Connect. Innovate.</span>
          </div>
          <div className="nav-links">
            {renderNavLinks(false)}
          </div>
          <div className="nav-actions">
            <button className="search-btn"><i className="ri-search-line"></i></button>
            <a href="mailto:hello@8hack.com" className="nav-cta">Work With Us <i className="ri-arrow-right-line"></i></a>
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Navbar */}
      <nav className="bottom-navbar">
        {navLinks.slice(0, 5).map((link) => (
           <a href={link.path} key={link.name} className={`nav-item ${location.pathname === link.path ? "active" : ""}`} onClick={(e) => { e.preventDefault(); navigate(link.path); }}>
            <i className={link.icon}></i>
            <span>{link.name}</span>
          </a>
        ))}
      </nav>
    </>
  );
};
