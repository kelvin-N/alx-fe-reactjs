import { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send all fields to parent for API search
    onSearch({
      username,
      location,
      minRepos: minRepos ? Number(minRepos) : null,
    });
  };

  return (
    <div className="search-container">
      <h2>Advanced GitHub Search</h2>

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <input
          type="text"
          placeholder="Search by username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* Minimum Repositories */}
        <input
          type="number"
          placeholder="Minimum repositories..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
