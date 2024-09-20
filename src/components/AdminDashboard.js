// src/components/AdminDashboard.js
import React, { useState } from 'react';
import AddMovie from './addMovie';
import MovieList from './MovieList';

const AdminDashboard = () => {
  const [movies, setMovies] = useState([]);  // Create state to store movies

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddMovie setMovies={setMovies} />  {/* Pass setMovies to AddMovie */}
      <MovieList movies={movies} />  {/* Pass movies to MovieList */}
    </div>
  );
};

export default AdminDashboard;
