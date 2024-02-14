import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from 'store/store';
import { loadState } from 'utils/localStorage';

import App from './App';

import 'styles/index.scss';
import './i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={setupStore(loadState())}>
      <App />
    </Provider>
  </BrowserRouter>
);

