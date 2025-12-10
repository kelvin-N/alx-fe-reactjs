// src/App.jsx
import React from "react";
import PostsComponent from "./components/PostsComponent";

function App() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>React Query Demo</h1>
      <PostsComponent />
    </div>
  );
}

export default App;
