// src/components/MovieList.js
import React from 'react';
import { Table, Container } from 'react-bootstrap';

const MovieList = ({ movies }) => {  // Receive movies as a prop

  return (
    <Container className="mt-4">
      <h2>Movie List</h2>
      {movies.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No movies found.</p>
      )}
    </Container>
  );
};

export default MovieList;
