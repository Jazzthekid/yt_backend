// components/VideoPlayer/RelatedVideos.jsx
import React from "react";

const RelatedVideos = ({ videos, onVideoSelect }) => {
  return (
    <div className="related-videos">
      <h3>Related Videos</h3>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId} onClick={() => onVideoSelect(video)}>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
            <p>{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedVideos;
