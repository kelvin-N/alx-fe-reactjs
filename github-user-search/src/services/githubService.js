const BASE_URL = "https://api.github.com";

/**
 * Search GitHub users with advanced filters
 * @param {string} username - GitHub username
 * @param {string} location - User location
 * @param {number} minRepos - Minimum public repos
 * @returns {Promise<Object>} - GitHub search results
 */
export const searchGitHubUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const apiUrl = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
