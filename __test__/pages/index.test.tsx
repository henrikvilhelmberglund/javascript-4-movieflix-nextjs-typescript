import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import "@testing-library/jest-dom";

describe("homepage", () => {
  it("has a heading ", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /välkommen till movieflix/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
  // it("has a text 'Vi erbjuder de senaste filmerna och tv-serierna'", () => {
  //   render(<Home />);
  //   const text = screen.getByText(/vi erbjuder de senaste filmerna och tv-serierna/i)
  //   expect(text).toBeInTheDocument();
  // } )
  it("has a text 'Vi erbjuder de senaste filmerna och tv-serierna'", () => {
    render(<Home />);
    const text = screen.getByRole("paragraph");
    expect(text).toHaveTextContent(
      /vi erbjuder de senaste filmerna och tv-serierna/i
    );
  });
});
