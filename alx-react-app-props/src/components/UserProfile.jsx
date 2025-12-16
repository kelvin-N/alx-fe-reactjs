import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
      <p>{user.name}</p>
    </div>
  );
};

export default UserProfile;
