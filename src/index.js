import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');

// Replace ReactDOM.render with createRoot
const root = ReactDOM.createRoot(rootElement);

// Wrap your App component with the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
