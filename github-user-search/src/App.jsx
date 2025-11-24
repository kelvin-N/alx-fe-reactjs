import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { searchGitHubUsers } from "./services/githubApi";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async ({ username, location, minRepos }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchGitHubUsers(username, location, minRepos);
      if (data.total_count === 0) {
        setError("No users found with the specified criteria.");
        setUsers([]);
      } else {
        setUsers(data.items);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub Advanced User Search</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
