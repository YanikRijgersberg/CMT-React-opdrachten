const MovieItem = ({ movie, onDelete }) => {
  return (
    <li key={movie.id}>
      {movie.title}
      <button onClick={() => onDelete(movie.id)}>Remove</button>
    </li>
  );
};

export default MovieItem;
