import React from 'react';
import '../update/blog.css';
import Zimba from '../img/zimba.png';

function Blog() {
  // Function to handle the file download
  const handleDownload = () => {
    const fileUrl = '/resources/peacock-server.zip'; // Adjust the path as needed
    window.location.href = fileUrl;
  };

  return (
    <div className='blog-holder'>
      <div className="blog-container">
        <div className="blog-image-holder">
          <img className="blog-image" alt="blog" src={Zimba} />
        </div>
        <h1 className="blog-title">Peacock Server</h1>
        <p className="blog-description">
          Discover the power of the Peacock server! Download the latest resources and start exploring the features.
        </p>
        <button className="download-button" onClick={handleDownload}>
          Download Peacock Server ZIP
        </button>
      </div>
    </div>
  );
}

export default Blog;
