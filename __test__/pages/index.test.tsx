import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import "@testing-library/jest-dom"

describe("homepage", () => {
  it("has a text string ", () => {
    render(<Home />);
    const textToTest = screen.getByText("pages/index.tsx");
    expect(textToTest).toBeInTheDocument()
  });
});
