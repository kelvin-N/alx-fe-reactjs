import { render, screen } from "@testing-library/react";
import TodoList from "./components/TodoList";

test("renders todo list items", () => {
  const todos = ["Learn React", "Build a project"];

  render(<TodoList todos={todos} />);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument();
});
