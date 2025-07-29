import React, { useEffect, useState } from 'react';
import './Videos.css';

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/videos') 
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error('Error fetching videos:', err));
  }, []);

  return (
    <div className="video-list">
      {videos.length > 0 ? (
        <div className="videos-container">
          {videos.map((video) => (
            <article className="single-video" key={video.id}>
              {video.videoId ? (
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <p style={{ color: 'red' }}>Missing video ID for {video.title}</p>
              )}
              <div className="video-details">
                <h4>{video.title}</h4>
                <p>{video.channel} • {video.views} • {video.uploaded}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
}

export default Videos;
