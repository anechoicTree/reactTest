import React, { useState } from 'react';
import '../App.css';

function CreateMovie({ onAddMovie }) {
  const [newMovie, setNewMovie] = useState({
    id: '',
    title: '',
    genre: '',
    release_date: new Date(),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name==='date') {
      setNewMovie((prevMovie) => ({
        ...prevMovie,
        [name]: new Date(value)
      }));
    } else {
      setNewMovie((prevMovie) => ({
        ...prevMovie,
        [name]: value
      }));
    };
  };

  const handleAddMovie = () => {
    onAddMovie(newMovie);
    setNewMovie({
      id: '',
      title: '',
      genre: '',
      release_date: new Date(),
    });
  };

  return (
    <div className="create-movie">
      <h1>Create Movie</h1>
      <ul>
        <li><input type="text" name="id" value={newMovie.id} onChange={handleInputChange} placeholder='Input movie id' /></li>
        <li><input type="text" name="title" value={newMovie.title} onChange={handleInputChange} placeholder='Input movie title'/></li>
        <li><input type="text" name="genre" value={newMovie.genre} onChange={handleInputChange} placeholder='Input movie genre'/></li>
        <li>출시일: <input type="date" name="release_date" value={newMovie.release_date} onChange={handleInputChange} /></li>
        <li><button onClick={handleAddMovie}>Add Movie</button></li>
      </ul>
    </div>
  );
}

export default CreateMovie;