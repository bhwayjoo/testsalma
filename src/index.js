import React from 'react';
import ReactDOM from 'react-dom/client';
// Import de votre composant principal App
import App from './App';
// Import optionnel si vous mesurez les performances
import reportWebVitals from './reportWebVitals';

// Récupérer l'élément root pour le rendu
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu du composant App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesurer les performances de l'application (optionnel)
reportWebVitals();