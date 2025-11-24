import { useState } from "react";
import { searchGitHubUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await searchGitHubUsers(username, location, minRepos);
      if (data.total_count === 0) {
        setError("No users found with the specified criteria.");
        setUsers([]);
      } else {
        setUsers(data.items); // array of users
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-6 py-4 flex flex-col md:flex-row gap-4 items-end"
      >
        <div className="flex-1">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter GitHub username"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="City or country"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
            min="0"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {/* Loading / Error */}
      {loading && <p className="text-center mt-4 text-gray-700">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Enhanced results display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow rounded p-4 flex flex-col items-center text-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold">{user.login}</h2>
            {user.location && <p className="text-sm text-gray-500">{user.location}</p>}
            {/* GitHub profile link inclu*
