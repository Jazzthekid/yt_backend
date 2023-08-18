// pages/VideoPlayerPage/VideoPlayerPage.jsx
import React, { useState, useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoPlayer/VideoInfo";
import RelatedVideos from "../../components/VideoPlayer/RelatedVideos";
import { searchVideos, getVideoDetails } from "../../utils/ytAPI";

const VideoPlayerPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const initialSearchQuery = "Star Wars"; // Initial search query
    searchVideos(initialSearchQuery).then((videos) => {
      if (videos.length > 0) {
        const initialVideo = videos[0];
        setSelectedVideo(initialVideo);
        fetchRelatedVideos(initialVideo.id.videoId);
      }
    });
  }, []);

  const fetchRelatedVideos = (videoId) => {
    // Implement the logic to fetch related videos here
    // You can use the getVideoDetails function to get related videos
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    fetchRelatedVideos(video.id.videoId);
  };

  return (
    <div className="video-player-page">
      <VideoPlayer videoId={selectedVideo?.id.videoId} />
      <VideoInfo video={selectedVideo} />
      <RelatedVideos videos={relatedVideos} onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default VideoPlayerPage;
