import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import { SnackbarProvider } from 'notistack';
import './index.css';

import App from './App';
import AppProvider from './components/Context/AppContext';

dotenv.config();

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://league-management.herokuapp.com'
    : 'http://localhost:4000';

ReactDOM.render(
  <AppProvider>
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    >
      <Router>
        <App />
      </Router>
    </SnackbarProvider>
  </AppProvider>,
  document.getElementById('root')
);
