import { useQuery } from "react-query";
import axios from "axios";

function PostsComponent() {
  // Fetch function
  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  };

  // useQuery with caching configuration
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    // ----- Required by your task -----
    cacheTime: 1000 * 60 * 5, // keep cached data for 5 minutes
    staleTime: 1000 * 30,     // data considered fresh for 30 seconds
    refetchOnWindowFocus: true, // auto-refetch when window refocuses
    keepPreviousData: true,   // keep old data while fetching new
  });

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Posts List</h2>

      {isLoading && <p>Loading posts...</p>}

      {isError && <p style={{ color: "red" }}>Error: {error.message}</p>}

      {!isLoading && !isError && (
        <div>
          <button
            onClick={() => refetch()}
            style={{
              padding: "8px 14px",
              marginBottom: "1rem",
              cursor: "pointer",
            }}
          >
            {isFetching ? "Refreshing..." : "Refetch Posts"}
          </button>

          <ul>
            {data.slice(0, 10).map((post) => (
              <li key={post.id} style={{ marginBottom: "10px" }}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PostsComponent;
