import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

test("renders Notebook App header", () => {
  render(<App />);
  const header = screen.getByText(/Notebook App/i);
  expect(header).toBeInTheDocument();
});

test("renders login button initially", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Login/i });
  expect(button).toBeInTheDocument();
});
