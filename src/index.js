import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';
import { SearchContextProvider } from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext';
import App from './App';
import { StaticRouter } from "react-router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StaticRouter location="/">
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </StaticRouter>
  </React.StrictMode>
);
