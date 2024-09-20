// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://movieapp-api-lms1.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const registerUser = async (email, password) => {
  return api.post('/users/register', { email, password });
};

export const loginUser = async (email, password) => {
  return api.post('/users/login', { email, password });
};

export const getMovies = async () => {
  return api.get('/movies/getMovies');
};

export const getMovie = async (id) => {
  return api.get(`/movies/getMovie/${id}`);
};

export const addMovie = async (movieData, token) => {
  return api.post('/movies/addMovie', movieData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const updateMovie = async (id, movieData, token) => {
  return api.patch(`/movies/updateMovie/${id}`, movieData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const deleteMovie = async (id, token) => {
  return api.delete(`/movies/deleteMovie/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const addComment = async (id, comment, token) => {
  return api.post(`/movies/addComment/${id}`, { comment }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getComments = async (id) => {
  return api.get(`/movies/getComments/${id}`);
};
