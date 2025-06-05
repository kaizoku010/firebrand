import React from 'react'

function BlogDetails() {
  return (
    <div className="blog-details">
      <h1>Streaming a Video from Your Computer to OBS and Your React App Using Docker</h1>
      <img src="https://user-images.githubusercontent.com/streaming-docker-guide.png" alt="Streaming with Docker" style={{maxWidth: '100%', marginBottom: 20}} />
      <h2>Overview</h2>
      <p>
        This guide will show you how to stream a video from your computer to OBS Studio and simultaneously to your React app using Docker. We'll use an RTMP server (nginx-rtmp) and an HLS server, both running in Docker containers.
      </p>
      <h2>Requirements</h2>
      <ul>
        <li>Docker installed on your computer</li>
        <li>OBS Studio</li>
        <li>A sample video file (e.g., <code>sample.mp4</code>)</li>
        <li>A React app to display the stream</li>
      </ul>
      <h2>Step 1: Set Up RTMP & HLS Servers with Docker</h2>
      <pre style={{background:'#eee', padding:'10px'}}>
{`docker run -d \
  -p 1935:1935 \
  -p 8080:80 \
  --name nginx-rtmp \
  alfg/nginx-rtmp`}
      </pre>
      <p>This command starts an RTMP server on port 1935 and an HLS server on port 8080.</p>
      <h2>Step 2: Stream Video to RTMP Server</h2>
      <p>Use <b>OBS Studio</b> or <b>ffmpeg</b> to stream your video:</p>
      <pre style={{background:'#eee', padding:'10px'}}>
{`ffmpeg -re -i sample.mp4 -c:v libx264 -f flv rtmp://localhost/live/stream`}
      </pre>
      <p>Or in OBS, set the stream URL to <code>rtmp://localhost/live</code> and the stream key to <code>stream</code>.</p>
      <h2>Step 3: Play the Stream in Your React App</h2>
      <p>Embed an HLS player (like <a href="https://github.com/video-dev/hls.js/" target="_blank" rel="noopener noreferrer">hls.js</a>) in your React app and set the video source to:</p>
      <pre style={{background:'#eee', padding:'10px'}}>
{`http://localhost:8080/hls/stream.m3u8`}
      </pre>
      <h2>Step 4: Watch the Stream in OBS</h2>
      <p>In OBS, add a <b>Media Source</b> and set the input to the same HLS URL above to monitor your stream.</p>
      <h2>Conclusion</h2>
      <p>
        With this setup, you can easily stream videos from your computer to both OBS and your React app using Dockerized RTMP and HLS servers. This is great for live events, tutorials, or any custom streaming solution!
      </p>
    </div>
  )
}

export default BlogDetails