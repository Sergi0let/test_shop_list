import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter } from 'react-router-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/store';

import './scss/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>
);
