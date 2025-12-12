import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="todo-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
