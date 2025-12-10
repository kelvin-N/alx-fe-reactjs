import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}

export default Navbar;
