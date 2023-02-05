import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContextProvider from './context/user/userContext';
import { CountriesContext } from './context/countries/countriesContext';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <CountriesContext> */}
        <UserContextProvider>
          <App />
        </UserContextProvider>
      {/* </CountriesContext> */}
    </Provider>
  </BrowserRouter>
);
