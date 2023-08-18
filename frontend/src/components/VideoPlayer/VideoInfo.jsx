import React from "react";
import "./VideoInfo.css";

const VideoInfo = ({ video }) => {
  if (!video) {
    return null;
  }

  return (
    <div className="video-info">
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoInfo;
