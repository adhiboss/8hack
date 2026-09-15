import React from 'react';
import './Projects.css';

export const Projects = () => {
  const mockProjects = [
    { id: 1, title: 'AI Study Assistant', tagline: 'Your personal AI tutor that generates quizzes from notes.', event: 'Global AI Hack 2026', likes: 142, stack: ['AI', 'React', 'Python'], img: 'ri-brain-line', color: 'bg-blue', textcolor: 'text-blue' },
    { id: 2, title: 'DeFi Portfolio Tracker', tagline: 'Track all your web3 assets across 12 chains in one place.', event: 'Web3 Builders Challenge', likes: 89, stack: ['Web3', 'Vue', 'Solidity'], img: 'ri-coins-line', color: 'bg-purple', textcolor: 'text-purple' },
    { id: 3, title: 'Smart Home Hub OS', tagline: 'Open source operating system for DIY smart homes.', event: 'Hardware Hackathon', likes: 215, stack: ['Hardware', 'C++', 'IoT'], img: 'ri-home-wifi-line', color: 'bg-green', textcolor: 'text-green' },
    { id: 4, title: 'MediConnect Portal', tagline: 'Secure telemedicine portal for rural areas.', event: 'Health Hack 4.0', likes: 67, stack: ['HealthTech', 'Next.js', 'PostgreSQL'], img: 'ri-hospital-line', color: 'bg-red', textcolor: 'text-red' },
    { id: 5, title: 'Open Source CLI Tool', tagline: 'A blazing fast CLI tool for managing Docker containers.', event: 'Open Source Sprint', likes: 304, stack: ['Open Source', 'Rust', 'CLI'], img: 'ri-terminal-window-line', color: 'bg-orange', textcolor: 'text-orange' },
    { id: 6, title: 'Eco-Tracking App', tagline: 'Track and reduce your daily carbon footprint easily.', event: 'Green Energy Ideathon', likes: 112, stack: ['Mobile', 'React Native', 'Firebase'], img: 'ri-leaf-line', color: 'bg-yellow', textcolor: 'text-yellow' }
  ];

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>See What Builders Create.</h1>
        <p>Ideas become valuable when you build them.</p>
      </div>

      <div className="search-filter-section">
        <div className="filters">
          <button className="filter-pill active">All</button>
          <button className="filter-pill">AI</button>
          <button className="filter-pill">Web</button>
          <button className="filter-pill">Hardware</button>
          <button className="filter-pill">FinTech</button>
          <button className="filter-pill">HealthTech</button>
          <button className="filter-pill">Open Source</button>
        </div>
      </div>

      <div className="projects-grid">
        {mockProjects.map((project) => (
          <div key={project.id} className="devpost-project-card">
            <div className={`project-thumbnail ${project.color}`}>
              <i className={`${project.img} ${project.textcolor}`}></i>
            </div>
            
            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
              
              <div className="project-event">
                <i className="ri-trophy-line"></i> Built at <strong>{project.event}</strong>
              </div>
              
              <div className="project-footer">
                <div className="project-stack">
                  {project.stack.map(tech => (
                    <span key={tech} className="tech-dot" title={tech}></span>
                  ))}
                </div>
                <div className="project-likes">
                  <i className="ri-thumb-up-line"></i> {project.likes}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="demo-notice">
        <p><i className="ri-information-line"></i> This is sample demo content.</p>
      </div>
    </div>
  );
};
