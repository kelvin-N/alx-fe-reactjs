// src/services/githubService.js

import axios from "axios";

// Function to fetch GitHub user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // return the user data
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};
