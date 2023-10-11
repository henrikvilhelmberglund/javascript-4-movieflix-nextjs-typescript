import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoviesPage from "@/pages/movies";
import { getAllMovies } from "@/mock/data/movies";

let movies: Movie[] = [];

describe("movies page", () => {
  beforeEach(() => {
   movies = getAllMovies();
    render(<MoviesPage movies={movies} />);
    return movies;
  })
  
  it("has a heading", () => {
    const heading = screen.getByRole("heading", { name: /populära filmer/i });
    expect(heading).toBeInTheDocument();
  });

  it("has a list of 20 movies", () => {
    expect(movies).toHaveLength(20);
  });

  it("has a poster", () => {
    const poster = screen.getByRole("img", {name: movies[0].title})
    expect(poster).toBeInTheDocument();
  });
});
