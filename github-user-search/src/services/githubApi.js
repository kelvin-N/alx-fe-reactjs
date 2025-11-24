const BASE_URL = "https://api.github.com";

export const searchGitHubUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await fetch(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data;
};
