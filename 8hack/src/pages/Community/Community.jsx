import React from 'react';
import './Community.css';

export const Community = () => {
  const mockBuilders = [
    { id: 1, name: 'Alex M.', handle: '@alexm', role: 'AI Builder', location: 'San Francisco, CA', skills: ['Python', 'PyTorch', 'RAG'], avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d', banner: 'bg-blue' },
    { id: 2, name: 'Sarah J.', handle: '@sarahj', role: 'Frontend Dev', location: 'London, UK', skills: ['React', 'Three.js', 'UI/UX'], avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', banner: 'bg-purple' },
    { id: 3, name: 'David K.', handle: '@davidk', role: 'Backend Eng', location: 'Berlin, DE', skills: ['Go', 'Postgres', 'Docker'], avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', banner: 'bg-green' },
    { id: 4, name: 'Emily R.', handle: '@emilyr', role: 'Product Designer', location: 'Toronto, CA', skills: ['Figma', 'Research'], avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d', banner: 'bg-orange' },
    { id: 5, name: 'Michael T.', handle: '@michaelt', role: 'Founder', location: 'Austin, TX', skills: ['Strategy', 'Marketing'], avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d', banner: 'bg-red' },
    { id: 6, name: 'Jessica L.', handle: '@jessical', role: 'Data Scientist', location: 'Remote', skills: ['SQL', 'Pandas', 'ML'], avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026023d', banner: 'bg-yellow' }
  ];

  return (
    <div className="community-page">
      <div className="page-header">
        <h1>Find Your People.</h1>
        <p>Meet builders who want to create, learn and grow.</p>
      </div>

      <div className="builder-categories">
        <div className="category-card">
          <div className="cat-icon bg-blue"><i className="ri-code-box-line text-blue"></i></div>
          <span>Developers</span>
        </div>
        <div className="category-card">
          <div className="cat-icon bg-purple"><i className="ri-palette-line text-purple"></i></div>
          <span>Designers</span>
        </div>
        <div className="category-card">
          <div className="cat-icon bg-green"><i className="ri-robot-2-line text-green"></i></div>
          <span>AI Builders</span>
        </div>
        <div className="category-card">
          <div className="cat-icon bg-red"><i className="ri-rocket-line text-red"></i></div>
          <span>Founders</span>
        </div>
        <div className="category-card">
          <div className="cat-icon bg-yellow"><i className="ri-graduation-cap-line text-yellow"></i></div>
          <span>Students</span>
        </div>
        <div className="category-card">
          <div className="cat-icon bg-orange"><i className="ri-pen-nib-line text-orange"></i></div>
          <span>Creators</span>
        </div>
      </div>

      <div className="find-teammates-section">
        <div className="find-header">
          <h2>Looking for a teammate?</h2>
        </div>
        <div className="role-filters">
          <button className="role-pill">Frontend</button>
          <button className="role-pill active">Backend</button>
          <button className="role-pill">AI</button>
          <button className="role-pill">Designer</button>
          <button className="role-pill">Product</button>
          <button className="role-pill">Other</button>
        </div>
        <button className="find-btn">
          Find Builders <i className="ri-arrow-right-line"></i>
        </button>
      </div>

      <div className="builders-grid">
        {mockBuilders.map((builder) => (
          <div key={builder.id} className="devfolio-card">
            <div className={`card-banner ${builder.banner}`}></div>
            <div className="card-body">
              <div className="avatar-container">
                <img src={builder.avatar} alt={builder.name} className="devfolio-avatar" />
              </div>
              <div className="builder-identity">
                <h3>{builder.name}</h3>
                <span className="builder-handle">{builder.handle}</span>
              </div>
              <div className="builder-bio">
                <p className="role-tag"><i className="ri-briefcase-4-line"></i> {builder.role}</p>
                <p className="location-tag"><i className="ri-map-pin-line"></i> {builder.location}</p>
              </div>
              <div className="devfolio-skills">
                {builder.skills.map(skill => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
              <button className="connect-btn">
                Connect <i className="ri-user-add-line"></i>
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
