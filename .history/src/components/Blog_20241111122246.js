import React from 'react';
import '../update/blog.css';
import PP from "../img/bc.png";

function Blog() {
  // Mock data for blog items
  const blogs = [
    { id: 1, title: 'The Peacock Project (v7.4.1)', description: 'How to use: RUN Start Server.cmd and start the patcher.exe as well, then open HTMWA as admin,', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_9R3lzRksnVnuWHeN9Mo7RWM1pOEd7CjKg&s" },
  ];

  const handleDownload = (e) => {
    e.preventDefault();  // Prevent default behavior
    const fileUrl = '/resources/server.zip';  // Correct relative path
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'server.zip';  // Set default download filename
    document.body.appendChild(link);  // Append to the DOM
    link.click();  // Trigger the download
    document.body.removeChild(link);  // Clean up after download
  };

  return (
    <div className='blog-page'>
      <h2 className='blog-title'>Blog Section</h2>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <img src={PP} alt="Peacock Server" className="blog-item-image" />
            <h2 className="blog-item-title">{blog.title}</h2>
            <p className="blog-item-description">{blog.description}</p>
            <button className="download-button" onClick={handleDownload}>
              Download server.zip
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
