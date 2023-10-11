export default function TVSeriesPage({ series }: Series) {
  return (
    <>
      <h1>TV series</h1>

      {series.map((serie) => (
        <>
          <article key={serie.id}>
            <h2>{serie.title}</h2>
            <img src={serie.poster} width="300px" alt={serie.title} />
          </article>
        </>
      ))}
    </>
  );
}
