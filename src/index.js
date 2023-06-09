import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
// import { Figure } from 'components/App.styled';

import { ThemeContainer } from 'components/ThemeContainer/ThemeContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContainer />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
