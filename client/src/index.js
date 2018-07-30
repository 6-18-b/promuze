import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider } from '@material-ui/core/styles';
import promuzeTheme from '../src/styles/promuzeTheme.js';

import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  

ReactDOM.render(
      <MuiThemeProvider theme={promuzeTheme}> 
        <Router>
           <App />
         </Router>
      </MuiThemeProvider>
  , document.getElementById('root'));
registerServiceWorker();
