import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';

// Below is the new React18 syntax
const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

// StrictMode is a tool for highlighting potential problems in an application. 
// Like Fragment, StrictMode does not render any visible UI. 
// It activates additional checks and warnings for its descendants.
// Strict mode checks run in development only
// https://reactjs.org/docs/strict-mode.html

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Below is the original React17 & previous syntax
// React 18 will cause your App to behave as though it's running 17
// if you use the below


// const root = document.getElementById('app');

// ReactDOM.render(<App />, root);