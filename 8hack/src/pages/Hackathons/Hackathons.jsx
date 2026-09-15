import React from 'react';
import './Hackathons.css';

export const Hackathons = () => {
  const mockHackathons = [
    { id: 1, title: 'AI Innovation Hackathon', type: 'Online', category: 'AI', prize: '₹ 1,00,000', status: 'Registration Open', org: 'TechCorp' },
    { id: 2, title: 'Web3 Builders Challenge', type: 'Offline', category: 'Blockchain', prize: '₹ 2,50,000', status: 'Registration Open', org: 'Web3 Foundation' },
    { id: 3, title: 'FinTech Disrupt 2026', type: 'Hybrid', category: 'FinTech', prize: '₹ 5,00,000', status: 'Starts in 2 days', org: 'Global Bank' },
    { id: 4, title: 'Health Hack 4.0', type: 'Online', category: 'HealthTech', prize: '₹ 75,000', status: 'Registration Open', org: 'MedInnovate' },
    { id: 5, title: 'Green Energy Ideathon', type: 'Offline', category: 'Sustainability', prize: '₹ 1,50,000', status: 'Closed', org: 'EcoTech' },
    { id: 6, title: 'Open Source Sprint', type: 'Online', category: 'Open Source', prize: 'Swag & Mentorship', status: 'Registration Open', org: 'DevCommunity' },
  ];

  return (
    <div className="hackathons-page">
      <div className="page-header">
        <h1>Find Your Next Challenge.</h1>
        <p>Discover hackathons, competitions and innovation opportunities.</p>
      </div>

      <div className="search-filter-section">
        <div className="search-bar">
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search hackathons, technologies or organizations..." />
        </div>

        <div className="filters">
          <button className="filter-pill active">All</button>
          <button className="filter-pill">Online</button>
          <button className="filter-pill">Offline</button>
          <button className="filter-pill">Hybrid</button>
          
          <button className="filter-pill dropdown">Technology <i className="ri-arrow-down-s-line"></i></button>
          <button className="filter-pill dropdown">Location <i className="ri-arrow-down-s-line"></i></button>
          <button className="filter-pill dropdown">Theme <i className="ri-arrow-down-s-line"></i></button>
          <button className="filter-pill dropdown">Deadline <i className="ri-arrow-down-s-line"></i></button>
        </div>
      </div>

      <div className="hackathons-grid">
        {mockHackathons.map((hackathon) => (
          <div key={hackathon.id} className="hackathon-card">
            <div className="card-top">
              <div className="org-logo">
                <i className="ri-building-2-line"></i>
              </div>
              <span className="org-name">{hackathon.org}</span>
            </div>
            
            <h3>{hackathon.title}</h3>
            
            <div className="tags">
              <span className="tag"><i className="ri-code-box-line"></i> {hackathon.category}</span>
              <span className="tag"><i className="ri-global-line"></i> {hackathon.type}</span>
            </div>
            
            <div className="card-details">
              <div className="detail-item">
                <span className="detail-label">Prize Pool</span>
                <span className="detail-value">{hackathon.prize}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className={`detail-value ${hackathon.status === 'Closed' ? 'closed' : 'open'}`}>
                  {hackathon.status}
                </span>
              </div>
            </div>
            
            <button className="explore-btn">
              Explore <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="demo-notice">
        <p><i className="ri-information-line"></i> This is sample demo content.</p>
      </div>
    </div>
  );
};
