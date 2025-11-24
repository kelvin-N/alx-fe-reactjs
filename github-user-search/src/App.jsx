import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { getGitHubUser } from "./services/githubApi";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getGitHubUser(username);
      if (data.message === "Not Found") {
        setError("User not found");
        setUser(null);
      } else {
        setUser(data);
      }
    } catch (err) {
      setError("Something went wrong");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default App;
