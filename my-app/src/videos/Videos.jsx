import React, { useEffect, useState } from 'react';

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/videos`)
      .then((res) => res.json()) 
      .then((data) => {
        console.log("Fetched videos:", data);
        setVideos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (

    <div className="video-list">
      
      {videos.length > 0 ? (
        <div className="videos-container">
          {videos.map((video) => (
            <article className="single-video" key={video.id}>
              
              <img
                className="thumbnail"
                src={video.thumbnail}
                alt={`Thumbnail for ${video.title}`}
              />
              <div className="video-details">
                <img
                  className="channel-logo rounded-circle"
                  src={video.channelLogo}
                  alt={`${video.channel} logo`}
                />
                <div className="video-meta">
                  <h4 className="video-title">{video.title}</h4>
                  <p className="channel-name">{video.channel}</p>
                  <p className="video-views">{video.views} • {video.uploaded}</p>
                 
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>No videos available.</p>
      )}
    </div>
  );
}

export default Videos;
