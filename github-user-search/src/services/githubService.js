import axios from "axios";

export const fetchUsers = async (query) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // returns array of users
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    return [];
  }
};
