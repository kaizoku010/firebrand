import React from 'react';
import '../update/blog.css';
import PP from "../img/pp.png";

function Blog() {
  // Mock data for blog items
  const blogs = [
    { id: 1, title: 'Peacock Server', description: 'Discover the power of the Peacock server. Download resources and start exploring.', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_9R3lzRksnVnuWHeN9Mo7RWM1pOEd7CjKg&s" },
  ];

  // Download handler for the main blog item
  const handleDownload = () => {
    const fileUrl = '/resources/server.zip'; // Adjust the path as needed
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'server.zip'; // You can specify the default filename here
    link.click();
  };

  return (
 

    <div className='blog-page'>
          <h2 className='blog-title'>Blog Section</h2>

         <div className="blog-grid">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          
          {blog.id === 1 && <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_9R3lzRksnVnuWHeN9Mo7RWM1pOEd7CjKg&s"} alt="Peacock Server" className="blog-item-image" />}
          <h2 className="blog-item-title">{blog.title}</h2>
          <p className="blog-item-description">{blog.description}</p>
          {blog.id === 1 && (
            <button className="download-button-2" onClick={handleDownload}>
              Download server.zip
            </button>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Blog; 