import React from 'react';
import './Community.css';

export const Community = () => {
  const mockBuilders = [
    { id: 1, name: 'Alex M.', role: 'AI Builder', skills: 'Python • PyTorch • RAG', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
    { id: 2, name: 'Sarah J.', role: 'Frontend Developer', skills: 'React • Three.js • UI/UX', avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d' },
    { id: 3, name: 'David K.', role: 'Backend Engineer', skills: 'Go • PostgreSQL • Docker', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { id: 4, name: 'Emily R.', role: 'Product Designer', skills: 'Figma • User Research', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d' },
    { id: 5, name: 'Michael T.', role: 'Founder', skills: 'Strategy • Marketing • Sales', avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d' },
    { id: 6, name: 'Jessica L.', role: 'Data Scientist', skills: 'SQL • Pandas • ML', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026023d' },
    { id: 7, name: 'Ryan P.', role: 'Student', skills: 'Java • C++ • Algorithms', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026025d' },
    { id: 8, name: 'Chloe B.', role: 'Creator', skills: 'Video • Copywriting', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026026d' }
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
          <div key={builder.id} className="builder-card">
            <div className="avatar-wrapper">
              <img src={builder.avatar} alt={builder.name} className="builder-avatar" />
            </div>
            <h3>{builder.name}</h3>
            <p className="builder-role">{builder.role}</p>
            <div className="builder-skills">
              {builder.skills}
            </div>
            <button className="connect-btn">
              Connect <i className="ri-user-add-line"></i>
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
