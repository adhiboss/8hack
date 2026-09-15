import React from 'react';
import './Blog.css';

export const Blog = () => {
  const mockArticles = [
    { id: 1, title: 'How to Win Your First Hackathon', readTime: '5 min read', category: 'Hackathons', img: 'ri-trophy-line', color: 'bg-yellow' },
    { id: 2, title: 'The Future of AI Agents', readTime: '7 min read', category: 'AI', img: 'ri-robot-2-line', color: 'bg-blue' },
    { id: 3, title: 'Building Communities That Last', readTime: '4 min read', category: 'Community', img: 'ri-group-line', color: 'bg-green' },
    { id: 4, title: 'From Idea to MVP in 48 Hours', readTime: '6 min read', category: 'Building', img: 'ri-rocket-line', color: 'bg-red' },
    { id: 5, title: 'Top 5 Tech Stacks for 2026', readTime: '5 min read', category: 'Building', img: 'ri-code-s-slash-line', color: 'bg-purple' },
    { id: 6, title: 'Why Offline Events Still Matter', readTime: '4 min read', category: 'Community', img: 'ri-map-pin-line', color: 'bg-orange' }
  ];

  return (
    <div className="blog-page">
      <div className="page-header">
        <h1>Ideas Worth Sharing.</h1>
        <p>Insights, guides, and stories from the 8Hack ecosystem.</p>
      </div>

      <div className="search-filter-section">
        <div className="filters">
          <button className="filter-pill active">All</button>
          <button className="filter-pill">Hackathons</button>
          <button className="filter-pill">Building</button>
          <button className="filter-pill">AI</button>
          <button className="filter-pill">Community</button>
        </div>
      </div>

      <div className="blog-grid">
        {mockArticles.map((article) => (
          <div key={article.id} className="article-card">
            <div className={`article-image-placeholder ${article.color}`}>
              <i className={article.img}></i>
            </div>
            
            <div className="article-info">
              <span className="article-category">{article.category}</span>
              <h3>{article.title}</h3>
              <p className="article-meta"><i className="ri-time-line"></i> {article.readTime}</p>
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
