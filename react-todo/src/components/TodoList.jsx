import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm.jsx";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Write Tests", completed: false }
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(t => t.id !== id));
  };

  return (
    <div data-testid="todo-list-wrapper">
      <AddTodoForm addTodo={addTodo} />

      <ul style={{ paddingLeft: 0, listStyle: "none" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }} data-testid="todo-item">
            <span
              data-testid={`todo-text-${todo.id}`}
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                flex: 1
              }}
            >
              {todo.text}
            </span>

            <button data-testid={`delete-btn-${todo.id}`} onClick={() => deleteTodo(todo.id)} style={{ padding: "6px 10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
