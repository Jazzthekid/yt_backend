import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="500"
        src={embedUrl}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
