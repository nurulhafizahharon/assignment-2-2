function Movie(props) {
  const title = props.title;
  const year = props.year;

  return (
    <>
      <p className="Title">&hearts; {title}</p>
      <p className="Year">Releasing year: {year}</p>
    </>
  );
}
export default Movie;
