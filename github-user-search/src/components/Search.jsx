import { useState } from "react";
import { fetchUsers } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setResults([]);
    setLoading(true);

    const users = await fetchUsers(query);

    setLoading(false);

    if (users.length === 0) {
      setError("Looks like we cant find the user");
    } else {
      setResults(users);
    }
  };

  return (
    <div>
      <h2>GitHub Advanced Search</h2>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 🔥 Enhanced results — using map() */}
      {results.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Results:</h3>

          {results.map((user) => (
            <div
              key={user.id}
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={user.avatar_url}
                width="60"
                height="60"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <p style={{ margin: 0 }}>{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
