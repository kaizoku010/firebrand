import React from 'react'
import Header from '../update/header.js'
import Footer from '../update/footer.js'
import "./blogdetails.css"

function BlogDetails() {
  return (
    <>
      <div className="blog-details">
        <article className="blog-article">
          <header className="blog-header">
            <h1 className="blog-title">Stream Any Video From OBS To Your React App Using Docker</h1>
            <div className="blog-meta">
              <span>By Kalanzi Dixon</span> · <span>June 2025</span>
            </div>
            <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1678134359606/03e5efb6-7ba8-48d9-bba2-4a2700e620e4.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="Streaming with Docker" className="blog-details-img" />
          </header>
          <section className="blog-section">
            <h2>Overview</h2>
            <p>
            Sometime you Have you wanted to stream your videos to your platform, it could be a website, or mobile app
              Want to stream a video from your computer to both OBS Studio and your React app?
               This guide walks you through a modern workflow using Docker, 
               nginx-rtmp, and HLS. Perfect for live events, tutorials, or 
               custom streaming solutions!
            </p>
            <h2>What You'll Need</h2>
            <ul>
              <li>Docker installed</li>
              <li>OBS Studio</li>
              <li>A video file (e.g., <code>sample.mp4</code>)</li>
              <li>A React app (or any web app) to display the stream</li>
            </ul>
            <h2>Step 1: Start the RTMP & HLS Server with Docker</h2>
            <p>Run this command in your terminal:</p>
            <pre className="blog-code">
{`docker run -d \
  -p 1935:1935 \
  -p 8080:80 \
  --name nginx-rtmp \
  alfg/nginx-rtmp`}
            </pre>
            <p>This launches an RTMP server (port 1935) and an HLS server (port 8080).</p>
            <h2>Step 2: Stream Your Video to the RTMP Server</h2>
            <p>Use <b>ffmpeg</b> to push your video:</p>
            <pre className="blog-code">
{`ffmpeg -re -i sample.mp4 -c:v libx264 -f flv rtmp://localhost/live/stream`}
            </pre>
            <p>Or, in OBS Studio, set the stream URL to <code>rtmp://localhost/live</code> and the stream key to <code>stream</code>.</p>
            <h2>Step 3: Display the Stream in Your React App</h2>
            <p>
              Use an HLS player like <a href="https://github.com/video-dev/hls.js/" target="_blank" rel="noopener noreferrer">hls.js</a> in your React app. Set the video source to:
            </p>
            <pre className="blog-code">
{`http://localhost:8080/hls/stream.m3u8`}
            </pre>
            <p>Example React code:</p>
            <pre className="blog-code">
{`<video id="video" controls autoPlay style={{ width: '100%' }} />`}
            </pre>
            <p>Then, use hls.js to load the stream in your component.</p>
            <h2>Step 4: Watch the Stream in OBS</h2>
            <p>In OBS, add a <b>Media Source</b> and set the input to the same HLS URL above to monitor your stream.</p>
            <h2>Tips & Troubleshooting</h2>
            <ul>
              <li>Make sure Docker is running and ports 1935/8080 are not blocked.</li>
              <li>Test your stream locally before sharing the HLS link.</li>
              <li>For production, consider securing your RTMP/HLS endpoints.</li>
            </ul>
            <h2>Automate with PowerShell</h2>
            <p>
              You can automate the setup process using a PowerShell script. This script will stop and remove any existing RTMP container, start a new one on custom ports, and open the HLS stream in your browser automatically:
            </p>
            <pre className="blog-code">
{`# Stop and remove existing container if it exists
$containerName = "nginx-rtmp"
if ((docker ps -a --format "{{.Names}}" | Select-String $containerName)) {
    Write-Host "Stopping and removing existing container: $containerName"
    docker stop $containerName | Out-Null
    docker rm $containerName | Out-Null
}

# Run the container with high, safe ports
Write-Host "Starting RTMP server on ports 51935 (RTMP) and 58888 (HLS)..."
docker run --rm -d -p 51935:1935 -p 58888:80 --name $containerName my-nginx-rtmp-hls

# Wait a second then open HLS stream URL
Start-Sleep -Seconds 2
Start-Process "http://localhost:58888/test.m3u8"`}
            </pre>
            <p>
              Save this as <code>start-stream.ps1</code> and run it in PowerShell. This makes your workflow even faster and more reliable!
            </p>
            <h2>Conclusion</h2>
            <p>
              With this setup, you can stream from your computer to both OBS and your React app using Dockerized RTMP and HLS servers. Happy streaming!
            </p>
          </section>
        </article>
      </div>
    </>
  )
}

export default BlogDetails