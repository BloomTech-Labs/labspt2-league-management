import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import './index.css';

import App from './App';
import AppProvider from './components/Context/AppContext';

dotenv.config();
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ?
    'https://league-management.herokuapp.com' : 'http://localhost:4000';

ReactDOM.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById('root')
);
