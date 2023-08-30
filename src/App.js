import React, { useState } from 'react';
import './App.css';
import CreateMovie from './Components/CreateMovie';
import Movies from './Components/Movies';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Navigation from './Components/Navigation';

const DUMMY_MOVIES = [
  { id: '1', title: 'Movie1', genre: 'Drama', release_date: '2022-01-01' },
  { id: '2', title: 'Movie2', genre: 'Action', release_date: '2022-02-01' },
  { id: '3', title: 'Movie3', genre: 'Comedy', release_date: '2022-03-01' },
];

function App() {
  const [movies, setMovies] = useState(DUMMY_MOVIES);

  const handleAddMovie = (newMovie) => {
    if (!newMovie.id || !newMovie.title || !newMovie.genre || !newMovie.release_date) {
      alert('모든 값이 입력되어야 합니다.');
      return;
    }

    if (movies.some((movie) => movie.id === newMovie.id)) {
      alert('중복된 ID가 있습니다.');
      return;
    }

    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const handleDeleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="App">
      <Router>
      <div>
          <table className="menu">
          <td><Link to="/list">List</Link></td>
          <td><Link to="/add">Add New Movie</Link></td>
          </table>
      </div>
        <Routes>
          <Route path="" element={<Movies movies={movies} onDeleteMovie={handleDeleteMovie} />} />
          <Route path="/list" element={<Movies movies={movies} onDeleteMovie={handleDeleteMovie} />} />
          <Route path="/add" element={<CreateMovie onAddMovie={handleAddMovie} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;