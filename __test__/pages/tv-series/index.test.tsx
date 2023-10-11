import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TVSeriesPage from "@/pages/tv-series";
import { getAllTVSeries } from "@/mock/data/tv";

describe("tv series page", () => {
  beforeEach(() => {
    const series = getAllTVSeries();
    render(<TVSeriesPage series={series} />);
  });

  it("has a heading", () => {
    const heading = screen.getByRole("heading", { name: /tv series/i });
    expect(heading).toBeInTheDocument();
  });
});
