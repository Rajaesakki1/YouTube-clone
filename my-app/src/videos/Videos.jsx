import React, { useState, useEffect } from 'react';
import './Videos.css';

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/videos')
      .then(res => res.json())
      .then(setVideos)
      .catch(console.error);
  }, []);

  return (
    <div className="videos-container">
      {videos.map(video => (
        <article
          key={video.id}
          className="single-video"
         
        >
          <div className="thumbnail-wrapper">
            <img
              src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
              alt={video.title}
              className="video-thumbnail"
            />
            <span className="video-duration">{video.duration}</span>
            {video.logoUrl && (
              <img src={video.logoUrl} alt="Channel Logo" className="video-logo" />
            )}
          </div>
          <div className="video-details">
            <h4>{video.title}</h4>
            <p>{video.channel} • {video.views} • {video.uploaded}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Videos;
