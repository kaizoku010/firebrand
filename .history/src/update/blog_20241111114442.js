import React from 'react';
import '../update/blog.css';

function Blog() {
  // Mock data for blog items
  const blogs = [
    { id: 1, title: 'Peacock Server', description: 'Discover the power of the Peacock server. Download resources and start exploring.' },
    { id: 2, title: 'Blog Coming Soon', description: 'Stay tuned for exciting content updates coming soon.' },
    { id: 3, title: 'Blog Coming Soon', description: 'Stay tuned for exciting content updates coming soon.' },
    { id: 4, title: 'Blog Coming Soon', description: 'Stay tuned for exciting content updates coming soon.' },
    { id: 5, title: 'Blog Coming Soon', description: 'Stay tuned for exciting content updates coming soon.' },
    { id: 6, title: 'Blog Coming Soon', description: 'Stay tuned for exciting content updates coming soon.' },
    { id: 7, title: 'Blog Coming Soon', description: 'Stay tuned for exciting content updates coming soon.' },
    { id: 8, title: 'Blog Coming Soon', description: 'Stay tuned for exciting content updates coming soon.' },
    { id: 9, title: 'Blog Coming Soon', description: 'Stay tuned for exciting content updates coming soon.' },
  ];

  // Download handler for the main blog item
  const handleDownload = () => {
    const fileUrl = '/resources/peacock-server.zip'; // Adjust the path as needed
    window.location.href = fileUrl;
  };

  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <h2 className="blog-item-title">{blog.title}</h2>
          <p className="blog-item-description">{blog.description}</p>
          {blog.id === 1 && (
            <button className="download-button" onClick={handleDownload}>
              Download Peacock Server ZIP
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Blog;
