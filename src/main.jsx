import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);