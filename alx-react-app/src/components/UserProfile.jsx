import React from "react";

const UserProfile = ({ name, email, role }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserProfile;
