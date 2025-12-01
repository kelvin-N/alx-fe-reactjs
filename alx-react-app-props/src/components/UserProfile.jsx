// src/components/UserProfile.jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", width: "300px" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button
        onClick={() => setUser({ ...user, name: "Updated Name" })}
        style={{ marginTop: "10px" }}
      >
        Update Name
      </button>
    </div>
  );
};

export default UserProfile;
