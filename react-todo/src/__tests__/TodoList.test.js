import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React Testing")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByLabelText("New Todo Input");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);

    const item = screen.getByText("Learn React Testing");
    const toggleBtn = screen.getAllByLabelText("toggle-todo")[0];

    fireEvent.click(toggleBtn);

    expect(item).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const deleteBtn = screen.getAllByLabelText("delete-todo")[0];

    fireEvent.click(deleteBtn);

    expect(screen.queryByText("Learn React Testing")).not.toBeInTheDocument();
  });
});
