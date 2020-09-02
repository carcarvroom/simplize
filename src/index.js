import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import store from './store'

import "./assets/css/argon-dashboard-react.min.css";
import "./assets/css/argon-dashboard-react.css.map";

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}><App /></Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
