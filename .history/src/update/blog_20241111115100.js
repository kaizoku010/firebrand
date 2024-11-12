import React from 'react';
import '../update/blog.css';
import PP from "../img/pp.png";

function Blog() {
  // Mock data for blog items
  const blogs = [
    { id: 1, title: 'Peacock Server', description: 'Discover the power of the Peacock server. Download resources and start exploring.' },
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
          sds
          {blog.id === 1 && <img src={PP} alt="Peacock Server" className="blog-item-image" />}
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
