// src/components/AdminDashboard.js
import React from 'react';
import AddMovie from './addMovie';

const AdminDashboard = ({ setMovies }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddMovie setMovies={setMovies} />
    </div>
  );
};

export default AdminDashboard;