import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TVSeriesPage from "@/pages/tv-series";
import { getAllTVSeries } from "@/mock/data/tv";

let series: Serie[];

describe("tv series page", () => {
  beforeEach(() => {
    series = getAllTVSeries();
    render(<TVSeriesPage series={series} />);
    return series;
  });

  it("has a heading", () => {
    const heading = screen.getByRole("heading", { name: /tv series/i });
    expect(heading).toBeInTheDocument();
  });

  it("has a list of 20 tv series", () => {
    expect(series).toHaveLength(20);
  });

  it("has a poster", () => {
    const poster = screen.getByRole("img", { name: series[0].title });
    expect(poster).toBeInTheDocument();
  });
});
