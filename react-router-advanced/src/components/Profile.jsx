import { Outlet, Link, useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams(); // For dynamic routing

  return (
    <div>
      <h1>Profile Page {userId ? `- User ${userId}` : ""}</h1>
      
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details" style={{ marginRight: "1rem" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
}

export default Profile;
