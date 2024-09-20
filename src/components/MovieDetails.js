// src/components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await getMovie(id);
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  return (
    <div>
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <p>Director: {movie.director}</p>
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre}</p>
          <p>Description: {movie.description}</p>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
