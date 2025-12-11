import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Write Tests", completed: false },
  ]);

  const addTodo = (text) => {
    if (!text || !text.trim()) return;
    const newTodo = { id: Date.now(), text: text.trim(), completed: false };
    setTodos((t) => [...t, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((t) =>
      t.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((t) => t.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        aria-label="new-todo-input"
        placeholder="New todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
