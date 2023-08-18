import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/VideoPlayer/RelatedVideos";
import axios from "axios";
import useAuth from "../../hooks/useAuth"; 

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [user, token] = useAuth(); 
  const apiKey = "AIzaSyCLUNOYsQVRMKJQ_9zdfTbE_iceDVGJ5uY"; 
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    
    const fetchVideoData = async () => {
      try {
      
        const currentVideoResponse = await axios.get(
           `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=${apiKey}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        const mainVideoData = currentVideoResponse.data.items[0];

      
        const relatedVideoResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${mainVideoData.id.videoId}&type=video&key=${apiKey}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        const relatedVideoData = relatedVideoResponse.data.items;

      
        setCurrentVideo({
          id: mainVideoData.id.videoId,
          title: mainVideoData.snippet.title,
          description: mainVideoData.snippet.description,
        });

        const relatedVideosData = relatedVideoData.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
        }));
        setRelatedVideos(relatedVideosData);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, [token, apiKey]); 

  const handleSelectVideo = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="home-page">
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for videos..."
        />
      </div>
      <div className="content">
        {currentVideo && (
          <VideoPlayer
            videoId={currentVideo.id}
            title={currentVideo.title}
            description={currentVideo.description}
          />
        )}
        {relatedVideos.length > 0 && (
          <RelatedVideos videos={relatedVideos} onSelectVideo={handleSelectVideo} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
