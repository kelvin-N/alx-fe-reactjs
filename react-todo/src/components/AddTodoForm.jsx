import React, { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value.trim());
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="add-todo-form" style={{ marginBottom: 12 }}>
      <input
        aria-label="new-todo-input"
        type="text"
        placeholder="Add a todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: "8px", width: "70%", marginRight: 8, borderRadius: 4, border: "1px solid #ccc" }}
      />
      <button type="submit" aria-label="add-button" style={{ padding: "8px 12px", borderRadius: 4 }}>Add</button>
    </form>
  );
}
