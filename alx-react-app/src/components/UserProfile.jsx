import React from "react";

const UserProfile = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
