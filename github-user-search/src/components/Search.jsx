import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(""); // reset error

    const data = await fetchUserData(username);

    if (!data) {
      setUserData(null);
      setError("Looks like we cant find the user"); // ✅ Required message
    } else {
      setUserData(data);
      setError("");
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div>
          <h3>{userData.login}</h3>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
