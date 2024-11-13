import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You can customize the styles here
import App from './App'; // Import your main App component

// Render the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);