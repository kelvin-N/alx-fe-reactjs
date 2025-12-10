import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the React Router Advanced demo!</p>

      <nav>
        <Link to="/profile/1/details" style={{ marginRight: "1rem" }}>User 1 Details</Link>
        <Link to="/profile/2/settings">User 2 Settings</Link>
      </nav>
    </div>
  );
}

export default Home;
