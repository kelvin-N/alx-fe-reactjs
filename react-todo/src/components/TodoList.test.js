import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);

  const input = screen.getByTestId("todo-input");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo completion", () => {
  render(<TodoList />);

  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveClass("completed");

  fireEvent.click(todo);
  expect(todo).not.toHaveClass("completed");
});

test("deletes a todo", () => {
  render(<TodoList />);

  const todo = screen.getByText("Learn React");
  const deleteButton = todo.nextSibling;

  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
