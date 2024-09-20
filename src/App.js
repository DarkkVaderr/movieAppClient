// src/App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [token, setToken] = useState('');
  const [movies, setMovies] = useState([]); // Moved movie state to App.js

  // Fetch movies from the API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://movieapp-api-lms1.onrender.com/movies/getMovies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={setToken} />} />
        <Route path="/movies" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/admin" element={<AdminDashboard setMovies={setMovies} />} />
      </Routes>
    </div>
  );
}

export default App;
