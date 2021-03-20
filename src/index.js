import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter /*as Router, Route, Link */} from 'react-router-dom';
import App from './App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
);