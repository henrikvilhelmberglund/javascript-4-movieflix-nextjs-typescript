export default function MoviesPage({ movies }: Movies) {
  return (
    <>
      <h1>Populära filmer</h1>
      {movies.map((movie) => (
        <article key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.poster} width="400" alt={movie.title} />
        </article>
      ))}
    </>
  );
}
