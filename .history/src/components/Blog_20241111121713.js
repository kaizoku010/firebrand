import React from 'react';
import '../update/blog.css';
import PP from "../img/server.png";

function Blog() {
  // Mock data for blog items
  const blogs = [
    { id: 1, title: 'The Peacock Project (v7.4.1)', description: 'How to use: RUN Start Server.cmd and start the patcher.exe as well, the open HTMWA as admin, ', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_9R3lzRksnVnuWHeN9Mo7RWM1pOEd7CjKg&s" },
  ];

  

  return (
 

    <div className='blog-page'>
          <h2 className='blog-title'>Blog Section</h2>

         <div className="blog-grid">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          
          {blog.id === 1 && <img src={PP} alt="Peacock Server" className="blog-item-image" />}
          <h2 className="blog-item-title">{blog.title}</h2>
          <p className="blog-item-description">{blog.description}</p>
          {blog.id === 1 && (
           <a href="/resources/server.zip" download="server.zip">Download directly</a>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Blog; 