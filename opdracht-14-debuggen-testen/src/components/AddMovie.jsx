import { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [movie, setMovie] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movie.trim() === '') {
      alert('Movie name cannot be empty');
      return;
    }

    const newMovie = {
      id: Date.now(), // simpel & effectief
      title: movie.trim(),
    };

    onAdd(newMovie);
    setMovie('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Add a new movie"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
