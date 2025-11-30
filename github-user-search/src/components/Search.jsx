import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setUserData(null);
    setLoading(true); // ✅ Show loading

    const data = await fetchUserData(username);

    setLoading(false); // ✅ Stop loading

    if (!data) {
      setError("Looks like we cant find the user");
    } else {
      setUserData(data);
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

      {/* ✅ Show Loading */}
      {loading && <p>Loading</p>}

      {/* ❌ Show error if user not found */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ✔ Display user info when found */}
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
