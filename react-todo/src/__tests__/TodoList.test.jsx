import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList.jsx";
import '@testing-library/jest-dom';

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("New todo");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Write Tests");
    const deleteBtn = todo.nextSibling;

    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Write Tests")).toBeNull();
  });
});
