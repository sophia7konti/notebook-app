import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import NoteForm from "./NoteForm";

test("renders note form inputs and button", () => {
  render(<NoteForm setNotes={() => {}} />);
  expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Content")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Add Note/i })).toBeInTheDocument();
});

test("adds a note on submit", () => {
  const mockSetNotes = jest.fn();
  render(<NoteForm setNotes={mockSetNotes} />);
  
  fireEvent.change(screen.getByPlaceholderText("Title"), { target: { value: "Test Title" } });
  fireEvent.change(screen.getByPlaceholderText("Content"), { target: { value: "Test Content" } });
  fireEvent.click(screen.getByRole("button", { name: /Add Note/i }));

  expect(mockSetNotes).toHaveBeenCalledTimes(1);
});
