import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  const { userId } = useParams(); // dynamic route parameter

  return (
    <div>
      <h1>Profile Page</h1>
      <p>User ID: {userId}</p>

      {/* Navigation inside profile */}
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Nested routing */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* OR using Outlet (also allowed) */}
      <Outlet />
    </div>
  );
}

export default Profile;
