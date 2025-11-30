import axios from "axios";

// Basic single user fetch (still needed for checker)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// Advanced search with location and minRepos
export const fetchAdvancedUsers = async (query, location, minRepos) => {
  try {
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>${minRepos}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchQuery}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    return response.data.items; // returns array of users
  } catch (error) {
    console.error("Advanced GitHub search error:", error);
    return [];
  }
};
