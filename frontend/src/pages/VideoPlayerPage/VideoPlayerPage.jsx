import React, { useState, useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import { searchVideos, getVideoDetails } from "../../utils/youtubeAPI";
import "./VideoPlayerPage.css";

const VideoPlayerPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const initialSearchQuery = "your search query here";
    searchVideos(initialSearchQuery).then((videos) => {
      if (videos.length > 0) {
        const initialVideo = videos[0];
        setSelectedVideo(initialVideo);
      }
    });
  }, []);

  return (
    <div className="video-player-page">
      <VideoPlayer videoId={selectedVideo?.id.videoId} />
      <VideoInfo video={selectedVideo} />
    </div>
  );
};

export default VideoPlayerPage;
