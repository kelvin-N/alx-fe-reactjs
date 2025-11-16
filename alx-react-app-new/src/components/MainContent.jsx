// src/components/MainContent.jsx
import React from "react";

const MainContent = () => {
  return (
    <main style={{ padding: "20px", backgroundColor: "#f0f8ff", textAlign: "center" }}>
      <h2 style={{ color: "#333" }}>Welcome to the Main Content</h2>
      <p style={{ maxWidth: "600px", margin: "10px auto", lineHeight: "1.6" }}>
        This is where your main content will appear. Use this area to add information, images, or anything
        important to your app.
      </p>
    </main>
  );
};

export default MainContent;
