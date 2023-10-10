import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoviesPage from "@/pages/movies";

describe("movies page", () => {
  it("has a heading", () => {
    render(<MoviesPage />);
    const heading = screen.getByRole("heading", { name: /populära filmer/i });
    expect(heading).toBeInTheDocument();
  });
});
