import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import App from './App';
import 'styles/index.scss';
import { loadState } from 'utils/localStorage';
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

