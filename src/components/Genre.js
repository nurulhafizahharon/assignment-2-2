import Movie from "./Movie";

function Genre(props) {
  const genre = props.movieGenre;
  const descrip = props.descriptions;
  const movie1 = props.movieTitles[0];
  const movie2 = props.movieTitles[1];
  const year1 = props.year[0];
  const year2 = props.year[1];

  return (
    <>
      <hr />
      <h2>{genre} Movies</h2>
      <p className="Description">{descrip}</p>
      <Movie title={movie1} year={year1} />
      <Movie title={movie2} year={year2} />
    </>
  );
}

export default Genre;
