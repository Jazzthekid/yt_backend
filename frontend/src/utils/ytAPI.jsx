import axios from "axios";


const API_KEY = "AIzaSyCLUNOYsQVRMKJQ_9zdfTbE_iceDVGJ5uY";

// Function to search videos based on a query
export const searchVideos = async (query) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}`
    );

    return response.data.items;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};

// Function to get video details by videoId
export const getVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`
    );

    return response.data.items[0];
  } catch (error) {
    console.error("Error fetching video details:", error);
    return null;
  }
};
