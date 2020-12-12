import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataLayer } from './DataLayer';
import './index.css';
import { initialState, reducer } from './reducer';
import * as serviceWorker from './serviceWorker';
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
