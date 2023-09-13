import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import App from './components/App';

// https://dev.to/shehanat/solved-module-not-found-error-cant-resolve-react-domclient-in--1en3
const root = document.getElementById('root');
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);