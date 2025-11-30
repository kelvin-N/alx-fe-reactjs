import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", width: "300px" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
};

export default UserProfile;
