// src/components/AddMovie.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddMovie = ({ setMovies }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMovie = { title, director, year: parseInt(year), description, genre };

    try {
      const response = await fetch('https://movieapp-api-lms1.onrender.com/movies/addMovie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_ADMIN_TOKEN`, // Replace with the actual token
        },
        body: JSON.stringify(newMovie),
      });

      if (response.ok) {
        const addedMovie = await response.json(); // Get the added movie
        setMovies(prevMovies => [...prevMovies, addedMovie]); // Update the movie list
        alert('Movie added successfully!');
      } else {
        alert('Failed to add movie');
      }
    } catch (error) {
      console.error('Error adding movie:', error);
      alert('An error occurred while adding the movie');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Add New Movie</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Director</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter director name"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter release year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Movie
        </Button>
      </Form>
    </Container>
  );
};

export default AddMovie;
