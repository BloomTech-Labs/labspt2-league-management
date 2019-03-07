import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';
import AppProvider from './components/Context/AppContext';

ReactDOM.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById('root')
);
