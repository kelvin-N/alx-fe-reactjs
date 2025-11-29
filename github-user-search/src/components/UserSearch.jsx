// src/components/UserSearch.jsx

import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const UserSearch = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchUserData(username);
    setUserData(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {userData && (
        <div>
          <h3>{userData.login}</h3>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
