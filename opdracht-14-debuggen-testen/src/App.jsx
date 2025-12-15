import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

 const addMovie = (newMovie) => {
  const exists = movies.some(movie => movie.title === newMovie.title);

  if (exists) {
    alert('This movie is already in your favorites!');
    return;
  }

  setMovies([...movies, newMovie]);
};

const deleteMovie = (id) => {
  setMovies(movies.filter(movie => movie.id !== id));
};


  return (
    <section className='container'>
      <Header />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </section>
  );
}

export default App;
