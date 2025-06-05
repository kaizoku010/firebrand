import React, { useState, useEffect } from 'react';
import '../update/blog.css';
import PP from "../img/server.png";

function Blog() {
  // Mock data for blog items
  const blogs = [
    { id: 1, title: 'The Peacock Project (v7.4.1)', description: 'How to use: RUN Start Server.cmd and start the patcher.exe as well, then open HTMWA as admin.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_9R3lzRksnVnuWHeN9Mo7RWM1pOEd7CjKg&s" },
    {
      id: 2,
      title: 'Streaming a Video from Your Computer to OBS and Your React App Using Docker',
      description: 'Learn how to stream a local video to OBS and your React app using Dockerized RTMP and HLS servers. Step-by-step guide for developers and streamers.',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6QvQw1kQGQw1kQGQw1kQGQ.png'
    },
  ];

  // State to track if the download is in progress
  const [isDownloading, setIsDownloading] = useState(false);

  // Handle download on button click
  const handleDownload = () => {
    if (isDownloading) return; // Prevent download if it's already in progress

    // Set the downloading state to true to disable the button
    setIsDownloading(true);

    // Fetching the file from the server
    fetch('/resources/server.zip') // Assuming the file is on the server path
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob(); // Get the file as a blob
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob); // Create an object URL for the blob
        const link = document.createElement('a'); // Create an anchor element
        link.href = url; // Set the download URL
        link.download = 'server.zip'; // Name of the downloaded file
        document.body.appendChild(link); // Append link to the body
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove the link after download
        URL.revokeObjectURL(url); // Clean up the object URL

        // Reset the downloading state after the download
        setIsDownloading(false);
      })
      .catch((error) => {
        console.error('Error downloading the file:', error); // Error handling

        // Reset the downloading state if there's an error
        setIsDownloading(false);
      });
  };

  useEffect(() => {
    // Dynamically load the AdSense script after the component has mounted
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3855618579065381";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Initialize AdSense
    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    return () => {
      // Clean up the script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="blog-page">
      <h2 className="blog-title">Blog Section</h2>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <img src={blog.image} alt={blog.title} className="blog-item-image" />
            <h2 className="blog-item-title">{blog.title}</h2>
            <p className="blog-item-description">{blog.description}</p>
            {/* Button that triggers the download or opens the guide */}
            {blog.id === 1 ? (
              <button
                className="download-button-2"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? 'Downloading...' : 'Download server.zip'}
              </button>
            ) : (
              <button
                className="download-button-2"
                onClick={() => window.location.href = '/blog-details'}
              >
                Read Guide
              </button>
            )}
          </div>
        ))}
        
        {/* AdSense Ad */}
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-3855618579065381"
             data-ad-slot="7113298799"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>
  );
}

export default Blog;
