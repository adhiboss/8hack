import React from 'react';
import './Projects.css';

export const Projects = () => {
  const mockProjects = [
    { id: 1, title: 'AI Study Assistant', team: 4, stack: ['AI', 'React', 'Python'], img: 'ri-brain-line', color: 'bg-blue', textcolor: 'text-blue' },
    { id: 2, title: 'DeFi Portfolio Tracker', team: 2, stack: ['Web3', 'Vue', 'Solidity'], img: 'ri-coins-line', color: 'bg-purple', textcolor: 'text-purple' },
    { id: 3, title: 'Smart Home Hub OS', team: 5, stack: ['Hardware', 'C++', 'IoT'], img: 'ri-home-wifi-line', color: 'bg-green', textcolor: 'text-green' },
    { id: 4, title: 'MediConnect Portal', team: 3, stack: ['HealthTech', 'Next.js', 'PostgreSQL'], img: 'ri-hospital-line', color: 'bg-red', textcolor: 'text-red' },
    { id: 5, title: 'Open Source CLI Tool', team: 1, stack: ['Open Source', 'Rust', 'CLI'], img: 'ri-terminal-window-line', color: 'bg-orange', textcolor: 'text-orange' },
    { id: 6, title: 'Eco-Tracking App', team: 4, stack: ['Mobile', 'React Native', 'Firebase'], img: 'ri-leaf-line', color: 'bg-yellow', textcolor: 'text-yellow' }
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
          <div key={project.id} className="project-card">
            <div className={`project-image-placeholder ${project.color}`}>
              <i className={`${project.img} ${project.textcolor}`}></i>
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="team-size">Built by {project.team} builders</p>
              
              <div className="project-stack">
                {project.stack.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <button className="view-project-btn">
                View Project <i className="ri-arrow-right-line"></i>
              </button>
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
