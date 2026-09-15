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
    { name: "Services", path: "/#services", icon: "ri-service-line" },
    { name: "Events", path: "/#events", icon: "ri-calendar-event-line" },
    { name: "Community", path: "/#community", icon: "ri-group-line" },
    { name: "About", path: "/#about", icon: "ri-information-line" },
    { name: "Contact", path: "mailto:hello@8hack.com", icon: "ri-mail-line", isExternal: true },
  ];

  const renderNavLinks = (isMobile) => {
    return navLinks.map((link) => {
      const isActive = location.pathname === link.path || (location.pathname === "/" && location.hash === link.path.replace("/", ""));
      if (link.isExternal) {
        return (
          <a href={link.path} key={link.name} className="nav-item">
            <i className={link.icon}></i>
            <span>{link.name}</span>
          </a>
        );
      }
      // For hash links, we can just use normal a tag or Link
      return (
        <a href={link.path} key={link.name} className={`nav-item ${isActive ? "active" : ""}`}>
          <i className={link.icon}></i>
          <span>{link.name}</span>
        </a>
      );
    });
  };

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className="top-navbar">
        <div className="logo-title" onClick={() => navigate("/")} style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
          <img src="/8hack.png" alt="8Hack Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </div>
        <div className="nav-links">
          {renderNavLinks(false)}
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="bottom-navbar">
        {navLinks.slice(0, 5).map((link) => (
           <a href={link.path} key={link.name} className={`nav-item ${location.pathname === link.path ? "active" : ""}`}>
            <i className={link.icon}></i>
            <span>{link.name}</span>
          </a>
        ))}
      </nav>
    </>
  );
};
