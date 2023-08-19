import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { store } from 'redux/store';
import { theme } from './constants';

import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-07-phonebook">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
