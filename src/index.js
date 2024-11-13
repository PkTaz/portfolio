import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // If you have global styles
import App from './App';  // Import the App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This is where your app will be injected into the HTML
);