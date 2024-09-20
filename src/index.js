import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Global CSS (optional, you can delete this if you don't use it)
import App from './App'; // Main App component
import { BrowserRouter } from 'react-router-dom'; // For enabling routing in the app


// Create a root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component wrapped in BrowserRouter for routing
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
