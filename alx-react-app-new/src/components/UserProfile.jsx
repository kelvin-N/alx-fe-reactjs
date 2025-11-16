// src/components/UserProfile.jsx
import React from "react";

const UserProfile = (props) => {
  return (
    <div style={{ border: "1px solid gray", borderRadius: "8px", padding: "15px", margin: "10px", maxWidth: "300px" }}>
      <h2 style={{ color: "blue", marginBottom: "10px" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ marginTop: "5px" }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
