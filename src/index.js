import { GlobalStyle } from './styles';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle selectedColor='#444' />
    <App />
  </React.StrictMode>
);
