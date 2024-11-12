import React from 'react';
import '../update/blog.css';
import PP from "../img/server.png";

function Blog() {
  // Mock data for blog items
  const blogs = [
    { id: 1, title: 'The Peacock Project (v7.4.1)', description: 'How to use: RUN Start Server.cmd and start the patcher.exe as well, then open HTMWA as admin.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_9R3lzRksnVnuWHeN9Mo7RWM1pOEd7CjKg&s" },
  ];

//   // Handle download on button click
//   const handleDownload = () => {
//     // Fetching the file from server
//     fetch('/resources/server.zip') // Assuming the file is on the server path
//       .then((response) => {
//         // Check if the response was successful
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.blob(); // Get the file as a blob
//       })
//       .then((blob) => {
//         const url = URL.createObjectURL(blob); // Create an object URL for the blob
//         const link = document.createElement('a'); // Create an anchor element
//         link.href = url; // Set the download URL
//         link.download = 'server.zip'; // Name of the downloaded file
//         document.body.appendChild(link); // Append link to the body
//         link.click(); // Trigger the download
//         document.body.removeChild(link); // Remove the link after download
//         URL.revokeObjectURL(url); // Clean up the object URL
//       })
//       .catch((error) => {
//         console.error('Error downloading the file:', error); // Error handling
//       });
//   };

  return (
    <div className="blog-page">
      <h2 className="blog-title">Blog Section</h2>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <img src={PP} alt="Peacock Server" className="blog-item-image" />
            <h2 className="blog-item-title">{blog.title}</h2>
            <p className="blog-item-description">{blog.description}</p>
            <a href = "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
      Download = "test_image">
         <button type ="d" className="download-button-2"> Download </button>
      </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
