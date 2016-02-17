import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import App from 'components/App/App';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
