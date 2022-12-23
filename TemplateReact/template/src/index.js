import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>  strict n'est pas destiné à être utilisé en production, car il peut avoir un impact sur les performances de votre application.
    <App />
  //</React.StrictMode>
);

reportWebVitals();
