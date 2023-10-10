import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import "@testing-library/jest-dom";

describe("homepage", () => {
  it("has a heading ", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /välkommen till movieflix/i,
      level: 1
    });
    expect(heading).toBeInTheDocument();
  });
  it("has a introductary text string", () => {
    render(<Home />);
    const text = screen.getByText(/vi erbjuder de senaste filmerna och tv-serierna/i)
    expect(text).toBeInTheDocument();
  } )
});
