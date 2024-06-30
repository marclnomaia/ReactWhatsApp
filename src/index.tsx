import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Ensure this matches the location and name of App.tsx
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();




