import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ensure DOM is ready
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log to confirm React mounted
console.log('React app mounted successfully');
