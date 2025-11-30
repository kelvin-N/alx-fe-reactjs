import axios from "axios";

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
      `https://api.github.com/search/users?q=${searchQuery}`
    );

    return response.data.items; // returns array of users
  } catch (error) {
    console.error("Advanced GitHub search error:", error);
    return [];
  }
};
