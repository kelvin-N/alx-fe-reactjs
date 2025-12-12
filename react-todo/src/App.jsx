import React from "react";
import TodoList from "./components/TodoList.jsx";

export default function App() {
  return (
    <div style={{ maxWidth: 700, margin: "1.5rem auto", padding: "1rem", background: "#fff", borderRadius: 8, boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
      <h1 style={{ textAlign: "center" }}>React Todo App</h1>
      <TodoList />
    </div>
  );
}
